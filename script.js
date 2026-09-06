const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const searchToggle = document.querySelector('[data-search-toggle]');
const searchPanel = document.querySelector('[data-search-panel]');
const languageOptions = document.querySelector('[data-language-options]');
const languageLinks = document.querySelectorAll('[data-language]');
const languageToggle = document.querySelector('[data-language-toggle]');

const translations = {
  ar: {
    '.ey-tagline': 'حوكمة وتقنية<br>استشارات PMO',
    '.region-label': 'اختيار اللغة <span class="chevron">⌄</span>',
    '.contact-button': 'تحدث مع مستشار',
    '.menu-toggle em': 'اختيار اللغة',
    '.nav-links a': ['الخدمات', 'من نحن', 'تواصل معنا'],
    '.region-link': 'المملكة العربية السعودية <span>↗</span>',
    '.language-options > span': 'اختر اللغة',
    '.search-panel label': 'ابحث في حلول الجودة',
    '#site-search': { placeholder: 'ابحث عن الخدمات والاستشارات' },
    '.search-field button': 'بحث',
    '.hero-copy .eyebrow': 'الحوكمة / المخاطر / التنفيذ',
    '.hero h1': 'حوكمة تواكب<br>سرعة <i>التنفيذ.</i>',
    '.hero-deck': 'حلول الجودة الشاملة هي جهة استشارية مستقلة في الحوكمة والمخاطر وإدارة المشاريع التقنية. نساعد مؤسسات القطاعين العام والخاص على بناء أطر الحوكمة وإدارة مخاطر المؤسسة وتنفيذ البرامج التقنية بما يصمد أمام التدقيق واللوائح وضغوط التنفيذ.',
    '.hero-actions .yellow-button': 'تحدث مع مستشار <span>↗</span>',
    '.hero-actions .text-link': 'استكشف خدماتنا الاستشارية <span>↗</span>',
    '.stats-grid span': ['سنوات في الحوكمة والمخاطر وPMO التقني', 'قطاعات صناعية نخدمها', 'إطار حوكمة متكامل'],
    '.services-section .eyebrow': 'الخدمات الاستشارية',
    '.services-section h2': 'حوكمة مبنية<br>لتحقيق <i>الضمان.</i>',
    '.section-intro': 'استشارات متكاملة في الحوكمة والمخاطر والامتثال وإدارة المشاريع التقنية، بدءًا من تصميم الضوابط وإدارة مخاطر المؤسسة وصولًا إلى حوكمة البرامج والاستعداد للتدقيق.',
    '.service-card h3': ['الحوكمة والمخاطر والامتثال (GRC)', 'إدارة مشاريع تقنية المعلومات', 'تأسيس وحوكمة مكاتب إدارة المشاريع', 'تقييم المخاطر والتخفيف منها', 'تدقيق الامتثال', 'استشارات إدارة البرامج'],
    '.service-card p': ['تصميم أطر متكاملة للحوكمة والمخاطر والامتثال متوافقة مع ISO 31000 وCOBIT، وتحويل المساءلة والامتثال إلى ممارسة يومية.', 'قيادة البرامج التقنية من الميثاق حتى الإطلاق باستخدام منهجية متوافقة مع PMI/PMBOK وسجلات RAID وحوكمة منضبطة لمراحل التنفيذ.', 'تأسيس مكاتب إدارة مشاريع مناسبة للحجم، تشمل المواثيق ومصفوفات RACI ودورات التقارير، لمنح القيادة رؤية فورية لصحة المحفظة.', 'تحديد مخاطر المؤسسة وترتيب أولوياتها عبر تقييمات منظمة وسجلات مخاطر ومراقبة قائمة على مؤشرات المخاطر الرئيسية.', 'بناء بيئات ضوابط جاهزة للتدقيق من خلال اختبار قائم على الأدلة وتقييم الفجوات وخرائط طريق المعالجة.', 'توفير إشراف قيادي للمحافظ متعددة المسارات وحل الاعتماديات وحماية الجداول الزمنية للتنفيذ.'],
    '.about-copy .eyebrow': 'لماذا حلول الجودة',
    '.about-copy h2': 'خبرة يمكنك<br>وضعها <i>موضع التنفيذ.</i>',
    '.about-copy > p:nth-of-type(2)': 'حلول الجودة الشاملة جهة استشارية مستقلة للقادة الذين يحتاجون إلى التقدم دون فقدان السيطرة، حيث نربط الحوكمة الاستراتيجية بالتفاصيل التشغيلية التي تجعل التنفيذ واقعًا.',
    '.founder-tag': 'المؤسس / المستشار الرئيسي — إياد باصبرين',
    '.bio': 'بخبرة تزيد عن 13 عامًا في القطاعين الحكومي والتقني، يجمع إياد باصبرين (PMP، PMI-ACP، GRCP، GRCA، CISSP) بين قيادة مكاتب إدارة المشاريع التقنية والاستشارات في الحوكمة والمخاطر لمواجهة تحديات التحول والتنفيذ المعقدة.',
    '.about-tags': 'قطاعات حكومية وتقنية · قيادة PMO تقني · استشارات GRC وإدارة مخاطر المؤسسة',
    '.cv-button': 'عرض السيرة الذاتية لإياد <span>↗</span>',
    '.about-stats span': ['سنوات من الخبرة', 'بيئات تشغيلية', 'مساحة للتحسين'],
    '.contact-grid .eyebrow': 'لنتحدث',
    '.contact-grid h2': 'خطوتك القادمة<br><i>الواضحة.</i>',
    '.contact-grid > div:last-child > p': 'أخبرنا بما تعمل عليه، وسنقدم لك وجهة نظر مدروسة وخطوة عملية تالية.',
    '.contact-link': 'لينكدإن / إياد باصبرين <span>↗</span>',
    '.footer-links a': ['من نحن', 'الخدمات', 'تواصل معنا'],
    '.footer-bottom span': ['© 2026 حلول الجودة. جميع الحقوق محفوظة.', 'الحوكمة / PMO / تنفيذ تقنية المعلومات']
  }
};

