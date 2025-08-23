'use client';
import { useParams } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { useState } from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string[];
  exercises: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
}

const lessonData: Record<string, Lesson> = {
  'english-alphabet': {
  id: "english-alphabet",
  title: "The English Alphabet",
  description: "Learn the 26 letters and their pronunciation",
  content: [
    "The English alphabet has 26 letters.",
    "It is written from left to right.",
    "Here are the letters: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.",
    "Each letter has its own pronunciation:",
    "A = 'ei', B = 'bi', C = 'si', D = 'di', E = 'i', F = 'ef', G = 'dji', H = 'eitch', I = 'aï', J = 'djeï',",
    "K = 'keï', L = 'el', M = 'em', N = 'en', O = 'o', P = 'pi', Q = 'kju', R = 'ar', S = 'es', T = 'ti',",
    "U = 'ju', V = 'vi', W = 'double ju', X = 'eks', Y = 'waï', Z = 'zed'."
  ],
  exercises: [
    {
      question: "How many letters are there in the English alphabet?",
      options: ["24", "25", "26", "27"],
      correctAnswer: 2,
      explanation: "The English alphabet has 26 letters."
    },
    {
      question: "What is the first letter of the English alphabet?",
      options: ["B", "A", "C", "D"],
      correctAnswer: 1,
      explanation: "The first letter is A."
    },
    {
      question: "How do we pronounce the letter 'Z' in British English?",
      options: ["Zee", "Zed", "Zat", "Za"],
      correctAnswer: 1,
      explanation: "In British English, Z is pronounced 'Zed'."
    }
  ]
},
'english-numbers': {
  id: "english-numbers",
  title: "Numbers 1–100",
  description: "Count and write numbers in English",
  content: [
    "Counting from 1 to 10:",
    "1 = One, 2 = Two, 3 = Three, 4 = Four, 5 = Five,",
    "6 = Six, 7 = Seven, 8 = Eight, 9 = Nine, 10 = Ten.",
    "Counting from 11 to 20:",
    "11 = Eleven, 12 = Twelve, 13 = Thirteen, 14 = Fourteen, 15 = Fifteen,",
    "16 = Sixteen, 17 = Seventeen, 18 = Eighteen, 19 = Nineteen, 20 = Twenty.",
    "Tens: 30 = Thirty, 40 = Forty, 50 = Fifty, 60 = Sixty, 70 = Seventy, 80 = Eighty, 90 = Ninety, 100 = One hundred."
  ],
  exercises: [
    {
      question: "How do we say 15 in English?",
      options: ["Fiveteen", "Fifty", "Fifteen", "Fivety"],
      correctAnswer: 2,
      explanation: "15 is 'Fifteen'."
    },
    {
      question: "Which number is 'Seventy'?",
      options: ["60", "70", "80", "90"],
      correctAnswer: 1,
      explanation: "Seventy is 70."
    },
    {
      question: "What is 100 in English?",
      options: ["One thousand", "One hundred", "Ten hundred", "Hundred"],
      correctAnswer: 1,
      explanation: "100 = One hundred."
    }
  ]
},
'english-colors': {
  id: "english-colors",
  title: "Colors and Shapes",
  description: "Learn basic colors and geometric shapes",
  content: [
    "Colors in English:",
    "Red, Blue, Green, Yellow, Black, White, Orange, Purple, Pink, Brown.",
    "Shapes in English:",
    "Circle, Square, Triangle, Rectangle, Star, Heart."
  ],
  exercises: [
    {
      question: "What color is the sky?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correctAnswer: 1,
      explanation: "The sky is blue."
    },
    {
      question: "Which shape has 3 sides?",
      options: ["Circle", "Square", "Triangle", "Star"],
      correctAnswer: 2,
      explanation: "A triangle has 3 sides."
    },
    {
      question: "What is 'Rouge' in English?",
      options: ["Red", "Blue", "Pink", "Green"],
      correctAnswer: 0,
      explanation: "Rouge = Red."
    }
  ]
},
'english-greetings': {
  id: 'english-greetings',
  title: 'Greetings and Introductions',
  description: 'Hello, goodbye, how are you? + se présenter simplement',
  content: [
    "In English, we use greetings to start a conversation.",
    "Common greetings: Hello / Hi / Hey (informal).",
    "Time-based greetings: Good morning (before ~12), Good afternoon (12–5pm), Good evening (after ~5pm).",
    "Good night is for saying goodbye at night (not a greeting).",
    "Basic questions: How are you? / How’s it going? / How are you doing?",
    "Basic answers: I’m fine, thank you. / I’m good. / Not bad. / I’m okay.",
    "Introducing yourself: My name is ____. / I’m ____.",
    "Asking someone’s name: What’s your name?",
    "Polite words: Please / Thank you / You’re welcome / Excuse me / Sorry.",
    "Goodbyes: Goodbye / Bye / See you / See you later / See you tomorrow.",
    "Mini-dialogue:",
    "A: Hello! How are you?  B: I’m fine, thank you. And you?  A: I’m good. My name is Adam.  B: Nice to meet you, Adam!"
  ],
  exercises: [
    {
      question: "Which is a greeting you can use any time of day?",
      options: ["Good night", "Hello", "Good afternoon", "See you"],
      correctAnswer: 1,
      explanation: "“Hello” works any time; “Good afternoon” is time-based; “Good night” is a goodbye."
    },
    {
      question: "Which sentence is used to ask someone’s name?",
      options: ["How old are you?", "Who are you?", "What’s your name?", "Where are you from?"],
      correctAnswer: 2,
      explanation: "The natural question is “What’s your name?”."
    },
    {
      question: "Choose the correct reply: “How are you?”",
      options: ["I’m fine, thank you.", "Good night.", "See you later.", "Please."],
      correctAnswer: 0,
      explanation: "“I’m fine, thank you.” is an appropriate answer."
    },
    {
      question: "Pick the correct goodbye used at night (before sleeping).",
      options: ["Good evening", "Good night", "Good morning", "Hi"],
      correctAnswer: 1,
      explanation: "“Good night” is used when leaving at night or before sleeping."
    },
    {
      question: "You want to be polite when asking. Which word do you add?",
      options: ["Sorry", "Please", "Hello", "Thanks"],
      correctAnswer: 1,
      explanation: "Use “please” to make a request polite."
    },
    {
      question: "Complete: “_____ to meet you.”",
      options: ["See", "Nice", "Hello", "Good"],
      correctAnswer: 1,
      explanation: "The fixed expression is “Nice to meet you.”"
    }
  ]
},
'english-family': {
  id: "english-family",
  title: "Family Members",
  description: "Names of family members and relationships",
  content: [
    "Father = père",
    "Mother = mère",
    "Brother = frère",
    "Sister = sœur",
    "Son = fils",
    "Daughter = fille",
    "Grandfather = grand-père",
    "Grandmother = grand-mère",
    "Uncle = oncle",
    "Aunt = tante"
  ],
  exercises: [
    {
      question: "What is 'Mother' in French?",
      options: ["Mère", "Père", "Sœur", "Tante"],
      correctAnswer: 0,
      explanation: "Mother = Mère."
    },
    {
      question: "Which word means 'Brother'?",
      options: ["Son", "Father", "Brother", "Uncle"],
      correctAnswer: 2,
      explanation: "Brother = frère."
    },
    {
      question: "How do we say 'Grand-mère' in English?",
      options: ["Grandfather", "Grandmother", "Mother", "Daughter"],
      correctAnswer: 1,
      explanation: "Grand-mère = Grandmother."
    }
  ]
},
'english-animals': {
  id: "english-animals",
  title: "Animals and Pets",
  description: "Common animals and their names",
  content: [
    "Dog = chien",
    "Cat = chat",
    "Bird = oiseau",
    "Fish = poisson",
    "Horse = cheval",
    "Cow = vache",
    "Sheep = mouton",
    "Chicken = poule",
    "Duck = canard",
    "Lion = lion"
  ],
  exercises: [
    {
      question: "What is 'Dog' in French?",
      options: ["Chat", "Chien", "Oiseau", "Poisson"],
      correctAnswer: 1,
      explanation: "Dog = chien."
    },
    {
      question: "Which animal is 'Cat'?",
      options: ["Chien", "Chat", "Oiseau", "Vache"],
      correctAnswer: 1,
      explanation: "Cat = chat."
    },
    {
      question: "What does 'Sheep' mean?",
      options: ["Chien", "Vache", "Mouton", "Cheval"],
      correctAnswer: 2,
      explanation: "Sheep = mouton."
    }
  ]
},
 'arabe-alphabet': {
  id: "7",
  title: "Les lettres de l'alphabet arabe",
  description: "Apprends les 28 lettres arabes, le sens d'écriture et les lettres qui ne se lient pas.",
  content: [
    "Bienvenue ! L'arabe s'écrit de droite à gauche et comporte 28 lettres.",
    "Certaines lettres changent de forme selon leur position (début, milieu, fin).",
    "6 lettres ne se lient PAS à la lettre suivante : ا ، د ، ذ ، ر ، ز ، و.",
    "Alphabet complet (ordre) : ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي.",
    "ا (Alif) — a long. Exemple : باب (baab).",
    "ب (Bā) — b. Exemple : باب (porte).",
    "ت (Tā) — t. Exemple : تمر (tamar, dattes).",
    "ث (Thā) — th doux (think). Exemple : ثوب (thawb).",
    "ج (Jīm) — dj. Exemple : جمل (jamal, chameau).",
    "ح (Ḥā) — h profond (aspiré). Exemple : حب (hubb, amour).",
    "خ (Khā) — kh. Exemple : خبز (khubz, pain).",
    "د (Dāl) — d. Exemple : دار (daar, maison).",
    "ذ (Dhāl) — dh doux (this). Exemple : ذهب (dhahab, or).",
    "ر (Rā) — r roulé. Exemple : رأس (ra's, tête).",
    "ز (Zāy) — z. Exemple : زهر (zahr, fleur).",
    "س (Sīn) — s. Exemple : سمك (samak, poisson).",
    "ش (Shīn) — ch. Exemple : شمس (shams, soleil).",
    "ص (Ṣād) — s emphatique. Exemple : صلاة (salāt, prière).",
    "ض (Ḍād) — d emphatique. Exemple : ضوء (daw', lumière).",
    "ط (Ṭā) — t emphatique. Exemple : طعام (ta'ām, nourriture).",
    "ظ (Ẓā) — z/dh emphatique. Exemple : ظرف (zarf, enveloppe).",
    "ع ('Ayn) — consonne gutturale. Exemple : علم ('ilm, science).",
    "غ (Ghayn) — gh. Exemple : غابة (ghābah, forêt).",
    "ف (Fā) — f. Exemple : فم (fam, bouche).",
    "ق (Qāf) — q profond. Exemple : قلب (qalb, cœur).",
    "ك (Kāf) — k. Exemple : كتاب (kitāb, livre).",
    "ل (Lām) — l. Exemple : لسان (lisān, langue).",
    "م (Mīm) — m. Exemple : مسجد (masjid, mosquée).",
    "ن (Nūn) — n. Exemple : نجم (najm, étoile).",
    "ه (Hā) — h léger. Exemple : هلال (hilāl, croissant).",
         "و (Wāw) — w / voyelle longue \"ou\". Exemple : ولد (walad, garçon).",
     "ي (Yā) — y / voyelle longue \"ii\". Exemple : يد (yad, main).",
    "Note : ء (hamza) représente un coup de glotte et peut s'écrire sur ا ، و ، ي ou seule.",
    "Objectif : reconnaître chaque lettre, son son, et savoir lesquelles ne se lient pas."
  ],
  exercises: [
    {
      question: "Combien de lettres comporte l'alphabet arabe ?",
      options: ["26", "27", "28", "29"],
      correctAnswer: 2,
      explanation: "Il y a 28 lettres (hamza est souvent traitée à part au début)."
    },
    {
      question: "Dans quel sens s'écrit l'arabe ?",
      options: ["De gauche à droite", "De droite à gauche", "De haut en bas", "De bas en haut"],
      correctAnswer: 1,
      explanation: "Toujours de droite vers la gauche."
    },
    {
      question: "Quelles lettres ne se lient PAS à la lettre suivante ?",
      options: ["ح ، س ، ش ، ص", "ا ، د ، ذ ، ر ، ز ، و", "ب ، ت ، ث ، ن"],
      correctAnswer: 1,
      explanation: "Les 6 coupantes sont : ا ، د ، ذ ، ر ، ز ، و."
    },
    {
      question: "Quel est le son de la lettre خ (khā) ?",
      options: ["h léger", "kh guttural", "dj"],
      correctAnswer: 1,
      explanation: "خ = kh, un son guttural."
    },
    {
      question: "Laquelle est une lettre emphatique ?",
      options: ["س", "ص", "ش", "ت"],
      correctAnswer: 1,
      explanation: "ص (ṣād) est emphatique (comme ط ، ظ ، ض)."
    },
    {
      question: "Quel mot commence par ج (jīm) ?",
      options: ["سمك", "جمل", "باب", "تمر"],
      correctAnswer: 1,
      explanation: "جمل (jamal) commence par ج."
    },
    {
      question: "Quelle lettre a un r roulé ?",
      options: ["ر", "ز", "ذ", "د"],
      correctAnswer: 0,
      explanation: "ر (rā) se roule."
    },
    {
      question: "Quel est le son de ع ('ayn) ?",
      options: ["gh", "coup de glotte", "consonne gutturale propre à l'arabe"],
      correctAnswer: 2,
      explanation: "'Ayn est une consonne gutturale, différente du ghayn."
    }
  ]
},
  'arabe-voyelles': {
  id: "arabe-voyelles",
  title: "Les voyelles en arabe",
  description: "Apprenez الفتحة, الكسرة, الضمة et السكون",
  content: [
    "Les voyelles courtes en arabe sont appelées حركات (harakat).",
    "Elles modifient la prononciation des lettres.",
    "Voici les principales :",
    "◉ الفتحة ( ـَ ) : un petit trait au-dessus → son 'a'. Exemple : بَ = ba",
    "◉ الكسرة ( ـِ ) : petit trait en dessous → son 'i'. Exemple : بِ = bi",
    "◉ الضمة ( ـُ ) : petit waw au-dessus → son 'u'. Exemple : بُ = bu",
    "◉ السكون ( ـْ ) : petit rond → absence de voyelle. Exemple : بْ = b",
    "Les voyelles longues se forment avec les lettres : ا (aa), و (ou), ي (ii).",
    "Exemple : باب (baab) contient une voyelle longue avec ا."
  ],
  exercises: [
    {
      question: "Quel son produit الكسرة ( ـِ ) ?",
      options: ["a", "i", "u", "aucun"],
      correctAnswer: 1,
      explanation: "Exactement ! الكسرة donne le son 'i'."
    },
    {
      question: "Comment se lit بُ ?",
      options: ["ba", "bi", "bu", "b"],
      correctAnswer: 2,
      explanation: "بُ = bu, avec الضمة."
    },
    {
      question: "Quelle voyelle indique l'absence de son vocalique ?",
      options: ["فتحة", "ضمة", "كسرة", "سكون"],
      correctAnswer: 3,
      explanation: "السكون indique que la consonne est muette."
    }
  ]
},
  'arabe-nombres': {
  id: "arabe-nombres",
  title: "Les nombres en arabe",
  description: "Comptez de 1 à 10 en arabe",
  content: [
    "Les nombres sont très utilisés dans la vie quotidienne.",
    "Voici les chiffres de 1 à 10 en arabe avec prononciation :",
    "١ = واحد (Wahid) = un",
    "٢ = اثنان (Ithnan) = deux",
    "٣ = ثلاثة (Thalatha) = trois",
    "٤ = أربعة (Arba'a) = quatre",
    "٥ = خمسة (Khamsa) = cinq",
    "٦ = ستة (Sitta) = six",
    "٧ = سبعة (Sab'a) = sept",
    "٨ = ثمانية (Thamaniya) = huit",
    "٩ = تسعة (Tis'a) = neuf",
    "١٠ = عشرة (Ashara) = dix",
    "Astuce : les chiffres arabes modernes utilisés (0–9) viennent de cette numération."
  ],
  exercises: [
    {
      question: "Comment dit-on '5' en arabe ?",
      options: ["أربعة", "خمسة", "ستة", "سبعة"],
      correctAnswer: 1,
      explanation: "خمسة (Khamsa) signifie 5."
    },
    {
      question: "Que signifie عشرة (Ashara) ?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 3,
      explanation: "عشرة signifie 10."
    },
    {
      question: "Quel est le chiffre '٣' ?",
      options: ["واحد", "اثنان", "ثلاثة", "أربعة"],
      correctAnswer: 2,
      explanation: "٣ = ثلاثة (Thalatha)."
    }
  ]
},
'arabe-couleurs': {
  id: "arabe-couleurs",
  title: "Les couleurs et les formes en arabe",
  description: "Apprenez les couleurs et formes en arabe",
  content: [
    "Quelques couleurs en arabe :",
    "أحمر (Ahmar) = rouge",
    "أزرق (Azraq) = bleu",
    "أصفر (Asfar) = jaune",
    "أخضر (Akhḍar) = vert",
    "أبيض (Abyad) = blanc",
    "أسود (Aswad) = noir",
    "بني (Bunni) = marron",
    "وردي (Wardī) = rose",
    "برتقالي (Burtuqālī) = orange",
    "Quelques formes :",
    "دائرة (Dā'ira) = cercle",
    "مربع (Murabba') = carré",
    "مثلث (Muthallath) = triangle",
    "مستطيل (Mustatīl) = rectangle"
  ],
  exercises: [
    {
      question: "Que signifie أزرق ?",
      options: ["Rouge", "Bleu", "Vert", "Noir"],
      correctAnswer: 1,
      explanation: "أزرق = bleu."
    },
    {
      question: "Comment dit-on 'carré' en arabe ?",
      options: ["مربع", "دائرة", "مثلث", "مستطيل"],
      correctAnswer: 0,
      explanation: "مربع signifie carré."
    },
    {
      question: "Quelle couleur est أخضر ?",
      options: ["Vert", "Rouge", "Noir", "Orange"],
      correctAnswer: 0,
      explanation: "أخضر = vert."
    }
  ]
},
'arabe-famille': {
  id: "arabe-famille",
  title: "Les membres de la famille en arabe",
  description: "Apprenez les noms de la famille en arabe",
  content: [
    "Quelques membres de la famille en arabe :",
    "أب (Ab) = père",
    "أم (Umm) = mère",
    "أخ (Akh) = frère",
    "أخت (Ukht) = sœur",
    "ابن (Ibn) = fils",
    "ابنة (Ibnah) = fille",
    "جد (Jadd) = grand-père",
    "جدة (Jadda) = grand-mère",
    "عم (ʿAmm) = oncle paternel",
    "خال (Khāl) = oncle maternel"
  ],
  exercises: [
    {
      question: "Que signifie أم ?",
      options: ["Père", "Mère", "Sœur", "Grand-mère"],
      correctAnswer: 1,
      explanation: "أم signifie mère."
    },
    {
      question: "Comment dit-on 'frère' en arabe ?",
      options: ["أب", "أم", "أخ", "أخت"],
      correctAnswer: 2,
      explanation: "أخ signifie frère."
    },
    {
      question: "Quel mot signifie 'grand-père' ?",
      options: ["خال", "عم", "جد", "ابن"],
      correctAnswer: 2,
      explanation: "جد = grand-père."
    }
  ]
},
'arabe-animaux': {
  id: "arabe-animaux",
  title: "Les animaux en arabe",
  description: "Apprenez les noms d'animaux en arabe",
  content: [
    "Quelques animaux en arabe :",
    "كلب (Kalb) = chien",
    "قط (Qiṭṭ) = chat",
    "حصان (Ḥiṣān) = cheval",
    "أسد (Asad) = lion",
    "فيل (Fīl) = éléphant",
    "بقرة (Baqara) = vache",
    "غنم (Ghanam) = mouton",
    "جمل (Jamal) = chameau",
    "طائر (Ṭā'ir) = oiseau",
    "سمك (Samak) = poisson"
  ],
  exercises: [
    {
      question: "Que signifie كلب ?",
      options: ["Chat", "Chien", "Lion", "Éléphant"],
      correctAnswer: 1,
      explanation: "كلب signifie chien."
    },
    {
      question: "Comment dit-on 'chat' en arabe ?",
      options: ["كلب", "قط", "حصان", "أسد"],
      correctAnswer: 1,
      explanation: "قط signifie chat."
    },
    {
      question: "Quel animal est جمل ?",
      options: ["Lion", "Chameau", "Mouton", "Oiseau"],
      correctAnswer: 1,
      explanation: "جمل signifie chameau."
    }
  ]
},
"prophete-naissance": {
  id: "prophete-naissance",
  title: "La naissance du Prophète ﷺ",
  description: "La nuit bénie de sa naissance et les circonstances entourant son enfance",
  content: [
    "Le Prophète Muhammad ﷺ est né à La Mecque en l’an de l’Éléphant (vers 570 après J.-C.), année où l’armée d’Abraha tenta d’attaquer la Ka‘ba avec des éléphants. Cet événement marqua les esprits et donna à cette année une importance particulière.",
    "Son père, ‘Abd Allah ibn ‘Abd al-Muttalib, décéda alors qu’Amina, la mère du Prophète ﷺ, était enceinte. Ainsi, le Prophète ﷺ naquit orphelin de père.",
    "À sa naissance, plusieurs signes bénis furent rapportés par la tradition : la lumière qu’Amina aurait vue rayonner, et qui atteignait la Syrie, fut comprise comme un signe de la mission future de son fils.",
    "Son grand-père, ‘Abd al-Muttalib, très respecté parmi Quraysh, prit soin de lui et l’emmena à la Ka‘ba pour remercier Allah. C’est lui qui choisit son prénom : **Muhammad**, un nom peu répandu mais dont le sens est « celui qui est loué ».",
    "Comme il était d’usage chez les Arabes, le jeune enfant fut confié à une nourrice de la tribu des Banû Sa‘d : Halima As-Sa‘diyya. Elle témoigna de nombreux bienfaits qui accompagnèrent sa présence : sa monture devint rapide, son lait abondant, et sa maison bénie.",
    "Durant son séjour dans le désert, il grandit robuste et apprit l’arabe pur. Il connut également l’événement marquant de la « fente de la poitrine » (shaqq al-sadr), où deux anges purifièrent son cœur en retirant une part du démon, signe de sa protection divine.",
    "Ainsi, son enfance fut placée sous le signe de la bénédiction et de la protection d’Allah, préparant sa mission future."
  ],
  exercises: [
    {
      question: "En quelle année est né le Prophète ﷺ ?",
      options: ["L’an de la sécheresse", "L’an de l’Éléphant", "L’an de la révélation", "L’an de Badr"],
      correctAnswer: 1,
      explanation: "Il est né en l’an de l’Éléphant (570 après J.-C.), année de l’attaque d’Abraha contre la Ka‘ba."
    },
    {
      question: "Qui choisit le prénom Muhammad ﷺ ?",
      options: ["Sa mère Amina", "Son oncle Abu Talib", "Son grand-père ‘Abd al-Muttalib", "Un compagnon"],
      correctAnswer: 2,
      explanation: "C’est son grand-père ‘Abd al-Muttalib qui choisit le nom Muhammad."
    },
    {
      question: "Quel événement miraculeux eut lieu durant son enfance chez Halima As-Sa‘diyya ?",
      options: [
        "Il commença à lire et écrire",
        "La fente de la poitrine (shaqq al-sadr)",
        "Il reçut la révélation",
        "Il fit la hijra"
      ],
      correctAnswer: 1,
      explanation: "Deux anges ouvrirent sa poitrine et purifièrent son cœur, signe de la protection divine."
    },
    {
      question: "Vrai ou faux : Le Prophète ﷺ naquit alors que son père était vivant.",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "C’est faux, il est né orphelin de père."
    }
  ]
},
"prophete-famille": {
  id: "prophete-famille",
  title: "Sa famille et ses ancêtres",
  description: "La noble lignée du Prophète ﷺ et son appartenance à Quraysh",
  content: [
    "Le Prophète Muhammad ﷺ appartenait à la tribu de Quraysh, la tribu la plus respectée de La Mecque. Cette tribu avait la responsabilité de la Ka‘ba et jouissait d’un grand prestige dans toute la péninsule arabique.",
    "Son père s’appelait ‘Abd Allah ibn ‘Abd al-Muttalib et sa mère Amina bint Wahb. Sa lignée paternelle remontait directement au Prophète Ibrahim عليه السلام par son fils Ismaïl عليه السلام.",
    "Son grand-père, ‘Abd al-Muttalib, était un homme respecté pour sa générosité et son courage. C’est lui qui redécouvrit le puits de Zamzam après qu’il fut longtemps resté enfoui.",
    "Parmi ses oncles, on retrouve Abu Talib qui prit soin de lui après la mort de sa mère et de son grand-père, mais aussi Hamza (qui deviendra un héros de l’Islam), et Abu Lahab (un ennemi acharné de l’Islam).",
    "Cette noble ascendance montrait que le Prophète ﷺ venait d’une famille respectée, mais sa véritable noblesse venait surtout de son caractère et de la mission qu’Allah lui confia."
  ],
  exercises: [
    {
      question: "De quel Prophète descend Muhammad ﷺ ?",
      options: ["Moussa عليه السلام", "Ibrahim عليه السلام", "Issa عليه السلام", "Nouh عليه السلام"],
      correctAnswer: 1,
      explanation: "Il descend du Prophète Ibrahim عليه السلام, par son fils Ismaïl."
    },
    {
      question: "Quel rôle occupait Quraysh à La Mecque ?",
      options: ["Chef militaire", "Responsable de la Ka‘ba", "Gardien des marchés", "Agriculteurs"],
      correctAnswer: 1,
      explanation: "La tribu de Quraysh avait la charge de la Ka‘ba."
    },
    {
      question: "Qui redécouvrit le puits de Zamzam ?",
      options: ["Abu Talib", "Abd al-Muttalib", "Hamza", "Omar ibn al-Khattab"],
      correctAnswer: 1,
      explanation: "C’est ‘Abd al-Muttalib qui retrouva le puits de Zamzam."
    }
  ]
},
"prophete-enfance": {
  id: "prophete-enfance",
  title: "Son enfance et sa jeunesse",
  description: "Les étapes marquantes de son éducation et de sa jeunesse",
  content: [
    "Le Prophète ﷺ connut très tôt la souffrance de l’orphelin. Son père étant mort avant sa naissance, il perdit aussi sa mère Amina alors qu’il n’avait que six ans. Il fut confié à son grand-père ‘Abd al-Muttalib, puis, après sa mort, à son oncle Abu Talib.",
    "Durant son enfance, il travailla comme berger, ce qui lui apprit la patience, la responsabilité et la proximité avec la nature.",
    "Plus tard, il accompagna les caravanes commerciales de Quraysh, voyageant jusqu’en Syrie et au Yémen. Il y apprit les règles du commerce et gagna une réputation d’honnêteté et de droiture.",
    "Les Mecquois le surnommèrent **Al-Amîn** (le digne de confiance) et **As-Sadiq** (le véridique), car il ne mentait jamais et rendait toujours les dépôts qu’on lui confiait.",
    "Avant la révélation, il n’adora jamais les idoles, contrairement aux autres habitants de La Mecque. Il aimait la solitude, la méditation et la recherche de la vérité."
  ],
  exercises: [
    {
      question: "Quel métier exerça le Prophète ﷺ dans son enfance ?",
      options: ["Commerçant", "Guerrier", "Berger", "Juge"],
      correctAnswer: 2,
      explanation: "Il fut berger dans sa jeunesse."
    },
    {
      question: "Quel surnom lui donnèrent les Mecquois ?",
      options: ["Al-Khalil", "As-Sadiq Al-Amîn", "Al-Faruq", "Al-Mahdi"],
      correctAnswer: 1,
      explanation: "Il était connu comme As-Sadiq Al-Amîn."
    }
  ]
},
"prophete-mariage": {
  id: "prophete-mariage",
  title: "Son mariage avec Khadija رضي الله عنها",
  description: "Une union bénie qui marqua sa vie",
  content: [
    "Khadija bint Khuwaylid رضي الله عنها était une commerçante riche et respectée de La Mecque. Elle engagea Muhammad ﷺ pour diriger une de ses caravanes commerciales vers la Syrie.",
    "Elle fut impressionnée par son honnêteté, sa loyauté et son efficacité dans le commerce. Contrairement à d’autres commerçants, il ne trompait jamais ses partenaires et gérait les affaires avec équité.",
    "Khadija رضي الله عنها lui proposa le mariage par l’intermédiaire d’une amie. Muhammad ﷺ accepta. Il avait alors 25 ans, elle en avait environ 40.",
    "Leur mariage fut marqué par l’amour, la loyauté et la sincérité. Elle fut la première à croire en lui lorsqu’il reçut la révélation, et le soutint dans toutes les épreuves.",
    "Ils eurent plusieurs enfants, dont Fatima رضي الله عنها, la plus connue, qui épousa plus tard Ali ibn Abi Talib رضي الله عنه."
  ],
  exercises: [
    {
      question: "Quel âge avait le Prophète ﷺ lorsqu’il épousa Khadija ?",
      options: ["20 ans", "25 ans", "30 ans", "35 ans"],
      correctAnswer: 1,
      explanation: "Il avait 25 ans."
    },
    {
      question: "Quel était le métier de Khadija رضي الله عنها ?",
      options: ["Commerçante", "Agricultrice", "Guerrière", "Guérisseuse"],
      correctAnswer: 0,
      explanation: "Elle était commerçante et dirigeait des caravanes."
    }
  ]
},
"prophete-hira": {
  id: "prophete-hira",
  title: "La grotte de Hira",
  description: "Un lieu de méditation et de préparation spirituelle",
  content: [
    "Avant la révélation, Muhammad ﷺ avait l’habitude de se retirer dans la grotte de Hira, située sur le mont Nour, près de La Mecque.",
    "Il s’éloignait des idolâtres et passait plusieurs jours à méditer, réfléchir à la création et prier selon la voie d’Ibrahim عليه السلام.",
    "Il ressentait déjà l’injustice et la corruption de sa société, marquée par l’adoration des idoles, l’oppression des pauvres et l’injustice envers les femmes.",
    "Ces retraites étaient une préparation spirituelle à la mission prophétique. C’est dans cette grotte qu’il reçut la première révélation à l’âge de 40 ans."
  ],
  exercises: [
    {
      question: "Où se trouve la grotte de Hira ?",
      options: ["Mont Uhud", "Mont Nour", "Mont Arafat", "Mont Sinaï"],
      correctAnswer: 1,
      explanation: "Elle se trouve sur le mont Nour, près de La Mecque."
    },
    {
      question: "Que faisait le Prophète ﷺ dans la grotte de Hira ?",
      options: ["Il commerçait", "Il méditait et priait", "Il enseignait", "Il dormait"],
      correctAnswer: 1,
      explanation: "Il méditait et priait, loin des idolâtres."
    }
  ]
},
"prophete-revelation": {
  id: "prophete-revelation",
  title: "La première révélation",
  description: "Le début de la mission prophétique",
  content: [
    "À l’âge de 40 ans, lors d’une de ses retraites à la grotte de Hira, l’ange Jibril عليه السلام apparut à Muhammad ﷺ.",
    "Il lui ordonna : « Lis ! » (Iqra). Le Prophète ﷺ répondit qu’il ne savait pas lire. L’ange le serra et répéta l’ordre trois fois.",
    "Enfin, Jibril lui récita les cinq premiers versets de la sourate Al-‘Alaq (96:1-5) : « Lis, au nom de ton Seigneur qui a créé, qui a créé l’homme d’une adhérence… »",
    "Terrifié, le Prophète ﷺ rentra chez lui en tremblant. Khadija رضي الله عنها le réconforta et l’assura que Dieu ne l’abandonnerait pas. Elle l’emmena voir son cousin, Waraqa ibn Nawfal, un savant chrétien, qui confirma qu’il avait reçu la révélation divine."
  ],
  exercises: [
    {
      question: "Quel ange apporta la première révélation ?",
      options: ["Mikaïl", "Israfil", "Jibril", "Azraïl"],
      correctAnswer: 2,
      explanation: "C’est Jibril عليه السلام."
    },
    {
      question: "Quels versets furent révélés en premier ?",
      options: [
        "Sourate Al-Fatiha",
        "Sourate An-Nas",
        "Sourate Al-Ikhlas",
        "Sourate Al-‘Alaq (1-5)"
      ],
      correctAnswer: 3,
      explanation: "Les cinq premiers versets de la sourate Al-‘Alaq."
    }
  ]
},
"prophete-premiers-musulmans": {
  id: "prophete-premiers-musulmans",
  title: "Les premiers musulmans",
  description: "Les premiers compagnons qui embrassèrent l’Islam",
  content: [
    "Après la révélation, les premiers à croire en Muhammad ﷺ furent :",
    "– Khadija رضي الله عنها, son épouse fidèle.",
    "– Ali ibn Abi Talib رضي الله عنه, son jeune cousin.",
    "– Zayd ibn Haritha رضي الله عنه, son serviteur affranchi.",
    "– Abu Bakr As-Siddiq رضي الله عنه, son ami proche, qui devint le premier calife après lui.",
    "Abu Bakr invita de nombreux notables à l’Islam, dont Uthman ibn Affan, Talha ibn Ubayd Allah et Zubair ibn Al-Awwam.",
    "Ces premiers musulmans furent essentiels à la diffusion du message et montrèrent un courage immense face aux persécutions."
  ],
  exercises: [
    {
      question: "Qui fut la première femme à embrasser l’Islam ?",
      options: ["Aïcha", "Fatima", "Khadija", "Umm Salama"],
      correctAnswer: 2,
      explanation: "C’est Khadija رضي الله عنها."
    },
    {
      question: "Quel compagnon fut surnommé As-Siddiq (le véridique) ?",
      options: ["Ali", "Umar", "Abu Bakr", "Hamza"],
      correctAnswer: 2,
      explanation: "Abu Bakr رضي الله عنه."
    }
  ]
},
"prophete-persecution": {
  id: "prophete-persecution",
  title: "Les débuts de la persécution",
  description: "Les épreuves des premiers croyants à La Mecque",
  content: [
    "Lorsque l’Islam commença à se répandre à La Mecque, les Quraysh s’y opposèrent violemment. Ils voyaient dans ce message une menace contre leurs idoles et leurs privilèges.",
    "Les pauvres, les esclaves et les opprimés furent les premiers à embrasser l’Islam, car il proclamait l’égalité entre les hommes.",
    "Bilal ibn Rabah رضي الله عنه, esclave éthiopien, fut torturé sous le soleil brûlant. Malgré les souffrances, il répétait : « Ahad, Ahad » (Un, Un, affirmant l’unicité d’Allah).",
    "Soumaya رضي الله عنها, l’une des premières femmes musulmanes, fut martyrisée, devenant la première martyre de l’Islam.",
    "Le Prophète ﷺ et ses compagnons résistèrent avec patience et courage, posant les bases de la foi malgré les persécutions."
  ],
  exercises: [
    {
      question: "Quel compagnon répétait « Ahad, Ahad » sous la torture ?",
      options: ["Uthman", "Bilal", "Hamza", "Ali"],
      correctAnswer: 1,
      explanation: "Bilal رضي الله عنه."
    },
    {
      question: "Qui fut la première martyre de l’Islam ?",
      options: ["Fatima", "Aïcha", "Soumaya", "Khadija"],
      correctAnswer: 2,
      explanation: "Soumaya رضي الله عنها."
    }
  ]
},
  'francais-alphabet': {
    id: 'francais-alphabet',
    title: 'L\'alphabet français',
    description: 'Apprendre les 26 lettres',
    content: [
      'L\'alphabet français compte 26 lettres, comme l\'alphabet anglais.',
      'Il se compose de 6 voyelles : A, E, I, O, U, Y.',
      'Et de 20 consonnes : B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z.',
      'Chaque lettre a un nom et un son :',
      '• A se dit "a" et se prononce "a"',
      '• B se dit "bé" et se prononce "b"',
      '• C se dit "cé" et se prononce "k" ou "s"',
      '• D se dit "dé" et se prononce "d"',
      '• E se dit "e" et se prononce "e" ou "é"',
      '• F se dit "effe" et se prononce "f"',
      '• G se dit "gé" et se prononce "g" ou "j"',
      '• H se dit "ache" et peut être muet ou aspiré',
      '• I se dit "i" et se prononce "i"',
      '• J se dit "ji" et se prononce "j"',
      '• K se dit "ka" et se prononce "k"',
      '• L se dit "elle" et se prononce "l"',
      '• M se dit "emme" et se prononce "m"',
      '• N se dit "enne" et se prononce "n"',
      '• O se dit "o" et se prononce "o"',
      '• P se dit "pé" et se prononce "p"',
      '• Q se dit "qu" et se prononce "k"',
      '• R se dit "erre" et se prononce "r"',
      '• S se dit "esse" et se prononce "s" ou "z"',
      '• T se dit "té" et se prononce "t"',
      '• U se dit "u" et se prononce "u"',
      '• V se dit "vé" et se prononce "v"',
      '• W se dit "double vé" et se prononce "w"',
      '• X se dit "ixe" et se prononce "ks" ou "gz"',
      '• Y se dit "i grec" et se prononce "i" ou "j"',
      '• Z se dit "zède" et se prononce "z"'
    ],
    exercises: [
      {
        question: 'Combien de lettres compte l\'alphabet français ?',
        options: ['24', '25', '26', '27'],
        correctAnswer: 2,
        explanation: 'L\'alphabet français compte exactement 26 lettres.'
      },
      {
        question: 'Combien y a-t-il de voyelles dans l\'alphabet français ?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 1,
        explanation: 'Il y a 6 voyelles : A, E, I, O, U, Y.'
      },
      {
        question: 'Comment se dit la lettre "H" ?',
        options: ['Hache', 'Ache', 'Hé', 'H'],
        correctAnswer: 1,
        explanation: 'La lettre H se dit "ache" en français.'
      }
    ]
  },
  'francais-voyelles': {
  id: "francais-voyelles",
  title: "Les voyelles et les consonnes",
  description: "Apprendre à distinguer les voyelles et les consonnes en français",
  content: [
    "L’alphabet français compte 26 lettres.",
    "Parmi elles, il y a 6 voyelles : A, E, I, O, U, Y (le Y est parfois voyelle, parfois consonne).",
    "Toutes les autres lettres (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z) sont des consonnes.",
    "Les voyelles sont très importantes car elles permettent de former les syllabes et de donner du son aux mots.",
    "Exemple : le mot « maison » contient 3 voyelles (a, i, o) et 3 consonnes (m, s, n).",
    "Les consonnes bloquent ou modifient le passage de l’air quand on les prononce (comme B, D, K).",
    "Une syllabe contient toujours au moins une voyelle. Exemple : pa-pa = deux syllabes, chacune avec une voyelle.",
    "Les voyelles peuvent être courtes (a, e) ou nasales (an, on, in) : ce sont des sons caractéristiques du français."
  ],
  exercises: [
    {
      question: "Combien de voyelles y a-t-il dans l’alphabet français ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "Il y a 6 voyelles : A, E, I, O, U et Y (parfois)."
    },
    {
      question: "Quelle lettre peut être à la fois voyelle et consonne ?",
      options: ["W", "Y", "H", "Z"],
      correctAnswer: 1,
      explanation: "Le Y est parfois voyelle (comme dans 'voyage') et parfois consonne (comme dans 'yaourt')."
    },
    {
      question: "Dans le mot « chat », quelle est la voyelle ?",
      options: ["C", "H", "A", "T"],
      correctAnswer: 2,
      explanation: "La seule voyelle est la lettre A."
    },
    {
      question: "Vrai ou faux : une syllabe peut exister sans voyelle.",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "Faux. Une syllabe a toujours au moins une voyelle."
    },
    {
      question: "Complète : Le mot « livre » contient ____ voyelles.",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      explanation: "« Livre » contient 2 voyelles : i et e."
    }
  ]
},
  'francais-nombres': {
    id: 'francais-nombres',
    title: 'Les nombres',
    description: 'Compter de 1 à 100',
    content: [
      'Les nombres en français ont des règles spécifiques de formation.',
      'De 1 à 16, chaque nombre a un nom unique :',
      '1 = un/une, 2 = deux, 3 = trois, 4 = quatre, 5 = cinq',
      '6 = six, 7 = sept, 8 = huit, 9 = neuf, 10 = dix',
      '11 = onze, 12 = douze, 13 = treize, 14 = quatorze, 15 = quinze, 16 = seize',
      'De 17 à 19, on utilise "dix" + le chiffre des unités :',
      '17 = dix-sept, 18 = dix-huit, 19 = dix-neuf',
      'De 20 à 69, on utilise les dizaines + les unités :',
      '20 = vingt, 21 = vingt et un, 22 = vingt-deux, 23 = vingt-trois...',
      '30 = trente, 31 = trente et un, 32 = trente-deux...',
      '40 = quarante, 41 = quarante et un, 42 = quarante-deux...',
      '50 = cinquante, 51 = cinquante et un, 52 = cinquante-deux...',
      '60 = soixante, 61 = soixante et un, 62 = soixante-deux...',
      'De 70 à 79, on utilise "soixante" + "dix" + unités :',
      '70 = soixante-dix, 71 = soixante et onze, 72 = soixante-douze...',
      'De 80 à 89, on utilise "quatre-vingt" + unités :',
      '80 = quatre-vingts, 81 = quatre-vingt-un, 82 = quatre-vingt-deux...',
      'De 90 à 99, on utilise "quatre-vingt" + "dix" + unités :',
      '90 = quatre-vingt-dix, 91 = quatre-vingt-onze, 92 = quatre-vingt-douze...',
      '100 = cent',
      'Note : "et" s\'utilise seulement entre la dizaine et l\'unité pour 21, 31, 41, 51, 61, 71, 81, 91.'
    ],
    exercises: [
      {
        question: 'Comment dit-on 21 en français ?',
        options: ['Vingt-un', 'Vingt et un', 'Vingt-deux', 'Vingt-et-un'],
        correctAnswer: 1,
        explanation: '21 se dit "vingt et un" (avec "et").'
      },
      {
        question: 'Comment dit-on 80 en français ?',
        options: ['Huitante', 'Quatre-vingts', 'Octante', 'Huit-dix'],
        correctAnswer: 1,
        explanation: '80 se dit "quatre-vingts" en français standard.'
      },
      {
        question: 'Comment dit-on 95 en français ?',
        options: ['Quatre-vingt-quinze', 'Nonante-cinq', 'Quatre-vingt-dix-cinq', 'Quatre-vingt-cinq'],
        correctAnswer: 0,
        explanation: '95 se dit "quatre-vingt-quinze".'
      }
    ]
  },
  'francais-couleurs': {
    id: 'francais-couleurs',
    title: 'Les couleurs',
    description: 'Nommer les couleurs',
    content: [
      'Les couleurs en français sont des adjectifs qui s\'accordent avec le nom.',
      'Les couleurs de base :',
      '• Rouge (masculin et féminin identiques)',
      '• Bleu/bleue (bleue au féminin)',
      '• Vert/verte (verte au féminin)',
      '• Jaune (masculin et féminin identiques)',
      '• Noir/noire (noire au féminin)',
      '• Blanc/blanche (blanche au féminin)',
      '• Gris/grise (grise au féminin)',
      '• Marron (invariable, masculin et féminin identiques)',
      '• Orange (invariable, masculin et féminin identiques)',
      '• Rose (masculin et féminin identiques)',
      '• Violet/violette (violette au féminin)',
      '• Brun/brune (brune au féminin)',
      'Les couleurs composées :',
      '• Bleu ciel = bleu comme le ciel',
      '• Rouge sang = rouge comme le sang',
      '• Vert pomme = vert comme une pomme',
      '• Jaune citron = jaune comme un citron',
      '• Blanc cassé = blanc légèrement teinté',
      '• Gris perle = gris avec un reflet nacré',
      'Règles d\'accord :',
      '• La plupart des couleurs s\'accordent en genre et en nombre',
      '• Certaines couleurs sont invariables (marron, orange, kaki)',
      '• Les couleurs composées s\'accordent avec le premier mot',
      'Exemples d\'utilisation :',
      '• Une voiture rouge (féminin singulier)',
      '• Des livres bleus (masculin pluriel)',
      '• Une robe verte (féminin singulier)',
      '• Des murs blancs (masculin pluriel)'
    ],
    exercises: [
      {
        question: 'Quelle couleur est invariable en français ?',
        options: ['Rouge', 'Bleu', 'Marron', 'Vert'],
        correctAnswer: 2,
        explanation: 'Marron est invariable, masculin et féminin identiques.'
      },
      {
        question: 'Comment dit-on "white" au féminin ?',
        options: ['Blanc', 'Blanche', 'Blancs', 'Blanches'],
        correctAnswer: 1,
        explanation: 'Au féminin, "blanc" devient "blanche".'
      },
      {
        question: 'Quelle couleur s\'accorde en genre et en nombre ?',
        options: ['Orange', 'Marron', 'Bleu', 'Kaki'],
        correctAnswer: 2,
        explanation: 'Bleu s\'accorde : bleu/bleue/bleus/bleues.'
      }
    ]
  },
  "francais-famille": {
  id: "francais-famille",
  title: "Les membres de la famille",
  description: "Apprendre à nommer les membres de la famille en français",
  content: [
    "La famille est composée de plusieurs personnes liées entre elles.",
    "Voici les mots de base :",
    "Père = le papa",
    "Mère = la maman",
    "Frère = le fils de tes parents",
    "Sœur = la fille de tes parents",
    "Grand-père = le père de ton père ou de ta mère",
    "Grand-mère = la mère de ton père ou de ta mère",
    "Oncle = le frère de ton père ou de ta mère",
    "Tante = la sœur de ton père ou de ta mère",
    "Cousin = le fils de ton oncle ou de ta tante",
    "Cousine = la fille de ton oncle ou de ta tante"
  ],
  exercises: [
    {
      question: "Comment dit-on « father » en français ?",
      options: ["Frère", "Oncle", "Père", "Grand-père"],
      correctAnswer: 2,
      explanation: "« Father » en français se dit « Père »."
    },
    {
      question: "Qui est la fille de tes parents ?",
      options: ["Sœur", "Mère", "Tante", "Cousine"],
      correctAnswer: 0,
      explanation: "La fille de tes parents est ta sœur."
    },
    {
      question: "Vrai ou faux : l’oncle est le mari de ta tante.",
      options: ["Vrai", "Faux"],
      correctAnswer: 0,
      explanation: "Vrai, l’oncle est le frère de tes parents ou le mari de ta tante."
    }
  ]
},
"francais-animaux": {
  id: "francais-animaux",
  title: "Les animaux",
  description: "Découvrir le nom des animaux courants en français",
  content: [
    "Les animaux sont partout autour de nous, certains vivent à la maison, d’autres dans la nature.",
    "Animaux domestiques :",
    "Chien = dog",
    "Chat = cat",
    "Poisson = fish",
    "Oiseau = bird",
    "Animaux de la ferme :",
    "Vache = cow",
    "Mouton = sheep",
    "Cheval = horse",
    "Poule = chicken",
    "Animaux sauvages :",
    "Lion = lion",
    "Éléphant = elephant",
    "Tigre = tiger",
    "Singe = monkey"
  ],
  exercises: [
    {
      question: "Quel animal est le meilleur ami de l’homme ?",
      options: ["Chat", "Chien", "Cheval", "Lion"],
      correctAnswer: 1,
      explanation: "On dit que le chien est le meilleur ami de l’homme."
    },
    {
      question: "Comment dit-on « cat » en français ?",
      options: ["Poisson", "Oiseau", "Chat", "Chien"],
      correctAnswer: 2,
      explanation: "« Cat » se traduit par « Chat » en français."
    },
    {
      question: "Vrai ou faux : la vache est un animal sauvage.",
      options: ["Vrai", "Faux"],
      correctAnswer: 1,
      explanation: "Faux, la vache est un animal de la ferme."
    }
  ]
},
"francais-salutations": {
  id: "francais-salutations",
  title: "Les salutations",
  description: "Apprendre à dire bonjour, au revoir et demander des nouvelles",
  content: [
    "Les salutations permettent de commencer et de terminer une conversation poliment.",
    "Formules de base :",
    "Bonjour = le matin ou l’après-midi",
    "Bonsoir = le soir",
    "Salut = informel, avec des amis",
    "Au revoir = quand on part",
    "À bientôt = see you soon",
    "Bonne nuit = avant d’aller dormir",
    "Demander des nouvelles :",
    "Comment ça va ? / Ça va ?",
    "Réponses possibles : Ça va bien, Merci, Pas mal, Comme ci comme ça"
  ],
  exercises: [
    {
      question: "Que dit-on pour saluer quelqu’un le matin ?",
      options: ["Bonsoir", "Bonne nuit", "Bonjour", "Salut"],
      correctAnswer: 2,
      explanation: "On dit « Bonjour » le matin."
    },
    {
      question: "Quelle formule utilise-t-on pour dire good night ?",
      options: ["Bonsoir", "Bonne nuit", "Au revoir", "Salut"],
      correctAnswer: 1,
      explanation: "« Bonne nuit » correspond à good night."
    },
    {
      question: "Complète : « Comment ____ va ? »",
      options: ["ça", "tu", "on", "il"],
      correctAnswer: 0,
      explanation: "On dit : « Comment ça va ? »"
    }
  ]
},
  'francais-jours': {
    id: 'francais-jours',
    title: 'Les jours de la semaine',
    description: 'Lundi, mardi, mercredi...',
    content: [
      'La semaine française compte 7 jours, du lundi au dimanche.',
      'Les jours de la semaine en français :',
      '• Lundi (premier jour de la semaine en France)',
      '• Mardi',
      '• Mercredi',
      '• Jeudi',
      '• Vendredi',
      '• Samedi',
      '• Dimanche (dernier jour de la semaine)',
      'Caractéristiques des jours de la semaine :',
      '• Ce sont des noms masculins',
      '• Ils prennent une majuscule',
      '• Ils ne prennent pas d\'article défini (le, la, les)',
      '• On dit "lundi", pas "le lundi" (sauf dans des expressions spécifiques)',
      'Expressions utiles :',
      '• "Tous les lundis" = chaque lundi',
      '• "Le lundi matin" = le matin du lundi',
      '• "Lundi prochain" = le lundi de la semaine prochaine',
      '• "Lundi dernier" = le lundi de la semaine dernière',
      '• "Lundi en huit" = le lundi de la semaine prochaine',
      '• "Lundi en quinze" = le lundi dans deux semaines',
      'Les jours ouvrables :',
      '• Lundi, mardi, mercredi, jeudi, vendredi (5 jours)',
      '• Samedi et dimanche sont les jours de repos (week-end)',
      'En France, la semaine commence le lundi et se termine le dimanche.',
      'Les jours fériés sont des jours de repos supplémentaires.'
    ],
    exercises: [
      {
        question: 'Combien y a-t-il de jours dans une semaine ?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'Une semaine compte 7 jours.'
      },
      {
        question: 'Quel est le premier jour de la semaine en France ?',
        options: ['Dimanche', 'Lundi', 'Mardi', 'Samedi'],
        correctAnswer: 1,
        explanation: 'En France, la semaine commence le lundi.'
      },
      {
        question: 'Quels sont les jours de repos ?',
        options: ['Lundi et mardi', 'Mercredi et jeudi', 'Vendredi et samedi', 'Samedi et dimanche'],
        correctAnswer: 3,
        explanation: 'Samedi et dimanche sont les jours de repos (week-end).'
      }
    ]
  },
  'math-nombres-1-100': {
  id: "math-nombres-1-100",
  title: "Nombres de 1 à 100",
  description: "Compter et écrire les nombres en français jusqu’à 100",
  content: [
    "Les nombres de 1 à 100 permettent de compter et de calculer dans la vie quotidienne.",
    "De 1 à 20, les nombres sont particuliers :",
    "1 = un, 2 = deux, 3 = trois, 4 = quatre, 5 = cinq",
    "6 = six, 7 = sept, 8 = huit, 9 = neuf, 10 = dix",
    "11 = onze, 12 = douze, 13 = treize, 14 = quatorze, 15 = quinze",
    "16 = seize, 17 = dix-sept, 18 = dix-huit, 19 = dix-neuf, 20 = vingt",
    "À partir de 21, les nombres se forment en combinant dizaines et unités :",
    "21 = vingt et un, 22 = vingt-deux, … 29 = vingt-neuf",
    "30 = trente, puis 31 = trente et un, 32 = trente-deux, etc.",
    "40 = quarante, 50 = cinquante, 60 = soixante",
    "Les soixante-dix se forment avec 60 + 10 : 70 = soixante-dix, 71 = soixante et onze, 72 = soixante-douze…",
    "80 = quatre-vingts, puis 81 = quatre-vingt-un, 82 = quatre-vingt-deux…",
    "90 = quatre-vingt-dix, puis 91 = quatre-vingt-onze, 92 = quatre-vingt-douze…",
    "100 = cent.",
    "Exemple : 47 = quarante-sept, 68 = soixante-huit, 99 = quatre-vingt-dix-neuf."
  ],
  exercises: [
    {
      question: "Comment écrit-on 25 en français ?",
      options: ["Vingt-cinq", "Vingt-quatre", "Trente", "Vingt-sept"],
      correctAnswer: 0,
      explanation: "25 s’écrit « vingt-cinq »."
    },
    {
      question: "Quel est le nombre avant 50 ?",
      options: ["Quarante-neuf", "Quarante-huit", "Cinquante-et-un", "Cinquante"],
      correctAnswer: 0,
      explanation: "Le nombre juste avant 50 est 49 (quarante-neuf)."
    },
    {
      question: "Comment dit-on 71 en français ?",
      options: ["Soixante-onze", "Soixante et onze", "Septante et un", "Soixante-douze"],
      correctAnswer: 1,
      explanation: "71 = soixante et onze en français standard."
    },
    {
      question: "Vrai ou faux : 100 s’écrit « cent ».",
      options: ["Vrai", "Faux"],
      correctAnswer: 0,
      explanation: "C’est vrai, 100 s’écrit « cent »."
    }
  ]
},
'math-addition-simple': {
  id: "math-addition-simple",
  title: "Addition simple",
  description: "Apprendre à additionner deux nombres",
  content: [
    "L’addition est l’opération qui consiste à ajouter deux nombres pour trouver un total.",
    "On utilise le signe « + ».",
    "Exemples :",
    "2 + 3 = 5",
    "4 + 6 = 10",
    "10 + 7 = 17",
    "L’addition est commutative : cela veut dire que 3 + 2 = 2 + 3.",
    "On peut additionner avec les doigts, avec des objets ou en ligne."
  ],
  exercises: [
    {
      question: "Combien font 4 + 3 ?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 1,
      explanation: "4 + 3 = 7."
    },
    {
      question: "Quel est le signe de l’addition ?",
      options: ["-", "+", "x", "/"],
      correctAnswer: 1,
      explanation: "Le signe de l’addition est « + »."
    }
  ]
},
'math-soustraction-simple': {
  id: "math-soustraction-simple",
  title: "Soustraction simple",
  description: "Apprendre à soustraire deux nombres",
  content: [
    "La soustraction est l’opération inverse de l’addition. Elle sert à enlever, retirer ou comparer.",
    "On utilise le signe « - ».",
    "Exemples :",
    "5 - 2 = 3",
    "10 - 4 = 6",
    "8 - 8 = 0",
    "La soustraction permet aussi de calculer une différence entre deux nombres."
  ],
  exercises: [
    {
      question: "Combien font 9 - 4 ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 0,
      explanation: "9 - 4 = 5."
    },
    {
      question: "Quel est le signe de la soustraction ?",
      options: ["+", "-", "x", "="],
      correctAnswer: 1,
      explanation: "Le signe de la soustraction est « - »."
    }
  ]
},
'math-formes-geometriques': {
  id: "math-formes-geometriques",
  title: "Formes géométriques",
  description: "Apprendre à reconnaître les formes de base",
  content: [
    "La géométrie étudie les formes et les figures.",
    "Les principales formes géométriques :",
    "– Le cercle : rond, sans côtés, comme une roue.",
    "– Le carré : 4 côtés égaux et 4 angles droits.",
    "– Le rectangle : 4 côtés avec des côtés opposés égaux.",
    "– Le triangle : 3 côtés.",
    "– L’étoile, le cœur, l’ovale : formes plus complexes mais utiles.",
    "On utilise ces formes dans la vie quotidienne : les panneaux, les objets, les bâtiments."
  ],
  exercises: [
    {
      question: "Combien de côtés a un triangle ?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "Un triangle a 3 côtés."
    },
    {
      question: "Quelle forme a 4 côtés égaux ?",
      options: ["Cercle", "Carré", "Triangle", "Rectangle"],
      correctAnswer: 1,
      explanation: "Le carré a 4 côtés égaux."
    }
  ]
},
'math-mesures-simples': {
  id: "math-mesures-simples",
  title: "Mesures simples",
  description: "Apprendre à mesurer avec les unités de base",
  content: [
    "La longueur mesure une distance.",
    "L’unité de base en mathématiques est le mètre (m).",
    "1 mètre = 100 centimètres (cm).",
    "10 millimètres (mm) = 1 centimètre (cm).",
    "Exemple : une règle d’école mesure 30 cm, soit 0,3 mètre.",
    "On utilise :",
    "– le millimètre (mm) pour de petites mesures",
    "– le centimètre (cm) pour les objets",
    "– le mètre (m) pour les grandes distances",
    "– le kilomètre (km) pour les routes"
  ],
  exercises: [
    {
      question: "Combien de centimètres y a-t-il dans 1 mètre ?",
      options: ["10", "50", "100", "1000"],
      correctAnswer: 2,
      explanation: "1 mètre = 100 centimètres."
    },
    {
      question: "Quelle unité utilise-t-on pour mesurer la distance entre deux villes ?",
      options: ["cm", "m", "km", "mm"],
      correctAnswer: 2,
      explanation: "On utilise le kilomètre (km)."
    }
  ]
},
"math-problemes-simples": {
  id: "math-problemes-simples",
  title: "Problèmes simples",
  description: "Résoudre des situations de la vie quotidienne avec les mathématiques",
  content: [
    "Un problème mathématique raconte une petite histoire dans laquelle on doit trouver la réponse avec une opération.",
    "Exemple 1 : J’ai 3 pommes. J’en achète 2 de plus. Combien ai-je de pommes ? (3 + 2 = 5).",
    "Exemple 2 : J’ai 10 billes. J’en donne 4 à mon ami. Combien me reste-t-il ? (10 - 4 = 6).",
    "Exemple 3 : La maîtresse a 12 crayons et les partage entre 4 élèves. Combien de crayons chacun reçoit-il ? (12 ÷ 4 = 3).",
    "Pour résoudre un problème, on suit 3 étapes :",
    "1. Lire attentivement la question.",
    "2. Identifier les données et ce qu’on cherche.",
    "3. Choisir la bonne opération (addition, soustraction, division, etc.)."
  ],
  exercises: [
    {
      question: "Paul a 5 bonbons. Sa maman lui en donne 3 de plus. Combien en a-t-il au total ?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 3,
      explanation: "5 + 3 = 8 bonbons."
    },
    {
      question: "Lina a 12 billes. Elle en perd 5. Combien lui reste-t-il ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "12 - 5 = 7 billes."
    }
  ]
},
"sciences-plantes": {
  id: "sciences-plantes",
  title: "Les plantes",
  description: "Comment poussent les plantes et les fleurs",
  content: [
    "Les plantes sont des êtres vivants. Elles ont besoin de plusieurs éléments pour vivre :",
    "– De la terre : pour leurs racines et les nutriments",
    "– De l’eau : pour boire et se développer",
    "– De la lumière du soleil : pour fabriquer leur nourriture grâce à la photosynthèse",
    "– De l’air : elles absorbent le dioxyde de carbone et rejettent de l’oxygène",
    "Le cycle de vie d’une plante :",
    "1. La graine est plantée dans la terre",
    "2. Elle germe et sort une petite tige",
    "3. Les racines grandissent et s’enfoncent",
    "4. La plante pousse, forme des feuilles et parfois des fleurs",
    "5. Les fleurs donnent des fruits et de nouvelles graines",
    "Exemple : le pommier donne des pommes avec des pépins qui peuvent redonner un autre pommier."
  ],
  exercises: [
    {
      question: "De quoi une plante a-t-elle besoin pour pousser ?",
      options: ["Seulement de l’eau", "De l’eau, du soleil et de la terre", "Du lait", "Du sucre"],
      correctAnswer: 1,
      explanation: "Une plante a besoin d’eau, de soleil, de terre et d’air."
    },
    {
      question: "Comment appelle-t-on le processus par lequel les plantes fabriquent leur nourriture ?",
      options: ["Respiration", "Photosynthèse", "Germination", "Nutrition"],
      correctAnswer: 1,
      explanation: "C’est la photosynthèse."
    }
  ]
},
"sciences-terre": {
  id: "sciences-terre",
  title: "La Terre",
  description: "Notre planète et ses merveilles",
  content: [
    "La Terre est la planète où nous vivons. Elle fait partie du système solaire et tourne autour du Soleil.",
    "La Terre est composée de :",
    "– 70 % d’eau (océans, mers, rivières, lacs)",
    "– 30 % de continents et d’îles",
    "Elle est protégée par une atmosphère qui contient l’air que nous respirons et qui nous protège du soleil.",
    "La Terre tourne sur elle-même en 24 heures (c’est le jour et la nuit).",
    "Elle tourne autour du Soleil en 365 jours (c’est une année).",
    "La Terre possède une grande diversité : montagnes, plaines, forêts, déserts, océans."
  ],
  exercises: [
    {
      question: "Combien de temps met la Terre pour tourner sur elle-même ?",
      options: ["1 jour", "1 mois", "1 semaine", "1 an"],
      correctAnswer: 0,
      explanation: "La Terre met 24 heures, soit un jour."
    },
    {
      question: "Quelle proportion de la Terre est recouverte par les océans ?",
      options: ["30 %", "50 %", "70 %", "90 %"],
      correctAnswer: 2,
      explanation: "70 % de la surface terrestre est recouverte par les océans."
    }
  ]
},
"sciences-energie": {
  id: "sciences-energie",
  title: "L’énergie",
  description: "Les différentes formes d’énergie",
  content: [
    "L’énergie est ce qui permet de faire fonctionner les choses.",
    "Il existe plusieurs formes d’énergie :",
    "– L’énergie solaire (vient du soleil)",
    "– L’énergie électrique (prise de courant, batteries)",
    "– L’énergie mécanique (mouvement, vélo, voiture)",
    "– L’énergie chimique (dans les aliments que nous mangeons)",
    "– L’énergie thermique (chaleur, feu, radiateur)",
    "Nous avons besoin d’énergie pour vivre (alimentation) et pour utiliser les machines (électricité).",
    "L’énergie peut être renouvelable (soleil, vent, eau) ou non renouvelable (pétrole, charbon)."
  ],
  exercises: [
    {
      question: "Quelle est l’énergie qui vient du soleil ?",
      options: ["Énergie thermique", "Énergie solaire", "Énergie mécanique", "Énergie chimique"],
      correctAnswer: 1,
      explanation: "Le soleil fournit l’énergie solaire."
    },
    {
      question: "Donne un exemple d’énergie renouvelable.",
      options: ["Charbon", "Pétrole", "Vent", "Gaz"],
      correctAnswer: 2,
      explanation: "Le vent est une énergie renouvelable."
    }
  ]
},
"sciences-animaux": {
  id: "sciences-animaux",
  title: "Les animaux",
  description: "Découvrir le monde animal",
  content: [
    "Les animaux sont des êtres vivants qui se déplacent, mangent et se reproduisent.",
    "On peut les classer en plusieurs groupes :",
    "– Animaux domestiques : chien, chat, cheval",
    "– Animaux sauvages : lion, tigre, éléphant",
    "– Animaux de la ferme : vache, mouton, poule",
    "Certains animaux vivent dans l’eau (poissons, dauphins), d’autres sur terre (lions, éléphants) et d’autres volent (oiseaux).",
    "Les animaux peuvent être herbivores (mangent des plantes), carnivores (mangent de la viande), ou omnivores (mangent de tout)."
  ],
  exercises: [
    {
      question: "Que mange un herbivore ?",
      options: ["De la viande", "Des plantes", "De tout", "Des insectes"],
      correctAnswer: 1,
      explanation: "Les herbivores se nourrissent de plantes."
    },
    {
      question: "Quel est un animal domestique ?",
      options: ["Lion", "Chat", "Tigre", "Éléphant"],
      correctAnswer: 1,
      explanation: "Le chat est un animal domestique."
    }
  ]
},
"sciences-eau": {
  id: "sciences-eau",
  title: "L’eau",
  description: "Le cycle de l’eau et ses propriétés",
  content: [
    "L’eau est essentielle à la vie. Sans eau, ni les plantes, ni les animaux, ni les humains ne peuvent survivre.",
    "Le cycle de l’eau fonctionne ainsi :",
    "1. L’eau des mers, lacs et rivières s’évapore avec la chaleur du soleil.",
    "2. La vapeur d’eau forme des nuages.",
    "3. Les nuages deviennent lourds et donnent de la pluie (précipitations).",
    "4. L’eau retourne dans les rivières, lacs et mers.",
    "L’eau existe sous 3 états :",
    "– Liquide (rivière, pluie, mer)",
    "– Solide (glace, neige)",
    "– Gazeux (vapeur d’eau)."
  ],
  exercises: [
    {
      question: "Quel est l’état de l’eau quand elle devient glace ?",
      options: ["Liquide", "Solide", "Gazeux", "Vapeur"],
      correctAnswer: 1,
      explanation: "La glace est l’état solide de l’eau."
    },
    {
      question: "Comment s’appelle le retour de l’eau des nuages vers la terre ?",
      options: ["Évaporation", "Condensation", "Précipitation", "Filtration"],
      correctAnswer: 2,
      explanation: "C’est la précipitation."
    }
  ]
},
"sciences-air": {
  id: "sciences-air",
  title: "L’air",
  description: "L’atmosphère et la respiration",
  content: [
    "L’air est invisible mais il est partout autour de nous.",
    "Il est composé principalement de :",
    "– Oxygène (21 %)",
    "– Azote (78 %)",
    "– Autres gaz (1 %)",
    "Les êtres humains et les animaux respirent l’oxygène pour vivre.",
    "Les plantes absorbent le dioxyde de carbone (CO₂) et rejettent de l’oxygène grâce à la photosynthèse.",
    "Sans air, la vie sur Terre serait impossible.",
    "L’air permet aussi le vent, les sons, et la régulation de la température de la Terre."
  ],
  exercises: [
    {
      question: "Quel gaz est le plus important pour la respiration humaine ?",
      options: ["Azote", "Oxygène", "Dioxyde de carbone", "Hélium"],
      correctAnswer: 1,
      explanation: "Nous respirons l’oxygène."
    },
    {
      question: "Que rejettent les plantes après la photosynthèse ?",
      options: ["CO₂", "Azote", "Oxygène", "Hydrogène"],
      correctAnswer: 2,
      explanation: "Les plantes rejettent de l’oxygène."
    }
  ]
},
 "informatique-ordinateur": {
  id: "informatique-ordinateur",
  title: "Qu’est-ce qu’un ordinateur ?",
  description: "Découvrir les composants de base d’un ordinateur",
  content: [
    "Un ordinateur est une machine électronique capable de traiter et stocker des informations.",
    "Il est composé de deux parties principales :",
    "👉 Le matériel (hardware) : tout ce que l’on peut toucher, comme l’écran, le clavier, la souris, l’unité centrale.",
    "👉 Le logiciel (software) : les programmes qui permettent à l’ordinateur de fonctionner (Windows, macOS, applications, jeux).",
    "Les principaux composants :",
    "– L’écran (affiche les informations)",
    "– Le clavier et la souris (permettent d’entrer des données)",
    "– L’unité centrale (cœur de l’ordinateur, avec processeur et mémoire)",
    "Un ordinateur peut être un PC, un portable, une tablette ou un smartphone."
  ],
  exercises: [
    {
      question: "Quel élément affiche les informations sur un ordinateur ?",
      options: ["Clavier", "Écran", "Souris", "Unité centrale"],
      correctAnswer: 1,
      explanation: "C’est l’écran qui affiche les informations."
    },
    {
      question: "Comment appelle-t-on les programmes qui font fonctionner l’ordinateur ?",
      options: ["Matériel", "Câbles", "Logiciels", "Disques"],
      correctAnswer: 2,
      explanation: "Les logiciels sont les programmes."
    }
  ]
},
"informatique-clavier-souris": {
  id: "informatique-clavier-souris",
  title: "Le clavier et la souris",
  description: "Apprendre à utiliser les périphériques d’entrée",
  content: [
    "Le clavier et la souris sont des périphériques d’entrée.",
    "👉 Le clavier sert à écrire du texte, entrer des chiffres et utiliser des raccourcis.",
    "Touches importantes :",
    "– Entrée (valider une action)",
    "– Espace (ajouter un espace)",
    "– Suppr (supprimer)",
    "– Ctrl + C (copier), Ctrl + V (coller)",
    "👉 La souris permet de déplacer le curseur à l’écran.",
    "Boutons principaux :",
    "– Clic gauche (sélectionner, ouvrir un fichier)",
    "– Clic droit (menu contextuel)",
    "– Molette (faire défiler une page)."
  ],
  exercises: [
    {
      question: "Quelle combinaison permet de copier du texte ?",
      options: ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
      correctAnswer: 1,
      explanation: "Ctrl + C sert à copier."
    },
    {
      question: "Quel bouton de la souris ouvre un menu contextuel ?",
      options: ["Clic gauche", "Clic droit", "Molette", "Entrée"],
      correctAnswer: 1,
      explanation: "Le clic droit ouvre un menu contextuel."
    }
  ]
},
"informatique-ecran-fenetres": {
  id: "informatique-ecran-fenetres",
  title: "L’écran et les fenêtres",
  description: "Naviguer dans l’interface graphique",
  content: [
    "L’écran est la surface où s’affichent toutes les informations.",
    "Dans un ordinateur, les programmes s’ouvrent dans des fenêtres.",
    "Une fenêtre contient :",
    "– Une barre de titre (nom du programme ou du fichier)",
    "– Des boutons : réduire, agrandir, fermer",
    "– Une zone de travail (contenu principal)",
    "On peut :",
    "– Déplacer une fenêtre (cliquer-glisser la barre de titre)",
    "– Agrandir ou réduire une fenêtre",
    "– Fermer un programme en cliquant sur la croix rouge (X)."
  ],
  exercises: [
    {
      question: "Comment fermer une fenêtre ?",
      options: ["Clic droit", "Bouton X", "Molette", "Entrée"],
      correctAnswer: 1,
      explanation: "On ferme une fenêtre avec le bouton X."
    },
    {
      question: "Où se trouve le nom du programme dans une fenêtre ?",
      options: ["Zone de travail", "Barre de titre", "Barre des tâches", "Écran"],
      correctAnswer: 1,
      explanation: "Le nom s’affiche dans la barre de titre."
    }
  ]
},
"informatique-fichiers-dossiers": {
  id: "informatique-fichiers-dossiers",
  title: "Les fichiers et dossiers",
  description: "Organiser et gérer ses documents",
  content: [
    "Un fichier est un document stocké dans l’ordinateur (texte, image, vidéo, musique).",
    "Chaque fichier a un nom et une extension (.docx, .jpg, .mp3).",
    "Un dossier est une « boîte » qui contient plusieurs fichiers et/ou d’autres dossiers.",
    "Cela permet de bien organiser ses données.",
    "Exemple : un dossier « École » peut contenir un fichier « Maths.docx » et un dossier « Sciences ». ",
    "Les principales actions :",
    "– Créer un fichier ou un dossier",
    "– Renommer",
    "– Copier / coller",
    "– Supprimer",
    "– Déplacer"
  ],
  exercises: [
    {
      question: "Que contient un dossier ?",
      options: ["Uniquement du texte", "Des fichiers et d’autres dossiers", "Seulement des vidéos", "Des programmes"],
      correctAnswer: 1,
      explanation: "Un dossier peut contenir des fichiers et d’autres dossiers."
    },
    {
      question: "Que signifie l’extension .jpg ?",
      options: ["Image", "Musique", "Texte", "Vidéo"],
      correctAnswer: 0,
      explanation: ".jpg correspond à une image."
    }
  ]
},
"informatique-internet-navigation": {
  id: "informatique-internet-navigation",
  title: "Internet et navigation",
  description: "Surfer sur le web en toute sécurité",
  content: [
    "Internet est un réseau mondial qui relie des millions d’ordinateurs.",
    "Pour naviguer, on utilise un navigateur (Chrome, Firefox, Edge, Safari).",
    "On tape une adresse (URL) pour accéder à un site web.",
    "Les moteurs de recherche (Google, Bing, Qwant) aident à trouver des informations.",
    "Règles de sécurité :",
    "– Ne pas partager ses mots de passe",
    "– Vérifier l’adresse des sites (https://)",
    "– Ne pas cliquer sur des liens suspects",
    "– Utiliser un antivirus."
  ],
  exercises: [
    {
      question: "Quel outil permet de visiter des sites internet ?",
      options: ["Clavier", "Navigateur", "Logiciel de dessin", "Ordinateur portable"],
      correctAnswer: 1,
      explanation: "On utilise un navigateur pour accéder aux sites web."
    },
    {
      question: "Que signifie le « s » dans https ?",
      options: ["Sécurisé", "Site", "Système", "Serveur"],
      correctAnswer: 0,
      explanation: "Le « s » signifie sécurisé."
    }
  ]
},
"informatique-messagerie": {
  id: "informatique-messagerie",
  title: "La messagerie",
  description: "Envoyer et recevoir des emails",
  content: [
    "La messagerie permet d’envoyer et recevoir des messages électroniques (emails).",
    "Un email contient :",
    "– L’adresse du destinataire",
    "– L’objet (sujet du message)",
    "– Le corps du message (le texte)",
    "– Une signature (optionnelle)",
    "On peut aussi joindre des fichiers (pièces jointes).",
    "Exemple : envoyer une photo, un document Word, une facture.",
    "Règles importantes :",
    "– Vérifier l’adresse avant d’envoyer",
    "– Écrire poliment",
    "– Ne pas ouvrir les emails suspects (phishing)"
  ],
  exercises: [
    {
      question: "Comment appelle-t-on un fichier ajouté à un email ?",
      options: ["Signature", "Lien", "Pièce jointe", "Sujet"],
      correctAnswer: 2,
      explanation: "Un fichier ajouté s’appelle une pièce jointe."
    },
    {
      question: "Que doit contenir un email avant d’être envoyé ?",
      options: ["L’adresse du destinataire", "Un mot de passe", "Un antivirus", "Un dossier"],
      correctAnswer: 0,
      explanation: "Il faut l’adresse du destinataire pour envoyer un email."
    }
  ]
},

  'islam-piliers-islam': {
    id: 'islam-piliers-islam',
    title: 'Les piliers de l\'Islam',
    description: 'Les cinq piliers fondamentaux de la religion musulmane',
    content: [
      'L\'Islam repose sur cinq piliers fondamentaux qui constituent la base de la foi musulmane.',
      'Ces piliers sont obligatoires pour tout musulman et forment le cadre de la pratique religieuse.',
      'Le premier pilier : La Chahada (profession de foi)',
      'Le deuxième pilier : As-Salat (les cinq prières quotidiennes)',
      'Le troisième pilier : As-Sawm (le jeûne du mois de Ramadan)',
      'Le quatrième pilier : Az-Zakat (l\'aumône obligatoire)',
      'Le cinquième pilier : Al-Hajj (le pèlerinage à La Mecque)',
      'Ces piliers sont mentionnés dans le hadith du Prophète Muhammad ﷺ :',
      '"L\'Islam est bâti sur cinq piliers : témoigner qu\'il n\'y a de divinité qu\'Allah et que Muhammad est Son messager, accomplir la prière, acquitter la Zakat, jeûner le mois de Ramadan et effectuer le pèlerinage à la Maison d\'Allah."',
      'Chaque pilier a ses propres règles et conditions que nous étudierons en détail.'
    ],
    exercises: [
      {
        question: 'Combien y a-t-il de piliers dans l\'Islam ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'L\'Islam repose sur 5 piliers fondamentaux.'
      },
      {
        question: 'Quel est le premier pilier de l\'Islam ?',
        options: ['La prière', 'La Chahada', 'Le jeûne', 'L\'aumône'],
        correctAnswer: 1,
        explanation: 'Le premier pilier est la Chahada (profession de foi).'
      },
      {
        question: 'Quel est le quatrième pilier de l\'Islam ?',
        options: ['La prière', 'Le jeûne', 'L\'aumône', 'Le pèlerinage'],
        correctAnswer: 2,
        explanation: 'Le quatrième pilier est Az-Zakat (l\'aumône obligatoire).'
      }
    ]
  },
  'islam-profession-foi': {
    id: 'islam-profession-foi',
    title: 'La profession de foi',
    description: 'La Chahada et son importance',
    content: [
      'La Chahada est la déclaration de foi qui fait d\'une personne un musulman.',
      'Elle se compose de deux parties essentielles :',
      'Première partie : "Ash-hadu an la ilaha illa Allah"',
      'Traduction : "Je témoigne qu\'il n\'y a de divinité qu\'Allah"',
      'Deuxième partie : "Wa ash-hadu anna Muhammadan rasulullah"',
      'Traduction : "Et je témoigne que Muhammad est le messager d\'Allah"',
      'La Chahada complète est donc : "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulullah"',
      'Cette déclaration doit être prononcée avec conviction et compréhension.',
      'Elle implique de rejeter toute autre divinité et d\'accepter Allah comme unique Dieu.',
      'Elle implique aussi de reconnaître Muhammad ﷺ comme le dernier prophète envoyé par Allah.',
      'La Chahada est le premier acte d\'adoration et la base de toute la pratique islamique.',
      'Elle doit être récitée au moins une fois dans sa vie pour être considéré comme musulman.'
    ],
    exercises: [
      {
        question: 'Combien de parties compose la Chahada ?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: 'La Chahada se compose de 2 parties essentielles.'
      },
      {
        question: 'Que signifie "Ash-hadu an la ilaha illa Allah" ?',
        options: ['Je témoigne qu\'il n\'y a de divinité qu\'Allah', 'Je témoigne que Muhammad est le messager', 'Je prie Allah', 'Je remercie Allah'],
        correctAnswer: 0,
        explanation: 'Cela signifie "Je témoigne qu\'il n\'y a de divinité qu\'Allah".'
      },
      {
        question: 'Quand doit-on prononcer la Chahada pour devenir musulman ?',
        options: ['Jamais', 'Au moins une fois dans sa vie', 'Tous les jours', 'Seulement le vendredi'],
        correctAnswer: 1,
        explanation: 'La Chahada doit être prononcée au moins une fois dans sa vie.'
      }
    ]
  },
  'islam-priere': {
    id: 'islam-priere',
    title: 'La prière',
    description: 'Les cinq prières quotidiennes et leurs règles',
    content: [
      'La prière (As-Salat) est le deuxième pilier de l\'Islam et le lien direct avec Allah.',
      'Allah a prescrit cinq prières obligatoires par jour :',
      '1. Fajr (l\'aube) : priée avant le lever du soleil',
      '2. Dhuhr (midi) : priée après le passage du soleil au zénith',
      '3. Asr (l\'après-midi) : priée dans l\'après-midi',
      '4. Maghrib (le coucher) : priée après le coucher du soleil',
      '5. Isha (la nuit) : priée dans la nuit',
      'Chaque prière a un nombre spécifique de raka\'at (unités de prière) :',
      '• Fajr : 2 raka\'at',
      '• Dhuhr : 4 raka\'at',
      '• Asr : 4 raka\'at',
      '• Maghrib : 3 raka\'at',
      '• Isha : 4 raka\'at',
      'La prière comprend des gestes spécifiques : la position debout, l\'inclinaison, la prosternation et l\'assise.',
      'Elle se fait en direction de la Kaaba (Qibla) et nécessite la pureté rituelle (Wudu).'
    ],
    exercises: [
      {
        question: 'Combien de prières obligatoires y a-t-il par jour ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'Il y a 5 prières obligatoires par jour.'
      },
      {
        question: 'Quelle prière se fait avant le lever du soleil ?',
        options: ['Dhuhr', 'Fajr', 'Asr', 'Maghrib'],
        correctAnswer: 1,
        explanation: 'Fajr se fait avant le lever du soleil.'
      },
      {
        question: 'Combien de raka\'at y a-t-il dans la prière de Maghrib ?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Maghrib comprend 3 raka\'at.'
      }
    ]
  },
  'islam-jeune': {
    id: 'islam-jeune',
    title: 'Le jeûne',
    description: 'Le Ramadan et ses bienfaits',
    content: [
      'Le jeûne (As-Sawm) est le troisième pilier de l\'Islam et se pratique principalement pendant le mois de Ramadan.',
      'Le Ramadan est le neuvième mois du calendrier islamique (hijri).',
      'Pendant ce mois, les musulmans jeûnent de l\'aube (Fajr) jusqu\'au coucher du soleil (Maghrib).',
      'Le jeûne implique de s\'abstenir de :',
      '• Manger et boire',
      '• Avoir des relations conjugales',
      '• Fumer',
      '• Mentir, calomnier ou commettre des péchés',
      'Les bienfaits du jeûne sont nombreux :',
      '• Il développe la patience et la maîtrise de soi',
      '• Il rapproche d\'Allah et renforce la foi',
      '• Il permet de ressentir la faim des pauvres',
      '• Il purifie l\'âme et expie les péchés',
      'Le jeûne du Ramadan est obligatoire pour tout musulman pubère et en bonne santé.',
      'Les personnes malades, âgées, enceintes ou en voyage peuvent reporter ou compenser le jeûne.',
      'La rupture du jeûne se fait avec des dattes et de l\'eau, suivant la tradition du Prophète ﷺ.'
    ],
    exercises: [
      {
        question: 'Pendant combien de temps jeûne-t-on chaque jour du Ramadan ?',
        options: ['De minuit à midi', 'De l\'aube au coucher du soleil', 'De midi à minuit', 'De 6h à 18h'],
        correctAnswer: 1,
        explanation: 'On jeûne de l\'aube (Fajr) jusqu\'au coucher du soleil (Maghrib).'
      },
      {
        question: 'Quel est le neuvième mois du calendrier islamique ?',
        options: ['Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Hijja'],
        correctAnswer: 1,
        explanation: 'Ramadan est le neuvième mois du calendrier islamique.'
      },
      {
        question: 'Avec quoi rompt-on traditionnellement le jeûne ?',
        options: ['Du pain et de l\'eau', 'Des dattes et de l\'eau', 'Du riz et de l\'eau', 'De la viande et de l\'eau'],
        correctAnswer: 1,
        explanation: 'On rompt traditionnellement le jeûne avec des dattes et de l\'eau.'
      }
    ]
  },
  'islam-aumone': {
    id: 'islam-aumone',
    title: 'L\'aumône',
    description: 'La Zakat et la charité en Islam',
    content: [
      'L\'aumône (Az-Zakat) est le quatrième pilier de l\'Islam et une obligation pour les musulmans aisés.',
      'La Zakat est une aumône obligatoire calculée sur les biens et richesses.',
      'Elle représente généralement 2,5% des biens détenus pendant une année lunaire complète.',
      'Les conditions pour être redevable de la Zakat :',
      '• Être musulman',
      '• Être pubère et sain d\'esprit',
      '• Posséder le Nisab (seuil minimum de richesse)',
      '• Posséder ces biens pendant une année lunaire complète',
      'Les biens soumis à la Zakat incluent :',
      '• L\'or et l\'argent',
      '• L\'argent en banque',
      '• Les actions et investissements',
      '• Le bétail et les récoltes',
      'Les bénéficiaires de la Zakat sont définis dans le Coran :',
      '• Les pauvres et nécessiteux',
      '• Les collecteurs de Zakat',
      '• Les nouveaux convertis',
      '• Les voyageurs en difficulté',
      '• Les combattants dans le sentier d\'Allah',
      'En plus de la Zakat, la Sadaqa (aumône volontaire) est encouragée pour aider les plus démunis.'
    ],
    exercises: [
      {
        question: 'Quel pourcentage représente généralement la Zakat ?',
        options: ['1%', '2,5%', '5%', '10%'],
        correctAnswer: 1,
        explanation: 'La Zakat représente généralement 2,5% des biens.'
      },
      {
        question: 'Combien de temps faut-il posséder des biens pour être redevable de la Zakat ?',
        options: ['6 mois', '1 année lunaire', '2 ans', '5 ans'],
        correctAnswer: 1,
        explanation: 'Il faut posséder les biens pendant 1 année lunaire complète.'
      },
      {
        question: 'Qui peut bénéficier de la Zakat ?',
        options: ['Seulement les musulmans', 'Seulement les pauvres', 'Les pauvres et nécessiteux', 'Tout le monde'],
        correctAnswer: 2,
        explanation: 'Les pauvres et nécessiteux peuvent bénéficier de la Zakat.'
      }
    ]
  },
  'islam-pelerinage': {
    id: 'islam-pelerinage',
    title: 'Le pèlerinage',
    description: 'Le Hajj et ses étapes',
    content: [
      'Le pèlerinage (Al-Hajj) est le cinquième pilier de l\'Islam et se déroule à La Mecque.',
      'Il est obligatoire une fois dans sa vie pour tout musulman capable physiquement et financièrement.',
      'Le Hajj se déroule pendant le mois de Dhul Hijja, le douzième mois du calendrier islamique.',
      'Les principales étapes du Hajj sont :',
      '1. L\'Ihram : état de sacralisation avec des vêtements blancs',
      '2. Le Tawaf : circumambulation autour de la Kaaba (7 tours)',
      '3. Le Sa\'i : parcours entre Safa et Marwa (7 allers-retours)',
      '4. Le jour d\'Arafat : station sur la plaine d\'Arafat (9 Dhul Hijja)',
      '5. Muzdalifa : nuit de prière et collecte de cailloux',
      '6. La lapidation des stèles : à Mina (10-13 Dhul Hijja)',
      '7. Le sacrifice : offrande d\'un animal (Eid Al-Adha)',
      '8. Le Tawaf final : dernière circumambulation',
      'Le Hajj symbolise l\'unité de la communauté musulmane (Ummah).',
      'Il rappelle les épreuves du Prophète Ibrahim (Abraham) et de sa famille.',
      'Il purifie l\'âme et efface les péchés passés.',
      'Le Hajj se termine par la célébration de l\'Eid Al-Adha (fête du sacrifice).',
      'Les pèlerins reviennent chez eux avec le titre honorifique de "Hajj" ou "Hajja".'
    ],
    exercises: [
      {
        question: 'Combien de fois le Hajj est-il obligatoire dans la vie ?',
        options: ['Jamais', 'Une fois', 'Deux fois', 'Tous les ans'],
        correctAnswer: 1,
        explanation: 'Le Hajj est obligatoire une fois dans la vie pour ceux qui en sont capables.'
      },
      {
        question: 'En quel mois se déroule le Hajj ?',
        options: ['Ramadan', 'Shawwal', 'Dhul Hijja', 'Muharram'],
        correctAnswer: 2,
        explanation: 'Le Hajj se déroule pendant le mois de Dhul Hijja.'
      },
      {
        question: 'Combien de tours fait-on autour de la Kaaba lors du Tawaf ?',
        options: ['3 tours', '5 tours', '7 tours', '10 tours'],
        correctAnswer: 2,
        explanation: 'On fait 7 tours autour de la Kaaba lors du Tawaf.'
      }
    ]
  },
    'histoire-creation-univers': {
    id: 'histoire-creation-univers',
    title: 'La création de l\'univers',
    description: 'Depuis le début selon Ibn Kathir - Al-Bidayah wa An-Nihayah',
    content: [
      'Selon l\'Islam et les récits d\'Ibn Kathir dans "Al-Bidayah wa An-Nihayah", l\'univers fut créé par Allah.',
      'Allah existait avant toute chose, et Il créa l\'univers à partir du néant.',
      'Le premier être créé fut le Trône d\'Allah (Al-Arsh), qui est le plus grand de Ses créations.',
      'Ensuite, Allah créa la Table Gardée (Al-Lawh Al-Mahfuz) où sont inscrits tous les événements.',
      'Allah créa le Calame (Al-Qalam) qui écrivit sur la Table Gardée tout ce qui devait arriver.',
      'Puis Allah créa les cieux et la terre en six jours, comme mentionné dans le Coran.',
      'Les cieux furent créés sans piliers visibles, soutenus par la puissance d\'Allah.',
      'Allah créa les étoiles, les planètes et tous les corps célestes.',
      'Chaque étoile a sa fonction : certaines guident les voyageurs, d\'autres décorent le ciel.',
      'L\'univers entier témoigne de la grandeur et de la sagesse d\'Allah.',
      'Cette création parfaite montre qu\'Allah est le Créateur de toute chose.',
      'L\'homme doit méditer sur cette création pour renforcer sa foi en Allah.'
    ],
    exercises: [
      {
        question: 'Quel fut le premier être créé par Allah ?',
        options: ['La Terre', 'Le Trône d\'Allah', 'Les étoiles', 'L\'homme'],
        correctAnswer: 1,
        explanation: 'Le premier être créé fut le Trône d\'Allah (Al-Arsh).'
      },
      {
        question: 'En combien de jours Allah créa-t-Il les cieux et la terre ?',
        options: ['3 jours', '6 jours', '7 jours', '10 jours'],
        correctAnswer: 1,
        explanation: 'Allah créa les cieux et la terre en six jours.'
      },
      {
        question: 'Qu\'est-ce que la Table Gardée (Al-Lawh Al-Mahfuz) ?',
        options: ['Un meuble', 'Un livre où sont inscrits tous les événements', 'Une planète', 'Une étoile'],
        correctAnswer: 1,
        explanation: 'La Table Gardée est le livre où sont inscrits tous les événements.'
      }
    ]
  },
  'histoire-creation-anges': {
  id: "histoire-creation-anges",
  title: "La création des Anges",
  description: "Les serviteurs obéissants créés par Allah",
  content: [
    "Les anges sont des créatures d’Allah ﷻ créées de lumière, comme le Prophète ﷺ l’a rapporté.",
    "Ils n’ont ni désirs ni volonté propre : ils obéissent toujours aux ordres d’Allah.",
    "Chaque ange a une mission précise :",
    "– Jibril عليه السلام transmet la révélation aux prophètes",
    "– Mikail عليه السلام est chargé de la pluie et de la subsistance",
    "– Israfil عليه السلام soufflera dans la Trompe le Jour du Jugement",
    "– Malik est le gardien de l’Enfer",
    "– D’autres anges inscrivent les actions des hommes (Kiraman Katibin).",
    "Les anges sont innombrables, peuplant les cieux et glorifiant Allah jour et nuit sans jamais se lasser.",
    "Ils sont un signe de la miséricorde et de l’organisation parfaite d’Allah dans Sa création."
  ],
  exercises: [
    {
      question: "De quoi Allah a-t-Il créé les anges ?",
      options: ["De terre", "De lumière", "De feu", "D’eau"],
      correctAnswer: 1,
      explanation: "Les anges ont été créés de lumière."
    },
    {
      question: "Quel ange est chargé de transmettre la révélation ?",
      options: ["Israfil", "Jibril", "Mikail", "Malik"],
      correctAnswer: 1,
      explanation: "Jibril عليه السلام est le messager de la révélation."
    }
  ]
},

  'histoire-creation-terre': {
    id: 'histoire-creation-terre',
    title: 'La création de la Terre',
    description: 'Formation de notre planète et ses merveilles',
    content: [
      'Après avoir créé les cieux, Allah créa la Terre et ses merveilles.',
      'La Terre fut créée comme une planète unique, parfaite pour la vie humaine.',
      'Allah créa les montagnes qui stabilisent la Terre et la protègent des tremblements.',
      'Les océans et les mers furent créés pour fournir de l\'eau et réguler le climat.',
      'Allah créa les rivières et les lacs pour irriguer la terre et abreuver les créatures.',
      'La Terre fut dotée d\'une atmosphère qui protège la vie des rayons nocifs du soleil.',
      'Allah créa les saisons pour permettre la croissance des plantes et la reproduction des animaux.',
      'La Terre fut créée avec des ressources naturelles : minéraux, pétrole, gaz naturel.',
      'Allah créa les forêts et les déserts, chaque environnement ayant son utilité.',
      'La Terre fut créée avec une gravité parfaite pour maintenir la vie à sa surface.',
      'Allah créa la Lune qui éclaire la nuit et régule les marées.',
      'Cette création parfaite montre la sagesse et la bonté d\'Allah envers Ses créatures.'
    ],
    exercises: [
      {
        question: 'Pourquoi Allah créa-t-Il les montagnes ?',
        options: ['Pour la beauté', 'Pour stabiliser la Terre', 'Pour les sports', 'Pour rien'],
        correctAnswer: 1,
        explanation: 'Les montagnes stabilisent la Terre et la protègent des tremblements.'
      },
      {
        question: 'Quel rôle joue la Lune pour la Terre ?',
        options: ['Aucun', 'Elle éclaire la nuit et régule les marées', 'Elle réchauffe la Terre', 'Elle refroidit la Terre'],
        correctAnswer: 1,
        explanation: 'La Lune éclaire la nuit et régule les marées.'
      },
      {
        question: 'Combien de saisons Allah créa-t-Il ?',
        options: ['2 saisons', '3 saisons', '4 saisons', '5 saisons'],
        correctAnswer: 2,
        explanation: 'Allah créa 4 saisons pour permettre la croissance des plantes.'
      }
    ]
  },
  'histoire-creation-adam': {
    id: 'histoire-creation-adam',
    title: 'La création d\'Adam',
    description: 'Premier homme, premier prophète - père de l\'Humanité',
    content: [
      'Adam (عليه السلام) fut le premier être humain créé par Allah.',
      'Allah créa Adam à partir de terre (turab) qu\'Il mélangea avec de l\'eau.',
      'Allah insuffla en Adam de Son esprit (ruh), lui donnant ainsi la vie.',
      'Adam fut créé parfait, avec une beauté et une intelligence exceptionnelles.',
      'Allah enseigna à Adam les noms de toutes les créatures.',
      'Allah créa Hawwa (Ève) à partir d\'une côte d\'Adam pour qu\'il ait une compagne.',
      'Allah installa Adam et Hawwa dans le Paradis (Jannah).',
      'Allah leur permit de manger de tous les fruits du Paradis, sauf d\'un arbre interdit.',
      'Iblis (Satan) jalousa Adam et voulut le faire désobéir à Allah.',
      'Iblis trompa Adam et Hawwa, les poussant à manger du fruit interdit.',
      'Après leur désobéissance, Allah les fit descendre sur Terre.',
      'Allah leur promit que s\'ils se repentaient, Il leur pardonnerait.',
      'Adam et Hawwa se repentirent et Allah accepta leur repentir.',
      'Ils devinrent les parents de toute l\'humanité.'
    ],
    exercises: [
      {
        question: 'De quoi Allah créa-t-Il Adam ?',
        options: ['De feu', 'De terre mélangée à l\'eau', 'De pierre', 'De métal'],
        correctAnswer: 1,
        explanation: 'Allah créa Adam à partir de terre (turab) mélangée à l\'eau.'
      },
      {
        question: 'Qui fut créé à partir d\'une côte d\'Adam ?',
        options: ['Iblis', 'Hawwa (Ève)', 'Les anges', 'Les animaux'],
        correctAnswer: 1,
        explanation: 'Hawwa (Ève) fut créée à partir d\'une côte d\'Adam.'
      },
      {
        question: 'Où Allah installa-t-Il Adam et Hawwa ?',
        options: ['Sur Terre', 'Dans le Paradis', 'Dans l\'enfer', 'Dans le désert'],
        correctAnswer: 1,
        explanation: 'Allah installa Adam et Hawwa dans le Paradis (Jannah).'
      }
    ]
  },
    'histoire-premiers-prophetes': {
     id: 'histoire-premiers-prophetes',
     title: 'Les premiers prophètes',
     description: 'Noé, Ibrahim et les autres messagers',
     content: [
       'Après Adam, Allah envoya de nombreux prophètes pour guider l\'humanité.',
       'Nuh (Noé) fut le premier prophète envoyé après Adam.',
       'Nuh prêcha pendant 950 ans, mais peu de gens le suivirent.',
       'Allah ordonna à Nuh de construire un bateau pour sauver les croyants.',
       'Le déluge détruisit tous les mécréants, seuls Nuh et ses partisans survécurent.',
       'Ibrahim (Abraham) fut le prophète de la foi pure (Hanif).',
       'Ibrahim rejeta l\'idolâtrie et adora uniquement Allah.',
       'Allah testa Ibrahim en lui ordonnant de sacrifier son fils Ismail.',
       'Ibrahim était prêt à obéir, mais Allah remplaça Ismail par un mouton.',
       'Ibrahim construisit la Kaaba avec son fils Ismail.',
       'Allah fit d\'Ibrahim le père de nombreux prophètes.',
       'D\'autres prophètes importants : Hud, Salih, Shu\'ayb, et Lot.',
       'Chaque prophète apporta le même message : adorer Allah seul.',
       'Ces prophètes montrent la continuité du message divin à travers l\'histoire.'
     ],
     exercises: [
       {
         question: 'Combien d\'années Nuh prêcha-t-il ?',
         options: ['100 ans', '500 ans', '950 ans', '1000 ans'],
         correctAnswer: 2,
         explanation: 'Nuh prêcha pendant 950 ans.'
       },
       {
         question: 'Quel prophète fut appelé "Hanif" (homme de foi pure) ?',
         options: ['Nuh', 'Ibrahim', 'Hud', 'Salih'],
         correctAnswer: 1,
         explanation: 'Ibrahim fut appelé "Hanif" (homme de foi pure).'
       },
       {
         question: 'Qui construisit la Kaaba avec son père ?',
         options: ['Ismail', 'Isaac', 'Yusuf', 'Yaqub'],
         correctAnswer: 0,
         explanation: 'Ismail construisit la Kaaba avec son père Ibrahim.'
       }
     ]
   },
   'histoire-moise-pharaon': {
     id: 'histoire-moise-pharaon',
     title: 'Moïse et le Pharaon',
     description: 'L\'histoire de la libération des enfants d\'Israël',
     content: [
       'Musa (Moïse) fut un grand prophète envoyé aux enfants d\'Israël.',
       'Musa naquit à une époque où le Pharaon tuait tous les garçons hébreux.',
       'Sa mère le mit dans un panier sur le Nil pour le sauver.',
       'La femme du Pharaon trouva Musa et l\'éleva comme son fils.',
       'Musa grandit dans le palais du Pharaon, mais resta fidèle à sa foi.',
       'Un jour, Musa tua accidentellement un Égyptien et dut fuir.',
       'Allah parla à Musa depuis un buisson ardent sur le mont Sinaï.',
       'Allah donna à Musa le bâton qui se transformait en serpent.',
       'Allah envoya Musa et son frère Harun (Aaron) au Pharaon.',
       'Le Pharaon refusa de croire et demanda des miracles.',
       'Musa montra de nombreux miracles : transformation du bâton, main blanche.',
       'Le Pharaon et ses magiciens ne purent rivaliser avec les miracles d\'Allah.',
       'Allah envoya dix fléaux sur l\'Égypte pour forcer le Pharaon à libérer les Hébreux.',
       'Finalement, le Pharaon libéra les enfants d\'Israël.',
       'Mais le Pharaon se repentit et poursuivit les Hébreux.',
       'Allah ouvrit la mer Rouge pour sauver Musa et son peuple.',
       'Le Pharaon et son armée furent noyés dans la mer.',
       'Allah donna à Musa la Torah (Tawrat) sur le mont Sinaï.',
       'Cette histoire montre la puissance d\'Allah et Sa protection des croyants.'
     ],
     exercises: [
       {
         question: 'Où Musa trouva-t-il refuge après avoir tué l\'Égyptien ?',
         options: ['Dans le palais', 'Dans le désert', 'Dans la mer', 'Dans la forêt'],
         correctAnswer: 1,
         explanation: 'Musa trouva refuge dans le désert après avoir tué l\'Égyptien.'
       },
       {
         question: 'Quel miracle Allah donna-t-Il à Musa ?',
         options: ['Un cheval volant', 'Un bâton qui se transforme en serpent', 'Une épée magique', 'Un anneau invisible'],
         correctAnswer: 1,
         explanation: 'Allah donna à Musa un bâton qui se transformait en serpent.'
       },
       {
         question: 'Combien de fléaux Allah envoya-t-Il sur l\'Égypte ?',
         options: ['5 fléaux', '7 fléaux', '10 fléaux', '12 fléaux'],
         correctAnswer: 2,
         explanation: 'Allah envoya dix fléaux sur l\'Égypte.'
       }
     ]
   },
   'histoire-jesus-marie': {
     id: 'histoire-jesus-marie',
     title: 'Jésus et Marie',
     description: 'La naissance miraculeuse et les miracles',
     content: [
       'Isa (Jésus) fut un grand prophète envoyé par Allah aux enfants d\'Israël.',
       'Maryam (Marie) était une femme pieuse et pure, choisie par Allah.',
       'L\'ange Jibril annonça à Maryam qu\'elle aurait un fils sans père.',
       'Maryam fut étonnée car elle n\'était pas mariée.',
       'Jibril lui expliqua qu\'Allah peut créer ce qu\'Il veut par Sa parole "Sois !"',
       'Isa naquit miraculeusement, sans père, par la volonté d\'Allah.',
       'Isa parla dès sa naissance pour défendre sa mère des accusations.',
       'Isa grandit et devint un prophète envoyé par Allah.',
       'Allah donna à Isa de nombreux miracles :',
       '• Il guérissait les aveugles et les lépreux',
       '• Il ressuscitait les morts',
       '• Il créait des oiseaux en argile qui s\'envolaient',
       '• Il connaissait les secrets des cœurs',
       'Isa prêcha l\'adoration d\'Allah seul et rejeta l\'idolâtrie.',
       'Il apporta l\'Évangile (Injil) comme guide pour les gens.',
       'Isa ne fut jamais crucifié, Allah le sauva et l\'éleva vers Lui.',
       'Isa reviendra sur Terre avant la fin du monde.',
       'Cette histoire montre la puissance d\'Allah et Sa protection des prophètes.'
     ],
     exercises: [
       {
         question: 'Comment Isa naquit-il ?',
         options: ['Normalement', 'Miraculeusement, sans père', 'Dans une grotte', 'Dans un palais'],
         correctAnswer: 1,
         explanation: 'Isa naquit miraculeusement, sans père, par la volonté d\'Allah.'
       },
       {
         question: 'Quel miracle Isa accomplissait-il ?',
         options: ['Voler', 'Ressusciter les morts', 'Transformer l\'eau en vin', 'Tous ces miracles'],
         correctAnswer: 1,
         explanation: 'Isa ressuscitait les morts, entre autres miracles.'
       },
       {
         question: 'Quel livre Isa apporta-t-il ?',
         options: ['La Torah', 'L\'Évangile', 'Le Coran', 'Les Psaumes'],
         correctAnswer: 1,
         explanation: 'Isa apporta l\'Évangile (Injil) comme guide.'
       }
     ]
   },
   'histoire-arabie-avant-islam': {
     id: 'histoire-arabie-avant-islam',
     title: 'L\'Arabie avant l\'Islam',
     description: 'La situation sociale et religieuse de la péninsule',
     content: [
       'Avant l\'avènement de l\'Islam, l\'Arabie était plongée dans l\'obscurité et l\'ignorance (Jahiliyya).',
       'La péninsule arabique était divisée en plusieurs tribus qui se faisaient souvent la guerre.',
       'La société était organisée autour de la tribu (Qabila) et de la famille étendue.',
       'Les Arabes étaient principalement des nomades (Bédouins) qui vivaient dans le désert.',
       'Ils élevaient des chameaux, des moutons et des chèvres pour survivre.',
       'La religion dominante était le polythéisme : les Arabes adoraient de nombreuses idoles.',
       'La Kaaba était entourée de 360 idoles représentant différents dieux et déesses.',
       'Les principales divinités étaient : Al-Lat, Al-Uzza et Manat.',
       'Les Arabes croyaient aussi aux djinns et aux esprits de la nature.',
       'Certains Arabes étaient chrétiens (principalement au Yémen et au nord).',
       'D\'autres étaient juifs (notamment à Médine et dans le nord).',
       'La société était très inégalitaire : les femmes n\'avaient aucun droit.',
       'L\'infanticide des filles était pratiqué par certaines tribus.',
       'L\'esclavage était répandu et les esclaves n\'avaient aucun droit.',
       'La justice était rendue selon la loi du plus fort.',
       'Les vendettas entre tribus pouvaient durer des générations.',
       'La poésie était très valorisée et les poètes étaient respectés.',
       'Les marchés annuels (comme Ukaz) permettaient des trêves commerciales.',
       'La Mecque était un centre commercial important grâce à la Kaaba.',
       'Cette période sombre préparait le terrain pour la lumière de l\'Islam.'
     ],
     exercises: [
       {
         question: 'Comment s\'appelait la période avant l\'Islam en Arabie ?',
         options: ['Jahiliyya (obscurité)', 'Nur (lumière)', 'Huda (guidance)', 'Ilm (savoir)'],
         correctAnswer: 0,
         explanation: 'La période avant l\'Islam s\'appelait Jahiliyya, ce qui signifie "obscurité" ou "ignorance".'
       },
       {
         question: 'Combien d\'idoles entouraient la Kaaba avant l\'Islam ?',
         options: ['100 idoles', '360 idoles', '500 idoles', '1000 idoles'],
         correctAnswer: 1,
         explanation: 'La Kaaba était entourée de 360 idoles représentant différentes divinités.'
       },
       {
         question: 'Quelle était la principale activité des Arabes bédouins ?',
         options: ['L\'agriculture', 'L\'élevage nomade', 'Le commerce maritime', 'L\'artisanat'],
         correctAnswer: 1,
         explanation: 'Les Arabes bédouins vivaient principalement de l\'élevage nomade (chameaux, moutons, chèvres).'
       }
     ]
   
   },
    };

