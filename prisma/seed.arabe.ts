// prisma/seed.arabe.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* --------------------------- Helpers – upserts --------------------------- */
async function upsertAgeGroup(key: string, title: string, minAge: number, maxAge: number, order = 0) {
  return prisma.ageGroup.upsert({
    where: { key },
    update: { title, minAge, maxAge, order },
    create: { key, title, minAge, maxAge, order },
  });
}

async function upsertSubject(slug: string, title: string, desc?: string, order?: number) {
  return prisma.subject.upsert({
    where: { slug },
    update: { title, desc, order },
    create: { slug, title, desc, order },
  });
}

async function upsertCategory(subjectId: string, slug: string, title: string, desc?: string, order?: number) {
  return prisma.category.upsert({
    where: { subjectId_slug: { subjectId, slug } },
    update: { title, desc, order },
    create: { subjectId, slug, title, desc, order },
  });
}

async function upsertSubcategory(categoryId: string, slug: string, title: string, desc?: string, order?: number) {
  return prisma.subcategory.upsert({
    where: { categoryId_slug: { categoryId, slug } },
    update: { title, desc, order },
    create: { categoryId, slug, title, desc, order },
  });
}

async function upsertSkill(subcategoryId: string, slug: string, title: string, desc?: string, order?: number) {
  return prisma.skill.upsert({
    where: { subcategoryId_slug: { subcategoryId, slug } },
    update: { title, desc, order },
    create: { subcategoryId, slug, title, desc, order },
  });
}

async function upsertLesson(
  skillId: string,
  slug: string,
  title: string,
  desc: string | null,
  content: string | null,
  minutes: number | null,
  order: number | null,
  ageGroupId?: string | null
) {
  return prisma.lesson.upsert({
    where: { skillId_slug: { skillId, slug } },
    update: { title, desc, content, minutes, order, ageGroupId },
    create: { skillId, slug, title, desc, content, minutes, order, ageGroupId },
  });
}

/* -------------------------- Helpers – Quiz simple ----------------------- */
// Remplace entièrement les questions d’un quiz (upsert par lessonId)
type QuizItem = { text: string; options: { text: string; ok?: boolean }[] };
async function setQuiz(lessonId: string, items: QuizItem[]) {
  const quiz = await prisma.quiz.upsert({
    where: { lessonId },
    update: {},
    create: { lessonId },
  });

  // reset questions/options
  await prisma.option.deleteMany({ where: { question: { quizId: quiz.id } } });
  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let i = 1;
  for (const q of items) {
    const question = await prisma.question.create({
      data: { quizId: quiz.id, order: i++, text: q.text },
    });
    let j = 1;
    for (const opt of q.options) {
      await prisma.option.create({
        data: { questionId: question.id, order: j++, text: opt.text, ok: !!opt.ok },
      });
    }
  }
}

