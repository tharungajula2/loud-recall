'use client';

import React, { useEffect, useState, useId } from 'react';
import { DiagramFrame } from '@/components/DiagramFrame';

interface MermaidDiagramProps {
  chart: string;
}

let mermaidInitialized = false;

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string>('');
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
            themeVariables: { fontSize: '15px', fontFamily: 'inherit' },
            securityLevel: 'strict',
            flowchart: { useMaxWidth: false, htmlLabels: true },
            sequence: { useMaxWidth: false },
            gantt: { useMaxWidth: false },
            journey: { useMaxWidth: false },
            class: { useMaxWidth: false },
            state: { useMaxWidth: false },
            er: { useMaxWidth: false },
            pie: { useMaxWidth: false },
            quadrantChart: { useMaxWidth: false },
            xyChart: { useMaxWidth: false },
            requirement: { useMaxWidth: false },
            mindmap: { useMaxWidth: false },
            timeline: { useMaxWidth: false },
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
        const { svg } = await mermaid.render(id, cleanChart);

        if (isMounted) {
          setSvgContent(svg);
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

  return <DiagramFrame svgContent={svgContent} />;
}
