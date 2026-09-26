export type SubjectId = 'finance' | 'health' | 'ai' | 'life';
export type ContentFormat = 'masterclass' | 'article';

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  description: string;
}

export const SUBJECTS: SubjectConfig[] = [
  {
    id: 'finance',
    name: 'Finance',
    description: 'Banking, credit risk and how money actually moves.',
  },
  {
    id: 'health',
    name: 'Health',
    description: 'Practical health, from building Parents Health OS.',
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'Building with AI, and the machine learning underneath it.',
  },
  {
    id: 'life',
    name: 'Life',
    description: 'Notes on everything else worth learning.',
  },
];

export const SUBJECT_MAP: Record<SubjectId, SubjectConfig> = {
  finance: SUBJECTS[0],
  health: SUBJECTS[1],
  ai: SUBJECTS[2],
  life: SUBJECTS[3],
};
