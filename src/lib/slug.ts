/**
 * Fabrication d'un slug d'URL.
 *
 * Hors du module d'actions : un fichier « use server » n'exporte que des
 * points d'entrée réseau, et un utilitaire n'a pas à en devenir un.
 */
export function toSlug(input: string) {
  return String(input ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    // La coupe vient avant le nettoyage des tirets : couper en dernier
    // laissait des adresses finissant par « - » (constaté par le test).
    .slice(0, 90)
    .replace(/^-+|-+$/g, '');
}

/** Squelette JSON proposé pour une nouvelle leçon : valide, à remplir. */
export const LESSON_TEMPLATE = JSON.stringify(
  {
    introduction: { title: 'Introduction', content: 'Premier paragraphe en **markdown**.' },
    mainContent: [
      { type: 'concept', title: 'La notion', content: 'Explication.' },
      { type: 'activity', title: 'On essaie', content: '1. Première étape\n2. Deuxième étape' },
      { type: 'exercise', title: 'Exercice', content: 'Consigne.' },
      { type: 'summary', title: 'Résumé', content: 'Trois phrases.' },
    ],
    conclusion: {
      summary: 'Ce qui a été vu.',
      keyTakeaways: ['Point 1'],
      nextSteps: ['Leçon suivante'],
      additionalResources: [],
    },
  },
  null,
  2,
);

export const ASSESSMENT_TEMPLATE = JSON.stringify(
  {
    quiz: [
      {
        question: 'Question ?',
        type: 'multiple-choice',
        options: ['A', 'B', 'C'],
        correctAnswer: 'A',
        explanation: 'Pourquoi.',
        points: 10,
      },
    ],
    passingScore: 80,
    timeLimit: 30,
  },
  null,
  2,
);