export default function LessonPage() {
  const params = useParams();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const slug = params.slug as string;
  const lesson = lessonData[slug];

  if (!lesson) {
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Leçon non trouvée
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Désolé, cette leçon n\'existe pas encore.
            </p>
            <a
              href="/subject"
              className="btn-primary text-lg px-8 py-3"
            >
              Retour aux matières
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const exercise = lesson.exercises[currentExercise];
    const isCorrect = selectedAnswer === exercise.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextExercise = () => {
    if (currentExercise < lesson.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setLessonCompleted(true);
    }
  };

  const handleRestartLesson = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setLessonCompleted(false);
  };

  if (lessonCompleted) {
    const percentage = Math.round((score / lesson.exercises.length) * 100);
    
    return (
      <>
        <Navigation />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Leçon terminée !
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Votre score : <span className="font-bold">{score}/{lesson.exercises.length}</span> ({percentage}%)
              </p>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Félicitations !
                </h2>
                <p className="text-lg text-gray-600">
                  Vous avez terminé la leçon "{lesson.title}" avec succès !
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestartLesson}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  Recommencer la leçon
                </button>
                
                <a
                  href="/subject"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Autres matières
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const exercise = lesson.exercises[currentExercise];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lesson.description}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Exercice {currentExercise + 1} sur {lesson.exercises.length}
              </span>
              <span className="text-sm text-gray-600">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentExercise + 1) / lesson.exercises.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contenu de la leçon
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              {lesson.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Exercise */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Exercice {currentExercise + 1}
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {exercise.question}
              </h3>

              <div className="space-y-3 mb-6">
                {exercise.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? showResult
                          ? index === exercise.correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="mb-6 p-4 rounded-lg bg-gray-50">
                  <p className="text-gray-700">
                    <strong>Explication :</strong> {exercise.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                {!showResult ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                      selectedAnswer === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Valider la réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNextExercise}
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    {currentExercise < lesson.exercises.length - 1 ? 'Exercice suivant' : 'Terminer la leçon'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )}
