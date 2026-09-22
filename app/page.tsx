import { getSortedDocumentsData } from '@/lib/markdown';
import { HomeViewContainer } from '@/components/HomeViewContainer';

export default function Home() {
  const documents = getSortedDocumentsData();

  return <HomeViewContainer documents={documents} />;
}