/* ------------------------------ Seed arabe ------------------------------ */
async function main() {
  /* Ages */
  const [ag3_6, ag7_10, ag11_16] = await Promise.all([
    upsertAgeGroup('3-6', '3–6 ans', 3, 6, 1),
    upsertAgeGroup('7-10', '7–10 ans', 7, 10, 2),
    upsertAgeGroup('11-16', '11–16 ans', 11, 16, 3),
  ]);

  /* Sujet */
  const subject = await upsertSubject(
    'langue-arabe',
    'Langue arabe',
    'Apprentissages progressifs : alphabet, lecture, écriture, vocabulaire, grammaire et morphologie.',
    1
  );

  /* -------------------- Catégorie 1 : Alphabet & écriture -------------------- */
  const catAlphabet = await upsertCategory(subject.id, 'alphabet', 'Alphabet & écriture', 'Découvrir et écrire les lettres', 1);

  // SC1 Lettres
  const scLettres = await upsertSubcategory(catAlphabet.id, 'lettres', 'Lettres arabes', 'Formes isolées et liées', 1);
  const skFormes = await upsertSkill(scLettres.id, 'formes', 'Formes des lettres', 'Positions : isolée, initiale, médiane, finale', 1);

  // Quelques lettres (exemples)
  const letters = [
    { slug: 'alif', name: 'Alif', md: `# Alif (ا)\n\n- Isolée : **ا**\n- Initiale : **اـ**\n- Médiane : **ـاـ**\n- Finale : **ـا**\n\n> Particularité : ne s’attache pas à la lettre suivante.` },
    { slug: 'ba',   name: 'Ba',   md: `# Ba (ب)\n\n- Isolée : **ب**\n- Initiale : **بـ**\n- Médiane : **ـبـ**\n- Finale : **ـب**` },
    { slug: 'ta',   name: 'Ta',   md: `# Ta (ت)\n\n- Isolée : **ت**\n- Initiale : **تـ**\n- Médiane : **ـتـ**\n- Finale : **ـت**` },
    { slug: 'tha',  name: 'Tha',  md: `# Tha (ث)\n\n- Isolée : **ث**\n- Initiale : **ثـ**\n- Médiane : **ـثـ**\n- Finale : **ـث**` },
    { slug: 'jim',  name: 'Jîm',  md: `# Jîm (ج)\n\n- Isolée : **ج**\n- Initiale : **جـ**\n- Médiane : **ـجـ**\n- Finale : **ـج**` },
    { slug: 'ha',   name: 'Hâʼ',  md: `# Hâʼ (ح)\n\n- Isolée : **ح**\n- Initiale : **حـ**\n- Médiane : **ـحـ**\n- Finale : **ـح**` },
    { slug: 'kha',  name: 'Khâʼ', md: `# Khâʼ (خ)\n\n- Isolée : **خ**\n- Initiale : **خـ**\n- Médiane : **ـخـ**\n- Finale : **ـخ**` },
  ];
  let order = 1;
  for (const L of letters) {
    await upsertLesson(
      skFormes.id,
      L.slug,
      L.name,
      'Les différentes formes et liaisons',
      L.md,
      6,
      order++,
      ag7_10.id
    );
  }

  // SC2 Liaison des lettres
  const scLiaison = await upsertSubcategory(catAlphabet.id, 'liaison', 'Liaison des lettres', 'Relier correctement les lettres', 2);
  const skRelier = await upsertSkill(scLiaison.id, 'relier', 'Relier les lettres', 'Règles d’attache et exceptions', 1);

  await upsertLesson(
    skRelier.id,
    'regles-liaison',
    'Règles de liaison',
    'Lettres qui ne s’attachent pas et cas particuliers',
    `Certaines lettres ne s’attachent **pas** à ce qui suit (ex. *ا، د، ذ، ر، ز، و*).  
Veiller à la continuité des autres formes pour éviter les coupures.`,
    7,
    1,
    ag7_10.id
  );

  // SC3 Signes diacritiques
  const scSignes = await upsertSubcategory(catAlphabet.id, 'signes', 'Signes diacritiques', 'Harakât de base', 3);
  const skCourtes = await upsertSkill(scSignes.id, 'voyelles-courtes', 'Voyelles courtes', 'Fatha, Kasra, Damma', 1);
  const skShaddaSukun = await upsertSkill(scSignes.id, 'shadda-sukun', 'Shadda & Sukun', 'Gemme et absence de voyelle', 2);

  const lFathaKasraDamma = await upsertLesson(
    skCourtes.id,
    'fatha-kasra-damma',
    'Fatha • Kasra • Damma',
    'Prononciation des voyelles courtes',
    `- **Fatha (َ)** : son *a* bref → بَ  
- **Kasra (ِ)** : son *i* bref → بِ  
- **Damma (ُ)** : son *ou* bref → بُ`,
    6,
    1,
    ag3_6.id
  );

  await upsertLesson(
    skShaddaSukun.id,
    'shadda',
    'Shadda (ّ)',
    'Consonne géminée',
    `La **Shadda** double la consonne : بّ = **bb**. Souvent combinée avec une voyelle.`,
    6,
    1,
    ag7_10.id
  );

  await upsertLesson(
    skShaddaSukun.id,
    'sukun',
    'Sukun (ْ)',
    'Absence de voyelle',
    `Le **Sukun** marque l’absence de voyelle : **بْ**. On “arrête” la consonne.`,
    6,
    2,
    ag7_10.id
  );

  /* ------------------------- Catégorie 2 : Lecture ------------------------- */
  const catLecture = await upsertCategory(subject.id, 'lecture', 'Lecture', 'Lire avec fluidité', 2);

  // SC1 Lettres solaires/lunaires (al-)
  const scAl = await upsertSubcategory(catLecture.id, 'al', 'Article défini (ال)', 'Lettres solaires et lunaires', 1);
  const skSolaire = await upsertSkill(scAl.id, 'lettres-solaires', 'Lettres solaires', 'Assimilation', 1);
  const skLunaire = await upsertSkill(scAl.id, 'lettres-lunaires', 'Lettres lunaires', 'Non assimilation', 2);

  const lSolaire = await upsertLesson(
    skSolaire.id,
    'al-soleil',
    'Lettres solaires',
    'Assimilation du “l” de ال',
    `Quand ال précède une **lettre solaire** (ت ث د ذ ر ز س ش ص ض ط ظ ل ن),  
le **l** s’assimile : **الشَّمْس** (*ach-chams*), **النَّاس** (*an-nâs*).`,
    5,
    1,
    ag7_10.id
  );

  const lLunaire = await upsertLesson(
    skLunaire.id,
    'al-lune',
    'Lettres lunaires',
    'On prononce le “l” de ال',
    `Avec une **lettre lunaire** (أ ب ج ح خ ع غ ف ق ك م هـ و ي), on prononce le **l** :  
**القمر** (*al-qamar*), **الولد** (*al-walad*).`,
    5,
    1,
    ag7_10.id
  );

  // SC2 Voyelles longues & tanwîn
  const scMadd = await upsertSubcategory(catLecture.id, 'madd', 'Voyelles longues', 'Madd (ا، و، ي)', 2);
  const skMadd = await upsertSkill(scMadd.id, 'madd-base', 'Madd de base', 'ا/و/ي après voyelle courte', 1);
  await upsertLesson(
    skMadd.id,
    'madd-intro',
    'Madd : voyelles longues',
    'Allongement en ā / ū / ī',
    `- **ا** après Fatha → **ā** : با = *bā*  
- **و** après Damma → **ū** : بُو = *bū*  
- **ي** après Kasra → **ī** : بِـي = *bī*`,
    6,
    1,
    ag7_10.id
  );

  const scTanwin = await upsertSubcategory(catLecture.id, 'tanwin', 'Tanwîn', 'Voyelles doublées', 3);
  const skTanwin = await upsertSkill(scTanwin.id, 'tanwin-base', 'Tanwîn de base', 'an / in / un', 1);
  await upsertLesson(
    skTanwin.id,
    'tanwin-intro',
    'Tanwîn',
    'an • in • un',
    `Le **Tanwîn** ajoute un *n* final :  
- ً **(an)** — exemple : كِتابًا  
- ٍ **(in)** — كِتابٍ  
- ٌ **(un)** — كِتابٌ`,
    6,
    1,
    ag7_10.id
  );

  /* ---------------------- Catégorie 3 : Vocabulaire ---------------------- */
  const catVocab = await upsertCategory(subject.id, 'vocabulaire', 'Vocabulaire & thèmes', 'Mots usuels et expressions', 3);

  // Famille
  const scFamille = await upsertSubcategory(catVocab.id, 'famille', 'La famille', 'Parenté et personnes', 1);
  const skFamilleBase = await upsertSkill(scFamille.id, 'membres', 'Membres de la famille', 'Père, mère, frère…', 1);
  await upsertLesson(
    skFamilleBase.id,
    'famille-1',
    'Mots de la famille (1)',
    'Vocabulaire de base',
    `- أب (*ab*) : père  
- أم (*oum*) : mère  
- أخ (*akh*) : frère  
- أخت (*oukht*) : sœur  
- جد (*jadd*) : grand-père  
- جدة (*jadda*) : grand-mère`,
    5,
    1,
    ag3_6.id
  );

  const skSalutations = await upsertSkill(scFamille.id, 'salutations', 'Salutations', 'Formules de politesse', 2);
  await upsertLesson(
    skSalutations.id,
    'saluer',
    'Saluer et répondre',
    'Formules et réponses',
    `- السلام عليكم — *as-salāmu ʿalaykum*  
- وعليكم السلام — *wa ʿalaykum as-salām*  
- مرحبًا — *marḥaban* (bienvenue)  
- كيف حالك؟ — *kayfa ḥāluka/ki ?*`,
    5,
    1,
    ag3_6.id
  );

  // École
  const scEcole = await upsertSubcategory(catVocab.id, 'ecole', 'À l’école', 'Objets et lieux', 2);
  const skObjetsEcole = await upsertSkill(scEcole.id, 'objets-ecole', 'Objets scolaires', 'Cahier, stylo…', 1);
  await upsertLesson(
    skObjetsEcole.id,
    'ecole-1',
    'Objets scolaires',
    'Mots essentiels',
    `- كتاب (*kitāb*) : livre  
- قلم (*qalam*) : stylo  
- دفتر (*daftar*) : cahier  
- ممحاة (*mimḥāh*) : gomme  
- مكتب (*maktab*) : bureau`,
    5,
    1,
    ag7_10.id
  );

  // Animaux
  const scAnimaux = await upsertSubcategory(catVocab.id, 'animaux', 'Animaux', 'Domestiques et sauvages', 3);
  const skAnimaux1 = await upsertSkill(scAnimaux.id, 'domestiques', 'Animaux domestiques', '', 1);
  await upsertLesson(
    skAnimaux1.id,
    'animaux-1',
    'Animaux domestiques',
    'Vocabulaire',
    `- قِطّة : chat  
- كلب : chien  
- حصان : cheval  
- غنم : mouton`,
    5,
    1,
    ag7_10.id
  );

  // Couleurs & nombres
  const scCouleursNombres = await upsertSubcategory(catVocab.id, 'couleurs-nombres', 'Couleurs & nombres', '', 4);
  const skCouleurs = await upsertSkill(scCouleursNombres.id, 'couleurs', 'Couleurs', '', 1);
  await upsertLesson(
    skCouleurs.id,
    'couleurs-base',
    'Couleurs',
    'Vocabulaire des couleurs',
    `- أَحمر : rouge  
- أَزرَق : bleu  
- أَبيض : blanc  
- أَسود : noir  
- أَخضر : vert`,
    5,
    1,
    ag3_6.id
  );

  const skNombres = await upsertSkill(scCouleursNombres.id, 'nombres', 'Nombres (1–10)', '', 2);
  await upsertLesson(
    skNombres.id,
    'nombres-1-10',
    'Nombres 1–10',
    'Compter en arabe',
    `١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠  
واحد، اثنان، ثلاثة، أربعة، خمسة، ستة، سبعة، ثمانية، تسعة، عشرة`,
    6,
    1,
    ag3_6.id
  );

  /* --------------------- Catégorie 4 : Grammaire (Nahw) --------------------- */
  const catNahw = await upsertCategory(subject.id, 'nahw', 'Grammaire (Nahw)', 'Bases de la phrase arabe', 4);

  // Nature des mots
  const scNature = await upsertSubcategory(catNahw.id, 'nature', 'Nature des mots', 'Nom, verbe, particule', 1);
  const skNature = await upsertSkill(scNature.id, 'ism-fiil-harf', 'Nom / Verbe / Particule', '', 1);
  await upsertLesson(
    skNature.id,
    'ism-fiil-harf',
    'Nom / Verbe / Particule',
    'Définir et reconnaître',
    `- **Nom (اسم)** : personne, chose, idée.  
- **Verbe (فعل)** : action (passé/présent/impératif).  
- **Particule (حرف)** : mot invariable (ex. prépositions).`,
    8,
    1,
    ag11_16.id
  );

  // Genre & nombre
  const scGenreNombre = await upsertSubcategory(catNahw.id, 'genre-nombre', 'Genre & nombre', '', 2);
  const skGenre = await upsertSkill(scGenreNombre.id, 'genre', 'Masculin / Féminin', '', 1);
  await upsertLesson(
    skGenre.id,
    'genre',
    'Masculin / Féminin',
    'Marqueurs usuels',
    `Féminin souvent marqué par **ـة** (tâ marbûṭa).  
Ex. طالب (*ṭālib* – étudiant) → طالبة (*ṭāliba* – étudiante).`,
    6,
    1,
    ag11_16.id
  );

  const skNombre = await upsertSkill(scGenreNombre.id, 'nombre', 'Singulier / Duel / Pluriel', '', 2);
  await upsertLesson(
    skNombre.id,
    'nombre',
    'Singulier / Duel / Pluriel',
    'formes de base',
    `- **Singulier** : كتاب  
- **Duel** : كتابان / كتابين  
- **Pluriel** : كتب (irrégulier), مسلمون/مسلمين (sain)`,
    8,
    1,
    ag11_16.id
  );

  // Pronoms & prépositions
  const scPronomsPreps = await upsertSubcategory(catNahw.id, 'pronoms-prepositions', 'Pronoms & prépositions', '', 3);
  const skPronoms = await upsertSkill(scPronomsPreps.id, 'pronoms-attaches', 'Pronoms suffixés', '', 1);
  await upsertLesson(
    skPronoms.id,
    'pronoms-attachés',
    'Pronoms suffixés',
    'Mon livre, son stylo…',
    `- كتابي : mon livre  
- كتابه : son livre (à lui)  
- كتابها : son livre (à elle)`,
    7,
    1,
    ag11_16.id
  );

  const skPreps = await upsertSkill(scPronomsPreps.id, 'prepositions', 'Prépositions', '', 2);
  await upsertLesson(
    skPreps.id,
    'prepositions-base',
    'Prépositions',
    'fi, ʿalā, ilā…',
    `- **في** : dans  
- **على** : sur  
- **إلى** : vers, à  
- **مع** : avec`,
    6,
    1,
    ag11_16.id
  );

  /* ----------------------- Catégorie 5 : Morphologie (Sarf) ----------------------- */
  const catSarf = await upsertCategory(subject.id, 'sarf', 'Morphologie (Sarf)', 'Conjugaison & schémas', 5);

  const scConjug = await upsertSubcategory(catSarf.id, 'conjugaison', 'Conjugaison de base', '', 1);
  const skMaadiMudari = await upsertSkill(scConjug.id, 'maadi-mudari', 'Passé/Présent', '', 1);
  await upsertLesson(
    skMaadiMudari.id,
    'kataba-yaktubu',
    'كَتَبَ / يَكْتُبُ',
    'Schéma de base',
    `- **Passé (ماضٍ)** : **كَتَبَ** (*il a écrit*)  
- **Présent (مضارع)** : **يَكْتُبُ** (*il écrit*)`,
    8,
    1,
    ag11_16.id
  );

  const skMasdar = await upsertSkill(scConjug.id, 'masdar', 'Masdar', 'Nom d’action', 2);
  await upsertLesson(
    skMasdar.id,
    'masdar-k-t-b',
    'Masdar – كَتَبَ',
    'Nom d’action',
    `De **كَتَبَ** → **كِتابةٌ** (action d’écrire).`,
    5,
    1,
    ag11_16.id
  );

  /* --------------------------- Catégorie 6 : Orthographe --------------------------- */
  const catOrtho = await upsertCategory(subject.id, 'orthographe', 'Dictée & orthographe', 'Cas fréquents', 6);

  const scHamza = await upsertSubcategory(catOrtho.id, 'hamza', 'Hamza & Alif', '', 1);
  const skHamza = await upsertSkill(scHamza.id, 'hamza-base', 'Hamza : positions', '', 1);
  await upsertLesson(
    skHamza.id,
    'hamza-intro',
    'Hamza : cas principaux',
    'Début, milieu, fin',
    `- Début : أ / إ  
- Milieu : ؤ / ئ / أ / ء selon voyelles  
- Fin : ـؤ / ـئ / ـء`,
    9,
    1,
    ag11_16.id
  );

  const scTaa = await upsertSubcategory(catOrtho.id, 'taa', 'Tâ marbûṭa vs Hâʼ', '', 2);
  const skTaa = await upsertSkill(scTaa.id, 'taa-h', 'Tâ marbûṭa / Hâʼ', '', 1);
  await upsertLesson(
    skTaa.id,
    'taa-h-intro',
    'ة / ه : distinguer',
    'Féminin ou consonne *h*',
    `- **ـة** : marque souvent le féminin (ex. مدرسة).  
- **هـ / ـه** : consonne *h* (ex. وجه).`,
    7,
    1,
    ag11_16.id
  );

  /* ------------------------------------ Quizz ------------------------------------ */
  // Quiz 1 : voyelles courtes
  await setQuiz(lFathaKasraDamma.id, [
    {
      text: 'Quelle voyelle courte donne le son "i" ?',
      options: [{ text: 'Fatha' }, { text: 'Kasra', ok: true }, { text: 'Damma' }],
    },
    {
      text: 'Sur "بُ", quel est le son ?',
      options: [{ text: 'ba' }, { text: 'bi' }, { text: 'bou', ok: true }],
    },
  ]);

  // Quiz 2 : lettres solaires
  await setQuiz(lSolaire.id, [
    {
      text: 'Dans "الشمس", le ل de ال est-il prononcé ?',
      options: [{ text: 'Oui' }, { text: 'Non', ok: true }],
    },
    {
      text: 'La lettre ن est :',
      options: [{ text: 'Lunaire' }, { text: 'Solaire', ok: true }],
    },
  ]);

  // Quiz 3 : al lunaire
  await setQuiz(lLunaire.id, [
    {
      text: 'Dans "القمر", le ل de ال est-il prononcé ?',
      options: [{ text: 'Oui', ok: true }, { text: 'Non' }],
    },
    {
      text: 'La lettre ق est :',
      options: [{ text: 'Lunaire', ok: true }, { text: 'Solaire' }],
    },
  ]);

  console.log('✅ Seed arabe : tranches d’âge, sujet, catégories, sous-catégories, compétences, leçons (~35) et quiz (3) créés.');
}

/* --------------------------------- Run seed -------------------------------- */
main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
