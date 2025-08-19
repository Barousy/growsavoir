// prisma/seed.arabe.plus.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* --------------------------- helpers génériques --------------------------- */
async function idAge(key: string) {
  const a = await prisma.ageGroup.findUnique({ where: { key } });
  if (!a) throw new Error(`AgeGroup "${key}" introuvable (lance d'abord le seed.arabe de base).`);
  return a.id;
}
async function idSubject(slug: string, title?: string, desc?: string, order?: number) {
  const s = await prisma.subject.upsert({
    where: { slug },
    update: { title, desc, order },
    create: { slug, title: title ?? slug, desc, order },
  });
  return s.id;
}
async function idCategory(subjectId: string, slug: string, title: string, desc = '', order = 1) {
  const c = await prisma.category.upsert({
    where: { subjectId_slug: { subjectId, slug } },
    update: { title, desc, order },
    create: { subjectId, slug, title, desc, order },
  });
  return c.id;
}
async function idSubcategory(categoryId: string, slug: string, title: string, desc = '', order = 1) {
  const sc = await prisma.subcategory.upsert({
    where: { categoryId_slug: { categoryId, slug } },
    update: { title, desc, order },
    create: { categoryId, slug, title, desc, order },
  });
  return sc.id;
}
async function idSkill(subcategoryId: string, slug: string, title: string, desc = '', order = 1) {
  const sk = await prisma.skill.upsert({
    where: { subcategoryId_slug: { subcategoryId, slug } },
    update: { title, desc, order },
    create: { subcategoryId, slug, title, desc, order },
  });
  return sk.id;
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
/* Quiz utilitaire simple : 2 QCM par leçon */
type QuizItem = { text: string; options: { text: string; ok?: boolean }[] };
async function setQuiz(lessonId: string, items: QuizItem[]) {
  const quiz = await prisma.quiz.upsert({
    where: { lessonId },
    update: {},
    create: { lessonId },
  });
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
/* petit générateur de quiz “générique” */
function quizYesNo(titre: string): QuizItem[] {
  return [
    { text: `Cette leçon porte-t-elle sur "${titre}" ?`, options: [{ text: 'Oui', ok: true }, { text: 'Non' }] },
    { text: 'Est-ce une leçon de Langue arabe ?', options: [{ text: 'Oui', ok: true }, { text: 'Non' }] },
  ];
}

/* ------------------------------- SEED PLUS ------------------------------- */
async function main() {
  const subjectId = await idSubject(
    'langue-arabe',
    'Langue arabe',
    'Parcours complet : alphabet, lecture, vocabulaire, grammaire (nahw), morphologie (sarf), orthographe.',
    1
  );

  const ag3_6 = await idAge('3-6');
  const ag7_10 = await idAge('7-10');
  const ag11_16 = await idAge('11-16');

  /* ====================== 1) Alphabet – 28 lettres  ====================== */
  const catAlphabet = await idCategory(subjectId, 'alphabet', 'Alphabet & écriture', 'Formes, liaisons, harakât', 1);
  const scLettres = await idSubcategory(catAlphabet, 'lettres', 'Lettres arabes (28)', 'Formes isolée/init/med/fin', 1);
  const skFormes = await idSkill(scLettres, 'formes-complet', 'Formes des 28 lettres', 'Synthèse par lettre', 1);

  // 28 lettres (nom, slug, glyphe “isolée” seulement — on explique les positions dans le markdown)
  const LETTERS: { slug: string; title: string; glyph: string }[] = [
    { slug: 'alif', title: 'Alif', glyph: 'ا' }, { slug: 'ba', title: 'Bāʼ', glyph: 'ب' },
    { slug: 'ta', title: 'Tāʼ', glyph: 'ت' }, { slug: 'tha', title: 'Thāʼ', glyph: 'ث' },
    { slug: 'jim', title: 'Jīm', glyph: 'ج' }, { slug: 'ha', title: 'Ḥāʼ', glyph: 'ح' },
    { slug: 'kha', title: 'Khāʼ', glyph: 'خ' }, { slug: 'dal', title: 'Dāl', glyph: 'د' },
    { slug: 'dhal', title: 'Dhāl', glyph: 'ذ' }, { slug: 'ra', title: 'Rāʼ', glyph: 'ر' },
    { slug: 'zay', title: 'Zāy', glyph: 'ز' }, { slug: 'sin', title: 'Sīn', glyph: 'س' },
    { slug: 'shin', title: 'Shīn', glyph: 'ش' }, { slug: 'sad', title: 'Ṣād', glyph: 'ص' },
    { slug: 'dad', title: 'Ḍād', glyph: 'ض' }, { slug: 'ta2', title: 'Ṭāʼ', glyph: 'ط' },
    { slug: 'za2', title: 'Ẓāʼ', glyph: 'ظ' }, { slug: 'ayn', title: 'ʿAyn', glyph: 'ع' },
    { slug: 'ghayn', title: 'Ghayn', glyph: 'غ' }, { slug: 'fa', title: 'Fāʼ', glyph: 'ف' },
    { slug: 'qaf', title: 'Qāf', glyph: 'ق' }, { slug: 'kaf', title: 'Kāf', glyph: 'ك' },
    { slug: 'lam', title: 'Lām', glyph: 'ل' }, { slug: 'mim', title: 'Mīm', glyph: 'م' },
    { slug: 'nun', title: 'Nūn', glyph: 'ن' }, { slug: 'ha2', title: 'Hāʼ', glyph: 'ه' },
    { slug: 'waw', title: 'Wāw', glyph: 'و' }, { slug: 'ya', title: 'Yāʼ', glyph: 'ي' },
  ];
  let orderL = 1;
  for (const L of LETTERS) {
    const md =
`# ${L.title} (${L.glyph})

**Positions usuelles :**
- Isolée
- Initiale
- Médiane
- Finale

> Rappel : certaines lettres ne s’attachent pas à la suivante (ex. ا د ذ ر ز و).`;
    const lesson = await upsertLesson(
      skFormes,
      `lettre-${L.slug}`,
      `Lettre : ${L.title}`,
      'Reconnaître et écrire la lettre dans ses différentes positions.',
      md,
      5,
      orderL++,
      ag7_10
    );
    // quiz générique (rapide)
    await setQuiz(lesson.id, quizYesNo(`Lettre : ${L.title}`));
  }

  /* =================== 2) Vocabulaire — nouveaux thèmes =================== */
  const catVocab = await idCategory(subjectId, 'vocabulaire', 'Vocabulaire & thèmes', 'Mots usuels et expressions', 3);

  const NEW_VOCAB_THEMES: {
    scSlug: string; scTitle: string; skillSlug: string; skillTitle: string; age: string; order?: number;
    lessonSlug: string; lessonTitle: string; words: string[];
  }[] = [
    {
      scSlug: 'maison', scTitle: 'À la maison', skillSlug: 'objets-maison', skillTitle: 'Objets de la maison', age: '7-10',
      lessonSlug: 'maison-objets', lessonTitle: 'Objets de la maison',
      words: ['باب (porte)', 'نافذة (fenêtre)', 'مطبخ (cuisine)', 'غرفة (chambre)', 'سرير (lit)', 'كرسي (chaise)', 'طاولة (table)'],
    },
    {
      scSlug: 'nourriture', scTitle: 'Nourriture', skillSlug: 'aliments', skillTitle: 'Aliments de base', age: '7-10',
      lessonSlug: 'aliments-base', lessonTitle: 'Aliments de base',
      words: ['خبز (pain)', 'ماء (eau)', 'حليب (lait)', 'تفاح (pomme)', 'أرز (riz)', 'دجاج (poulet)'],
    },
    {
      scSlug: 'vetements', scTitle: 'Vêtements', skillSlug: 'vetements-base', skillTitle: 'Vêtements (base)', age: '7-10',
      lessonSlug: 'vetements-1', lessonTitle: 'Vêtements',
      words: ['قميص (chemise)', 'بنطال (pantalon)', 'حذاء (chaussure)', 'قبعة (chapeau)', 'ثوب (robe)'],
    },
    {
      scSlug: 'nature', scTitle: 'Nature', skillSlug: 'nature-elements', skillTitle: 'Éléments de la nature', age: '3-6',
      lessonSlug: 'nature-1', lessonTitle: 'Nature : éléments',
      words: ['شمس (soleil)', 'قمر (lune)', 'نجوم (étoiles)', 'شجرة (arbre)', 'بحر (mer)', 'نهر (rivière)'],
    },
    {
      scSlug: 'transport', scTitle: 'Transports', skillSlug: 'moyens-transport', skillTitle: 'Moyens de transport', age: '7-10',
      lessonSlug: 'transport-1', lessonTitle: 'Transports',
      words: ['سيارة (voiture)', 'حافلة (bus)', 'قطار (train)', 'طائرة (avion)', 'دراجة (vélo)'],
    },
    {
      scSlug: 'temps-meteo', scTitle: 'Temps & météo', skillSlug: 'meteo', skillTitle: 'Météo et temps', age: '3-6',
      lessonSlug: 'meteo-1', lessonTitle: 'Météo',
      words: ['حار (chaud)', 'بارد (froid)', 'مطر (pluie)', 'ثلج (neige)', 'ريح (vent)', 'غائم (nuageux)'],
    },
    {
      scSlug: 'professions', scTitle: 'Professions', skillSlug: 'metiers', skillTitle: 'Métiers', age: '11-16',
      lessonSlug: 'metiers-1', lessonTitle: 'Métiers',
      words: ['طبيب (médecin)', 'مدرس (enseignant)', 'مهندس (ingénieur)', 'مزارع (agriculteur)', 'تاجر (commerçant)'],
    },
  ];

  let orderV = 10;
  for (const T of NEW_VOCAB_THEMES) {
    const scId = await idSubcategory(catVocab, T.scSlug, T.scTitle, '', orderV++);
    const skId = await idSkill(scId, T.skillSlug, T.skillTitle, '', 1);
    const ageId = T.age === '3-6' ? ag3_6 : T.age === '11-16' ? ag11_16 : ag7_10;

    const md = `# ${T.lessonTitle}\n\n${T.words.map((w) => `- ${w}`).join('\n')}`;
    const lesson = await upsertLesson(
      skId, T.lessonSlug, T.lessonTitle, 'Vocabulaire illustratif', md, 6, 1, ageId
    );
    await setQuiz(lesson.id, quizYesNo(T.lessonTitle));
  }

  /* ===================== 3) Grammaire (Nahw) — étendue ==================== */
  const catNahw = await idCategory(subjectId, 'nahw', 'Grammaire (Nahw)', 'Bases & analyses', 4);

  const NAHW_ITEMS: {
    sc: [string, string]; sk: [string, string]; lesson: [string, string]; age: string; minutes?: number; content: string;
  }[] = [
    {
      sc: ['phrase-nominale', 'Phrase nominale (الجملة الاسمية)'],
      sk: ['mubtada-khabar', 'Mubtadaʼ & Khabar'],
      lesson: ['mubtada-khabar', 'Mubtadaʼ & Khabar'],
      age: '11-16', minutes: 9,
      content: `- **مبتدأ** : sujet nominal au début.  
- **خبر** : information à propos du sujet.  
Ex : **الجوُّ جميلٌ** (Le temps est beau).`,
    },
    {
      sc: ['phrase-verbale', 'Phrase verbale (الجملة الفعلية)'],
      sk: ['faail-mafoul', 'Faʼil & Mafʻûl'],
      lesson: ['faail-mafoul', 'Sujet agent & objet'],
      age: '11-16', minutes: 9,
      content: `- **فاعل** : agent (sujet logique).  
- **مفعول به** : objet direct.  
Ex : **كتبَ الطالبُ الدرسَ** (L’élève a écrit la leçon).`,
    },
    {
      sc: ['irab', 'Iʻrāb (cas)'],
      sk: ['raf-nasb-jarr', 'Rafʻ / Naṣb / Jarr'],
      lesson: ['irab-intro', 'Cas grammaticaux'],
      age: '11-16', minutes: 10,
      content: `- **رفع (rafʻ)** : souvent **ـُ**/**ـٌ**  
- **نصب (naṣb)** : souvent **ـَ**/**ـً**  
- **جرّ (jarr)** : souvent **ـِ**/**ـٍ**`,
    },
    {
      sc: ['adjectif', 'Adjectif (naʻt) & accord'],
      sk: ['accord-adjectif', 'Accord du naʻt'],
      lesson: ['accord-adjectif', 'Accord nom/adjectif'],
      age: '11-16', minutes: 8,
      content: `L’adjectif suit le nom en **genre, nombre, détermination**.  
Ex : الطالبُ المجتهدُ (l'élève studieux).`,
    },
    {
      sc: ['demonstratifs', 'Démonstratifs'],
      sk: ['hada-hadhihi', 'هذا / هذه'],
      lesson: ['demonstratifs-1', 'هذا – هذه'],
      age: '7-10', minutes: 6,
      content: `- **هذا** (ce, masculin sing.)  
- **هذه** (cette, féminin sing.)  
Ex : هذا كتابٌ – هذه مدرسةٌ`,
    },
    {
      sc: ['interrogatifs', 'Interrogatifs'],
      sk: ['man-ma', 'من / ما'],
      lesson: ['interrogatifs-1', 'من – ما'],
      age: '7-10', minutes: 6,
      content: `- **من؟** (qui ?) — personne  
- **ما؟** (quoi ?) — chose`,
    },
  ];

  let orderN = 20;
  for (const it of NAHW_ITEMS) {
    const scId = await idSubcategory(catNahw, it.sc[0], it.sc[1], '', orderN++);
    const skId = await idSkill(scId, it.sk[0], it.sk[1], '', 1);
    const ageId = it.age === '3-6' ? ag3_6 : it.age === '11-16' ? ag11_16 : ag7_10;
    const lesson = await upsertLesson(
      skId, it.lesson[0], it.lesson[1], it.sc[1], `# ${it.lesson[1]}\n\n${it.content}`,
      it.minutes ?? 8, 1, ageId
    );
    await setQuiz(lesson.id, quizYesNo(it.lesson[1]));
  }

  /* ==================== 4) Morphologie (Sarf) — Formes I–V ==================== */
  const catSarf = await idCategory(subjectId, 'sarf', 'Morphologie (Sarf)', 'Conjugaisons & schémas', 5);
  const scFormes = await idSubcategory(catSarf, 'formes', 'Formes dérivées', '', 1);
  const skFormes = await idSkill(scFormes, 'formes-i-v', 'Formes I–V (aperçu)', '', 1);

  const FORMES: { slug: string; title: string; exemple: string }[] = [
    { slug: 'forme-i', title: 'Forme I (فَعَلَ)', exemple: 'كَتَبَ / يَكْتُبُ' },
    { slug: 'forme-ii', title: 'Forme II (فَعَّلَ)', exemple: 'عَلَّمَ / يُعَلِّمُ (enseigner)' },
    { slug: 'forme-iii', title: 'Forme III (فَاعَلَ)', exemple: 'شَارَكَ / يُشَارِكُ (participer)' },
    { slug: 'forme-iv', title: 'Forme IV (أَفْعَلَ)', exemple: 'أَكْمَلَ / يُكْمِلُ (compléter)' },
    { slug: 'forme-v', title: 'Forme V (تَفَعَّلَ)', exemple: 'تَعَلَّمَ / يَتَعَلَّمُ (apprendre)' },
  ];
  let orderS = 1;
  for (const F of FORMES) {
    const lesson = await upsertLesson(
      skFormes,
      F.slug,
      F.title,
      'Schéma morphologique',
      `Exemple : **${F.exemple}**.\n\nRepérer les augmentations (hamza, chadda, préfixes).`,
      9,
      orderS++,
      ag11_16
    );
    await setQuiz(lesson.id, quizYesNo(F.title));
  }

  console.log('✅ Seed ARABE PLUS : 28 lettres + thèmes vocab + nahw + sarf (+ quizz) ajoutés.');
}

main()
  .catch((e) => {
    console.error('❌ Seed+ error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  await prisma.lesson.upsert({
  where: { skillId_slug: { skillId, slug } },
  update: { title, desc, content, minutes, order, ageGroupId, premium: true },
  create: { skillId, slug, title, desc, content, minutes, order, ageGroupId, premium: true },
});
