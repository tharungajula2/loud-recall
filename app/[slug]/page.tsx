import { notFound } from 'next/navigation';
import { getDocumentData, getSortedDocumentsData } from '@/lib/markdown';
import { extractHeadings, renderMarkdown } from '@/lib/render';
import ClientReader from './ClientReader';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const documents = getSortedDocumentsData();
  return documents.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = getDocumentData(resolvedParams.slug);
  
  if (!doc) {
    return { title: 'Not Found' };
  }

  return {
    title: `${doc.title} - Loud Recall`,
    description: doc.description,
  };
}

function processHtmlNoteContent(rawContent: string): string {
  // 1. Strip outer doctype/html/head/body tags if present
  let clean = rawContent.replace(/<!DOCTYPE[^>]*>/gi, '');
  clean = clean.replace(/<\/?(html|head|body)[^>]*>/gi, '');

  // 2. Strip duplicate chrome elements from standalone HTML files
  clean = clean.replace(/<div\s+id=["'](?:bar|top|rail|idx)["'][^>]*>[\s\S]*?<\/div>/gi, '');
  clean = clean.replace(/<button\s+id=["'](?:toTop|close|count)["'][^>]*>[\s\S]*?<\/button>/gi, '');

  // 3. Scope CSS rules (body, html, :root) to .loud-recall-html-note to prevent style leakage
  clean = clean.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
    const scopedCss = css
      .replace(/body\s*\{/g, '.loud-recall-html-note {')
      .replace(/html\s*\{/g, '.loud-recall-html-note {')
      .replace(/:root\s*\{/g, '.loud-recall-html-note {');
    return `<style>${scopedCss}</style>`;
  });

  // 4. Wrap standalone tables in .table-wrapper for touch scrolling, sticky first column, and right-edge scroll cue
  clean = clean.replace(/<table(?:\s+[^>]*)?>[\s\S]*?<\/table>/gi, (tableHtml) => {
    if (tableHtml.includes('calc-table')) return tableHtml;
    return `<div class="table-wrapper">${tableHtml}</div>`;
  });

  return clean;
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDocumentData(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  const headings = extractHeadings(doc.content);

  if (doc.format === 'html') {
    const cleanContent = processHtmlNoteContent(doc.content);
    return (
      <ClientReader doc={doc} headings={headings}>
        <div 
          className="loud-recall-html-note w-full min-w-0 max-w-none"
          dangerouslySetInnerHTML={{ __html: cleanContent }} 
        />
      </ClientReader>
    );
  }

  const reactContent = await renderMarkdown(doc.content);

  return (
    <ClientReader doc={doc} headings={headings}>
      {reactContent}
    </ClientReader>
  );
}
