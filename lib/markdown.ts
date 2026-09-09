import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type ContentFormat = 'md' | 'html';
export type ContentSeries = 'masterclass' | 'portfolio' | 'article' | 'newsletter';
export type ContentStatus = 'draft' | 'live';

export interface DocumentMeta {
  slug: string;
  title: string;
  series: ContentSeries;
  status: ContentStatus;
  updated: string;
  description: string;
  verified?: string;
  created?: string;
  format: ContentFormat;
  tags: string[];
  readTime: string;
  wordCount: number;
}

export interface DocumentData extends DocumentMeta {
  content: string;
}

const WPM = 225;

function calculateReadTime(text: string): { readTime: string; wordCount: number } {
  const cleanText = text.replace(/<[^>]*>/g, ' ');
  const words = cleanText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WPM));
  return {
    readTime: `${minutes} min read`,
    wordCount: words,
  };
}

function parseTags(rawTags: any): string[] {
  if (Array.isArray(rawTags)) {
    return rawTags.map((t) => String(t).trim()).filter(Boolean);
  }
  if (typeof rawTags === 'string' && rawTags.trim()) {
    return rawTags.split(',').map((t) => t.trim()).filter(Boolean);
  }
  return [];
}

function formatDateString(val: any): string {
  if (!val) return '';
  if (val instanceof Date) {
    return val.toISOString().split('T')[0];
  }
  return String(val).trim();
}

function parseFrontmatter(fileContents: string) {
  let target = fileContents;
  // Support reading frontmatter from leading HTML comment <!-- --- ... --- -->
  const htmlCommentMatch = fileContents.match(/^\s*<!--\s*\n?(---\s*[\s\S]*?---)\s*\n?-->/);
  if (htmlCommentMatch) {
    target = htmlCommentMatch[1];
  }
  return matter(target);
}

function parseSeries(raw: any): ContentSeries {
  const allowed: ContentSeries[] = ['masterclass', 'portfolio', 'article', 'newsletter'];
  if (allowed.includes(raw)) return raw;
  return 'masterclass';
}

function parseStatus(raw: any): ContentStatus {
  if (raw === 'draft') return 'draft';
  return 'live';
}

export function getSortedDocumentsData(): DocumentMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allDocumentsData = fileNames
    .filter((fileName) => (fileName.endsWith('.md') || fileName.endsWith('.html')) && !fileName.startsWith('_'))
    .map((fileName) => {
      const isHtml = fileName.endsWith('.html');
      const slug = fileName.replace(/\.(md|html)$/, '');

      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = parseFrontmatter(fileContents);
      const { readTime, wordCount } = calculateReadTime(matterResult.content);

      const format: ContentFormat = matterResult.data.format === 'markdown'
        ? 'md'
        : (matterResult.data.format ? matterResult.data.format : (isHtml ? 'html' : 'md'));

      const series = parseSeries(matterResult.data.series);
      const status = parseStatus(matterResult.data.status);

      return {
        slug,
        title: matterResult.data.title || slug,
        description: matterResult.data.description || '',
        verified: matterResult.data.verified || 'unverified',
        format,
        series,
        status,
        tags: parseTags(matterResult.data.tags),
        created: formatDateString(matterResult.data.created),
        updated: formatDateString(matterResult.data.updated || matterResult.data.date),
        readTime,
        wordCount,
      };
    })
    .filter((doc) => doc.status === 'live'); // ONLY live documents render on homepage / routes

  return allDocumentsData.sort((a, b) => {
    if (a.updated !== b.updated) {
      return b.updated.localeCompare(a.updated);
    }
    return a.title.localeCompare(b.title);
  });
}

export function getDocumentData(slug: string): DocumentData | null {
  let fullPath = path.join(contentDirectory, `${slug}.md`);
  let isHtml = false;

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDirectory, `${slug}.html`);
    isHtml = true;
  }

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = parseFrontmatter(fileContents);

  const status = parseStatus(matterResult.data.status);
  // Only live documents are routable — draft returns null (404)
  if (status !== 'live') {
    return null;
  }

  const { readTime, wordCount } = calculateReadTime(matterResult.content);

  const format: ContentFormat = matterResult.data.format === 'markdown'
    ? 'md'
    : (matterResult.data.format ? matterResult.data.format : (isHtml ? 'html' : 'md'));

  const series = parseSeries(matterResult.data.series);

  return {
    slug,
    title: matterResult.data.title || slug,
    description: matterResult.data.description || '',
    verified: matterResult.data.verified || 'unverified',
    format,
    series,
    status,
    tags: parseTags(matterResult.data.tags),
    created: formatDateString(matterResult.data.created),
    updated: formatDateString(matterResult.data.updated || matterResult.data.date),
    readTime,
    wordCount,
    content: matterResult.content,
  };
}
