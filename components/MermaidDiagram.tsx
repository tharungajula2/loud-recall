'use client';

import React, { useEffect, useRef, useState, useId } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

let mermaidInitialized = false;

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [naturalWidth, setNaturalWidth] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const uniqueId = useId().replace(/:/g, '_');

  useEffect(() => {
    let isMounted = true;
    const renderDiagram = async () => {
      try {
        const mermaidModule = await import('mermaid');
        const mermaid = mermaidModule.default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'neutral',
            themeVariables: { fontSize: '14px', fontFamily: 'inherit' },
            flowchart: { useMaxWidth: true, htmlLabels: true },
            sequence: { useMaxWidth: true },
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${uniqueId}-${Math.random().toString(36).substring(2, 9)}`;
        const cleanChart = chart
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&');
        let { svg } = await mermaid.render(id, cleanChart);
        
        let natW = 0;
        let natH = 0;

        const viewBoxMatch = svg.match(/viewBox=["']\s*([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s+([\d.-]+)\s*["']/i);
        if (viewBoxMatch) {
          natW = parseFloat(viewBoxMatch[3]);
          natH = parseFloat(viewBoxMatch[4]);
        } else {
          const wMatch = svg.match(/\bwidth=["']([\d.-]+)(?:px)?["']/i);
          const hMatch = svg.match(/\bheight=["']([\d.-]+)(?:px)?["']/i);
          if (wMatch) natW = parseFloat(wMatch[1]);
          if (hMatch) natH = parseFloat(hMatch[1]);
        }

        if (svg.includes('<svg')) {
          svg = svg.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
            let newAttrs = attrs;
            newAttrs = newAttrs.replace(/\s+(width|height)=["'][^"']*["']/gi, '');
            newAttrs = newAttrs.replace(/\s+style=["'][^"']*["']/gi, '');

            let styleStr = natW > 0 
              ? `max-width: min(100%, ${natW}px); height: auto; display: block; margin: 0 auto;`
              : `max-width: 100%; height: auto; display: block; margin: 0 auto;`;

            if (natH > 640) {
              styleStr += ' max-height: 70vh; width: auto;';
            }

            const widthAttr = natW > 0 ? ` width="${natW}"` : '';

            return `<svg${widthAttr} style="${styleStr}"${newAttrs}>`;
          });
        }

        if (isMounted) {
          setSvgContent(svg);
          setNaturalWidth(natW);
          setError(null);
        }
      } catch (err: unknown) {
        if (isMounted) {
          const errMsg = err && typeof err === 'object' && 'message' in err ? String(err.message) : 'Failed to render Mermaid diagram';
          setError(errMsg);
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart, uniqueId]);

  if (error) {
    return (
      <div className="mermaid-diagram my-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs font-mono overflow-x-auto">
        <p className="font-semibold mb-1 font-sans text-sm">Mermaid Diagram Error:</p>
        <pre className="whitespace-pre-wrap font-mono text-xs text-gray-800 dark:text-gray-200">{chart}</pre>
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div className="mermaid-diagram my-6 p-4 border border-border rounded-lg bg-background text-muted text-xs font-mono animate-pulse flex items-center justify-center min-h-[100px]">
        Loading diagram...
      </div>
    );
  }

  return (
    <div
      className="mermaid-diagram my-6 w-full max-w-full overflow-x-auto overflow-y-visible py-4 px-2 rounded-lg border border-border/60 bg-background"
      style={{ '--mermaid-natural-w': naturalWidth > 0 ? `${naturalWidth}px` : '100%' } as React.CSSProperties}
    >
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center [&_foreignObject]:overflow-visible [&_foreignObject_div]:whitespace-normal [&_foreignObject_div]:break-words"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}

