import { getSortedDocumentsData } from '@/lib/markdown';
import { ShelfList } from '@/components/ShelfList';

export default function Home() {
  const documents = getSortedDocumentsData();

  return (
    <div className="flex-1 flex flex-col w-full min-w-0">
      {/* Top Header */}
      <header className="w-full py-4 border-b border-border/50">
        <div className="max-w-2xl mx-auto px-3 md:px-4 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight text-foreground">Loud Recall</span>
        </div>
      </header>

      {/* Main Shelf Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-3 md:px-4 py-8 md:py-16 min-w-0">
        {/* Intro */}
        <div className="mb-8">
          <p className="text-muted text-base leading-relaxed">
            A mobile-first reading system for long-form technical documents.
          </p>
        </div>

        {/* Shelf List */}
        <ShelfList documents={documents} />
      </main>
    </div>
  );
}
