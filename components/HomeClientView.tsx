'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { DocumentMeta } from '@/lib/markdown';

interface HomeClientViewProps {
  documents: DocumentMeta[];
}

type FilterChip = 'all' | 'masterclass' | 'article' | 'guest';

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const dayNum = parseInt(parts[2], 10);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (isNaN(monthIdx) || isNaN(dayNum) || monthIdx < 0 || monthIdx > 11) return dateStr;
  return `${dayNum} ${months[monthIdx]} ${year}`;
}

function stripMasterclassPrefix(title: string): string {
  return title
    .replace(/^The AI Stack\s*—\s*/i, '')
    .replace(/^Volume\s+\d+[:—\s]*/i, '');
}

function stripSubjectPrefix(title: string, subject?: string): string {
  let clean = title;
  if (subject) {
    const escaped = subject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    clean = clean.replace(new RegExp(`^${escaped}\\s*—\\s*`, 'i'), '');
  }
  return clean.replace(/^Volume\s+\d+[:—\s]*/i, '');
}

function formatTotalReadTime(docs: DocumentMeta[]): string {
  const totalWords = docs.reduce((sum, d) => sum + (d.wordCount || 0), 0);
  const totalMins = Math.max(1, Math.ceil(totalWords / 225));
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  if (hours > 0 && mins > 0) return `${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h`;
  return `${mins}m`;
}

