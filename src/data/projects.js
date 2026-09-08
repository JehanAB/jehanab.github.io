import opsDeskImg from '../assets/ops-desk.webp';
import recipeFinderImg from '../assets/recipe-finder.webp';

// GIF demos live in each GitHub repo (used as-is, same URLs as the live site).
const gif = (repo) => `https://github.com/JehanAB/${repo}/raw/main/demo.gif`;

export const projects = [
  {
    id: 'ops-desk',
    size: 'lg',
    featured: true,
    image: opsDeskImg,
    imageAlt: 'Ops Desk IT Helpdesk Dashboard screenshot',
    title: { en: 'Ops Desk — IT Helpdesk Dashboard', ar: 'لوحة تحكم Ops Desk (IT Helpdesk)' },
    description: {
      en: 'IT teams tracking helpdesk tickets in spreadsheets have no way to see priority or trends at a glance. I built a live dashboard with KPI cards, trend and priority charts, and a searchable, sortable, filterable ticket table — turning raw ticket data into a picture the whole team can act on in seconds, using React and Recharts.',
      ar: 'فرق الدعم الفني اللي تتابع التذاكر بجداول إكسل ما عندها طريقة تشوف فيها الأولويات أو الاتجاهات بنظرة وحدة. بنيت لوحة تحكم حية فيها كروت مؤشرات أداء، مخططات للاتجاهات والأولويات، وجدول تذاكر قابل للبحث والفرز والفلترة — حولت بيانات التذاكر الخام لصورة واضحة يقدر الفريق كله يتصرف عليها بثواني، باستخدام React وRecharts.'
    },
    tags: ['React', 'Recharts'],
    live: 'https://glittery-torte-e91929.netlify.app',
    github: 'https://github.com/JehanAB/it-helpdesk-dashboard'
  },
  {
    id: 'recipe-finder',
    size: 'lg',
    featured: true,
    image: recipeFinderImg,
    imageAlt: 'Recipe Finder app screenshot',
    title: { en: 'Recipe Finder', ar: 'Recipe Finder' },
    description: {
      en: 'Most recipe searches force you to scroll through irrelevant results before finding something you can actually cook tonight. I built a search app on a real external API (TheMealDB) with meal-type and cuisine filters so results stay relevant, plus a favorites list saved locally in the browser so nothing gets lost between visits.',
      ar: 'أغلب مواقع البحث عن وصفات تخليك تمرر على نتايج ما تفيدك قبل لا تلقين شي تقدرين تطبخينه فعلاً الليلة. بنيت تطبيق بحث مربوط بـ API خارجي حقيقي (TheMealDB) بفلترة حسب نوع الوجبة والمطبخ عشان النتايج تضل ذات صلة، مع قائمة مفضلة تُحفظ محليًا بالمتصفح عشان ما تضيع بين الزيارات.'
    },
    tags: ['React', 'API'],
    live: 'https://gentle-churros-0d3474.netlify.app',
    github: 'https://github.com/JehanAB/recipe-finder'
  },
  {
    id: 'drawing-app',
    size: 'md',
    featured: true,
    gif: gif('Drawing-App'),
    imageAlt: 'Drawing App demo',
    title: { en: 'Drawing App', ar: 'Drawing App' },
    description: {
      en: 'I wanted a project with zero UI libraries to lean on — just raw logic and the Canvas API. I built a freehand drawing app that tracks mouse coordinates in real time to render smooth strokes, with customizable brush color and size — my strongest showcase of core JavaScript problem-solving without a framework doing the work for me.',
      ar: 'كنت أبي مشروع بدون أي مكتبات جاهزة أتكئ عليها — منطق خام و Canvas API بس. بنيت تطبيق رسم حر يتتبع إحداثيات الماوس لحظياً عشان يرسم خطوط سلسة، بألوان وأحجام فرشاة قابلة للتخصيص — أقوى عرض عندي لحل المشاكل بـ JavaScript الخام بدون أي framework يسهّل الشغل عني.'
    },
    tags: ['JavaScript', 'Canvas'],
    live: 'https://jehanab.github.io/Drawing-App/',
    github: 'https://github.com/JehanAB/Drawing-App'
  },
  {
    id: 'movie-app',
    size: 'md',
    featured: true,
    gif: gif('MovieApp'),
    imageAlt: 'Movie App demo',
    title: { en: 'Movie App', ar: 'Movie App' },
    description: {
      en: 'I set out to build something that felt like a real product, not a tutorial exercise — an app someone would actually want to browse. The result is a movie search app that pulls live details and ratings and presents them in a smooth, responsive layout, my best example of tying a complete interactive experience together end to end.',
      ar: 'كان هدفي أبني شي يحس إنه منتج حقيقي، مو تمرين من درس تعليمي — تطبيق حد فعلاً يبي يتصفحه. النتيجة تطبيق بحث أفلام يجيب تفاصيل وتقييمات حية ويعرضها بواجهة سلسة ومتجاوبة، أفضل مثال عندي على ربط تجربة تفاعلية متكاملة من أولها لآخرها.'
    },
    tags: ['JavaScript', 'CSS3'],
    live: 'https://jehanab.github.io/MovieApp/',
    github: 'https://github.com/JehanAB/MovieApp'
  },
  {
    id: 'git-explorer',
    size: 'sm',
    gif: gif('git-explorer'),
    imageAlt: 'git-explorer demo',
    title: { en: 'git-explorer', ar: 'git-explorer' },
    description: {
      en: 'Most "search a GitHub user" demos stop at a profile card and a top-10 repo list — not enough to actually explore someone\'s work. I built a fuller tool: side-by-side profile comparison, a sortable table of up to 200 repos, a client-side language breakdown, and real 404 vs. rate-limit error handling — all in vanilla JS against the raw GitHub REST API, no libraries.',
      ar: 'أغلب تمارين "دور عن يوزر بگت هب" توقف عند كارد بروفايل و10 مستودعات — مو كافي تستكشف شغل أحد فعلياً. بنيت أداة أشمل: مقارنة بروفايلين جنب بعض، جدول قابل للفرز لين 200 مستودع، توزيع لغات برمجية محسوب من جهة العميل، ومعالجة حقيقية تفرّق بين خطأ 404 وتجاوز حد الطلبات — كله بجافاسكربت صرفة على GitHub REST API مباشرة، بدون أي مكتبة.'
    },
    tags: ['JavaScript', 'API'],
    live: 'https://jehanab.github.io/git-explorer/',
    github: 'https://github.com/JehanAB/git-explorer'
  },
  {
    id: 'bloom-steel',
    size: 'sm',
    gif: gif('bloom-steel'),
    imageAlt: 'Bloom & Steel demo',
    title: { en: 'Bloom & Steel — studio site', ar: 'Bloom & Steel — موقع استديو' },
    description: {
      en: 'What started as a one-page CSS layout exercise needed to actually work as a studio site. I rebuilt it into five real sections — a 4-step process, a filterable work grid, and a validated contact form — with a two-color accent system (brass + steel-blue) that mirrors the name itself, not just a name plus an arbitrary palette.',
      ar: 'كان أصلاً تمرين CSS بصفحة وحدة، احتاج يشتغل فعلياً كموقع استديو. أعدت بناءه لخمسة أقسام حقيقية — عملية من 4 خطوات، معرض أعمال قابل للفلترة، وفورم تواصل بتحقق فعلي — بنظام لونين (ذهبي + أزرق فولاذي) يعكس اسم الاستديو نفسه، مو بس اسم مع ألوان عشوائية.'
    },
    tags: ['JavaScript', 'CSS3'],
    live: 'https://jehanab.github.io/bloom-steel/',
    github: 'https://github.com/JehanAB/bloom-steel'
  },
  {
    id: 'note-app',
    size: 'sm',
    gif: gif('NoteApp'),
    imageAlt: 'Note App demo',
    title: { en: 'Note App', ar: 'Note App' },
    description: {
      en: 'CRUD is the skill that shows up in nearly every real job, so I wanted a clean, focused proof of it. I built a notes app where you add, edit, and delete entries dynamically with no page reloads — every state change reflected instantly in a clean UI, the core interaction pattern behind most real-world apps.',
      ar: 'مهارة CRUD هي اللي تتكرر بأغلب الوظائف الحقيقية، فحبيت أثبتها بشكل واضح ومركّز. بنيت تطبيق ملاحظات تقدرين فيه تضيفين وتعدلين وتحذفين ديناميكياً بدون إعادة تحميل الصفحة — كل تغيير يظهر فوراً بواجهة نظيفة، وهذا نمط التفاعل الأساسي وراء أغلب التطبيقات الحقيقية.'
    },
    tags: ['JavaScript', 'CRUD'],
    live: 'https://jehanab.github.io/NoteApp/',
    github: 'https://github.com/JehanAB/NoteApp'
  },
  {
    id: 'quiz-app',
    size: 'sm',
    gif: gif('QuizApp'),
    imageAlt: 'Quiz App demo',
    title: { en: 'Quiz App', ar: 'Quiz App' },
    description: {
      en: 'A quiz only feels engaging if the feedback is instant — no waiting, no ambiguity. I built an interactive quiz that presents multiple-choice questions, flags correct and incorrect answers the moment you click, and tracks the score live, focused purely on getting that state logic right.',
      ar: 'الكويز ما يحس تفاعلي إلا إذا كانت ردة الفعل فورية — بدون انتظار وبدون غموض. بنيت كويز تفاعلي يعرض أسئلة اختيار من متعدد، يبيّن الإجابة الصح والغلط لحظة الضغط، ويحسب النتيجة بشكل حي — تركيز كامل على ضبط منطق الحالة (state) صح.'
    },
    tags: ['JavaScript', 'Logic'],
    live: 'https://jehanab.github.io/QuizApp/',
    github: 'https://github.com/JehanAB/QuizApp'
  }
];
