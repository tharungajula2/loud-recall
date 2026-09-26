import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeReact from 'rehype-react';
import * as jsxRuntime from 'react/jsx-runtime';
import React from 'react';
import { visit } from 'unist-util-visit';
import { MermaidDiagram } from '@/components/MermaidDiagram';
import { Callout, CalloutType } from '@/components/Callout';
import { ScrollTable } from '@/components/ScrollTable';
import { DiagramFrame } from '@/components/DiagramFrame';
import Slugger from 'github-slugger';

function getCodeString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getCodeString).join('');
  if (React.isValidElement<{ children?: React.ReactNode }>(children) && children.props && children.props.children) {
    return getCodeString(children.props.children);
  }
  return '';
}

interface DirectiveNode {
  type?: string;
  name?: string;
  attributes?: Record<string, unknown>;
  children?: DirectiveNode[];
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

function remarkDirectiveTransform() {
  return (tree: unknown) => {
    visit(tree as never, (node: unknown) => {
      const n = node as DirectiveNode;
      if (
        n.type === 'containerDirective' ||
        n.type === 'leafDirective' ||
        n.type === 'textDirective'
      ) {
        const name = n.name;
        if (
          name === 'permanent-rule' ||
          name === 'never-confuse' ||
          name === 'trap' ||
          name === 'mental-model' ||
          name === 'key-insight'
        ) {
          const data = n.data || (n.data = {});
          data.hName = 'callout';
          data.hProperties = {
            type: name,
            ...(n.attributes || {}),
          };
        }

        if (name === 'never-confuse') {
          const children = (n.children || []) as DirectiveNode[];
          let currentHalf: 'left' | 'right' | null = null;
          let leftTitle = 'First Concept';
          let rightTitle = 'Second Concept';
          const leftChildren: DirectiveNode[] = [];
          const rightChildren: DirectiveNode[] = [];
          const unassignedChildren: DirectiveNode[] = [];
          let hasLeft = false;
          let hasRight = false;

          for (const child of children) {
            const isDir =
              child.type === 'leafDirective' ||
              child.type === 'containerDirective' ||
              child.type === 'textDirective';

            if (isDir && child.name === 'left') {
              hasLeft = true;
              currentHalf = 'left';
              if (child.children && child.children.length > 0) {
                leftTitle = String((child.children[0] as DirectiveNode)?.value || leftTitle);
              }
              continue;
            }

            if (isDir && child.name === 'right') {
              hasRight = true;
              currentHalf = 'right';
              if (child.children && child.children.length > 0) {
                rightTitle = String((child.children[0] as DirectiveNode)?.value || rightTitle);
              }
              continue;
            }

            if (currentHalf === 'left') {
              leftChildren.push(child);
            } else if (currentHalf === 'right') {
              rightChildren.push(child);
            } else {
              unassignedChildren.push(child);
            }
          }

          if (!hasLeft && !hasRight) {
            const halfLength = Math.ceil(children.length / 2);
            leftChildren.push(...children.slice(0, halfLength));
            rightChildren.push(...children.slice(halfLength));
          } else if (unassignedChildren.length > 0) {
            leftChildren.unshift(...unassignedChildren);
          }

          const leftHalfNode = {
            type: 'element',
            tagName: 'div',
            properties: {
              className: 'flex-1 min-w-0 flex flex-col gap-2 bg-foreground/[0.02] dark:bg-foreground/[0.04] p-3 rounded-md border border-border/40',
            },
            children: [
              {
                type: 'element',
                tagName: 'h4',
                properties: {
                  className: 'font-semibold font-sans text-xs uppercase tracking-wide text-foreground/85 mb-1 border-b border-border/30 pb-1 shrink-0',
                },
                children: [{ type: 'text', value: leftTitle }],
              },
              ...leftChildren,
            ],
          };

          const rightHalfNode = {
            type: 'element',
            tagName: 'div',
            properties: {
              className: 'flex-1 min-w-0 flex flex-col gap-2 bg-foreground/[0.02] dark:bg-foreground/[0.04] p-3 rounded-md border border-border/40',
            },
            children: [
              {
                type: 'element',
                tagName: 'h4',
                properties: {
                  className: 'font-semibold font-sans text-xs uppercase tracking-wide text-foreground/85 mb-1 border-b border-border/30 pb-1 shrink-0',
                },
                children: [{ type: 'text', value: rightTitle }],
              },
              ...rightChildren,
            ],
          };

          n.children = [leftHalfNode as unknown as DirectiveNode, rightHalfNode as unknown as DirectiveNode];
        }
      }
    });
  };
}

// Custom component for tables
const ResponsiveTable = (props: React.ComponentPropsWithoutRef<'table'>) => (
  <ScrollTable>
    <table {...props} />
  </ScrollTable>
);

// Custom component for pre blocks
const ResponsivePre = (props: React.ComponentPropsWithoutRef<'pre'> & { 'data-language'?: string }) => {
  const children = React.Children.toArray(props.children);
  const codeChild = children.find(
    (child) => React.isValidElement(child)
  );

  const isMermaid =
    props['data-language'] === 'mermaid' ||
    (codeChild && React.isValidElement<Record<string, unknown>>(codeChild) && (
      codeChild.props['data-language'] === 'mermaid' ||
      (typeof codeChild.props.className === 'string' && codeChild.props.className.includes('language-mermaid'))
    ));

  if (isMermaid && codeChild && React.isValidElement<{ children?: React.ReactNode }>(codeChild)) {
    const rawChart = getCodeString(codeChild.props.children).trim();
    return <MermaidDiagram chart={rawChart} />;
  }

  return (
    <div className="my-6 w-full max-w-full overflow-x-auto">
      <pre {...props} />
    </div>
  );
};

const ResponsiveSvg = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  if (props['data-diagram-inner' as keyof typeof props]) {
    return <svg {...props} />;
  }

  if (props.role === 'img') {
    return <DiagramFrame svgProps={props} />;
  }

  return <svg {...props} />;
};

export function extractHeadings(content: string) {
  const headings: { id: string; text: string }[] = [];
  const slugger = new Slugger();

  // Match markdown headers: ## Title
  const mdRegex = /^##\s+(.+)$/gm;
  let match;
  while ((match = mdRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = slugger.slug(text);
    headings.push({ id, text });
  }

  // Match HTML headers: <h2 ...>Text</h2>
  if (headings.length === 0) {
    const htmlRegex = /<h2(?:\s+id=["']([^"']+)["'])?[^>]*>(.*?)<\/h2>/gi;
    let htmlMatch;
    while ((htmlMatch = htmlRegex.exec(content)) !== null) {
      const rawId = htmlMatch[1];
      const text = htmlMatch[2].replace(/<[^>]*>/g, '').trim();
      const id = rawId || slugger.slug(text);
      headings.push({ id, text });
    }
  }

  return headings;
}

export async function renderMarkdown(content: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkDirective)
    .use(remarkDirectiveTransform)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      theme: 'github-light',
      keepBackground: false,
    })
    .use(rehypeReact, {
      Fragment: React.Fragment,
      jsx: jsxRuntime.jsx,
      jsxs: jsxRuntime.jsxs,
      components: {
        table: ResponsiveTable,
        pre: ResponsivePre,
        svg: ResponsiveSvg,
        callout: (props: { type?: string; children?: React.ReactNode }) => (
          <Callout type={props.type as CalloutType}>{props.children}</Callout>
        ),
      },
    });

  const file = await processor.process(content);
  return file.result;
}
