import { getSortedDocumentsData } from '@/lib/markdown';
import { ShelfList } from '@/components/ShelfList';
import { Mark } from '@/components/Mark';

export default function Home() {
  const documents = getSortedDocumentsData();

  // Compute total reading time in hours dynamically
  const totalMinutes = documents.reduce((acc, doc) => {
    const mins = parseInt(doc.readTime, 10) || Math.ceil(doc.wordCount / 225);
    return acc + mins;
  }, 0);
  const totalHours = Math.round(totalMinutes / 60);
  const hoursLabel = totalHours === 1 ? '1 hour' : `${totalHours} hours`;
  const statLine = `${documents.length} documents · about ${hoursLabel} of reading`;

  return (
    <div className="flex-1 flex flex-col w-full min-w-0">
      {/* Main Shelf Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-3 md:px-4 py-8 md:py-12 min-w-0">
        {/* Masthead */}
        <header className="mb-8 md:mb-10 pb-8 border-b border-border/40">
          <div className="flex items-center gap-3 mb-2.5">
            <Mark className="h-7 w-auto text-foreground" />
            <h1 className="text-xl font-sans font-light tracking-wide text-foreground">
              Loud Recall
            </h1>
          </div>
          <p className="text-base text-muted leading-relaxed mb-3">
            Notes on risk, finance and AI. One subject at a time, taken deep enough to defend.
          </p>
          <p className="text-xs font-medium text-muted/70">
            {statLine}
          </p>
        </header>

        {/* Shelf List */}
        <ShelfList documents={documents} />
      </main>
    </div>
  );
}
