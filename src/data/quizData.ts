export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
  }
  
  export interface SubjectQuiz {
    subject: string;
    title: string;
    description: string;
    questions: QuizQuestion[];
  }
  
  // Quiz Anglais (déjà créé)
  export const englishQuiz: SubjectQuiz = {
    subject: 'anglais',
    title: 'Quiz d\'anglais - Niveau débutant',
    description: 'Testez vos connaissances de base en anglais',
    questions: [
      {
        id: 1,
        question: "Comment dit-on 'Bonjour' en anglais ?",
        options: ["Goodbye", "Hello", "Thank you", "Please"],
        correctAnswer: 1,
        explanation: "En anglais, 'Bonjour' se dit 'Hello'.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quelle est la couleur du ciel ?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 1,
        explanation: "Le ciel est bleu, donc 'Blue' en anglais.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Combien y a-t-il de lettres dans l'alphabet anglais ?",
        options: ["24", "25", "26", "27"],
        correctAnswer: 2,
        explanation: "L'alphabet anglais compte 26 lettres.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Comment dit-on 'Merci' en anglais ?",
        options: ["Please", "Sorry", "Thank you", "Welcome"],
        correctAnswer: 2,
        explanation: "En anglais, 'Merci' se dit 'Thank you'.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Quel animal dit 'Woof woof' ?",
        options: ["Cat", "Dog", "Bird", "Fish"],
        correctAnswer: 1,
        explanation: "Le chien dit 'Woof woof' en anglais.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Mathématiques
  export const mathQuiz: SubjectQuiz = {
    subject: 'mathematiques',
    title: 'Quiz de mathématiques - Niveau débutant',
    description: 'Testez vos connaissances en mathématiques de base',
    questions: [
      {
        id: 1,
        question: "Combien font 2 + 3 ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "2 + 3 = 5",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quel est le résultat de 4 × 5 ?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1,
        explanation: "4 × 5 = 20",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Combien y a-t-il de côtés dans un triangle ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Un triangle a 3 côtés.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quel est le double de 7 ?",
        options: ["12", "14", "16", "18"],
        correctAnswer: 1,
        explanation: "Le double de 7 est 14 (7 × 2 = 14).",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Combien font 10 - 4 ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "10 - 4 = 6",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Arabe
  export const arabicQuiz: SubjectQuiz = {
    subject: 'arabe',
    title: 'Quiz d\'arabe - Niveau débutant',
    description: 'Testez vos connaissances de base en arabe',
    questions: [
      {
        id: 1,
        question: "Combien y a-t-il de lettres dans l'alphabet arabe ?",
        options: ["26", "27", "28", "29"],
        correctAnswer: 2,
        explanation: "L'alphabet arabe compte 28 lettres.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Comment dit-on 'Bonjour' en arabe ?",
        options: ["Marhaba", "Shukran", "Afwan", "Ma'a salama"],
        correctAnswer: 0,
        explanation: "En arabe, 'Bonjour' se dit 'Marhaba'.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Comment dit-on 'Merci' en arabe ?",
        options: ["Marhaba", "Shukran", "Afwan", "Ma'a salama"],
        correctAnswer: 1,
        explanation: "En arabe, 'Merci' se dit 'Shukran'.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quelle est la direction d'écriture de l'arabe ?",
        options: ["De gauche à droite", "De droite à gauche", "De haut en bas", "De bas en haut"],
        correctAnswer: 1,
        explanation: "L'arabe s'écrit de droite à gauche.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Comment dit-on 'Au revoir' en arabe ?",
        options: ["Marhaba", "Shukran", "Afwan", "Ma'a salama"],
        correctAnswer: 3,
        explanation: "En arabe, 'Au revoir' se dit 'Ma'a salama'.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Français
  export const frenchQuiz: SubjectQuiz = {
    subject: 'francais',
    title: 'Quiz de français - Niveau débutant',
    description: 'Testez vos connaissances en français',
    questions: [
      {
        id: 1,
        question: "Combien y a-t-il de lettres dans l'alphabet français ?",
        options: ["24", "25", "26", "27"],
        correctAnswer: 2,
        explanation: "L'alphabet français compte 26 lettres.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quelle est la couleur du sang ?",
        options: ["Bleu", "Rouge", "Vert", "Jaune"],
        correctAnswer: 1,
        explanation: "Le sang est rouge.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Combien y a-t-il de voyelles en français ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "Il y a 6 voyelles en français : a, e, i, o, u, y.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quel est le contraire de 'grand' ?",
        options: ["Large", "Petit", "Haut", "Bas"],
        correctAnswer: 1,
        explanation: "Le contraire de 'grand' est 'petit'.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Comment dit-on 'Merci beaucoup' ?",
        options: ["S'il vous plaît", "De rien", "Merci beaucoup", "Pardon"],
        correctAnswer: 2,
        explanation: "'Merci beaucoup' se dit 'Merci beaucoup'.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Sciences
  export const scienceQuiz: SubjectQuiz = {
    subject: 'sciences',
    title: 'Quiz de sciences - Niveau débutant',
    description: 'Testez vos connaissances scientifiques',
    questions: [
      {
        id: 1,
        question: "Quelle planète est la plus proche du Soleil ?",
        options: ["Terre", "Mars", "Mercure", "Vénus"],
        correctAnswer: 2,
        explanation: "Mercure est la planète la plus proche du Soleil.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quel est l'élément le plus abondant sur Terre ?",
        options: ["Carbone", "Oxygène", "Azote", "Hydrogène"],
        correctAnswer: 1,
        explanation: "L'oxygène est l'élément le plus abondant sur Terre.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Combien y a-t-il de sens chez l'humain ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "L'humain a 5 sens : vue, ouïe, odorat, goût, toucher.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quel animal pond des œufs ?",
        options: ["Chat", "Chien", "Poule", "Vache"],
        correctAnswer: 2,
        explanation: "La poule pond des œufs.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Quelle est la couleur du feu ?",
        options: ["Bleu", "Rouge", "Orange", "Toutes ces couleurs"],
        correctAnswer: 3,
        explanation: "Le feu peut avoir plusieurs couleurs selon sa température.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Informatique
  export const computerScienceQuiz: SubjectQuiz = {
    subject: 'informatique',
    title: 'Quiz d\'informatique - Niveau débutant',
    description: 'Testez vos connaissances en informatique',
    questions: [
      {
        id: 1,
        question: "Qu'est-ce qu'un ordinateur ?",
        options: ["Un animal", "Une machine à calculer", "Un véhicule", "Un aliment"],
        correctAnswer: 1,
        explanation: "Un ordinateur est une machine à calculer et traiter l'information.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quel est le composant principal d'un ordinateur ?",
        options: ["L'écran", "Le processeur", "Le clavier", "La souris"],
        correctAnswer: 1,
        explanation: "Le processeur est le cerveau de l'ordinateur.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Que signifie 'Internet' ?",
        options: ["Un jeu", "Un réseau mondial", "Un animal", "Une couleur"],
        correctAnswer: 1,
        explanation: "Internet est un réseau mondial d'ordinateurs connectés.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Qu'est-ce qu'un virus informatique ?",
        options: ["Un médicament", "Un programme malveillant", "Un jeu", "Un document"],
        correctAnswer: 1,
        explanation: "Un virus informatique est un programme malveillant.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Quel est le nom de la souris d'ordinateur en anglais ?",
        options: ["Cat", "Dog", "Mouse", "Bird"],
        correctAnswer: 2,
        explanation: "En anglais, la souris d'ordinateur se dit 'Mouse'.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Sciences Islamiques
  export const islamicSciencesQuiz: SubjectQuiz = {
    subject: 'sciences-islamiques',
    title: 'Quiz de sciences islamiques - Niveau débutant',
    description: 'Testez vos connaissances en sciences islamiques',
    questions: [
      {
        id: 1,
        question: "Combien y a-t-il de piliers de l'Islam ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: "Il y a 5 piliers de l'Islam.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quel est le premier pilier de l'Islam ?",
        options: ["La prière", "La profession de foi", "Le jeûne", "L'aumône"],
        correctAnswer: 1,
        explanation: "Le premier pilier est la profession de foi (Chahada).",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Quel est le nom du livre sacré des musulmans ?",
        options: ["La Bible", "Le Coran", "La Torah", "Les Évangiles"],
        correctAnswer: 1,
        explanation: "Le livre sacré des musulmans est le Coran.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Combien de fois par jour les musulmans prient-ils ?",
        options: ["3 fois", "4 fois", "5 fois", "6 fois"],
        correctAnswer: 2,
        explanation: "Les musulmans prient 5 fois par jour.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Quel est le nom du mois de jeûne ?",
        options: ["Muharram", "Ramadan", "Chawwal", "Dhul Hijja"],
        correctAnswer: 1,
        explanation: "Le mois de jeûne est le Ramadan.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Histoire Islam
  export const islamicHistoryQuiz: SubjectQuiz = {
    subject: 'histoire-islam',
    title: 'Quiz d\'histoire islamique - Niveau débutant',
    description: 'Testez vos connaissances en histoire islamique',
    questions: [
      {
        id: 1,
        question: "Quel est le nom du prophète de l'Islam ?",
        options: ["Abraham", "Moïse", "Muhammad", "Jésus"],
        correctAnswer: 2,
        explanation: "Le prophète de l'Islam est Muhammad (صلى الله عليه وسلم).",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "En quelle année l'Islam est-il né ?",
        options: ["570", "610", "622", "632"],
        correctAnswer: 1,
        explanation: "L'Islam est né en 610 avec la première révélation.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Quelle est la première mosquée de l'Islam ?",
        options: ["La Mecque", "Médine", "Al-Aqsa", "Cordoue"],
        correctAnswer: 1,
        explanation: "La première mosquée est la Kaaba à La Mecque.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quel est le nom de la migration vers Médine ?",
        options: ["Hijra", "Hajj", "Umra", "Zakat"],
        correctAnswer: 0,
        explanation: "La migration vers Médine s'appelle la Hijra.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Quel est le nom de la première femme musulmane ?",
        options: ["Aïcha", "Fatima", "Khadija", "Maryam"],
        correctAnswer: 2,
        explanation: "La première femme musulmane est Khadija, épouse du Prophète.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Arts
  export const artsQuiz: SubjectQuiz = {
    subject: 'arts',
    title: 'Quiz d\'arts et créativité - Niveau débutant',
    description: 'Testez vos connaissances en arts',
    questions: [
      {
        id: 1,
        question: "Quelle est la couleur primaire ?",
        options: ["Vert", "Rouge", "Orange", "Violet"],
        correctAnswer: 1,
        explanation: "Le rouge est une couleur primaire.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Quel outil utilise-t-on pour peindre ?",
        options: ["Un marteau", "Un pinceau", "Une scie", "Un tournevis"],
        correctAnswer: 1,
        explanation: "On utilise un pinceau pour peindre.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Qu'est-ce qu'un dessin ?",
        options: ["Un son", "Une image créée à la main", "Un goût", "Une odeur"],
        correctAnswer: 1,
        explanation: "Un dessin est une image créée à la main.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Quelle forme a un cercle ?",
        options: ["Carrée", "Triangulaire", "Ronde", "Rectangulaire"],
        correctAnswer: 2,
        explanation: "Un cercle a une forme ronde.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Qu'est-ce que la créativité ?",
        options: ["Copier", "Créer quelque chose de nouveau", "Détruire", "Attendre"],
        correctAnswer: 1,
        explanation: "La créativité, c'est créer quelque chose de nouveau.",
        difficulty: 'easy'
      }
    ]
  };
  
  // Quiz Bien-être
  export const wellbeingQuiz: SubjectQuiz = {
    subject: 'bien-etre',
    title: 'Quiz de bien-être - Niveau débutant',
    description: 'Testez vos connaissances en bien-être',
    questions: [
      {
        id: 1,
        question: "Qu'est-ce que la méditation ?",
        options: ["Un sport", "Une technique de relaxation", "Un jeu", "Un repas"],
        correctAnswer: 1,
        explanation: "La méditation est une technique de relaxation.",
        difficulty: 'easy'
      },
      {
        id: 2,
        question: "Combien de temps faut-il dormir par nuit ?",
        options: ["4-5 heures", "6-7 heures", "8-9 heures", "10-11 heures"],
        correctAnswer: 2,
        explanation: "Il faut dormir 8-9 heures par nuit.",
        difficulty: 'easy'
      },
      {
        id: 3,
        question: "Qu'est-ce que la respiration ?",
        options: ["Manger", "Boire", "Inspirer et expirer", "Marcher"],
        correctAnswer: 2,
        explanation: "La respiration, c'est inspirer et expirer.",
        difficulty: 'easy'
      },
      {
        id: 4,
        question: "Qu'est-ce que la confiance en soi ?",
        options: ["Avoir peur", "Croire en ses capacités", "Être triste", "Être en colère"],
        correctAnswer: 1,
        explanation: "La confiance en soi, c'est croire en ses capacités.",
        difficulty: 'easy'
      },
      {
        id: 5,
        question: "Qu'est-ce que le stress ?",
        options: ["Un jeu", "Une tension nerveuse", "Un aliment", "Une couleur"],
        correctAnswer: 1,
        explanation: "Le stress est une tension nerveuse.",
        difficulty: 'easy'
      }
    ]
  };
  
  export const allQuizzes = [
    englishQuiz, 
    mathQuiz, 
    arabicQuiz, 
    frenchQuiz, 
    scienceQuiz,
    computerScienceQuiz,
    islamicSciencesQuiz,
    islamicHistoryQuiz,
    artsQuiz,
    wellbeingQuiz
  ];
  
  export const getQuizBySubject = (subject: string): SubjectQuiz | undefined => {
    return allQuizzes.find(quiz => quiz.subject === subject);
  };