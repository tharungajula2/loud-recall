'use client';

import React, { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

let mermaidInitialized = false;

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const uniqueId = useId().replace(/:/g, '_');

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        htmlLabels: true,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
      });
      mermaidInitialized = true;
    }

    let isMounted = true;
    const renderDiagram = async () => {
      try {
        const id = `mermaid-${uniqueId}-${Math.random().toString(36).substring(2, 9)}`;
        const cleanChart = chart
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&');
        let { svg } = await mermaid.render(id, cleanChart);
        
        if (svg.includes('<svg')) {
          svg = svg.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
            let newAttrs = attrs;
            if (newAttrs.includes('style="')) {
              newAttrs = newAttrs.replace(
                /style="([^"]*)"/,
                'style="$1; width: 100% !important; height: auto !important; max-width: none !important;"'
              );
            } else {
              newAttrs += ' style="width: 100% !important; height: auto !important; max-width: none !important;"';
            }
            return `<svg${newAttrs}>`;
          });
        }

        if (isMounted) {
          setSvgContent(svg);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || 'Failed to render Mermaid diagram');
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
      <div className="my-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs font-mono overflow-x-auto">
        <p className="font-semibold mb-1">Mermaid Rendering Error:</p>
        <pre className="whitespace-pre-wrap">{error}</pre>
        <pre className="mt-2 text-gray-600 whitespace-pre">{chart}</pre>
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div className="my-6 p-4 border border-border rounded-lg bg-background text-muted text-xs font-mono animate-pulse flex items-center justify-center min-h-[100px]">
        Loading diagram...
      </div>
    );
  }

  return (
    <div className="my-6 w-full max-w-full overflow-x-auto py-4 rounded-lg border border-border/60 bg-background">
      <div
        ref={containerRef}
        className="w-full flex justify-center [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-none"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
