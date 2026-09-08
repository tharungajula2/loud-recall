'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DocumentMeta } from '@/lib/markdown';

interface ShelfListProps {
  documents: DocumentMeta[];
}

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

function toSentenceCase(str: string): string {
  if (!str) return '';
  if (str === 'all') return 'All';
  const clean = str.replace(/-/g, ' ');
  return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
}

export function ShelfList({ documents }: ShelfListProps) {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Step 2: Derive available series dynamically at build/render time
  const availableSeries = useMemo(() => {
    const seriesSet = new Set<string>();
    documents.forEach((doc) => {
      if (doc.series) {
        seriesSet.add(doc.series);
      }
    });
    const sorted = Array.from(seriesSet).sort();
    return ['all', ...sorted];
  }, [documents]);

  // Filter documents composing series and search query
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedSeries !== 'all' && doc.series !== selectedSeries) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = doc.title.toLowerCase().includes(q);
        const matchesDesc = doc.description.toLowerCase().includes(q);
        const matchesTags = doc.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTags) return false;
      }
      return true;
    });
  }, [documents, selectedSeries, searchQuery]);

  const isQueryActive = searchQuery.trim().length > 0 || selectedSeries !== 'all';

  return (
    <div className="space-y-6">
      {/* Search & Series Filter Controls */}
      <div className="space-y-3 pb-6 border-b border-border/40">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input Container with Clear Control */}
          <div className="relative w-full sm:max-w-xs flex items-center">
            <input
              type="text"
              placeholder="Search title, description, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 pr-14 text-xs bg-background border border-border rounded-md text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-xs font-medium text-muted hover:text-foreground px-1 py-0.5"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          {/* Derived Series Filters */}
          <div className="flex items-center gap-1 shrink-0 flex-wrap">
            {availableSeries.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSeries(s)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedSeries === s
                    ? 'bg-foreground text-background font-semibold'
                    : 'text-muted hover:text-foreground hover:bg-black/5'
                }`}
              >
                {toSentenceCase(s)}
              </button>
            ))}
          </div>
        </div>

        {/* Active Query Result Count */}
        {isQueryActive && (
          <div className="text-xs text-muted/70 flex items-center justify-between pt-1">
            <span>
              {filteredDocuments.length} of {documents.length}
            </span>
          </div>
        )}
      </div>

      {/* Document List */}
      <div className="divide-y divide-border/40">
        {filteredDocuments.length === 0 ? (
          <div className="py-12 text-center text-xs text-muted">
            {selectedSeries !== 'all' && searchQuery.trim()
              ? `No notes found matching "${searchQuery}" in ${toSentenceCase(selectedSeries)}.`
              : selectedSeries !== 'all'
              ? `No notes found in ${toSentenceCase(selectedSeries)}.`
              : `No notes found matching "${searchQuery}".`}
          </div>
        ) : (
          filteredDocuments.map((doc) => (
            <Link
              key={doc.slug}
              href={`/${doc.slug}`}
              className="group block py-4 px-2 -mx-2 rounded-lg transition-colors hover:bg-black/5 active:bg-black/10"
            >
              {/* 1. Title — full, wrapping to as many lines as needed, never truncated */}
              <h2 className="text-base font-medium tracking-tight text-foreground leading-snug mb-1">
                {doc.title}
              </h2>

              {/* 2. Description — clamped to 2 lines max */}
              {doc.description && (
                <p className="text-xs text-muted line-clamp-2 leading-relaxed mb-2.5">
                  {doc.description}
                </p>
              )}

              {/* 3. Single meta line: hairline-separated inline items */}
              <div className="text-xs text-muted/70 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
                <span className="uppercase tracking-wider text-[10px] text-muted/60 font-semibold">
                  {doc.series}
                </span>
                <span>&middot;</span>
                <span>{doc.readTime}</span>
                {doc.updated && (
                  <>
                    <span>&middot;</span>
                    <span>{formatDateDisplay(doc.updated)}</span>
                  </>
                )}
                {doc.verified !== 'verified' && doc.verified !== 'true' && (
                  <>
                    <span>&middot;</span>
                    <span className="text-muted/60 uppercase tracking-wider text-[10px]">
                      Unverified
                    </span>
                  </>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
