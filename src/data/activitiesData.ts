export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  subject: string;
  materials: string[];
  instructions: string[];
  learningObjectives: string[];
  tips: string[];
  assessment: string[];
  ageGroup: '6-8' | '9-11' | '12-14' | '15+';
  isInteractive: boolean;
  canBeDoneAlone: boolean;
  requiresSupervision: boolean;
}

export const activitiesData: Activity[] = [
  // ===== ACTIVITÉS ANGLAIS =====
  {
    id: "eng-alphabet-song",
    title: "Chanson de l'alphabet anglais",
    description: "Apprendre l'alphabet anglais de manière ludique et interactive en chantant et en créant des gestes associés",
    duration: "20 min",
    difficulty: "beginner",
    subject: "anglais",
    materials: [
      "Feuille imprimée avec l'alphabet anglais (A-Z)",
      "Stylos colorés (rouge, bleu, vert, jaune)",
      "Haut-parleur ou enceinte",
      "Fichier audio de la chanson de l'alphabet",
      "Tableau blanc ou grande feuille",
      "Marqueurs pour tableau"
    ],
    instructions: [
      "Préparation (5 min) : Installez-vous dans un espace calme avec tous les matériaux. Colorez chaque lettre de l'alphabet avec une couleur différente pour faciliter la mémorisation.",
      "Écoute active (5 min) : Écoutez la chanson de l'alphabet 2-3 fois sans interruption. Concentrez-vous sur la mélodie et le rythme.",
      "Répétition guidée (5 min) : Chantez ensemble en pointant chaque lettre sur votre feuille. Faites des pauses entre chaque lettre pour bien articuler.",
      "Création de gestes (5 min) : Inventez un geste simple pour chaque lettre (ex: A = triangle avec les mains, B = deux doigts levés). Répétez en chantant avec les gestes."
    ],
    learningObjectives: [
      "Mémoriser l'ordre complet de l'alphabet anglais (A-Z)",
      "Prononcer correctement chaque lettre avec l'accent anglais",
      "Associer le son à la forme écrite de chaque lettre",
      "Développer la coordination entre chant et gestes",
      "Renforcer la mémoire auditive et visuelle"
    ],
    tips: [
      "Chantez lentement au début pour bien articuler chaque lettre",
      "Utilisez des couleurs différentes pour chaque groupe de 5 lettres",
      "Pratiquez les gestes devant un miroir pour vérifier la clarté",
      "Répétez l'activité 2-3 fois par jour pendant une semaine"
    ],
    assessment: [
      "L'élève peut-il réciter l'alphabet dans l'ordre sans aide ?",
      "La prononciation est-elle claire et compréhensible ?",
      "Les gestes sont-ils cohérents et mémorisés ?",
      "L'élève peut-il identifier une lettre quand on la prononce ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "eng-vocabulary-game",
    title: "Jeu de vocabulaire thématique",
    description: "Apprendre et mémoriser du vocabulaire anglais de base par thèmes avec des jeux interactifs et des associations visuelles",
    duration: "25 min",
    difficulty: "beginner",
    subject: "anglais",
    materials: [
      "Cartes de vocabulaire avec images (couleurs, animaux, famille, nourriture)",
      "Images imprimées en couleur",
      "Timer ou chronomètre",
      "Tableau blanc ou grande feuille",
      "Marqueurs colorés",
      "Sac en tissu pour cacher les cartes"
    ],
    instructions: [
      "Préparation (5 min) : Organisez les cartes par thème. Préparez le tableau avec les catégories. Testez le timer.",
      "Introduction du thème (5 min) : Présentez 5-6 mots d'un thème. Prononcez clairement chaque mot en montrant l'image. L'élève répète.",
      "Jeu d'association (10 min) : Mélangez les cartes. L'élève doit associer chaque mot à son image. Chronométrez pour ajouter du défi.",
      "Jeu de devinettes (5 min) : Cachez une image dans le sac. L'élève doit deviner le mot en anglais en posant des questions."
    ],
    learningObjectives: [
      "Acquérir un vocabulaire de base de 20-30 mots par thème",
      "Associer correctement mots anglais et images",
      "Pratiquer la prononciation avec l'accent anglais",
      "Développer la mémoire visuelle et auditive",
      "Renforcer la compréhension des catégories sémantiques"
    ],
    tips: [
      "Commencez par des thèmes familiers (couleurs, animaux domestiques)",
      "Utilisez des gestes pour renforcer la mémorisation",
      "Répétez chaque mot 3 fois avec des pauses",
      "Félicitez chaque bonne réponse pour motiver l'élève"
    ],
    assessment: [
      "L'élève peut-il identifier 80% des mots sans aide ?",
      "La prononciation est-elle compréhensible ?",
      "L'association mot-image est-elle rapide et précise ?",
      "L'élève peut-il utiliser les mots dans des phrases simples ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "eng-simple-conversation",
    title: "Conversation anglaise de base",
    description: "Développer la fluidité orale en pratiquant des conversations simples du quotidien avec des scripts guidés et des objets concrets",
    duration: "30 min",
    difficulty: "intermediate",
    subject: "anglais",
    materials: [
      "Script de conversation imprimé (questions-réponses)",
      "Objets du quotidien (livre, stylo, téléphone, clés)",
      "Enregistreur ou smartphone",
      "Tableau avec phrases modèles",
      "Cartes avec situations de conversation",
      "Timer pour les tours de parole"
    ],
    instructions: [
      "Préparation (5 min) : Lisez le script ensemble. Identifiez les mots difficiles. Préparez les objets nécessaires.",
      "Pratique guidée (10 min) : Lisez le script à haute voix en alternant les rôles. Concentrez-vous sur l'intonation et la prononciation.",
      "Conversation libre (10 min) : Utilisez les objets pour créer des situations réelles. Adaptez le script selon le contexte.",
      "Enregistrement et écoute (5 min) : Enregistrez une conversation complète. Écoutez ensemble pour identifier les points d'amélioration."
    ],
    learningObjectives: [
      "Construire des phrases simples et correctes grammaticalement",
      "Poser et répondre à des questions de base avec fluidité",
      "Améliorer la prononciation et l'intonation anglaise",
      "Développer la confiance en soi à l'oral",
      "Adapter le langage selon le contexte de la conversation"
    ],
    tips: [
      "Parlez lentement et clairement au début",
      "Utilisez des gestes pour renforcer le sens",
      "Répétez les phrases difficiles plusieurs fois",
      "Encouragez l'élève à improviser avec le vocabulaire connu"
    ],
    assessment: [
      "L'élève peut-il maintenir une conversation de 2-3 minutes ?",
      "Les phrases sont-elles grammaticalement correctes ?",
      "La prononciation est-elle claire et compréhensible ?",
      "L'élève peut-il adapter le langage au contexte ?"
    ],
    ageGroup: "9-11",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "eng-story-creation",
    title: "Création d'histoire en anglais",
    description: "Développer la créativité et les compétences d'écriture en créant des histoires complètes en anglais avec une structure narrative claire",
    duration: "45 min",
    difficulty: "advanced",
    subject: "anglais",
    materials: [
      "Papier ligné ou cahier d'écriture",
      "Stylos et crayons de couleur",
      "Dictionnaire anglais-français",
      "Images d'inspiration variées",
      "Fiche de planification d'histoire",
      "Liste de connecteurs logiques",
      "Grille d'évaluation de l'histoire"
    ],
    instructions: [
      "Préparation et inspiration (10 min) : Choisissez 3-4 images d'inspiration. Créez une liste de personnages et lieux possibles. Définissez le genre de l'histoire.",
      "Planification structurée (15 min) : Utilisez la fiche de planification pour organiser l'intrigue : introduction, développement, climax, résolution. Notez les mots-clés en anglais.",
      "Rédaction guidée (15 min) : Écrivez l'histoire en respectant la structure planifiée. Utilisez le vocabulaire acquis et le dictionnaire pour les mots manquants.",
      "Révision et illustration (5 min) : Relisez votre texte. Corrigez les erreurs. Ajoutez des illustrations pour enrichir l'histoire."
    ],
    learningObjectives: [
      "Utiliser activement le vocabulaire anglais acquis dans un contexte créatif",
      "Structurer un récit complet avec introduction, développement et conclusion",
      "Pratiquer l'écriture créative en respectant les règles de base",
      "Développer la capacité à planifier et organiser ses idées",
      "Enrichir le vocabulaire en utilisant le dictionnaire de manière autonome"
    ],
    tips: [
      "Commencez par des histoires simples avec 2-3 personnages maximum",
      "Utilisez des connecteurs logiques (then, after, finally) pour structurer",
      "Dessinez d'abord votre histoire avant de l'écrire",
      "Relisez à haute voix pour vérifier la fluidité"
    ],
    assessment: [
      "L'histoire a-t-elle une structure claire (début, milieu, fin) ?",
      "Le vocabulaire anglais est-il utilisé correctement ?",
      "L'histoire est-elle cohérente et logique ?",
      "L'élève peut-il expliquer son histoire en anglais ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "eng-debate-session",
    title: "Session de débat en anglais",
    description: "Développer les compétences d'argumentation et d'expression orale en participant à des débats structurés sur des sujets d'actualité",
    duration: "60 min",
    difficulty: "expert",
    subject: "anglais",
    materials: [
      "Sujet de débat avec contexte détaillé",
      "Arguments préparés pour et contre",
      "Timer ou chronomètre",
      "Fiche de préparation d'argument",
      "Liste de connecteurs logiques avancés",
      "Grille d'évaluation du débat",
      "Enregistreur pour analyse post-débat"
    ],
    instructions: [
      "Préparation et recherche (20 min) : Étudiez le sujet en profondeur. Préparez 3-4 arguments solides avec exemples. Anticipez les contre-arguments possibles.",
      "Structure de l'argument (15 min) : Organisez vos arguments selon la méthode PEEL (Point, Evidence, Explanation, Link). Préparez votre introduction et conclusion.",
      "Débat structuré (20 min) : Respectez le format : introduction (2 min), arguments principaux (3 min chacun), réponses aux contre-arguments (5 min), conclusion (2 min).",
      "Analyse et feedback (5 min) : Écoutez l'enregistrement. Identifiez les points forts et les axes d'amélioration. Notez le vocabulaire nouveau utilisé."
    ],
    learningObjectives: [
      "Exprimer des opinions complexes et nuancées en anglais avec précision",
      "Argumenter et contre-argumenter de manière logique et convaincante",
      "Maîtriser le vocabulaire académique et les expressions de débat",
      "Développer la pensée critique et l'analyse des arguments",
      "Améliorer la fluidité orale et la confiance en soi dans des situations complexes"
    ],
    tips: [
      "Utilisez des exemples concrets pour illustrer vos arguments",
      "Écoutez activement les arguments adverses pour y répondre efficacement",
      "Maintenez un ton respectueux même en désaccord",
      "Pratiquez votre intervention à haute voix avant le débat"
    ],
    assessment: [
      "L'argumentation est-elle logique et bien structurée ?",
      "Le vocabulaire académique est-il utilisé correctement ?",
      "L'élève peut-il répondre aux contre-arguments ?",
      "La présentation est-elle claire et convaincante ?"
    ],
    ageGroup: "15+",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },

  // ===== ACTIVITÉS ARABE =====
  {
    id: "ara-alphabet-practice",
    title: "Pratique de l'alphabet arabe",
    description: "Maîtriser l'écriture et la reconnaissance des lettres arabes avec des exercices progressifs et des modèles détaillés",
    duration: "25 min",
    difficulty: "beginner",
    subject: "arabe",
    materials: [
      "Cahier d'écriture arabe avec lignes guidées",
      "Stylo à pointe fine ou crayon HB",
      "Modèles de lettres avec flèches directionnelles",
      "Feuilles de pratique avec lettres pointillées",
      "Règle pour tracer les lignes de base",
      "Crayons de couleur pour différencier les groupes de lettres",
      "Fiches de révision avec images associées"
    ],
    instructions: [
      "Préparation et observation (5 min) : Installez-vous confortablement. Observez attentivement la forme de chaque lettre. Identifiez les éléments communs (points, boucles, lignes).",
      "Tracé guidé (10 min) : Suivez les flèches directionnelles pour tracer chaque lettre. Commencez par les lettres simples (أ، ب، ت). Concentrez-vous sur la proportion et l'équilibre.",
      "Pratique autonome (5 min) : Tracez chaque lettre 5 fois en respectant l'ordre et la direction. Vérifiez la régularité de votre écriture.",
      "Révision et consolidation (5 min) : Récitez l'alphabet en pointant chaque lettre. Identifiez les lettres qui nécessitent plus de pratique."
    ],
    learningObjectives: [
      "Reconnaître et identifier toutes les 28 lettres de l'alphabet arabe",
      "Maîtriser l'écriture manuscrite avec la bonne direction et proportion",
      "Comprendre les différentes formes des lettres selon leur position",
      "Développer la motricité fine et la coordination œil-main",
      "Mémoriser l'ordre de l'alphabet arabe"
    ],
    tips: [
      "Tenez votre stylo correctement pour un meilleur contrôle",
      "Tracez d'abord au crayon avant de repasser au stylo",
      "Pratiquez chaque lettre jusqu'à ce qu'elle soit parfaite",
      "Utilisez des couleurs pour mémoriser les groupes de lettres"
    ],
    assessment: [
      "L'élève peut-il identifier 90% des lettres sans aide ?",
      "L'écriture est-elle lisible et proportionnée ?",
      "La direction du tracé est-elle correcte ?",
      "L'élève peut-il réciter l'alphabet dans l'ordre ?"
    ],
    ageGroup: "6-8",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "ara-calligraphy-art",
    title: "Art de la calligraphie arabe",
    description: "Découvrir et pratiquer l'art traditionnel de la calligraphie arabe en créant des compositions artistiques avec des outils authentiques",
    duration: "40 min",
    difficulty: "intermediate",
    subject: "arabe",
    materials: [
      "Calame (plume de roseau) ou stylo calligraphique",
      "Encre noire traditionnelle ou encre d'art",
      "Papier spécial pour calligraphie (papier de riz ou bristol)",
      "Modèles de lettres calligraphiques",
      "Règle et compas pour tracer les lignes de base",
      "Palette pour mélanger l'encre",
      "Chiffons pour nettoyer les outils",
      "Support incliné pour une meilleure posture"
    ],
    instructions: [
      "Préparation des outils (10 min) : Préparez votre calame en taillant la pointe selon l'angle désiré. Mélangez l'encre à la bonne consistance. Testez sur un papier d'essai.",
      "Pratique des traits fondamentaux (15 min) : Tracez les traits de base : ligne horizontale, verticale, diagonale, courbe. Concentrez-vous sur la régularité et l'épaisseur.",
      "Copie de modèles (10 min) : Choisissez un modèle simple. Tracez d'abord au crayon les lignes de base. Repassez au calame en respectant les proportions.",
      "Création personnelle (5 min) : Créez une composition simple avec 2-3 lettres. Expérimentez avec l'espacement et l'équilibre visuel."
    ],
    learningObjectives: [
      "Maîtriser les techniques de base de la calligraphie arabe",
      "Apprécier l'esthétique et l'harmonie de l'écriture arabe",
      "Développer la patience, la précision et la concentration",
      "Comprendre l'importance de la posture et de la tenue des outils",
      "Créer des compositions calligraphiques équilibrées et harmonieuses"
    ],
    tips: [
      "Maintenez une posture droite et détendue",
      "Tenez le calame à 45 degrés pour un trait optimal",
      "Respirez calmement pendant l'exécution des traits",
      "Commencez par des modèles simples avant de progresser"
    ],
    assessment: [
      "Les traits sont-ils réguliers et proportionnés ?",
      "La composition est-elle équilibrée visuellement ?",
      "L'élève respecte-t-il les règles de la calligraphie ?",
      "L'œuvre finale montre-t-elle une progression technique ?"
    ],
    ageGroup: "9-11",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "ara-poetry-recitation",
    title: "Récitation de poésie arabe",
    description: "Découvrir la richesse de la poésie arabe classique en apprenant à réciter avec la bonne prononciation et le rythme approprié",
    duration: "45 min",
    difficulty: "advanced",
    subject: "arabe",
    materials: [
      "Recueil de poèmes arabes classiques",
      "Audio des récitations par des récitants professionnels",
      "Fiches avec transcription phonétique",
      "Dictionnaire arabe-français",
      "Enregistreur pour pratiquer",
      "Notes sur la métrique arabe",
      "Images illustrant le contexte historique",
      "Grille d'analyse poétique"
    ],
    instructions: [
      "Découverte et analyse (15 min) : Lisez le poème plusieurs fois. Identifiez le thème principal et les figures de style. Analysez la structure métrique (bayt, qafiya).",
      "Écoute et imitation (15 min) : Écoutez la récitation professionnelle 3-4 fois. Notez l'intonation, les pauses et le rythme. Imitez la prononciation.",
      "Pratique guidée (10 min) : Récitez le poème en respectant la métrique. Concentrez-vous sur la prononciation des lettres difficiles (ع، ح، خ).",
      "Mémorisation et performance (5 min) : Mémorisez le poème par sections. Récitez-le avec expression et émotion. Enregistrez-vous pour évaluer."
    ],
    learningObjectives: [
      "Améliorer la prononciation arabe avec une attention particulière aux lettres gutturales",
      "Comprendre et respecter la métrique arabe traditionnelle (arud)",
      "Apprécier la beauté et la richesse de la littérature arabe classique",
      "Développer la mémoire auditive et la capacité de récitation",
      "Analyser les figures de style et les techniques poétiques arabes"
    ],
    tips: [
      "Écoutez attentivement les sons gutturaux caractéristiques de l'arabe",
      "Pratiquez la respiration pour maintenir le rythme",
      "Utilisez des gestes pour renforcer l'expression",
      "Commencez par des poèmes courts avant de progresser vers des œuvres plus longues"
    ],
    assessment: [
      "La prononciation est-elle claire et fidèle à l'original ?",
      "Le rythme et la métrique sont-ils respectés ?",
      "L'élève peut-il expliquer le sens du poème ?",
      "La récitation montre-t-elle une compréhension émotionnelle ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "ara-literary-analysis",
    title: "Analyse littéraire de textes arabes classiques",
    description: "Développer une compréhension approfondie de la littérature arabe classique en analysant les techniques littéraires et le contexte historique",
    duration: "75 min",
    difficulty: "expert",
    subject: "arabe",
    materials: [
      "Textes arabes classiques (poésie, prose, hadiths)",
      "Dictionnaire arabe-français complet",
      "Notes et commentaires sur les textes",
      "Fiches d'analyse littéraire",
      "Ouvrages de référence sur la littérature arabe",
      "Carte du monde arabe médiéval",
      "Grille d'analyse des figures de style",
      "Carnet de notes pour observations personnelles"
    ],
    instructions: [
      "Lecture approfondie (20 min) : Lisez le texte plusieurs fois. Identifiez les mots difficiles et utilisez le dictionnaire. Notez vos premières impressions et questions.",
      "Analyse technique (25 min) : Identifiez les figures de style (métaphores, comparaisons, allitérations). Analysez la structure narrative et les techniques de composition.",
      "Contexte historique (20 min) : Recherchez le contexte historique et culturel. Comprenez l'époque, l'auteur et les circonstances de création. Reliez le texte à son époque.",
      "Synthèse et interprétation (10 min) : Rédigez une analyse personnelle. Formulez votre interprétation du texte. Identifiez les thèmes universels et leur pertinence actuelle."
    ],
    learningObjectives: [
      "Comprendre en profondeur la littérature arabe classique et ses spécificités",
      "Analyser les techniques littéraires et les procédés stylistiques arabes",
      "Apprécier la richesse culturelle et historique de la civilisation arabe",
      "Développer l'esprit critique et la capacité d'analyse littéraire",
      "Établir des liens entre la littérature classique et les enjeux contemporains"
    ],
    tips: [
      "Prenez le temps de comprendre chaque mot et expression",
      "Reliez le texte à vos connaissances historiques",
      "N'ayez pas peur de formuler des interprétations personnelles",
      "Comparez avec d'autres textes de la même époque"
    ],
    assessment: [
      "L'analyse technique est-elle complète et précise ?",
      "Le contexte historique est-il bien intégré ?",
      "L'interprétation personnelle est-elle argumentée ?",
      "L'élève peut-il expliquer la pertinence actuelle du texte ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS MATHÉMATIQUES =====
  {
    id: "math-counting-games",
    title: "Jeux de comptage et numération",
    description: "Développer le sens du nombre et la maîtrise de la comptine numérique à travers des jeux interactifs et des manipulations concrètes",
    duration: "20 min",
    difficulty: "beginner",
    subject: "mathematiques",
    materials: [
      "Objets variés à compter (jetons, cubes, boutons, perles)",
      "Dés à 6 et 10 faces",
      "Cartes numérotées de 1 à 20",
      "Tableau blanc ou grande feuille",
      "Marqueurs colorés",
      "Bacs de tri et de classement",
      "Fiches avec collections d'objets à compter",
      "Timer pour les défis chronométrés"
    ],
    instructions: [
      "Préparation et exploration (5 min) : Organisez les objets par catégories. Identifiez les différentes formes et couleurs. Préparez l'espace de jeu.",
      "Jeux de comptage guidé (8 min) : Comptez ensemble les objets de chaque catégorie. Utilisez le pointage pour associer le mot-nombre à l'objet. Créez des collections de 1 à 10.",
      "Jeux avec dés et cartes (5 min) : Lancez les dés et comptez les points. Associez le nombre obtenu à la quantité d'objets correspondante. Jouez avec les cartes numérotées.",
      "Création de séquences (2 min) : Créez des séquences numériques croissantes et décroissantes. Identifiez les nombres manquants dans une suite."
    ],
    learningObjectives: [
      "Maîtriser la comptine numérique de 1 à 20 avec fluidité et précision",
      "Associer correctement le mot-nombre à la quantité d'objets correspondante",
      "Développer le sens du nombre et la compréhension de la cardinalité",
      "Reconnaître et écrire les chiffres de 1 à 20",
      "Comprendre les relations d'ordre (plus que, moins que, égal à)"
    ],
    tips: [
      "Utilisez des objets de couleurs différentes pour faciliter le comptage",
      "Encouragez l'enfant à pointer chaque objet en comptant",
      "Félicitez chaque bonne réponse pour renforcer la confiance",
      "Variez les types d'objets pour maintenir l'intérêt"
    ],
    assessment: [
      "L'élève peut-il compter jusqu'à 20 sans erreur ?",
      "L'association nombre-quantité est-elle correcte ?",
      "L'élève peut-il identifier le nombre d'objets d'un coup d'œil ?",
      "La reconnaissance des chiffres écrits est-elle acquise ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "math-geometry-exploration",
    title: "Exploration géométrique et construction",
    description: "Découvrir les propriétés des formes géométriques à travers l'observation, la mesure et la construction avec des outils appropriés",
    duration: "30 min",
    difficulty: "intermediate",
    subject: "mathematiques",
    materials: [
      "Formes géométriques en plastique ou carton (carré, rectangle, triangle, cercle)",
      "Règle graduée et équerre",
      "Compass et rapporteur",
      "Papier quadrillé et papier blanc",
      "Crayons et stylos de différentes couleurs",
      "Fiches avec exercices de construction",
      "Objets du quotidien pour identifier les formes",
      "Grille d'évaluation des constructions"
    ],
    instructions: [
      "Découverte des formes (8 min) : Identifiez les formes géométriques dans votre environnement. Classez-les par famille (triangles, quadrilatères, cercles). Notez leurs caractéristiques.",
      "Mesure et analyse (12 min) : Mesurez les côtés et angles des formes. Comparez les mesures pour identifier les propriétés (côtés égaux, angles droits, symétrie).",
      "Construction guidée (8 min) : Construisez des formes géométriques avec les outils appropriés. Respectez les mesures et angles donnés. Vérifiez la précision.",
      "Création de motifs (2 min) : Créez des motifs géométriques en répétant et combinant les formes. Expérimentez avec la symétrie et la rotation."
    ],
    learningObjectives: [
      "Reconnaître et classer les formes géométriques de base et leurs propriétés",
      "Mesurer avec précision des longueurs et angles en utilisant les outils appropriés",
      "Construire des figures géométriques en respectant les contraintes données",
      "Comprendre les concepts de symétrie, de périmètre et d'aire",
      "Développer la vision spatiale et la logique géométrique"
    ],
    tips: [
      "Vérifiez toujours vos mesures avant de tracer définitivement",
      "Utilisez l'équerre pour tracer des angles droits précis",
      "Commencez par des constructions simples avant de progresser",
      "Vérifiez la symétrie en pliant le papier"
    ],
    assessment: [
      "Les formes sont-elles correctement identifiées et classées ?",
      "Les mesures sont-elles précises et cohérentes ?",
      "Les constructions respectent-elles les contraintes données ?",
      "L'élève peut-il expliquer les propriétés des formes créées ?"
    ],
    ageGroup: "9-11",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "math-problem-solving",
    title: "Résolution de problèmes mathématiques",
    description: "Développer la capacité à analyser, comprendre et résoudre des problèmes mathématiques complexes en utilisant des stratégies appropriées",
    duration: "40 min",
    difficulty: "advanced",
    subject: "mathematiques",
    materials: [
      "Problèmes écrits variés (arithmétique, géométrie, algèbre)",
      "Calculatrice scientifique",
      "Papier brouillon et papier de réponse",
      "Fiches de stratégies de résolution",
      "Dictionnaire mathématique",
      "Grille d'analyse des problèmes",
      "Exemples de solutions détaillées",
      "Timer pour gérer le temps de résolution"
    ],
    instructions: [
      "Lecture et analyse (10 min) : Lisez l'énoncé plusieurs fois. Identifiez les informations données et les questions posées. Soulignez les mots-clés mathématiques.",
      "Planification de la résolution (15 min) : Choisissez la méthode appropriée (schéma, équation, calcul direct). Organisez vos étapes de résolution. Estimez le temps nécessaire.",
      "Exécution et calculs (10 min) : Effectuez les calculs étape par étape. Vérifiez chaque calcul intermédiaire. Utilisez la calculatrice pour les opérations complexes.",
      "Vérification et conclusion (5 min) : Vérifiez la cohérence de votre réponse. Relisez l'énoncé pour confirmer que vous avez répondu à la question. Présentez clairement votre solution."
    ],
    learningObjectives: [
      "Comprendre et analyser des énoncés de problèmes mathématiques complexes",
      "Choisir et appliquer les bonnes opérations et méthodes de résolution",
      "Vérifier la cohérence et la pertinence des résultats obtenus",
      "Développer la logique mathématique et le raisonnement déductif",
      "Organiser et présenter clairement les étapes de résolution"
    ],
    tips: [
      "Dessinez un schéma pour visualiser le problème",
      "Vérifiez vos unités de mesure",
      "Relisez l'énoncé après avoir trouvé la réponse",
      "Utilisez des valeurs d'essai pour vérifier votre logique"
    ],
    assessment: [
      "L'analyse du problème est-elle complète et précise ?",
      "La méthode de résolution choisie est-elle appropriée ?",
      "Les calculs sont-ils corrects et vérifiés ?",
      "La réponse finale est-elle cohérente avec l'énoncé ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "math-proof-construction",
    title: "Construction de preuves mathématiques",
    description: "Développer la capacité à construire des démonstrations mathématiques rigoureuses en utilisant la logique formelle et les théorèmes appropriés",
    duration: "60 min",
    difficulty: "expert",
    subject: "mathematiques",
    materials: [
      "Énoncés à démontrer variés (géométrie, algèbre, analyse)",
      "Recueil de théorèmes et propriétés",
      "Papier brouillon et papier de rédaction",
      "Fiches de méthodes de démonstration",
      "Exemples de preuves complètes",
      "Grille d'évaluation de la rigueur logique",
      "Dictionnaire des termes mathématiques",
      "Timer pour gérer le temps de réflexion"
    ],
    instructions: [
      "Analyse de l'énoncé (15 min) : Lisez attentivement l'énoncé à démontrer. Identifiez les hypothèses et la conclusion. Notez les définitions et propriétés utiles.",
      "Recherche de théorèmes (20 min) : Identifiez les théorèmes et propriétés qui pourraient être utiles. Organisez vos connaissances en un plan logique. Préparez les étapes de votre démonstration.",
      "Construction de la preuve (20 min) : Construisez votre démonstration étape par étape. Justifiez chaque étape par un théorème ou une propriété. Vérifiez la cohérence logique.",
      "Vérification et rédaction (5 min) : Vérifiez que votre preuve est complète et rigoureuse. Rédigez clairement votre démonstration finale. Vérifiez qu'elle répond à l'énoncé initial."
    ],
    learningObjectives: [
      "Construire des raisonnements logiques rigoureux et cohérents",
      "Utiliser les théorèmes et propriétés appropriés dans les démonstrations",
      "Rédiger des preuves mathématiques claires et structurées",
      "Développer la pensée logique et la rigueur mathématique",
      "Analyser et critiquer des démonstrations existantes"
    ],
    tips: [
      "Commencez par des cas simples avant de généraliser",
      "Vérifiez chaque étape de votre raisonnement",
      "Utilisez des schémas pour visualiser les concepts",
      "Relisez votre preuve comme si vous la découvriez"
    ],
    assessment: [
      "La démonstration est-elle logiquement cohérente ?",
      "Tous les théorèmes utilisés sont-ils correctement appliqués ?",
      "La preuve est-elle complète et rigoureuse ?",
      "La rédaction est-elle claire et structurée ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS FRANÇAIS =====
  {
    id: "fra-reading-comprehension",
    title: "Compréhension de lecture guidée",
    description: "Développer la compréhension de lecture à travers des textes adaptés avec un accompagnement personnalisé et des activités d'exploration",
    duration: "25 min",
    difficulty: "beginner",
    subject: "francais",
    materials: [
      "Livre adapté au niveau de l'élève",
      "Crayons de couleur et surligneurs",
      "Fiches de questions de compréhension",
      "Dictionnaire illustré pour enfants",
      "Marqueurs pour tableau ou feuille",
      "Images illustrant le texte",
      "Fiches de vocabulaire",
      "Grille d'évaluation de la compréhension"
    ],
    instructions: [
      "Préparation et découverte (5 min) : Feuilletez le livre ensemble. Observez les illustrations. Prédisez le contenu à partir du titre et des images. Préparez l'espace de lecture.",
      "Lecture guidée (10 min) : Lisez le texte à voix haute en alternant les paragraphes. Marquez les pauses aux points et virgules. Expliquez les mots difficiles au fur et à mesure.",
      "Exploration du vocabulaire (5 min) : Identifiez ensemble les mots nouveaux ou difficiles. Utilisez le dictionnaire illustré. Créez des associations avec des images ou des gestes.",
      "Questions de compréhension (5 min) : Répondez aux questions simples sur l'histoire. Discutez des personnages et des événements. Reliez l'histoire à l'expérience personnelle."
    ],
    learningObjectives: [
      "Améliorer la fluidité de lecture avec une prononciation claire et une intonation appropriée",
      "Comprendre le sens global du texte et identifier les informations principales",
      "Enrichir le vocabulaire en découvrant de nouveaux mots et expressions",
      "Développer la capacité de prédiction et d'inférence",
      "Établir des liens entre le texte lu et l'expérience personnelle"
    ],
    tips: [
      "Lisez avec expression pour maintenir l'intérêt",
      "Posez des questions pendant la lecture pour vérifier la compréhension",
      "Encouragez l'enfant à faire des prédictions sur la suite",
      "Reliez le vocabulaire nouveau à des situations familières"
    ],
    assessment: [
      "L'élève peut-il lire le texte avec fluidité ?",
      "La compréhension des informations principales est-elle correcte ?",
      "Le vocabulaire nouveau est-il mémorisé et utilisé ?",
      "L'élève peut-il faire des liens avec son expérience ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "fra-creative-writing",
    title: "Écriture créative et narrative",
    description: "Développer la créativité et les compétences d'écriture en créant des histoires et des poèmes personnels avec une structure narrative claire",
    duration: "35 min",
    difficulty: "intermediate",
    subject: "francais",
    materials: [
      "Cahier d'écriture ou feuilles lignées",
      "Stylos et crayons de couleur",
      "Images d'inspiration variées",
      "Fiches de planification d'histoire",
      "Liste de mots de liaison et connecteurs",
      "Dictionnaire des synonymes",
      "Grille d'évaluation de l'écrit",
      "Timer pour gérer le temps d'écriture"
    ],
    instructions: [
      "Inspiration et choix du thème (8 min) : Choisissez un thème ou un personnage qui vous inspire. Observez les images d'inspiration. Notez vos idées principales et vos émotions.",
      "Planification structurée (12 min) : Utilisez la fiche de planification pour organiser votre histoire : personnages, décor, intrigue, début, développement, fin. Créez un plan détaillé.",
      "Rédaction créative (10 min) : Écrivez votre histoire en respectant le plan établi. Utilisez des descriptions vivantes et des mots de liaison. Développez vos personnages.",
      "Révision et amélioration (5 min) : Relisez votre texte. Corrigez les erreurs d'orthographe et de grammaire. Améliorez les descriptions et la fluidité du récit."
    ],
    learningObjectives: [
      "Développer l'imagination créative et la capacité d'invention narrative",
      "Améliorer l'expression écrite avec un vocabulaire riche et varié",
      "Structurer un récit complet avec introduction, développement et conclusion",
      "Utiliser les techniques de description et de caractérisation des personnages",
      "Développer la conscience linguistique et l'auto-correction"
    ],
    tips: [
      "Commencez par des histoires courtes avant de progresser",
      "Utilisez vos cinq sens pour enrichir les descriptions",
      "Laissez libre cours à votre imagination sans vous censurer",
      "Relisez à haute voix pour vérifier la fluidité"
    ],
    assessment: [
      "L'histoire a-t-elle une structure claire et cohérente ?",
      "Les descriptions sont-elles vivantes et engageantes ?",
      "L'orthographe et la grammaire sont-elles correctes ?",
      "L'élève peut-il expliquer ses choix narratifs ?"
    ],
    ageGroup: "9-11",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "fra-grammar-analysis",
    title: "Analyse grammaticale approfondie",
    description: "Développer une compréhension approfondie de la structure grammaticale française à travers l'analyse de textes variés",
    duration: "40 min",
    difficulty: "advanced",
    subject: "francais",
    materials: [
      "Textes variés (littéraires, journalistiques, informatifs)",
      "Manuel de grammaire française complet",
      "Crayons de couleur pour le codage",
      "Fiches d'analyse grammaticale",
      "Grille d'identification des classes de mots",
      "Dictionnaire grammatical",
      "Exemples de phrases analysées",
      "Timer pour gérer le temps d'analyse"
    ],
    instructions: [
      "Lecture et préparation (10 min) : Lisez le texte attentivement. Identifiez les phrases complexes. Préparez vos outils d'analyse et votre espace de travail.",
      "Identification des classes de mots (15 min) : Analysez chaque phrase mot par mot. Identifiez la classe grammaticale de chaque mot (nom, verbe, adjectif, etc.). Utilisez le code couleur pour faciliter la visualisation.",
      "Analyse de la structure (10 min) : Repérez les fonctions grammaticales (sujet, verbe, complément). Identifiez les propositions principales et subordonnées. Analysez la complexité syntaxique.",
      "Interprétation stylistique (5 min) : Expliquez les choix grammaticaux de l'auteur. Reliez la structure grammaticale aux effets stylistiques et au sens du texte."
    ],
    learningObjectives: [
      "Maîtriser la grammaire française dans sa complexité et ses nuances",
      "Analyser la structure grammaticale des textes avec précision",
      "Repérer et identifier les fonctions grammaticales dans des phrases complexes",
      "Comprendre les effets stylistiques produits par les choix grammaticaux",
      "Développer la conscience linguistique et l'analyse critique des textes"
    ],
    tips: [
      "Commencez par des phrases simples avant d'analyser des structures complexes",
      "Utilisez des couleurs différentes pour chaque classe de mots",
      "Vérifiez vos analyses avec le manuel de grammaire",
      "Reliez toujours la grammaire au sens du texte"
    ],
    assessment: [
      "L'identification des classes de mots est-elle correcte ?",
      "L'analyse de la structure est-elle précise et complète ?",
      "Les fonctions grammaticales sont-elles bien repérées ?",
      "L'élève peut-il expliquer les effets stylistiques ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "fra-literary-criticism",
    title: "Critique littéraire et analyse d'œuvres",
    description: "Développer l'esprit critique et les compétences d'analyse littéraire en étudiant des œuvres variées et en formulant des jugements argumentés",
    duration: "60 min",
    difficulty: "expert",
    subject: "francais",
    materials: [
      "Œuvre littéraire complète ou extraits significatifs",
      "Critiques existantes et analyses universitaires",
      "Carnet de notes et stylos",
      "Fiches d'analyse littéraire",
      "Dictionnaire des termes littéraires",
      "Grille d'évaluation critique",
      "Exemples de critiques modèles",
      "Timer pour gérer le temps d'analyse"
    ],
    instructions: [
      "Lecture attentive et première approche (20 min) : Lisez l'œuvre attentivement en prenant des notes. Identifiez vos premières impressions et questions. Marquez les passages importants.",
      "Analyse thématique et stylistique (25 min) : Identifiez les thèmes principaux et secondaires. Analysez le style de l'auteur, ses techniques narratives et ses choix esthétiques. Notez les procédés littéraires utilisés.",
      "Recherche et confrontation (10 min) : Consultez les critiques existantes pour confronter vos analyses. Identifiez les points de convergence et de divergence. Enrichissez votre compréhension.",
      "Rédaction de la critique personnelle (5 min) : Rédigez votre critique en structurant vos arguments. Exprimez un jugement personnel argumenté. Justifiez vos appréciations par des exemples précis."
    ],
    learningObjectives: [
      "Développer l'esprit critique et la capacité d'analyse littéraire approfondie",
      "Analyser les techniques littéraires et les procédés stylistiques avec précision",
      "Exprimer un jugement argumenté et personnel sur les œuvres étudiées",
      "Confronter différentes approches critiques et enrichir sa compréhension",
      "Développer la sensibilité esthétique et la culture littéraire"
    ],
    tips: [
      "Prenez le temps de bien comprendre l'œuvre avant de la critiquer",
      "Appuyez toujours vos jugements sur des exemples précis du texte",
      "N'ayez pas peur d'exprimer des opinions personnelles argumentées",
      "Reliez l'œuvre à son contexte historique et culturel"
    ],
    assessment: [
      "L'analyse thématique et stylistique est-elle complète ?",
      "Les techniques littéraires sont-elles bien identifiées ?",
      "La critique personnelle est-elle argumentée et justifiée ?",
      "L'élève peut-il confronter différents points de vue ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS SCIENCES =====
  {
    id: "sci-nature-observation",
    title: "Exploration et observation de la nature",
    description: "Développer le sens de l'observation et la curiosité scientifique en explorant l'environnement naturel et en documentant les découvertes",
    duration: "30 min",
    difficulty: "beginner",
    subject: "sciences",
    materials: [
      "Loupe de poche (grossissement 5x-10x)",
      "Carnet d'observation avec pages lignées",
      "Crayons de couleur et stylos",
      "Appareil photo ou smartphone",
      "Fiches d'identification des espèces",
      "Règle pour mesurer les objets",
      "Sac en tissu pour collecter des échantillons",
      "Chapeau et protection solaire"
    ],
    instructions: [
      "Préparation et choix du site (8 min) : Choisissez un endroit naturel à explorer (jardin, parc, forêt). Préparez votre matériel d'observation. Identifiez les zones d'intérêt.",
      "Exploration guidée (12 min) : Utilisez la loupe pour observer les détails des plantes, insectes ou roches. Prenez des photos des éléments intéressants. Mesurez la taille des objets observés.",
      "Documentation détaillée (8 min) : Dessinez ce que vous observez dans votre carnet. Notez la date, l'heure et les conditions météo. Décrivez les couleurs, formes et textures.",
      "Collecte et analyse (2 min) : Collectez quelques échantillons (feuilles, cailloux) pour étude ultérieure. Organisez vos observations par catégorie."
    ],
    learningObjectives: [
      "Développer l'observation attentive et la curiosité scientifique",
      "Documenter méthodiquement des découvertes naturelles",
      "Apprécier la biodiversité et la richesse de l'environnement",
      "Utiliser des outils d'observation appropriés (loupe, appareil photo)",
      "Organiser et classer les informations collectées"
    ],
    tips: [
      "Prenez votre temps pour observer chaque détail",
      "Utilisez tous vos sens (vue, toucher, odorat)",
      "Dessinez ce que vous voyez, pas ce que vous pensez voir",
      "Respectez la nature et ne prélevez que ce qui est nécessaire"
    ],
    assessment: [
      "Les observations sont-elles détaillées et précises ?",
      "La documentation est-elle organisée et complète ?",
      "L'élève utilise-t-il correctement les outils d'observation ?",
      "L'élève montre-t-il de la curiosité et de l'émerveillement ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "sci-simple-experiments",
    title: "Expériences scientifiques guidées",
    description: "Développer la démarche scientifique à travers la conduite d'expériences simples et l'observation méthodique des phénomènes",
    duration: "35 min",
    difficulty: "intermediate",
    subject: "sciences",
    materials: [
      "Matériaux d'expérience spécifiques selon le protocole",
      "Protocole expérimental détaillé avec schémas",
      "Carnet de laboratoire avec grilles d'observation",
      "Équipements de sécurité (gants, lunettes si nécessaire)",
      "Instruments de mesure (thermomètre, balance, chronomètre)",
      "Fiches de résultats et graphiques",
      "Matériel de nettoyage et rangement",
      "Fiches de sécurité et consignes"
    ],
    instructions: [
      "Lecture et compréhension du protocole (8 min) : Lisez attentivement le protocole expérimental. Identifiez les objectifs et les étapes. Vérifiez que vous avez tout le matériel nécessaire.",
      "Préparation et sécurité (10 min) : Préparez votre espace de travail. Organisez le matériel selon l'ordre d'utilisation. Vérifiez les consignes de sécurité. Préparez vos outils de mesure.",
      "Conduite de l'expérience (12 min) : Suivez le protocole étape par étape. Mesurez et notez chaque observation. Respectez les temps et les quantités indiqués. Soyez attentif aux changements.",
      "Documentation et analyse (5 min) : Notez vos observations détaillées dans le carnet. Dessinez ou photographiez les résultats. Formulez des hypothèses sur les phénomènes observés."
    ],
    learningObjectives: [
      "Suivre rigoureusement un protocole expérimental étape par étape",
      "Observer méthodiquement des phénomènes scientifiques avec précision",
      "Formuler des hypothèses basées sur les observations réalisées",
      "Utiliser correctement les instruments de mesure et les outils scientifiques",
      "Développer la rigueur et la méthode dans l'approche expérimentale"
    ],
    tips: [
      "Lisez le protocole plusieurs fois avant de commencer",
      "Notez tout, même ce qui semble évident",
      "Respectez scrupuleusement les consignes de sécurité",
      "Prenez le temps d'observer chaque étape"
    ],
    assessment: [
      "Le protocole est-il suivi correctement ?",
      "Les observations sont-elles détaillées et précises ?",
      "L'élève formule-t-il des hypothèses pertinentes ?",
      "La sécurité est-elle respectée à chaque étape ?"
    ],
    ageGroup: "9-11",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "sci-research-project",
    title: "Projet de recherche scientifique complet",
    description: "Développer les compétences de recherche scientifique en conduisant un projet complet de la formulation de la question à la présentation des résultats",
    duration: "75 min",
    difficulty: "advanced",
    subject: "sciences",
    materials: [
      "Question de recherche claire et précise",
      "Sources d'information variées (livres, articles, sites web fiables)",
      "Méthodes de recherche et d'analyse appropriées",
      "Carnet de recherche avec grilles d'analyse",
      "Matériel de documentation (ordinateur, imprimante)",
      "Fiches de méthodologie de recherche",
      "Grille d'évaluation des sources",
      "Matériel de présentation (poster, diaporama)"
    ],
    instructions: [
      "Formulation et cadrage (15 min) : Formulez votre question de recherche de manière claire et précise. Définissez le champ d'étude et les limites de votre projet. Identifiez les objectifs spécifiques.",
      "Recherche documentaire (25 min) : Recherchez des informations dans des sources variées et fiables. Évaluez la qualité et la pertinence de chaque source. Organisez vos notes de manière structurée.",
      "Conception de la méthodologie (20 min) : Concevez votre approche méthodologique. Choisissez les méthodes d'analyse appropriées. Préparez vos outils de collecte et d'analyse de données.",
      "Analyse et présentation (15 min) : Analysez vos données et vos résultats. Organisez vos conclusions. Préparez une présentation claire et structurée de vos résultats."
    ],
    learningObjectives: [
      "Conduire une recherche scientifique complète et méthodique",
      "Analyser des données et des informations avec rigueur",
      "Présenter des résultats scientifiques de manière claire et structurée",
      "Évaluer la qualité et la fiabilité des sources d'information",
      "Développer la pensée critique et la méthode scientifique"
    ],
    tips: [
      "Commencez par une question simple et précise",
      "Vérifiez toujours la fiabilité de vos sources",
      "Prenez des notes organisées dès le début",
      "Présentez vos résultats de manière visuelle"
    ],
    assessment: [
      "La question de recherche est-elle claire et précise ?",
      "Les sources utilisées sont-elles fiables et variées ?",
      "La méthodologie est-elle appropriée et rigoureuse ?",
      "La présentation des résultats est-elle claire et structurée ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "sci-scientific-paper",
    title: "Rédaction d'article scientifique professionnel",
    description: "Maîtriser la rédaction scientifique en créant un article structuré selon les standards académiques internationaux",
    duration: "120 min",
    difficulty: "expert",
    subject: "sciences",
    materials: [
      "Résultats de recherche complets et analysés",
      "Modèles d'articles scientifiques de référence",
      "Logiciel de traitement de texte et de graphiques",
      "Guide de rédaction scientifique",
      "Fiches de structure d'article (résumé, introduction, méthodes, résultats, discussion)",
      "Base de données de références bibliographiques",
      "Grille d'évaluation de la qualité scientifique",
      "Matériel de relecture et correction"
    ],
    instructions: [
      "Structuration et planification (25 min) : Analysez les modèles d'articles de référence. Structurez votre article selon le format standard (résumé, introduction, méthodes, résultats, discussion, conclusion, références). Créez un plan détaillé.",
      "Rédaction des sections principales (60 min) : Rédigez chaque section en respectant les conventions scientifiques. Utilisez un langage précis et objectif. Intégrez vos résultats avec des graphiques et tableaux appropriés.",
      "Citations et références (20 min) : Citez correctement toutes vos sources selon le format requis. Vérifiez l'exactitude des références bibliographiques. Créez une bibliographie complète et organisée.",
      "Relecture et finalisation (15 min) : Relisez votre article pour la cohérence et la clarté. Vérifiez la grammaire et l'orthographe. Demandez un avis extérieur si possible. Finalisez la mise en forme."
    ],
    learningObjectives: [
      "Structurer un article scientifique selon les standards internationaux",
      "Rédiger de manière académique avec précision et objectivité",
      "Citer correctement les sources et créer une bibliographie rigoureuse",
      "Présenter des résultats scientifiques de manière claire et convaincante",
      "Maîtriser les conventions de la communication scientifique"
    ],
    tips: [
      "Commencez par la section méthodes, plus facile à rédiger",
      "Utilisez des phrases courtes et directes",
      "Vérifiez toujours l'exactitude de vos citations",
      "Demandez à un collègue de relire votre article"
    ],
    assessment: [
      "La structure de l'article respecte-t-elle les standards ?",
      "Le langage est-il académique et précis ?",
      "Les citations et références sont-elles correctes ?",
      "L'article est-il clair et convaincant ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS INFORMATIQUE =====
  {
    id: "info-basic-programming",
    title: "Programmation de base et premiers pas en code",
    description: "Découvrir les concepts fondamentaux de la programmation à travers des exercices pratiques et des projets simples",
    duration: "25 min",
    difficulty: "beginner",
    subject: "informatique",
    materials: [
      "Ordinateur avec accès internet",
      "Logiciel de programmation adapté (Scratch, Python, ou éditeur en ligne)",
      "Tutoriel interactif et progressif",
      "Fiches de concepts de programmation",
      "Exemples de code simples",
      "Grille d'évaluation des programmes",
      "Matériel de prise de notes",
      "Fichiers de sauvegarde pour les projets"
    ],
    instructions: [
      "Installation et découverte (8 min) : Installez le logiciel de programmation. Explorez l'interface et les outils disponibles. Familiarisez-vous avec l'environnement de développement.",
      "Suivi du tutoriel guidé (10 min) : Suivez le tutoriel pas à pas en écoutant attentivement les explications. Reproduisez chaque exemple. Posez des questions si nécessaire.",
      "Premier programme personnel (5 min) : Écrivez votre premier programme simple en appliquant les concepts appris. Testez votre code et corrigez les erreurs qui apparaissent.",
      "Modification et personnalisation (2 min) : Modifiez votre programme pour ajouter des fonctionnalités personnelles. Expérimentez avec les paramètres et les variables."
    ],
    learningObjectives: [
      "Comprendre les concepts de base de la programmation (variables, boucles, conditions)",
      "Écrire du code simple et fonctionnel dans un langage approprié",
      "Déboguer des programmes en identifiant et corrigeant les erreurs",
      "Développer la logique algorithmique et la pensée computationnelle",
      "Gagner en confiance dans l'utilisation des outils de programmation"
    ],
    tips: [
      "Commencez par des programmes très simples",
      "Testez votre code à chaque étape",
      "N'ayez pas peur de faire des erreurs, c'est normal",
      "Sauvegardez régulièrement votre travail"
    ],
    assessment: [
      "L'élève comprend-il les concepts de base expliqués ?",
      "Le premier programme fonctionne-t-il correctement ?",
      "L'élève peut-il identifier et corriger des erreurs simples ?",
      "Le programme modifié montre-t-il une compréhension des concepts ?"
    ],
    ageGroup: "9-11",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "info-game-development",
    title: "Développement de jeux vidéo simples",
    description: "Créer un jeu vidéo complet en intégrant la conception, la programmation et les éléments graphiques dans un projet cohérent",
    duration: "50 min",
    difficulty: "intermediate",
    subject: "informatique",
    materials: [
      "Moteur de jeu adapté (Unity, Godot, ou plateforme en ligne)",
      "Assets graphiques libres de droits ou créés personnellement",
      "Tutoriels de développement de jeux",
      "Fiches de conception de jeu (mécaniques, règles, objectifs)",
      "Logiciel de création graphique simple",
      "Grille d'évaluation du jeu",
      "Matériel de prise de notes et de planification",
      "Fichiers de sauvegarde et de versioning"
    ],
    instructions: [
      "Conception et planification (15 min) : Concevez votre jeu en définissant les mécaniques, les règles et les objectifs. Créez un storyboard ou un diagramme de votre jeu. Planifiez les étapes de développement.",
      "Création des éléments graphiques (15 min) : Créez ou adaptez les éléments graphiques nécessaires (personnages, décors, objets). Utilisez des outils simples de création graphique. Organisez vos assets dans des dossiers.",
      "Programmation de la logique (15 min) : Programmez la logique de base de votre jeu (mouvement, collisions, score). Intégrez les éléments graphiques dans votre code. Testez chaque fonctionnalité au fur et à mesure.",
      "Test et amélioration (5 min) : Testez votre jeu en identifiant les bugs et les problèmes d'ergonomie. Améliorez le gameplay en ajustant les paramètres. Documentez les améliorations apportées."
    ],
    learningObjectives: [
      "Concevoir un projet de jeu vidéo complet avec une vision claire",
      "Intégrer différents éléments (graphiques, sonores, programmation) de manière cohérente",
      "Tester et itérer sur un projet pour améliorer la qualité",
      "Développer la créativité et la logique de conception de jeux",
      "Maîtriser les outils de développement de jeux de base"
    ],
    tips: [
      "Commencez par un jeu très simple avant de complexifier",
      "Testez votre jeu à chaque étape de développement",
      "N'ayez pas peur de simplifier si c'est trop complexe",
      "Documentez vos choix de conception"
    ],
    assessment: [
      "Le jeu est-il fonctionnel et jouable ?",
      "La conception est-elle cohérente et engageante ?",
      "Les différents éléments sont-ils bien intégrés ?",
      "L'élève peut-il expliquer les choix de conception ?"
    ],
    ageGroup: "12-14",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "info-web-development",
    title: "Développement web et création de sites",
    description: "Maîtriser les technologies web de base en créant un site web complet avec HTML, CSS et des fonctionnalités interactives",
    duration: "75 min",
    difficulty: "advanced",
    subject: "informatique",
    materials: [
      "Éditeur de code (VS Code, Sublime Text, ou éditeur en ligne)",
      "Tutoriels HTML/CSS détaillés et progressifs",
      "Références et documentation des langages web",
      "Fiches de référence des balises HTML et propriétés CSS",
      "Images et contenus pour le site",
      "Grille d'évaluation du site web",
      "Matériel de planification et de design",
      "Fichiers de sauvegarde et de versioning"
    ],
    instructions: [
      "Planification et conception (20 min) : Planifiez votre site en créant un wireframe ou un schéma. Définissez les pages, la navigation et l'organisation du contenu. Préparez les éléments graphiques et textuels.",
      "Création de la structure HTML (25 min) : Créez la structure HTML en respectant la sémantique et l'accessibilité. Utilisez les bonnes balises pour organiser le contenu. Créez une navigation claire et logique.",
      "Ajout du style CSS (25 min) : Ajoutez le style CSS pour rendre votre site attrayant et responsive. Utilisez les propriétés de mise en page, de couleur et de typographie. Testez l'apparence sur différentes tailles d'écran.",
      "Intégration de l'interactivité (5 min) : Intégrez des fonctionnalités JavaScript simples pour améliorer l'expérience utilisateur. Testez toutes les fonctionnalités et corrigez les problèmes."
    ],
    learningObjectives: [
      "Maîtriser les technologies web fondamentales (HTML, CSS, JavaScript)",
      "Créer des interfaces utilisateur modernes et responsives",
      "Intégrer différents composants et fonctionnalités de manière cohérente",
      "Développer des compétences de design web et d'expérience utilisateur",
      "Maîtriser les outils de développement web et de débogage"
    ],
    tips: [
      "Commencez par une structure HTML simple avant d'ajouter le style",
      "Utilisez des commentaires pour organiser votre code",
      "Testez régulièrement dans différents navigateurs",
      "Respectez les standards web et l'accessibilité"
    ],
    assessment: [
      "Le site web est-il fonctionnel et accessible ?",
      "Le code HTML respecte-t-il les bonnes pratiques ?",
      "Le design CSS est-il attrayant et responsive ?",
      "L'élève peut-il expliquer la structure de son code ?"
    ],
    ageGroup: "15+",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "info-ai-project",
    title: "Projet d'intelligence artificielle avancé",
    description: "Développer un projet d'IA complet en maîtrisant les concepts fondamentaux et les outils pratiques de l'intelligence artificielle",
    duration: "150 min",
    difficulty: "expert",
    subject: "informatique",
    materials: [
      "Framework IA approprié (TensorFlow, PyTorch, ou plateforme en ligne)",
      "Données d'entraînement et de test de qualité",
      "Documentation et tutoriels du framework choisi",
      "Ordinateur avec capacités de calcul suffisantes",
      "Fiches de concepts d'IA et de machine learning",
      "Grille d'évaluation des modèles d'IA",
      "Matériel de documentation et d'analyse des résultats",
      "Outils de visualisation des données et des performances"
    ],
    instructions: [
      "Définition et planification du projet (30 min) : Définissez clairement votre projet d'IA en identifiant l'objectif et le type de problème à résoudre. Planifiez les étapes de développement et les ressources nécessaires. Choisissez l'approche algorithmique appropriée.",
      "Préparation et nettoyage des données (45 min) : Préparez vos données en les nettoyant et en les formatant correctement. Divisez vos données en ensembles d'entraînement et de test. Analysez la qualité et la distribution de vos données.",
      "Entraînement et optimisation du modèle (45 min) : Entraînez votre modèle en ajustant les hyperparamètres. Surveillez les métriques de performance et évitez le surapprentissage. Optimisez votre modèle pour de meilleures performances.",
      "Évaluation et amélioration (30 min) : Évaluez votre modèle sur les données de test. Analysez les erreurs et identifiez les axes d'amélioration. Documentez vos résultats et vos conclusions."
    ],
    learningObjectives: [
      "Comprendre les concepts fondamentaux de l'intelligence artificielle et du machine learning",
      "Traiter et préparer des données pour l'entraînement de modèles d'IA",
      "Évaluer et optimiser des modèles d'IA avec des métriques appropriées",
      "Développer une approche méthodique et critique des projets d'IA",
      "Maîtriser les outils et frameworks modernes de développement d'IA"
    ],
    tips: [
      "Commencez par des projets simples avant de complexifier",
      "Prenez le temps de bien comprendre vos données",
      "Documentez chaque étape de votre processus",
      "Testez votre modèle sur des données variées"
    ],
    assessment: [
      "Le projet d'IA est-il clairement défini et réalisable ?",
      "Les données sont-elles bien préparées et analysées ?",
      "Le modèle est-il entraîné et optimisé correctement ?",
      "L'évaluation du modèle est-elle rigoureuse et documentée ?"
    ],
    ageGroup: "15+",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS SCIENCES ISLAMIQUES =====
  {
    id: "isl-quran-recitation",
    title: "Récitation du Coran et apprentissage du tajweed",
    description: "Développer la capacité de réciter le Coran avec la bonne prononciation et en respectant les règles de tajweed",
    duration: "25 min",
    difficulty: "beginner",
    subject: "sciences-islamiques",
    materials: [
      "Mushaf (copie du Coran) de bonne qualité",
      "Audio des récitations par des récitants reconnus",
      "Carnet de notes pour les règles de tajweed",
      "Fiches des règles de prononciation de base",
      "Enregistreur pour pratiquer et s'écouter",
      "Fiches de versets à mémoriser",
      "Grille d'évaluation de la récitation",
      "Matériel de révision des règles"
    ],
    instructions: [
      "Écoute et observation (8 min) : Écoutez attentivement la récitation plusieurs fois. Observez la prononciation, l'intonation et les pauses. Notez les points particuliers de prononciation.",
      "Pratique guidée de la prononciation (10 min) : Pratiquez la prononciation en imitant le récitant. Concentrez-vous sur les lettres difficiles et les règles de tajweed de base. Utilisez un miroir pour vérifier l'articulation.",
      "Mémorisation progressive (5 min) : Mémorisez les versets par petits groupes. Récitez-les en respectant les règles de tajweed apprises. Vérifiez votre prononciation avec l'audio.",
      "Récitation complète et évaluation (2 min) : Récitez les versets mémorisés avec le bon tajweed. Enregistrez-vous pour identifier les points d'amélioration. Notez les règles à retravailler."
    ],
    learningObjectives: [
      "Améliorer la prononciation arabe avec une attention particulière aux lettres coraniques",
      "Mémoriser des versets du Coran de manière progressive et structurée",
      "Comprendre et appliquer les règles de tajweed de base",
      "Développer la confiance en soi dans la récitation publique",
      "Cultiver l'amour et le respect du Livre d'Allah"
    ],
    tips: [
      "Écoutez attentivement avant de pratiquer",
      "Pratiquez régulièrement pour consolider la mémorisation",
      "Respectez les pauses et l'intonation",
      "Commencez par des versets courts et simples"
    ],
    assessment: [
      "La prononciation est-elle claire et fidèle à l'original ?",
      "Les versets sont-ils mémorisés correctement ?",
      "Les règles de tajweed de base sont-elles respectées ?",
      "L'élève montre-t-il de la concentration et du respect ?"
    ],
    ageGroup: "6-8",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "isl-hadith-study",
    title: "Étude approfondie des hadiths prophétiques",
    description: "Développer une compréhension profonde des hadiths à travers l'analyse de leur contexte, de leur signification et de leur application pratique",
    duration: "35 min",
    difficulty: "intermediate",
    subject: "sciences-islamiques",
    materials: [
      "Recueil de hadiths authentiques (Sahih Bukhari, Sahih Muslim, etc.)",
      "Commentaires et explications des savants reconnus",
      "Carnet de notes et de réflexions personnelles",
      "Fiches d'analyse des hadiths",
      "Dictionnaire des termes islamiques",
      "Grille d'évaluation de la compréhension",
      "Matériel de recherche sur le contexte historique",
      "Fiches de synthèse des enseignements"
    ],
    instructions: [
      "Lecture attentive et première approche (10 min) : Lisez le hadith attentivement plusieurs fois. Identifiez les mots-clés et les concepts importants. Notez vos premières impressions et questions.",
      "Analyse du contexte historique (12 min) : Recherchez et comprenez le contexte historique du hadith. Identifiez les circonstances de sa transmission. Comprenez la situation qui a motivé cette parole prophétique.",
      "Analyse approfondie du message (10 min) : Analysez le message principal et les enseignements du hadith. Identifiez les principes islamiques énoncés. Reliez ce hadith à d'autres enseignements similaires.",
      "Application et réflexion personnelle (3 min) : Notez vos réflexions personnelles sur l'application de ce hadith dans votre vie quotidienne. Identifiez les actions concrètes que vous pouvez entreprendre."
    ],
    learningObjectives: [
      "Comprendre les hadiths prophétiques dans leur profondeur et leur signification",
      "Analyser le contexte historique et les circonstances de transmission",
      "Appliquer les enseignements des hadiths dans la vie quotidienne",
      "Développer la capacité d'analyse critique des sources islamiques",
      "Renforcer la foi et la pratique religieuse à travers l'étude"
    ],
    tips: [
      "Commencez par des hadiths courts et simples",
      "Utilisez des commentaires reconnus pour la compréhension",
      "Reliez toujours le hadith à sa pratique concrète",
      "Prenez le temps de méditer sur le message"
    ],
    assessment: [
      "L'élève comprend-il le sens principal du hadith ?",
      "Le contexte historique est-il bien assimilé ?",
      "L'élève peut-il expliquer l'application pratique ?",
      "Les réflexions personnelles montrent-elles une compréhension profonde ?"
    ],
    ageGroup: "9-11",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "isl-fiqh-analysis",
    title: "Analyse du fiqh",
    description: "Analyser les règles juridiques",
    duration: "45 min",
    difficulty: "advanced",
    subject: "sciences-islamiques",
    materials: ["Textes de fiqh", "Commentaires", "Sources"],
    instructions: [
      "Lisez le texte juridique",
      "Identifiez les règles",
      "Analysez les preuves",
      "Comparez les avis"
    ],
    learningObjectives: [
      "Comprendre les règles juridiques",
      "Analyser les preuves",
      "Comparer les avis des savants"
    ],
    tips: [
      "Commencez par des textes simples et courts",
      "Prenez des notes détaillées pendant la lecture",
      "Utilisez un dictionnaire de termes juridiques",
      "Comparez plusieurs commentaires pour une compréhension complète"
    ],
    assessment: [
      "L'élève peut-il identifier les règles principales ?",
      "La compréhension des preuves est-elle claire ?",
      "La comparaison des avis est-elle pertinente ?",
      "L'analyse montre-t-elle une réflexion personnelle ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "isl-theological-debate",
    title: "Débat théologique",
    description: "Débattre de questions théologiques",
    duration: "60 min",
    difficulty: "expert",
    subject: "sciences-islamiques",
    materials: ["Questions théologiques", "Sources", "Arguments"],
    instructions: [
      "Préparez vos arguments",
      "Structurez votre intervention",
      "Citez vos sources",
      "Écoutez et répondez"
    ],
    learningObjectives: [
      "Analyser des questions complexes",
      "Argumenter avec des preuves",
      "Développer l'esprit critique"
    ],
    tips: [
      "Préparez vos arguments à l'avance avec des sources fiables",
      "Structurez votre intervention en introduction, développement, conclusion",
      "Écoutez attentivement les arguments adverses",
      "Restez respectueux et ouvert au dialogue"
    ],
    assessment: [
      "L'argumentation est-elle structurée et claire ?",
      "Les sources sont-elles citées correctement ?",
      "L'élève écoute-t-il et répond-il aux arguments adverses ?",
      "Le débat respecte-t-il les règles de courtoisie ?"
    ],
    ageGroup: "15+",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },

  // ===== ACTIVITÉS HISTOIRE ISLAMIQUE =====
  {
    id: "his-timeline-creation",
    title: "Création de frise chronologique",
    description: "Créer une frise de l'histoire islamique",
    duration: "25 min",
    difficulty: "beginner",
    subject: "histoire-islam",
    materials: ["Papier", "Stylos", "Images", "Colle"],
    instructions: [
      "Choisissez une période historique",
      "Identifiez les événements importants",
      "Placez-les sur la frise",
      "Ajoutez des illustrations"
    ],
    learningObjectives: [
      "Comprendre la chronologie",
      "Identifier les événements clés",
      "Visualiser l'histoire"
    ],
    tips: [
      "Commencez par une période courte et bien documentée",
      "Utilisez des couleurs différentes pour chaque type d'événement",
      "Ajoutez des images pour rendre la frise plus attrayante",
      "Vérifiez l'ordre chronologique avant de coller"
    ],
    assessment: [
      "La frise est-elle chronologiquement correcte ?",
      "Les événements importants sont-ils bien identifiés ?",
      "Les illustrations sont-elles pertinentes et claires ?",
      "L'élève peut-il expliquer sa frise oralement ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "his-character-study",
    title: "Étude de personnages",
    description: "Étudier des figures historiques",
    duration: "35 min",
    difficulty: "intermediate",
    subject: "histoire-islam",
    materials: ["Biographies", "Images", "Notes"],
    instructions: [
      "Choisissez un personnage historique",
      "Lisez sa biographie",
      "Identifiez ses réalisations",
      "Créez un portrait"
    ],
    learningObjectives: [
      "Comprendre l'impact historique",
      "Analyser les motivations",
      "Apprécier les réalisations"
    ],
    tips: [
      "Choisissez un personnage qui vous intéresse personnellement",
      "Prenez des notes détaillées pendant la lecture",
      "Recherchez des images et des documents d'époque",
      "Réfléchissez à l'impact de ce personnage sur l'histoire"
    ],
    assessment: [
      "L'élève comprend-il l'importance historique du personnage ?",
      "Les motivations sont-elles bien analysées ?",
      "Le portrait créé reflète-t-il une compréhension approfondie ?",
      "L'élève peut-il expliquer l'impact de ce personnage ?"
    ],
    ageGroup: "9-11",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "his-battle-analysis",
    title: "Analyse de batailles",
    description: "Analyser des batailles historiques",
    duration: "50 min",
    difficulty: "advanced",
    subject: "histoire-islam",
    materials: ["Sources historiques", "Cartes", "Analyses"],
    instructions: [
      "Lisez les sources historiques",
      "Analysez le contexte",
      "Étudiez les stratégies",
      "Évaluez l'impact"
    ],
    learningObjectives: [
      "Analyser des événements militaires",
      "Comprendre les stratégies",
      "Évaluer l'impact historique"
    ],
    tips: [
      "Commencez par des batailles bien documentées",
      "Utilisez des cartes pour visualiser le terrain",
      "Analysez le contexte politique et social",
      "Comparez les stratégies des deux camps"
    ],
    assessment: [
      "L'analyse du contexte est-elle complète ?",
      "Les stratégies sont-elles bien comprises ?",
      "L'impact historique est-il bien évalué ?",
      "L'élève peut-il expliquer les causes et conséquences ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "his-historical-research",
    title: "Recherche historique",
    description: "Conduire une recherche historique",
    duration: "90 min",
    difficulty: "expert",
    subject: "histoire-islam",
    materials: ["Sources primaires", "Ouvrages de référence", "Notes"],
    instructions: [
      "Formulez votre question de recherche",
      "Consultez les sources",
      "Analysez les documents",
      "Rédigez votre conclusion"
    ],
    learningObjectives: [
      "Conduire une recherche historique",
      "Analyser des sources",
      "Formuler des conclusions"
    ],
    tips: [
      "Formulez une question de recherche claire et précise",
      "Utilisez des sources primaires et secondaires",
      "Prenez des notes détaillées et organisées",
      "Vérifiez la fiabilité de vos sources"
    ],
    assessment: [
      "La question de recherche est-elle claire et précise ?",
      "Les sources sont-elles variées et fiables ?",
      "L'analyse des documents est-elle approfondie ?",
      "Les conclusions sont-elles bien argumentées ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS PROPHÈTE MUHAMMAD =====
  {
    id: "pro-seerah-story",
    title: "Récit de la Sira",
    description: "Écouter et raconter des histoires",
    duration: "20 min",
    difficulty: "beginner",
    subject: "prophete-muhammad",
    materials: ["Livre de Sira", "Images", "Audio"],
    instructions: [
      "Lisez ou écoutez l'histoire",
      "Identifiez les personnages",
      "Comprenez le message",
      "Racontez à votre tour"
    ],
    learningObjectives: [
      "Connaître la vie du Prophète",
      "Comprendre les enseignements",
      "Développer l'empathie"
    ],
    tips: [
      "Choisissez des histoires adaptées à l'âge de l'enfant",
      "Utilisez des images pour illustrer l'histoire",
      "Posez des questions pour vérifier la compréhension",
      "Encouragez l'enfant à raconter l'histoire avec ses propres mots"
    ],
    assessment: [
      "L'enfant peut-il identifier les personnages principaux ?",
      "Le message principal est-il compris ?",
      "L'enfant peut-il raconter l'histoire de manière cohérente ?",
      "L'empathie envers les personnages est-elle développée ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "pro-character-traits",
    title: "Traits de caractère",
    description: "Étudier les qualités du Prophète",
    duration: "30 min",
    difficulty: "intermediate",
    subject: "prophete-muhammad",
    materials: ["Textes sur les qualités", "Exemples", "Notes"],
    instructions: [
      "Lisez sur une qualité spécifique",
      "Identifiez des exemples",
      "Analysez l'importance",
      "Appliquez à votre vie"
    ],
    learningObjectives: [
      "Comprendre les qualités morales",
      "Identifier des exemples pratiques",
      "Appliquer les enseignements"
    ],
    tips: [
      "Choisissez une qualité à la fois pour une étude approfondie",
      "Recherchez des exemples concrets dans la vie du Prophète",
      "Réfléchissez à l'application dans votre vie quotidienne",
      "Notez vos observations et réflexions"
    ],
    assessment: [
      "L'élève comprend-il la qualité étudiée ?",
      "Peut-il identifier des exemples concrets ?",
      "L'application personnelle est-elle réfléchie ?",
      "L'élève peut-il expliquer l'importance de cette qualité ?"
    ],
    ageGroup: "9-11",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "pro-teaching-methods",
    title: "Méthodes d'enseignement",
    description: "Analyser les méthodes du Prophète",
    duration: "45 min",
    difficulty: "advanced",
    subject: "prophete-muhammad",
    materials: ["Hadiths", "Commentaires", "Analyses"],
    instructions: [
      "Lisez les hadiths pertinents",
      "Analysez les méthodes utilisées",
      "Identifiez les principes",
      "Appliquez aux situations modernes"
    ],
    learningObjectives: [
      "Comprendre les méthodes d'enseignement",
      "Identifier les principes pédagogiques",
      "Adapter aux contextes modernes"
    ],
    tips: [
      "Commencez par des hadiths courts et clairs",
      "Analysez une méthode à la fois en détail",
      "Identifiez les principes universels",
      "Réfléchissez à l'adaptation moderne"
    ],
    assessment: [
      "L'élève comprend-il les méthodes analysées ?",
      "Les principes pédagogiques sont-ils bien identifiés ?",
      "L'adaptation moderne est-elle pertinente ?",
      "L'élève peut-il expliquer l'efficacité des méthodes ?"
    ],
    ageGroup: "12-14",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "pro-leadership-study",
    title: "Étude du leadership",
    description: "Analyser le leadership du Prophète",
    duration: "60 min",
    difficulty: "expert",
    subject: "prophete-muhammad",
    materials: ["Sources historiques", "Analyses", "Théories"],
    instructions: [
      "Étudiez les situations de leadership",
      "Analysez les décisions prises",
      "Identifiez les principes",
      "Comparez avec les théories modernes"
    ],
    learningObjectives: [
      "Comprendre le leadership islamique",
      "Analyser les décisions stratégiques",
      "Appliquer les principes modernes"
    ],
    tips: [
      "Étudiez des situations de leadership spécifiques et documentées",
      "Analysez le contexte de chaque décision",
      "Identifiez les principes universels du leadership",
      "Comparez avec les théories modernes de manière objective"
    ],
    assessment: [
      "L'élève comprend-il les situations de leadership analysées ?",
      "L'analyse des décisions est-elle approfondie ?",
      "Les principes sont-ils bien identifiés et expliqués ?",
      "La comparaison avec les théories modernes est-elle pertinente ?"
    ],
    ageGroup: "15+",
    isInteractive: false,
    canBeDoneAlone: true,
    requiresSupervision: false
  },

  // ===== ACTIVITÉS DÉVELOPPEMENT PERSONNEL =====
  {
    id: "dp-journal-reflexion",
    title: "Journal de réflexion personnelle",
    description: "Développer la conscience de soi à travers l'écriture réflexive et l'auto-observation quotidienne",
    duration: "20 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Carnet de journal personnel",
      "Stylos et crayons de couleur",
      "Fiches de questions de réflexion",
      "Timer ou chronomètre",
      "Espace calme et confortable",
      "Fiches de suivi des émotions",
      "Grille d'évaluation de la réflexion",
      "Matériel de décoration (stickers, dessins)"
    ],
    instructions: [
      "Préparation de l'espace (3 min) : Installez-vous dans un endroit calme et confortable. Préparez votre carnet et vos outils d'écriture. Créez une atmosphère propice à la réflexion.",
      "Moment de centrage (5 min) : Prenez quelques respirations profondes pour vous centrer. Posez-vous la question : 'Comment je me sens aujourd'hui ?' Notez vos premières impressions.",
      "Réflexion guidée (10 min) : Utilisez les fiches de questions pour approfondir votre réflexion. Écrivez librement sans vous censurer. Explorez vos pensées, émotions et expériences.",
      "Synthèse et planification (2 min) : Résumez vos découvertes principales. Identifiez une action concrète à entreprendre demain. Notez vos observations pour le suivi."
    ],
    learningObjectives: [
      "Développer la conscience de soi et la connaissance de ses émotions",
      "Améliorer la capacité d'auto-observation et de réflexion",
      "Cultiver l'habitude de l'écriture réflexive quotidienne",
      "Identifier des patterns dans ses pensées et comportements",
      "Développer la capacité d'expression personnelle authentique"
    ],
    tips: [
      "Écrivez sans jugement, laissez couler vos pensées",
      "Soyez régulier dans votre pratique quotidienne",
      "Relisez vos anciennes entrées pour observer votre évolution",
      "Utilisez des couleurs et des dessins pour enrichir votre journal"
    ],
    assessment: [
      "L'élève écrit-il régulièrement dans son journal ?",
      "La réflexion montre-t-elle une conscience de soi croissante ?",
      "L'élève peut-il identifier ses émotions et pensées ?",
      "Le journal reflète-t-il une évolution personnelle ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "dp-exercices-confiance",
    title: "Exercices de confiance en soi",
    description: "Renforcer la confiance en soi à travers des exercices pratiques et des défis progressifs",
    duration: "25 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Fiches d'exercices de confiance",
      "Miroir pour les exercices d'affirmation",
      "Enregistreur pour les exercices vocaux",
      "Fiches de suivi des progrès",
      "Espace privé pour les exercices",
      "Grille d'évaluation de la confiance",
      "Matériel de motivation (récompenses, encouragements)",
      "Fiches de techniques de respiration"
    ],
    instructions: [
      "Échauffement et préparation (5 min) : Commencez par des exercices de respiration et de relaxation. Préparez votre espace et votre matériel. Adoptez une posture confiante.",
      "Exercices d'affirmation (10 min) : Pratiquez des affirmations positives devant le miroir. Commencez par des phrases simples et augmentez progressivement la difficulté. Observez votre langage corporel.",
      "Exercices vocaux et posturaux (8 min) : Travaillez votre voix et votre posture. Pratiquez des exercices de projection vocale. Adoptez des postures de pouvoir et de confiance.",
      "Intégration et pratique (2 min) : Intégrez ces exercices dans votre routine quotidienne. Notez vos progrès et vos observations. Planifiez les prochaines étapes."
    ],
    learningObjectives: [
      "Renforcer la confiance en soi et l'estime de soi",
      "Développer une posture et un langage corporel confiants",
      "Améliorer la projection vocale et la communication",
      "Cultiver des habitudes positives et constructives",
      "Développer la résilience face aux défis"
    ],
    tips: [
      "Commencez par des exercices simples et augmentez progressivement",
      "Pratiquez régulièrement pour consolider les acquis",
      "Célébrez chaque petit progrès et victoire",
      "Soyez patient avec vous-même dans ce processus"
    ],
    assessment: [
      "L'élève pratique-t-il régulièrement les exercices ?",
      "La confiance en soi s'améliore-t-elle progressivement ?",
      "La posture et le langage corporel sont-ils plus confiants ?",
      "L'élève peut-il identifier ses progrès ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "dp-gestion-emotions",
    title: "Gestion des émotions et intelligence émotionnelle",
    description: "Apprendre à reconnaître, comprendre et gérer ses émotions de manière constructive",
    duration: "30 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Fiches d'identification des émotions",
      "Cartes d'émotions avec illustrations",
      "Matériel de relaxation (balles de stress, coussins)",
      "Fiches de techniques de gestion émotionnelle",
      "Journal des émotions",
      "Grille d'évaluation de la gestion émotionnelle",
      "Matériel artistique pour l'expression émotionnelle",
      "Fiches de respiration et de méditation"
    ],
    instructions: [
      "Identification des émotions (8 min) : Utilisez les cartes d'émotions pour identifier ce que vous ressentez. Nommez précisément vos émotions. Observez les sensations physiques associées.",
      "Compréhension des déclencheurs (10 min) : Analysez ce qui a déclenché ces émotions. Identifiez les situations, pensées ou événements qui les ont provoquées. Notez vos observations.",
      "Techniques de gestion (10 min) : Pratiquez des techniques de respiration et de relaxation. Expérimentez différentes stratégies de gestion émotionnelle. Trouvez ce qui fonctionne pour vous.",
      "Expression et intégration (2 min) : Exprimez vos émotions de manière constructive (art, écriture, parole). Intégrez ces techniques dans votre quotidien. Planifiez leur utilisation future."
    ],
    learningObjectives: [
      "Reconnaître et nommer précisément ses émotions",
      "Comprendre les déclencheurs et les causes de ses émotions",
      "Développer des stratégies de gestion émotionnelle constructives",
      "Améliorer l'intelligence émotionnelle et l'empathie",
      "Cultiver la conscience émotionnelle et l'auto-régulation"
    ],
    tips: [
      "Prenez le temps d'identifier précisément vos émotions",
      "N'ayez pas peur de vos émotions, elles sont normales",
      "Pratiquez les techniques de relaxation régulièrement",
      "Soyez patient dans l'apprentissage de la gestion émotionnelle"
    ],
    assessment: [
      "L'élève peut-il identifier ses émotions avec précision ?",
      "La compréhension des déclencheurs est-elle développée ?",
      "Les techniques de gestion sont-elles utilisées efficacement ?",
      "L'intelligence émotionnelle s'améliore-t-elle ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "dp-communication-ecoute",
    title: "Communication efficace et écoute active",
    description: "Développer des compétences de communication claires et une écoute attentive et empathique",
    duration: "25 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Fiches de techniques de communication",
      "Exercices de communication en binôme",
      "Fiches d'écoute active",
      "Matériel de jeux de rôle",
      "Grille d'évaluation de la communication",
      "Fiches de feedback constructif",
      "Matériel d'enregistrement pour les exercices",
      "Fiches de vocabulaire émotionnel"
    ],
    instructions: [
      "Apprentissage des techniques (8 min) : Étudiez les techniques de communication claire et d'écoute active. Identifiez les éléments clés de chaque technique. Préparez-vous à les pratiquer.",
      "Exercices pratiques en binôme (12 min) : Pratiquez les techniques avec un partenaire. Alternez les rôles de locuteur et d'écoutant. Utilisez les jeux de rôle pour simuler des situations réelles.",
      "Feedback et amélioration (3 min) : Donnez et recevez du feedback constructif. Identifiez les points forts et les axes d'amélioration. Notez vos observations pour la pratique future.",
      "Intégration dans le quotidien (2 min) : Identifiez des situations quotidiennes où appliquer ces techniques. Planifiez leur utilisation. Engagez-vous à pratiquer régulièrement."
    ],
    learningObjectives: [
      "Développer des compétences de communication claire et efficace",
      "Maîtriser les techniques d'écoute active et empathique",
      "Améliorer la qualité des interactions interpersonnelles",
      "Développer la capacité de feedback constructif",
      "Cultiver l'empathie et la compréhension mutuelle"
    ],
    tips: [
      "Pratiquez régulièrement avec différents partenaires",
      "Soyez patient dans l'apprentissage de ces compétences",
      "Observez les améliorations dans vos relations",
      "N'ayez pas peur de faire des erreurs, c'est normal"
    ],
    assessment: [
      "La communication est-elle plus claire et efficace ?",
      "L'écoute active est-elle bien pratiquée ?",
      "Les interactions interpersonnelles s'améliorent-elles ?",
      "L'élève peut-il donner du feedback constructif ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: false,
    requiresSupervision: true
  },
  {
    id: "dp-fixation-objectifs",
    title: "Fixation d'objectifs SMART et planification",
    description: "Apprendre à se fixer des objectifs clairs, mesurables et réalisables avec un plan d'action concret",
    duration: "30 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Fiches de méthode SMART",
      "Carnet de planification et de suivi",
      "Matériel de visualisation (post-its, feutres)",
      "Fiches de planification d'action",
      "Grille d'évaluation des objectifs",
      "Matériel de motivation et de récompenses",
      "Fiches de suivi des progrès",
      "Calendrier et planificateur"
    ],
    instructions: [
      "Compréhension de la méthode SMART (8 min) : Étudiez la méthode SMART (Spécifique, Mesurable, Atteignable, Réaliste, Temporel). Identifiez les éléments de chaque critère. Comprenez l'importance de chaque aspect.",
      "Définition d'objectifs personnels (12 min) : Appliquez la méthode SMART à vos objectifs personnels. Formulez des objectifs clairs et précis. Vérifiez qu'ils respectent tous les critères SMART.",
      "Planification d'action (8 min) : Créez un plan d'action détaillé pour chaque objectif. Décomposez les étapes en actions concrètes. Établissez un calendrier et des échéances.",
      "Suivi et ajustement (2 min) : Mettez en place un système de suivi de vos progrès. Prévoyez des moments de révision et d'ajustement. Engagez-vous dans un suivi régulier."
    ],
    learningObjectives: [
      "Maîtriser la méthode SMART pour la fixation d'objectifs",
      "Développer des compétences de planification et d'organisation",
      "Créer des plans d'action concrets et réalisables",
      "Mettre en place un système de suivi et d'évaluation",
      "Cultiver la discipline et la persévérance dans l'atteinte d'objectifs"
    ],
    tips: [
      "Commencez par des objectifs simples et progressifs",
      "Soyez réaliste dans vos ambitions initiales",
      "Célébrez chaque étape accomplie",
      "N'hésitez pas à ajuster vos objectifs si nécessaire"
    ],
    assessment: [
      "Les objectifs respectent-ils la méthode SMART ?",
      "Le plan d'action est-il concret et réalisable ?",
      "Le système de suivi est-il en place et utilisé ?",
      "L'élève progresse-t-il vers ses objectifs ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  },
  {
    id: "dp-organisation-quotidien",
    title: "Organisation personnelle et gestion du quotidien",
    description: "Développer des méthodes d'organisation efficaces pour optimiser son temps et sa productivité",
    duration: "25 min",
    difficulty: "beginner",
    subject: "developpement-personnel",
    materials: [
      "Carnet d'organisation et de planification",
      "Fiches de méthodes d'organisation",
      "Matériel de planification (agenda, calendrier)",
      "Fiches de priorités et de gestion du temps",
      "Grille d'évaluation de l'organisation",
      "Matériel de rangement et d'organisation",
      "Fiches de routines et d'habitudes",
      "Timer ou chronomètre"
    ],
    instructions: [
      "Analyse de l'organisation actuelle (8 min) : Évaluez votre niveau d'organisation actuel. Identifiez les domaines qui fonctionnent et ceux à améliorer. Notez vos observations et vos besoins.",
      "Apprentissage des méthodes (10 min) : Étudiez différentes méthodes d'organisation (matrice d'Eisenhower, méthode Pomodoro, etc.). Identifiez celles qui correspondent à votre style. Préparez-vous à les tester.",
      "Mise en place pratique (5 min) : Choisissez une méthode et mettez-la en place dans votre quotidien. Créez vos outils d'organisation. Établissez vos routines et habitudes.",
      "Suivi et amélioration (2 min) : Testez votre nouvelle organisation pendant quelques jours. Évaluez son efficacité. Ajustez et améliorez selon vos besoins."
    ],
    learningObjectives: [
      "Développer des compétences d'organisation personnelle efficaces",
      "Maîtriser différentes méthodes de gestion du temps",
      "Créer des routines et habitudes productives",
      "Optimiser l'utilisation de son temps et de ses ressources",
      "Cultiver la discipline et la régularité dans l'organisation"
    ],
    tips: [
      "Commencez par une méthode simple et augmentez progressivement",
      "Soyez patient dans l'établissement de nouvelles habitudes",
      "Adaptez les méthodes à votre style personnel",
      "Célébrez chaque amélioration dans votre organisation"
    ],
    assessment: [
      "L'organisation personnelle s'améliore-t-elle ?",
      "Les méthodes choisies sont-elles efficaces ?",
      "Les routines et habitudes sont-elles établies ?",
      "L'utilisation du temps est-elle optimisée ?"
    ],
    ageGroup: "6-8",
    isInteractive: true,
    canBeDoneAlone: true,
    requiresSupervision: false
  }
];

// Fonctions utilitaires pour filtrer les activités
export const getActivitiesBySubject = (subject: string) => {
  return activitiesData.filter(activity => activity.subject === subject);
};

export const getActivitiesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert') => {
  return activitiesData.filter(activity => activity.difficulty === difficulty);
};

export const getActivitiesByAgeGroup = (ageGroup: '6-8' | '9-11' | '12-14' | '15+') => {
  return activitiesData.filter(activity => activity.ageGroup === ageGroup);
};

export const getSubjects = () => {
  const subjects = [...new Set(activitiesData.map(activity => activity.subject))];
  return subjects;
};
