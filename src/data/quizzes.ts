export type QuizQuestion = {
    q: string;
    options: { t: string; ok: boolean }[];
  };
  
  export const quizzesByLesson: Record<string, QuizQuestion[]> = {
    'alphabet-arabe-lettres-solaires': [
      {
        q: 'Quelle est une lettre solaire ?',
        options: [
          { t: 'الراء (ar-Râ)', ok: true },
          { t: 'الباء (al-Bâ)', ok: false },
          { t: 'الميم (al-Mîm)', ok: false },
          { t: 'الغين (al-Ghîn)', ok: false },
        ],
      },
      {
        q: 'Avec les lettres solaires, le ل de ال…',
        options: [
          { t: 'Se prononce toujours clairement', ok: false },
          { t: 'S’assimile à la consonne suivante', ok: true },
          { t: 'Disparaît totalement à l’écrit', ok: false },
          { t: 'Devient une voyelle', ok: false },
        ],
      },
    ],
    'fractions-simplifiees': [
      {
        q: 'La forme simplifiée de 18/24 est…',
        options: [
          { t: '3/4', ok: true },
          { t: '6/8', ok: false },
          { t: '9/12', ok: false },
          { t: '12/18', ok: false },
        ],
      },
      {
        q: 'Pour simplifier, on divise par…',
        options: [
          { t: 'Le plus grand diviseur commun', ok: true },
          { t: 'Un nombre aléatoire', ok: false },
          { t: 'Seulement le numérateur', ok: false },
          { t: 'Seulement le dénominateur', ok: false },
        ],
      },
    ],
    'html-balises-base': [
      {
        q: 'La balise pour un lien est…',
        options: [
          { t: '<a>', ok: true },
          { t: '<link>', ok: false },
          { t: '<url>', ok: false },
          { t: '<href>', ok: false },
        ],
      },
    ],
  };
  