const originalContent = new Map();
const originalAttributes = new Map();
Object.keys(translations.ar).forEach((selector) => {
  const elements = document.querySelectorAll(selector);
  originalContent.set(selector, Array.from(elements, (element) => element.innerHTML));
  if (selector === '#site-search') originalAttributes.set(selector, elements[0]?.getAttribute('placeholder'));
});

const applyLanguage = (language) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'حلول الجودة | استشارات الحوكمة وPMO التقني' : 'Quality Solution | GRC & IT-PMO Advisory';
  Object.entries(translations.ar).forEach(([selector, value]) => {
    const elements = document.querySelectorAll(selector);
    const values = Array.isArray(value) ? value : [value];
    elements.forEach((element, index) => {
      if (isArabic) {
        if (selector === '#site-search') element.setAttribute('placeholder', value.placeholder);
        else element.innerHTML = values[index] ?? values[0];
      } else {
        element.innerHTML = originalContent.get(selector)?.[index] ?? originalContent.get(selector)?.[0] ?? element.innerHTML;
        if (selector === '#site-search') element.setAttribute('placeholder', originalAttributes.get(selector));
      }
    });
  });
};

const toggleLanguages = (control) => {
  const isOpen = languageOptions.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  languageToggle.setAttribute('aria-expanded', String(isOpen));
  control.blur();
};

menuToggle.addEventListener('click', () => {
  toggleLanguages(menuToggle);
});

languageToggle.addEventListener('click', () => {
  toggleLanguages(languageToggle);
});

languageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const language = link.dataset.language;
    applyLanguage(language);
    languageLinks.forEach((item) => item.classList.toggle('active', item === link));
    languageOptions.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    languageToggle.setAttribute('aria-expanded', 'false');
  });
});

searchToggle.addEventListener('click', () => {
  searchPanel.classList.toggle('open');
  if (searchPanel.classList.contains('open')) document.querySelector('#site-search').focus();
});
