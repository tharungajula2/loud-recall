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

function getCodeString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getCodeString).join('');
  if (React.isValidElement(children) && children.props && (children.props as any).children) {
    return getCodeString((children.props as any).children);
  }
  return '';
}

function remarkDirectiveTransform() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const name = node.name;
        if (
          name === 'permanent-rule' ||
          name === 'never-confuse' ||
          name === 'trap' ||
          name === 'mental-model' ||
          name === 'key-insight'
        ) {
          const data = node.data || (node.data = {});
          data.hName = 'callout';
          data.hProperties = {
            type: name,
            ...node.attributes,
          };
        }

        if (name === 'never-confuse') {
          const children = node.children || [];
          let currentHalf: 'left' | 'right' | null = null;
          let leftTitle = 'First Concept';
          let rightTitle = 'Second Concept';
          let leftChildren: any[] = [];
          let rightChildren: any[] = [];
          let unassignedChildren: any[] = [];
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
              leftTitle = (
                child.children?.[0]?.value ||
                child.attributes?.title ||
                child.attributes?.['0'] ||
                'First Concept'
              ).trim();
              if (child.children && child.children.length > 1) {
                leftChildren.push(...child.children.slice(1));
              }
            } else if (isDir && child.name === 'right') {
              hasRight = true;
              currentHalf = 'right';
              rightTitle = (
                child.children?.[0]?.value ||
                child.attributes?.title ||
                child.attributes?.['0'] ||
                'Second Concept'
              ).trim();
              if (child.children && child.children.length > 1) {
                rightChildren.push(...child.children.slice(1));
              }
            } else {
              if (currentHalf === 'left') {
                leftChildren.push(child);
              } else if (currentHalf === 'right') {
                rightChildren.push(child);
              } else {
                unassignedChildren.push(child);
              }
            }
          }

          if (!hasLeft && !hasRight) {
            leftChildren = unassignedChildren;
          } else if (unassignedChildren.length > 0) {
            leftChildren = [...unassignedChildren, ...leftChildren];
          }

          const leftHalfNode = {
            type: 'containerDirective',
            name: 'left',
            data: {
              hName: 'div',
              hProperties: {
                className: 'never-confuse-half never-confuse-left p-3.5 rounded-lg bg-background/60 border border-border/40 min-w-0 flex flex-col gap-2',
              },
            },
            children: [
              {
                type: 'paragraph',
                data: {
                  hName: 'div',
                  hProperties: {
                    className: 'font-semibold font-sans text-xs uppercase tracking-wide text-foreground/85 mb-1 border-b border-border/30 pb-1 shrink-0',
                  },
                },
                children: [{ type: 'text', value: leftTitle }],
              },
              ...leftChildren,
            ],
          };

          const rightHalfNode = {
            type: 'containerDirective',
            name: 'right',
            data: {
              hName: 'div',
              hProperties: {
                className: 'never-confuse-half never-confuse-right p-3.5 rounded-lg bg-background/60 border border-border/40 min-w-0 flex flex-col gap-2',
              },
            },
            children: [
              {
                type: 'paragraph',
                data: {
                  hName: 'div',
                  hProperties: {
                    className: 'font-semibold font-sans text-xs uppercase tracking-wide text-foreground/85 mb-1 border-b border-border/30 pb-1 shrink-0',
                  },
                },
                children: [{ type: 'text', value: rightTitle }],
              },
              ...rightChildren,
            ],
          };

          node.children = [leftHalfNode, rightHalfNode];
        }
      }
    });
  };
}

// Custom component for tables
const ResponsiveTable = (props: any) => (
  <ScrollTable>
    <table {...props} />
  </ScrollTable>
);

// Custom component for pre blocks
const ResponsivePre = (props: any) => {
  const children = React.Children.toArray(props.children);
  const codeChild = children.find(
    (child: any) => React.isValidElement(child)
  );

  const isMermaid = 
    props['data-language'] === 'mermaid' ||
    (codeChild && React.isValidElement(codeChild) && (
      (codeChild.props as any)['data-language'] === 'mermaid' ||
      (typeof (codeChild.props as any)?.className === 'string' && (codeChild.props as any).className.includes('language-mermaid'))
    ));

  if (isMermaid && codeChild && React.isValidElement(codeChild)) {
    const rawChart = getCodeString((codeChild.props as any).children).trim();
    return <MermaidDiagram chart={rawChart} />;
  }

  return (
    <div className="my-6 w-full max-w-full overflow-x-auto">
      <pre {...props} />
    </div>
  );
};

import Slugger from 'github-slugger';

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
      jsx: (jsxRuntime as any).jsx,
      jsxs: (jsxRuntime as any).jsxs,
      components: {
        table: ResponsiveTable,
        pre: ResponsivePre,
        callout: (props: any) => <Callout type={props.type as CalloutType}>{props.children}</Callout>,
      },
    });

  const file = await processor.process(content);
  return file.result;
}
