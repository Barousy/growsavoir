// scripts/seed.cjs
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

// utilitaires
const hasFn = (obj, fn) => !!obj && typeof obj[fn] === 'function';
const safeDelete = async (model) => { if (hasFn(model, 'deleteMany')) await model.deleteMany({}); };
const slug = (s) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function run() {
  console.log('🌱 Starting database seed...');

  // 👉 liste des modèles réellement disponibles (debug utile)
  const models = Object.keys(prisma).filter(k => hasFn(prisma[k], 'findMany'));
  console.log('📦 Prisma models:', models.join(', ') || '(aucun)');

  // références de modèles (null si absents)
  const User       = hasFn(prisma.user, 'create')       ? prisma.user       : null;
  const Course     = hasFn(prisma.course, 'create')     ? prisma.course     : null;
  const Lesson     = hasFn(prisma.lesson, 'create')     ? prisma.lesson     : null;
  const Enrollment = hasFn(prisma.enrollment, 'create') ? prisma.enrollment : null;
  const Thread     = hasFn(prisma.thread, 'create')     ? prisma.thread     : null;
  const Post       = hasFn(prisma.post, 'create')       ? prisma.post       : null;

  // modèle “sources” (peut s’appeler autrement)
  const SourceRef =
    (prisma.sourceRef && (hasFn(prisma.sourceRef, 'create') || hasFn(prisma.sourceRef, 'createMany'))) ? prisma.sourceRef :
    (prisma.reference && (hasFn(prisma.reference, 'create') || hasFn(prisma.reference, 'createMany'))) ? prisma.reference :
    (prisma.source && (hasFn(prisma.source, 'create') || hasFn(prisma.source, 'createMany')))         ? prisma.source :
    (prisma.lessonSource && (hasFn(prisma.lessonSource, 'create') || hasFn(prisma.lessonSource, 'createMany'))) ? prisma.lessonSource :
    (prisma.citation && (hasFn(prisma.citation, 'create') || hasFn(prisma.citation, 'createMany')))   ? prisma.citation :
    null;

  // nettoyage (uniquement ce qui existe)
  await Promise.all([
    safeDelete(prisma.bookmark),
    safeDelete(Post),
    safeDelete(Thread),
    safeDelete(prisma.attempt),
    safeDelete(SourceRef),
    safeDelete(Lesson),
    safeDelete(prisma.enrollment),
    safeDelete(Course),
    safeDelete(prisma.session),
    safeDelete(prisma.account),
    safeDelete(User),
  ]);

  // USERS
  const makeUser = async (name, email, pass, role = 'STUDENT', locale = 'fr') => {
    if (!User) return null;
    const hash = await bcrypt.hash(pass, 12);
    const tries = [
      { name, email, passwordHash: hash, role, locale },
      { name, email, hashedPassword: hash, role, locale },
      { name, email, password: hash, role, locale },
      { name, email, role, locale },
      { name, email },
    ];
    for (const data of tries) { try { return await User.create({ data }); } catch {} }
    console.warn(`⚠️ Impossible de créer l’utilisateur ${email} — ignoré.`);
    return null;
  };

  const admin   = await makeUser('Admin User',   'admin@growsavoir.com',   'admin123',   'ADMIN');
  const teacher = await makeUser('Teacher User', 'teacher@growsavoir.com', 'teacher123', 'TEACHER');
  const student = await makeUser('Student User', 'student@growsavoir.com', 'student123', 'STUDENT');

  if (admin || teacher || student) console.log('👥 Users created');

  // COURSES
  if (!Course) {
    console.warn('ℹ️ Modèle Course absent — on s’arrête après les users.');
    return;
  }

  const coursesData = [
    { subject: 'Arabic', level: 'Beginner', language: 'ar', title: 'Arabic Basics for Children' },
    { subject: 'Arabic', level: 'Intermediate', language: 'ar', title: 'Arabic Grammar & Writing' },
    { subject: 'French', level: 'Beginner', language: 'fr', title: 'French for Young Learners' },
    { subject: 'French', level: 'Intermediate', language: 'fr', title: 'French Conversation' },
    { subject: 'English', level: 'Beginner', language: 'en', title: 'English Fundamentals' },
    { subject: 'English', level: 'Intermediate', language: 'en', title: 'English Literature' },
    { subject: 'Computing', level: 'Beginner', language: 'fr', title: 'Digital Literacy' },
    { subject: 'Computing', level: 'Intermediate', language: 'fr', title: 'Programming Basics' },
    { subject: 'Math', level: 'Beginner', language: 'fr', title: 'Mathematics Foundation' },
    { subject: 'Math', level: 'Intermediate', language: 'fr', title: 'Advanced Mathematics' },
    { subject: 'Science', level: 'Beginner', language: 'fr', title: 'Science Discovery' },
    { subject: 'Science', level: 'Intermediate', language: 'fr', title: 'Scientific Methods' },
    { subject: 'Islamic History', level: 'Beginner', language: 'ar', title: 'Sirah & Islamic History' },
    { subject: 'Islamic History', level: 'Intermediate', language: 'ar', title: 'Advanced Islamic Studies' },
  ];

  const createdCourses = [];
  for (const c of coursesData) {
    const dataFull = {
      title: c.title,
      slug: slug(c.title),
      subject: c.subject,
      level: c.level,
      language: c.language,
      summary: `Comprehensive ${c.subject.toLowerCase()} course for ${c.level.toLowerCase()} level students.`
    };
    const dataMin = { title: c.title, slug: slug(c.title) };

    let course = null;
    try { course = await Course.create({ data: dataFull }); }
    catch { try { course = await Course.create({ data: dataMin }); } catch {} }

    if (course) createdCourses.push(course);
    else console.warn(`⚠️ Cours ignoré: ${c.title}`);
  }
  console.log('📚 Courses created:', createdCourses.length);

  // LESSONS
  if (!Lesson || createdCourses.length === 0) {
    console.warn('ℹ️ Modèle Lesson absent ou aucun cours — on s’arrête ici.');
    return;
  }

  const lessonsData = [
    { courseIndex: 0, lessons: [
      { title: 'Arabic Alphabet - Part 1', order: 1, duration: 15, content: { type: 'text', sections: ['Introduction to Arabic letters', 'Basic pronunciation'] } },
      { title: 'Arabic Alphabet - Part 2', order: 2, duration: 15, content: { type: 'text', sections: ['More letters', 'Writing practice'] } },
      { title: 'Numbers 1-10', order: 3, duration: 12, content: { type: 'text', sections: ['Counting in Arabic', 'Number recognition'] } },
      { title: 'Colors', order: 4, duration: 10, content: { type: 'text', sections: ['Basic colors', 'Color mixing'] } },
      { title: 'Family Members', order: 5, duration: 12, content: { type: 'text', sections: ['Family vocabulary', 'Relationships'] } },
      { title: 'Greetings', order: 6, duration: 8, content: { type: 'text', sections: ['Hello, goodbye', 'Time-based greetings'] } },
      { title: 'Basic Verbs', order: 7, duration: 15, content: { type: 'text', sections: ['Action words', 'Present tense'] } },
      { title: 'Food Items', order: 8, duration: 12, content: { type: 'text', sections: ['Common foods', 'Meal times'] } },
      { title: 'Body Parts', order: 9, duration: 10, content: { type: 'text', sections: ['Body vocabulary', 'Health basics'] } },
      { title: 'Weather & Seasons', order: 10, duration: 12, content: { type: 'text', sections: ['Weather terms', 'Seasonal changes'] } }
    ]},
    { courseIndex: 2, lessons: [
      { title: 'French Alphabet & Pronunciation', order: 1, duration: 15, content: { type: 'text', sections: ['French letters', 'Special sounds'] } },
      { title: 'Numbers 1-20', order: 2, duration: 12, content: { type: 'text', sections: ['Counting in French', 'Number games'] } },
      { title: 'Colors & Shapes', order: 3, duration: 10, content: { type: 'text', sections: ['Color vocabulary', 'Geometric shapes'] } },
      { title: 'Days & Months', order: 4, duration: 12, content: { type: 'text', sections: ['Calendar vocabulary', 'Time concepts'] } },
      { title: 'Family & Friends', order: 5, duration: 15, content: { type: 'text', sections: ['Family terms', 'Relationship vocabulary'] } },
      { title: 'Greetings & Introductions', order: 6, duration: 10, content: { type: 'text', sections: ['Formal vs informal', 'Cultural context'] } },
      { title: 'Basic Verbs - Être & Avoir', order: 7, duration: 15, content: { type: 'text', sections: ['To be and to have', 'Conjugation basics'] } },
      { title: 'Food & Drinks', order: 8, duration: 12, content: { type: 'text', sections: ['Meal vocabulary', 'Restaurant basics'] } },
      { title: 'Animals', order: 9, duration: 10, content: { type: 'text', sections: ['Farm animals', 'Wild animals'] } },
      { title: 'Weather & Clothing', order: 10, duration: 12, content: { type: 'text', sections: ['Weather expressions', 'Clothing items'] } }
    ]},
    { courseIndex: 4, lessons: [
      { title: 'English Alphabet & Phonics', order: 1, duration: 15, content: { type: 'text', sections: ['Letter recognition', 'Sound patterns'] } },
      { title: 'Numbers & Counting', order: 2, duration: 12, content: { type: 'text', sections: ['Number words', 'Counting objects'] } },
      { title: 'Colors & Shapes', order: 3, duration: 10, content: { type: 'text', sections: ['Color names', 'Basic shapes'] } },
      { title: 'Family & Home', order: 4, duration: 12, content: { type: 'text', sections: ['Family members', 'House rooms'] } },
      { title: 'Greetings & Manners', order: 5, duration: 8, content: { type: 'text', sections: ['Polite expressions', 'Cultural norms'] } },
      { title: 'Basic Verbs', order: 6, duration: 15, content: { type: 'text', sections: ['Action words', 'Present simple'] } },
      { title: 'Food & Meals', order: 7, duration: 12, content: { type: 'text', sections: ['Food vocabulary', 'Meal times'] } },
      { title: 'Animals & Nature', order: 8, duration: 10, content: { type: 'text', sections: ['Animal names', 'Natural world'] } },
      { title: 'Weather & Seasons', order: 9, duration: 12, content: { type: 'text', sections: ['Weather terms', 'Seasonal activities'] } },
      { title: 'School & Learning', order: 10, duration: 15, content: { type: 'text', sections: ['School subjects', 'Learning tools'] } }
    ]},
    { courseIndex: 6, lessons: [
      { title: 'Computer Basics', order: 1, duration: 15, content: { type: 'text', sections: ['Parts of computer', 'Basic operations'] } },
      { title: 'Mouse & Keyboard', order: 2, duration: 12, content: { type: 'text', sections: ['Input devices', 'Basic commands'] } },
      { title: 'Operating System', order: 3, duration: 15, content: { type: 'text', sections: ['Windows/Mac basics', 'File management'] } },
      { title: 'Internet Safety', order: 4, duration: 12, content: { type: 'text', sections: ['Online safety', 'Privacy basics'] } },
      { title: 'Word Processing', order: 5, duration: 20, content: { type: 'text', sections: ['Text editing', 'Document creation'] } },
      { title: 'Digital Images', order: 6, duration: 15, content: { type: 'text', sections: ['Image editing', 'File formats'] } },
      { title: 'Email Basics', order: 7, duration: 12, content: { type: 'text', sections: ['Email etiquette', 'Attachment handling'] } },
      { title: 'Online Research', order: 8, duration: 15, content: { type: 'text', sections: ['Search strategies', 'Source evaluation'] } },
      { title: 'Digital Citizenship', order: 9, duration: 12, content: { type: 'text', sections: ['Online behavior', 'Digital footprint'] } },
      { title: 'Basic Troubleshooting', order: 10, duration: 15, content: { type: 'text', sections: ['Common problems', 'Solution steps'] } }
    ]},
    { courseIndex: 8, lessons: [
      { title: 'Counting & Numbers', order: 1, duration: 15, content: { type: 'text', sections: ['Number recognition', 'Counting sequences'] } },
      { title: 'Addition Basics', order: 2, duration: 20, content: { type: 'text', sections: ['Simple addition', 'Number bonds'] } },
      { title: 'Subtraction Basics', order: 3, duration: 20, content: { type: 'text', sections: ['Simple subtraction', 'Take away concept'] } },
      { title: 'Shapes & Geometry', order: 4, duration: 15, content: { type: 'text', sections: ['2D shapes', 'Properties'] } },
      { title: 'Measurement', order: 5, duration: 18, content: { type: 'text', sections: ['Length, weight', 'Units of measure'] } },
      { title: 'Patterns & Sequences', order: 6, duration: 12, content: { type: 'text', sections: ['Number patterns', 'Visual patterns'] } },
      { title: 'Money & Coins', order: 7, duration: 15, content: { type: 'text', sections: ['Coin recognition', 'Simple transactions'] } },
      { title: 'Time & Clocks', order: 8, duration: 20, content: { type: 'text', sections: ['Clock reading', 'Time concepts'] } },
      { title: 'Data & Graphs', order: 9, duration: 15, content: { type: 'text', sections: ['Simple charts', 'Data interpretation'] } },
      { title: 'Problem Solving', order: 10, duration: 25, content: { type: 'text', sections: ['Word problems', 'Solution strategies'] } }
    ]},
    { courseIndex: 10, lessons: [
      { title: 'Living vs Non-living', order: 1, duration: 15, content: { type: 'text', sections: ['Characteristics of life', 'Classification'] } },
      { title: 'Plants & Growth', order: 2, duration: 18, content: { type: 'text', sections: ['Plant parts', 'Growth process'] } },
      { title: 'Animals & Habitats', order: 3, duration: 20, content: { type: 'text', sections: ['Animal types', 'Environment needs'] } },
      { title: 'Human Body', order: 4, duration: 15, content: { type: 'text', sections: ['Body systems', 'Health basics'] } },
      { title: 'Matter & Materials', order: 5, duration: 18, content: { type: 'text', sections: ['States of matter', 'Properties'] } },
      { title: 'Energy & Forces', order: 6, duration: 20, content: { type: 'text', sections: ['Types of energy', 'Simple machines'] } },
      { title: 'Earth & Space', order: 7, duration: 15, content: { type: 'text', sections: ['Planets', 'Earth features'] } },
      { title: 'Weather & Climate', order: 8, duration: 18, content: { type: 'text', sections: ['Weather patterns', 'Climate zones'] } },
      { title: 'Sound & Light', order: 9, duration: 15, content: { type: 'text', sections: ['Sound waves', 'Light properties'] } },
      { title: 'Scientific Method', order: 10, duration: 25, content: { type: 'text', sections: ['Observation', 'Experimentation'] } }
    ]},
    { courseIndex: 12, lessons: [
      { title: 'The Prophet Muhammad ﷺ - Early Life', order: 1, duration: 20, content: { type: 'text', sections: ['Birth and childhood', 'Family background'] } },
      { title: 'The First Revelation', order: 2, duration: 25, content: { type: 'text', sections: ['Cave of Hira', 'Angel Jibreel'] } },
      { title: 'Early Muslims in Makkah', order: 3, duration: 22, content: { type: 'text', sections: ['First converts', 'Persecution'] } },
      { title: 'The Hijrah to Madinah', order: 4, duration: 20, content: { type: 'text', sections: ['Journey details', 'Significance'] } },
      { title: 'Building the First Mosque', order: 5, duration: 18, content: { type: 'text', sections: ['Construction', 'Community center'] } },
      { title: 'The Battle of Badr', order: 6, duration: 25, content: { type: 'text', sections: ['Historical context', 'Divine assistance'] } },
      { title: 'Treaty of Hudaybiyyah', order: 7, duration: 20, content: { type: 'text', sections: ['Peace agreement', 'Strategic wisdom'] } },
      { title: 'Conquest of Makkah', order: 8, duration: 22, content: { type: 'text', sections: ['Bloodless victory', 'Forgiveness'] } },
      { title: 'Farewell Pilgrimage', order: 9, duration: 25, content: { type: 'text', sections: ['Last sermon', 'Final guidance'] } },
      { title: "The Prophet's Legacy", order: 10, duration: 20, content: { type: 'text', sections: ['Character traits', 'Teachings'] } }
    ]},
  ];

  for (const cd of lessonsData) {
    const course = createdCourses[cd.courseIndex];
    if (!course) continue;

    for (const l of cd.lessons) {
      const lessonDataFull = { title: l.title, order: l.order, duration: l.duration, courseId: course.id, slug: slug(l.title), content: l.content };
      const lessonDataMin  = { title: l.title, order: l.order, duration: l.duration, courseId: course.id, slug: slug(l.title) };

      let lesson = null;
      try { lesson = await Lesson.create({ data: lessonDataFull }); }
      catch { try { lesson = await Lesson.create({ data: lessonDataMin }); } catch {} }

      if (!lesson) { console.warn(`⚠️ Leçon ignorée: ${l.title}`); continue; }

      // sources (optionnel)
      const islamic = [
        { citation: 'Ṣaḥīḥ al-Bukhārī, Book of Revelation, Hadith 1', authStatus: 'ṣaḥīḥ' },
        { citation: 'Ṣaḥīḥ Muslim, Book of Faith, Hadith 160', authStatus: 'ṣaḥīḥ' },
        { citation: 'Ar-Rahiq Al-Makhtūm by Safiur Rahman Mubarakpuri', authStatus: 'biographical reference' },
        { citation: 'The Sealed Nectar by Safiur Rahman Mubarakpuri', authStatus: 'ḥasan' },
      ];
      const general = [
        { citation: 'National Curriculum Standards', authStatus: 'verified' },
        { citation: 'Educational Research Foundation', authStatus: 'peer-reviewed' },
        { citation: 'International Education Guidelines', authStatus: 'accredited' },
      ];
      const src = (course.subject === 'Islamic History') ? islamic : general;

      if (SourceRef) {
        if (hasFn(SourceRef, 'createMany')) {
          await SourceRef.createMany({
            data: src.map(s => ({ lessonId: lesson.id, citation: s.citation, authStatus: s.authStatus }))
          }).catch(() => {});
        } else if (hasFn(SourceRef, 'create')) {
          for (const s of src) {
            await SourceRef.create({ data: { lessonId: lesson.id, citation: s.citation, authStatus: s.authStatus } }).catch(() => {});
          }
        }
      }
    }
  }

  console.log('📖 Lessons created (sources si modèle présent)');

  // ENROLLMENTS (facultatif)
  if (Enrollment && student && createdCourses[0] && createdCourses[2]) {
    await Enrollment.create({ data: { userId: student.id, courseId: createdCourses[0].id, progress: 30 } }).catch(() => {});
    await Enrollment.create({ data: { userId: student.id, courseId: createdCourses[2].id, progress: 15 } }).catch(() => {});
    console.log('📝 Enrollments created');
  }

  // FORUM (facultatif)
  if (Thread && Post && teacher && createdCourses[0]) {
    const t = await Thread.create({
      data: { title: 'Tips for Learning Arabic', content: 'Share your best strategies for learning Arabic as a beginner!', userId: teacher.id, courseId: createdCourses[0].id }
    }).catch(() => null);
    if (t) {
      await Post.create({ data: { content: 'Practice with native speakers and use language learning apps daily.', userId: student?.id || teacher.id, threadId: t.id } }).catch(() => {});
      console.log('💬 Forum content created');
    }
  }

  console.log('✅ Seed terminé');
}

run()
  .catch((e) => { console.error('❌ Error during seeding:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