export function HomeClientView({ documents }: HomeClientViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<FilterChip>('all');
  const [isDesktop, setIsDesktop] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Desktop screen width check for native <details> default open state
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Keyboard shortcut: '/' focuses search input on desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Max word count across all notes on page for reading-length bar
  const maxWordCount = useMemo(() => {
    return Math.max(...documents.map((d) => d.wordCount || 1), 1);
  }, [documents]);

  // Search and chip filter logic
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedFilter === 'masterclass' && !(doc.track === 'ai' && doc.series === 'masterclass')) {
        return false;
      }
      if (selectedFilter === 'article' && !(doc.track === 'ai' && doc.series === 'article')) {
        return false;
      }
      if (selectedFilter === 'guest' && doc.track !== 'guest') {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = doc.title.toLowerCase().includes(q);
        const descMatch = doc.description.toLowerCase().includes(q);
        const tagMatch = doc.tags?.some((t) => t.toLowerCase().includes(q));
        const subjectMatch = doc.subject?.toLowerCase().includes(q);
        if (!titleMatch && !descMatch && !tagMatch && !subjectMatch) {
          return false;
        }
      }
      return true;
    });
  }, [documents, searchQuery, selectedFilter]);

  const isFlatView = searchQuery.trim().length > 0 || selectedFilter !== 'all';

  // Section view data
  const featuredArticle = useMemo(() => {
    const articles = documents
      .filter((d) => d.track === 'ai' && d.series === 'article')
      .sort((a, b) => b.updated.localeCompare(a.updated));
    return articles[0] || null;
  }, [documents]);

  const masterclassDocs = useMemo(() => {
    return documents
      .filter((d) => d.track === 'ai' && d.series === 'masterclass')
      .sort((a, b) => (a.order || 999) - (b.order || 999));
  }, [documents]);

  const articleDocs = useMemo(() => {
    return documents
      .filter((d) => d.track === 'ai' && d.series === 'article')
      .sort((a, b) => b.updated.localeCompare(a.updated));
  }, [documents]);

  // Filter out the featured article from Section 3 if it's already highlighted in Start Here
  const remainingArticleDocs = useMemo(() => {
    if (!featuredArticle) return articleDocs;
    return articleDocs.filter((d) => d.slug !== featuredArticle.slug);
  }, [articleDocs, featuredArticle]);

  const masterclassTotalReadTime = useMemo(() => {
    return formatTotalReadTime(masterclassDocs);
  }, [masterclassDocs]);

  const guestSubjects = useMemo(() => {
    const guestDocs = documents.filter((d) => d.track === 'guest');
    const groupsMap = new Map<string, DocumentMeta[]>();

    guestDocs.forEach((doc) => {
      const subj = doc.subject || 'Other Guest Lectures';
      if (!groupsMap.has(subj)) {
        groupsMap.set(subj, []);
      }
      groupsMap.get(subj)!.push(doc);
    });

    return Array.from(groupsMap.entries()).map(([subject, docs]) => {
      const sortedDocs = [...docs].sort((a, b) => (a.order || 999) - (b.order || 999));
      return {
        subject,
        docs: sortedDocs,
        totalTime: formatTotalReadTime(sortedDocs),
      };
    });
  }, [documents]);

  return (
    <div className="space-y-10 min-w-0">
      {/* Search and Filters Block */}
      <section className="space-y-3" aria-label="Search and filter notes">
        <div className="relative w-full">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search notes, topics, tags…"
            aria-label="Search notes, topics, tags"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 min-h-[44px] text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted/70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[44px] px-3 text-xs font-medium text-muted hover:text-foreground flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
              aria-label="Clear search query"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Chips Container with Scroll Hint */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 -mx-4 px-4">
            {[
              { id: 'all', label: 'All' },
              { id: 'masterclass', label: 'AI Masterclass' },
              { id: 'article', label: 'AI Articles' },
              { id: 'guest', label: 'Guest lectures' },
            ].map((chip) => {
              const isActive = selectedFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setSelectedFilter(chip.id as FilterChip)}
                  className={`min-h-[44px] px-4 py-2 text-xs rounded-full inline-flex items-center justify-center shrink-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2 ${
                    isActive
                      ? 'bg-foreground text-background font-medium'
                      : 'border border-border text-foreground hover:bg-black/5 font-normal'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
          {/* Subtle right edge gradient scroll cue */}
          <div className="absolute right-0 top-0 bottom-1 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Flat Filter / Search Result List */}
      {isFlatView ? (
        <section className="space-y-4" aria-label="Search results">
          <div className="text-xs text-muted font-medium">
            {filteredDocuments.length} {filteredDocuments.length === 1 ? 'result' : 'results'}
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted border border-dashed border-border rounded-lg">
              No notes found matching &quot;{searchQuery}&quot;.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredDocuments.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/${doc.slug}`}
                  className="group block min-h-[44px] p-4 md:p-5 border border-border rounded-lg bg-background hover:border-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
                >
                  <div className="text-[11px] font-sans font-semibold tracking-wider text-muted uppercase mb-1">
                    {doc.track === 'guest'
                      ? `GUEST LECTURE · VOLUME ${doc.order}`
                      : doc.series === 'article'
                      ? 'AI ARTICLE'
                      : `AI MASTERCLASS · VOLUME ${doc.order}`}
                  </div>
                  <h3 className="text-[17px] md:text-lg font-medium text-foreground leading-snug mb-1.5 group-hover:underline">
                    {doc.title}
                  </h3>
                  {doc.description && (
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-3">
                      {doc.description}
                    </p>
                  )}
                  <div className="text-xs text-muted/80 font-medium flex items-center gap-2">
                    <span>{doc.readTime}</span>
                    {doc.updated && (
                      <>
                        <span>&middot;</span>
                        <span>{formatDateDisplay(doc.updated)}</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Structured Home Page Sections */
        <div className="space-y-12">
          {/* Section 1: Start here */}
          {featuredArticle && (
            <section className="space-y-4" aria-label="Start here">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center">
                <span className="inline-block w-[6px] h-[6px] bg-foreground mr-2.5" aria-hidden="true" />
                Start here
              </h2>

              <Link
                href={`/${featuredArticle.slug}`}
                className="group block min-h-[44px] p-5 border border-foreground rounded-lg bg-background hover:bg-black/[0.02] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
              >
                <div className="text-[11px] font-sans font-semibold tracking-wider text-muted uppercase mb-1.5">
                  ARTICLE &middot; NEW
                </div>
                <h3 className="text-[17px] md:text-lg font-medium text-foreground leading-snug mb-2 group-hover:underline">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-3">
                  {featuredArticle.description}
                </p>
                <div className="text-xs text-muted/80 font-medium flex items-center gap-2">
                  <span>{featuredArticle.readTime}</span>
                  {featuredArticle.updated && (
                    <>
                      <span>&middot;</span>
                      <span>Updated {formatDateDisplay(featuredArticle.updated)}</span>
                    </>
                  )}
                </div>
              </Link>
            </section>
          )}

          {/* Section 2: AI Masterclass */}
          {masterclassDocs.length > 0 && (
            <section className="space-y-5" aria-label="AI Masterclass learning path">
              <div className="flex items-center justify-between pb-1 border-b border-border/60">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center">
                  <span className="inline-block w-[6px] h-[6px] bg-foreground mr-2.5" aria-hidden="true" />
                  AI Masterclass
                </h2>
                <span className="text-xs text-muted font-medium">
                  {masterclassDocs.length} volumes &middot; {masterclassTotalReadTime}
                </span>
              </div>

              {/* Learning Path Vertical Rail */}
              <div className="relative pl-10 space-y-6">
                {/* Connecting Vertical Line */}
                <div
                  className="absolute top-4 bottom-4 left-[14px] w-[1px] bg-foreground z-0"
                  aria-hidden="true"
                />

                {masterclassDocs.map((doc) => {
                  const volNum = doc.order < 10 ? `0${doc.order}` : `${doc.order}`;
                  const titleClean = stripMasterclassPrefix(doc.title);
                  const barWidth = Math.min(
                    100,
                    Math.max(5, Math.round(((doc.wordCount || 1) / maxWordCount) * 100))
                  );

                  return (
                    <div key={doc.slug} className="relative z-10">
                      {/* Rail Node */}
                      <div
                        className="absolute -left-10 top-3 w-[28px] h-[28px] bg-background border border-foreground font-mono text-[11px] font-semibold flex items-center justify-center text-foreground z-10"
                        aria-hidden="true"
                      >
                        {volNum}
                      </div>

                      {/* Volume Card */}
                      <Link
                        href={`/${doc.slug}`}
                        className="group block min-h-[44px] p-4 md:p-5 border border-border rounded-lg bg-background hover:border-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
                      >
                        <div className="text-[11px] font-sans font-semibold tracking-wider text-muted uppercase mb-1">
                          Volume {doc.order}
                        </div>
                        <h3 className="text-[17px] md:text-lg font-medium text-foreground leading-snug mb-1.5 group-hover:underline">
                          {titleClean}
                        </h3>
                        <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-3">
                          {doc.description}
                        </p>
                        <div className="text-xs text-muted/80 font-medium mb-3">
                          {doc.readTime}
                        </div>

                        {/* 2px Reading-Length Bar */}
                        <div
                          className="w-full h-[2px] bg-border rounded-full overflow-hidden"
                          title={`Reading time relative to longest note on page: ${barWidth}%`}
                        >
                          <div
                            className="h-full bg-foreground transition-all duration-300"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Section 3: AI Articles */}
          {remainingArticleDocs.length > 0 && (
            <section className="space-y-4" aria-label="AI Articles">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center pb-1 border-b border-border/60">
                <span className="inline-block w-[6px] h-[6px] bg-foreground mr-2.5" aria-hidden="true" />
                AI Articles
              </h2>

              <div className="space-y-3">
                {remainingArticleDocs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/${doc.slug}`}
                    className="group block min-h-[44px] p-4 md:p-5 border border-border rounded-lg bg-background hover:border-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
                  >
                    <h3 className="text-[17px] md:text-lg font-medium text-foreground leading-snug mb-1.5 group-hover:underline">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed mb-3">
                      {doc.description}
                    </p>
                    <div className="text-xs text-muted/80 font-medium flex items-center gap-2">
                      <span>{doc.readTime}</span>
                      {doc.updated && (
                        <>
                          <span>&middot;</span>
                          <span>{formatDateDisplay(doc.updated)}</span>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Guest lectures */}
          {guestSubjects.length > 0 && (
            <section className="space-y-4" aria-label="Guest lectures">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center">
                  <span className="inline-block w-[6px] h-[6px] bg-foreground mr-2.5" aria-hidden="true" />
                  Guest lectures
                </h2>
                <p className="text-sm text-muted mt-1.5">
                  Deep dives beyond AI — machine learning, banking and risk.
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {guestSubjects.map((group) => (
                  <details
                    key={group.subject}
                    open={isDesktop}
                    className="group border border-border rounded-lg bg-background overflow-hidden"
                  >
                    <summary className="cursor-pointer select-none font-medium text-base text-foreground p-4 bg-background hover:bg-black/[0.02] flex items-center justify-between min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2">
                      <span className="font-medium text-[16px] text-foreground">{group.subject}</span>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs text-muted font-medium">
                          {group.docs.length} volumes &middot; {group.totalTime}
                        </span>
                        <svg
                          className="w-4 h-4 text-muted transition-transform duration-200 group-open:rotate-180 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>

                    <div className="p-4 pt-2 border-t border-border/40 space-y-3">
                      {group.docs.map((doc) => {
                        const titleClean = stripSubjectPrefix(doc.title, group.subject);
                        return (
                          <Link
                            key={doc.slug}
                            href={`/${doc.slug}`}
                            className="group/item block min-h-[44px] p-3.5 border border-border/80 rounded-md bg-background hover:border-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
                          >
                            <div className="text-[11px] font-sans font-semibold tracking-wider text-muted uppercase mb-1">
                              Guest lecture &middot; Volume {doc.order}
                            </div>
                            <h4 className="text-[15px] md:text-base font-medium text-foreground leading-snug mb-1 group-hover/item:underline">
                              {titleClean}
                            </h4>
                            {doc.description && (
                              <p className="text-xs text-muted line-clamp-2 leading-relaxed mb-2">
                                {doc.description}
                              </p>
                            )}
                            <div className="text-xs text-muted/80 font-medium">
                              {doc.readTime}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
