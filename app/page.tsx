import { getSortedDocumentsData } from '@/lib/markdown';
import { ShelfList } from '@/components/ShelfList';
import { Mark } from '@/components/Mark';

export default function Home() {
  const documents = getSortedDocumentsData();

  return (
    <div className="flex-1 flex flex-col w-full min-w-0">
      {/* Main Shelf Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-3 md:px-4 py-8 md:py-12 min-w-0">
        {/* Header / Masthead */}
        <header className="mb-8 md:mb-10 pb-8 border-b border-border/40">
          <div className="flex items-center gap-3 mb-2.5">
            <Mark className="h-7 w-auto text-foreground shrink-0" />
            <h1 className="text-xl font-sans font-light tracking-wide text-foreground">
              Loud Recall
            </h1>
          </div>
          <p className="text-base text-muted leading-relaxed mb-1.5">
            Notes on risk, finance and AI. One subject at a time, taken deep enough to defend.
          </p>
          <p className="text-[11px] font-sans text-muted/70 tracking-widest uppercase font-medium">
            Tharun Gajula
          </p>
        </header>

        {/* Shelf List grouped by series */}
        <ShelfList documents={documents} />
      </main>
    </div>
  );
}
