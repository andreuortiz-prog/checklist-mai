
export type CategoryKey = 'strategy' | 'data' | 'infrastructure' | 'talent' | 'governance' | 'culture';

export interface Question {
  id: string;
  text: string;
}

export interface Category {
  key: CategoryKey;
  title: string;
  questions: Question[];
}

export interface Result {
  category: string;
  key: CategoryKey;
  score: number;
}

export interface Recommendation {
  immediate: string;
  nextStep: string;
  longTerm: string;
}

export const SCORE_LABELS: Record<number, string> = {
    1: "Inexistente / Ad-hoc",
    2: "Inicial / Repetible",
    3: "Definido",
    4: "Gestionado",
    5: "Optimizado",
};
