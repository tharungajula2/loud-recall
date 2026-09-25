'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DiagramFrameProps {
  svgContent?: string;
  svgProps?: React.ComponentPropsWithoutRef<'svg'>;
  className?: string;
}

function parseSvgMetrics(svgString?: string, svgProps?: React.ComponentPropsWithoutRef<'svg'>) {
  let naturalWidth = 0;
  let naturalHeight = 0;
  let minAuthoredFontSize = 14;

  if (svgProps) {
    if (svgProps.viewBox) {
      const parts = String(svgProps.viewBox).trim().split(/[\s,]+/);
      if (parts.length >= 4) {
        const vbW = parseFloat(parts[2]);
        const vbH = parseFloat(parts[3]);
        if (!isNaN(vbW) && vbW > 0) naturalWidth = vbW;
        if (!isNaN(vbH) && vbH > 0) naturalHeight = vbH;
      }
    }
    if (naturalWidth === 0 && svgProps.width) {
      const w = parseFloat(String(svgProps.width));
      if (!isNaN(w) && w > 0) naturalWidth = w;
    }
    if (naturalHeight === 0 && svgProps.height) {
      const h = parseFloat(String(svgProps.height));
      if (!isNaN(h) && h > 0) naturalHeight = h;
    }
  }

  if (svgString) {
    const viewBoxMatch = svgString.match(/viewBox=["']\s*([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s*["']/i);
    if (viewBoxMatch) {
      const vbW = parseFloat(viewBoxMatch[3]);
      const vbH = parseFloat(viewBoxMatch[4]);
      if (!isNaN(vbW) && vbW > 0) naturalWidth = vbW;
      if (!isNaN(vbH) && vbH > 0) naturalHeight = vbH;
    }

    if (naturalWidth === 0) {
      const wMatch = svgString.match(/\bwidth=["']([\d.-]+)(?:px)?["']/i);
      if (wMatch) {
        const w = parseFloat(wMatch[1]);
        if (!isNaN(w) && w > 0) naturalWidth = w;
      }
    }

    if (naturalHeight === 0) {
      const hMatch = svgString.match(/\bheight=["']([\d.-]+)(?:px)?["']/i);
      if (hMatch) {
        const h = parseFloat(hMatch[1]);
        if (!isNaN(h) && h > 0) naturalHeight = h;
      }
    }

    const fontSizes: number[] = [];
    const fontSizeAttrMatches = svgString.matchAll(/\bfont-size=["']\s*([\d.]+)(?:px)?\s*["']/gi);
    for (const match of fontSizeAttrMatches) {
      const val = parseFloat(match[1]);
      if (!isNaN(val) && val > 0) fontSizes.push(val);
    }

    const styleFontSizeMatches = svgString.matchAll(/\bfont-size\s*:\s*([\d.]+)(?:px)?/gi);
    for (const match of styleFontSizeMatches) {
      const val = parseFloat(match[1]);
      if (!isNaN(val) && val > 0) fontSizes.push(val);
    }

    if (fontSizes.length > 0) {
      minAuthoredFontSize = Math.min(...fontSizes);
    }
  }

  return {
    naturalWidth: naturalWidth || 600,
    naturalHeight: naturalHeight || 400,
    minAuthoredFontSize: Math.max(minAuthoredFontSize, 8),
  };
}

export function DiagramFrame({ svgContent, svgProps, className = '' }: DiagramFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [canScrollHorizontal, setCanScrollHorizontal] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { naturalWidth, minAuthoredFontSize } = parseSvgMetrics(svgContent, svgProps);

  // Calculate 11px readable floor: minimum width so text never drops below 11px
  const minReadableScale = 11 / minAuthoredFontSize;
  const calculatedMinWidth = Math.min(naturalWidth, Math.round(naturalWidth * minReadableScale));

  // Clean SVG string: remove fixed inline styles, width, height, and enforce diagram sizing
  const processedSvg = React.useMemo(() => {
    if (!svgContent) return '';
    return svgContent.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
      let newAttrs = attrs;
      newAttrs = newAttrs.replace(/\s+(width|height)=["'][^"']*["']/gi, '');
      newAttrs = newAttrs.replace(/\s+style=["'][^"']*["']/gi, '');
      newAttrs = newAttrs.replace(/\s+data-diagram-inner=["'][^"']*["']/gi, '');

      const styleStr = `width: 100%; min-width: ${calculatedMinWidth}px; max-width: ${naturalWidth}px; height: auto !important; display: block; margin: 0 auto;`;
      return `<svg data-diagram-inner="true" width="${naturalWidth}" style="${styleStr}"${newAttrs}>`;
    });
  }, [svgContent, calculatedMinWidth, naturalWidth]);

  // Clean SVG string for full screen modal: at natural size by default
  const modalSvg = React.useMemo(() => {
    if (!svgContent) return '';
    return svgContent.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
      let newAttrs = attrs;
      newAttrs = newAttrs.replace(/\s+(width|height)=["'][^"']*["']/gi, '');
      newAttrs = newAttrs.replace(/\s+style=["'][^"']*["']/gi, '');
      newAttrs = newAttrs.replace(/\s+data-diagram-inner=["'][^"']*["']/gi, '');

      const styleStr = `width: ${naturalWidth}px; max-width: none; height: auto !important; display: block; margin: 0 auto;`;
      return `<svg data-diagram-inner="true" width="${naturalWidth}" style="${styleStr}"${newAttrs}>`;
    });
  }, [svgContent, naturalWidth]);

  // Clean props for React inline SVG element
  const cleanedSvgProps = React.useMemo(() => {
    if (!svgProps) return {};
    const copy = { ...svgProps };
    delete copy.style;
    delete copy.width;
    delete copy.height;
    delete copy.className;
    return copy;
  }, [svgProps]);

  // Check if frame is scrollable horizontally
  const checkScrollable = useCallback(() => {
    if (frameRef.current) {
      const { scrollWidth, clientWidth } = frameRef.current;
      setCanScrollHorizontal(scrollWidth > clientWidth + 2);
    }
  }, []);

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [checkScrollable]);

  const handleOpenModal = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsExpanded(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsExpanded(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  // Lock body scroll when expanded modal is open & handle Esc key
  useEffect(() => {
    if (!isExpanded) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, handleCloseModal]);

  // Modal Mouse Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z * 1.25, 4));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z / 1.25, 0.4));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <>
      {/* Frame Container */}
      <div className={`relative my-6 rounded-lg border border-border/60 bg-background p-4 group ${className}`}>
        {/* Expand Button */}
        <button
          type="button"
          onClick={handleOpenModal}
          aria-label="Expand diagram"
          title="Expand diagram full screen"
          className="absolute top-3 right-3 p-1.5 rounded-md bg-background/90 hover:bg-foreground/5 border border-border/80 text-foreground/70 hover:text-foreground transition-all shadow-xs z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        {/* Scrollable Frame */}
        <div
          ref={frameRef}
          onScroll={checkScrollable}
          className="w-full max-w-full overflow-x-auto overflow-y-visible py-2 px-1 rounded-sm scrollbar-thin"
        >
          <div
            ref={containerRef}
            className="w-full flex justify-center items-center [&_foreignObject]:overflow-visible [&_foreignObject_div]:whitespace-normal [&_foreignObject_div]:break-words"
          >
            {svgProps ? (
              <svg
                data-diagram-inner="true"
                width={naturalWidth}
                style={{
                  width: '100%',
                  minWidth: `${calculatedMinWidth}px`,
                  maxWidth: `${naturalWidth}px`,
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
                {...cleanedSvgProps}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: processedSvg }} />
            )}
          </div>
        </div>

        {/* Scroll Hint Badge */}
        {canScrollHorizontal && (
          <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-foreground/10 text-foreground/70 text-[10px] font-sans font-medium pointer-events-none select-none z-10 flex items-center gap-1">
            scroll &rarr;
          </div>
        )}
      </div>

      {/* Full-Screen Overlay Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-sm flex flex-col justify-between select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded diagram view"
        >
          {/* Header Controls Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/90 z-20">
            <div className="text-xs font-sans font-medium text-foreground/70">
              Diagram Full Screen ({Math.round(zoomLevel * 100)}%)
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In"
                aria-label="Zoom in"
                className="p-1.5 rounded-md hover:bg-foreground/5 border border-border/80 text-foreground text-xs font-semibold px-2.5 transition-colors"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out"
                aria-label="Zoom out"
                className="p-1.5 rounded-md hover:bg-foreground/5 border border-border/80 text-foreground text-xs font-semibold px-2.5 transition-colors"
              >
                &minus;
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Fit to natural size"
                aria-label="Fit diagram"
                className="p-1.5 rounded-md hover:bg-foreground/5 border border-border/80 text-foreground text-xs font-medium px-2.5 transition-colors"
              >
                Fit
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                title="Close overlay"
                aria-label="Close full screen view"
                className="p-1.5 rounded-md hover:bg-foreground/5 border border-border/80 text-foreground text-sm font-bold px-2.5 ml-2 transition-colors"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Pannable/Zoomable Canvas */}
          <div
            className="flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing p-4"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              }}
              className="max-w-none max-h-none pointer-events-auto"
            >
              {svgProps ? (
                <svg
                  data-diagram-inner="true"
                  width={naturalWidth}
                  style={{
                    width: `${naturalWidth}px`,
                    maxWidth: 'none',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                  }}
                  {...cleanedSvgProps}
                />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: modalSvg }} />
              )}
            </div>
          </div>

          {/* Footer instruction */}
          <div className="text-center py-2 text-[11px] font-sans text-muted border-t border-border/40 bg-background/80">
            Drag to pan &middot; Press Esc or &times; to close
          </div>
        </div>
      )}
    </>
  );
}
