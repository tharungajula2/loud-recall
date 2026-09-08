import { MetadataRoute } from 'next';
import { getSortedDocumentsData } from '@/lib/markdown';

const baseUrl = 'https://loud-recall.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const documents = getSortedDocumentsData();

  const docEntries: MetadataRoute.Sitemap = documents.map((doc) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${baseUrl}/${doc.slug}`,
      priority: 0.8,
    };
    if (doc.updated) {
      const parsedDate = new Date(doc.updated);
      if (!isNaN(parsedDate.getTime())) {
        entry.lastModified = parsedDate;
      }
    }
    return entry;
  });

  return [
    {
      url: baseUrl,
      priority: 1.0,
    },
    ...docEntries,
  ];
}
