const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const searchToggle = document.querySelector('[data-search-toggle]');
const searchPanel = document.querySelector('[data-search-panel]');
const languageOptions = document.querySelector('[data-language-options]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageLinks = document.querySelectorAll('[data-language]');

const translations = {
  '.ey-tagline': 'إدارة شبكات البيانات والاتصالات<br>مدير مشاريع',
  '.region-label': 'اللغات <span class="chevron">⌄</span>',
  '.contact-button': 'تواصل معي',
  '.menu-toggle em': 'القائمة',
  '.nav-links a': ['نبذة', 'الخبرة', 'الشهادات', 'تواصل'],
  '.region-link': 'الرياض، المملكة العربية السعودية <span>↗</span>',
  '.language-options > span': 'اختر اللغة',
  '.search-panel label': 'البحث في السيرة الذاتية',
  '#site-search': { placeholder: 'ابحث في الخبرة والمهارات والمشاريع' },
  '.search-field button': 'بحث',
  '.hero .eyebrow': 'مدير مشاريع شبكات البيانات والاتصالات',
  '.hero h1': 'شبكات تحافظ على استمرار <i>العمليات الحيوية.</i>',
  '.hero-deck': 'مدير مشاريع تقنية معلومات بخبرة مثبتة في تنفيذ مشاريع البنية التحتية للشبكات والاتصالات الهاتفية عبر بروتوكول الإنترنت في قطاع المطارات.',
  '.hero-actions .blue-button': 'لنتواصل <span>↗</span>',
  '.hero-actions .text-link': 'تحميل السيرة الذاتية <span>↗</span>',
  '.hero-panel-caption span': 'المقر',
  '.hero-panel-caption strong': 'الرياض، السعودية',
  '.stats-grid span': ['سنوات في تشغيل الشبكات', 'مناصب مهنية', 'شهادات Cisco'],
  '#about .eyebrow': 'الملخص المهني',
  '#about h2': 'بنية تحتية موثوقة بعقلية <i>تركز على الإنجاز.</i>',
  '.profile-copy p': ['مدير مشاريع شبكات بيانات واتصالات يملك خبرة قوية في شبكات المؤسسات وإدارة مزودي خدمة الإنترنت والعمليات الحساسة.', 'أركز على التوافر والأمان والأداء العالي في بيئات تقنية المطارات، بدءًا من تخطيط المشاريع وتنفيذها ووصولًا إلى التسليم وإدارة الخدمات اليومية.'],
  '.profile-tags span': ['شبكات المؤسسات', 'إدارة المشاريع', 'إدارة مزودي الإنترنت', 'الاتصالات الهاتفية عبر IP'],
  '#experience .eyebrow': 'المسار المهني',
  '#experience h2': 'الخبرة',
  '.section-intro': 'قيادة الشبكات والاتصالات والعمليات في المطارات والجهات الحكومية والبنوك وخدمات التقنية.',
  '.exp-period': ['2025 — حتى الآن', '2022 — 2025', '2020 — 2022', '2019 — 2020', '2012 — 2018'],
  '.timeline h3': ['مدير مشاريع — الشبكات والاتصالات', 'مهندس أول شبكات ومشاريع', 'مهندس مركز عمليات الشبكة', 'مهندس شبكات', 'مستشار مبيعات'],
  '.exp-org': ['شركة مطارات الرياض', 'شركة مطارات الرياض / MDSA', 'شركة مطارات الرياض / Wipro', 'وزارة الإعلام / Creative Systems', 'مصرف الراجحي'],
  '.timeline li': ['قاد مشاريع الشبكات من التخطيط إلى التنفيذ والتسليم.', 'قاد عمليات إدارة الحوادث وطلبات الخدمة والتغيير والمشكلات.', 'أدار بوابات مزودي الإنترنت والموردين مع ضمان أداء الشبكة وتوافرها وأمانها.'],
  '#credentials .eyebrow': 'الشهادات',
  '#credentials h2': 'خبرة مبنية على <i>التخصص الشبكي.</i>',
  '#credentials > div > div:first-child > p:not(.eyebrow)': 'شهادات Cisco الحالية التي تدعم تنفيذ شبكات المؤسسات ومشاريع الاتصالات.',
  '.credential-list span': ['ENCOR وENARSI — 2022 ↗', '2022 ↗'],
  '.education-section .eyebrow': 'الخلفية الأكاديمية',
  '.education-section h2': 'التعليم',
  '.edu-item h3': ['بكالوريوس — دعم أنظمة شبكات الحاسب', 'دبلوم — الدعم الفني'],
  '.edu-item p': ['كلية التقنية · 2018', 'كلية التقنية · 2011'],
  '.skills-section .eyebrow': 'القدرات الأساسية',
  '.skills-section h2': 'المهارات والمشاريع',
  '.skills-section .profile-tags span': ['شبكات Cisco للمؤسسات', 'إدارة المشاريع', 'إدارة الخدمات والعمليات', 'أمن الشبكات', 'الاتصالات الهاتفية عبر IP', 'استكشاف الأخطاء وإصلاحها', 'توسعة الشبكات', 'ترقية مزودي الإنترنت', 'مراكز البيانات', 'تطوير مطار الملك خالد الدولي', 'CCTV', 'PTT', 'إدارة الموردين'],
  '#contact .eyebrow': 'لنتحدث',
  '#contact h2': 'هل أنت مستعد لبناء <i>الاتصال القادم؟</i>',
  '#contact > div > div:last-child > p': 'للاستفسارات حول البنية التحتية للشبكات ومشاريع الاتصالات وإدارة مزودي الإنترنت والعمليات الحساسة.',
  '.footer-links a': ['نبذة', 'الخبرة', 'تواصل'],
  '.footer-bottom span': ['© 2026 سعيد صالح الشهراني', 'الشبكات / الاتصالات / العمليات']
};

const original = new Map();
const originalAttributes = new Map();
Object.entries(translations).forEach(([selector]) => {
  const elements = document.querySelectorAll(selector);
  original.set(selector, Array.from(elements, (element) => element.innerHTML));
  if (selector === '#site-search') originalAttributes.set(selector, elements[0]?.getAttribute('placeholder'));
});

const applyLanguage = (language) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'سعيد صالح الشهراني | مدير مشاريع الشبكات' : 'Saeed Saleh Al-Shahrani | Network Project Manager';
  Object.entries(translations).forEach(([selector, value]) => {
    const elements = document.querySelectorAll(selector);
    const values = Array.isArray(value) ? value : [value];
    elements.forEach((element, index) => {
      if (isArabic) {
        if (selector === '#site-search') element.setAttribute('placeholder', value.placeholder);
        else element.innerHTML = values[index] ?? values[0];
      } else {
        element.innerHTML = original.get(selector)?.[index] ?? original.get(selector)?.[0] ?? element.innerHTML;
        if (selector === '#site-search') element.setAttribute('placeholder', originalAttributes.get(selector));
      }
    });
  });
  languageLinks.forEach((link) => link.classList.toggle('active', link.dataset.language === language));
};

const toggleLanguages = (control) => {
  const isOpen = languageOptions.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  languageToggle.setAttribute('aria-expanded', String(isOpen));
  control.blur();
};

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
});
languageToggle.addEventListener('click', () => toggleLanguages(languageToggle));
searchToggle.addEventListener('click', () => {
  searchPanel.classList.toggle('open');
  if (searchPanel.classList.contains('open')) document.querySelector('#site-search').focus();
});
languageLinks.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  applyLanguage(link.dataset.language);
  languageOptions.classList.remove('open');
  languageToggle.setAttribute('aria-expanded', 'false');
}));
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

if (new URLSearchParams(window.location.search).get('lang') === 'ar') applyLanguage('ar');
