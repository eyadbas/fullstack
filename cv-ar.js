const languageToggle = document.querySelector('[data-cv-language]');

const translations = {
  '.brand-copy': 'حلول الجودة<br>استشارات الحوكمة وPMO التقني',
  '.cv-nav a': ['نبذة', 'الخبرة', 'الشهادات', 'تواصل', 'العودة إلى حلول الجودة ↗'],
  '.cv-hero .eyebrow': 'مدير برامج تقنية أول · قائد مكتب إدارة المشاريع والتحول الرقمي',
  '.cv-hero h1': 'تحويل الاستراتيجية إلى <i>تنفيذ</i> فعلي عبر المؤسسات.',
  '.cv-hero .cv-sub': 'أكثر من 13 عامًا في قيادة برامج التقنية والبنية التحتية والأمن السيبراني. أركز على حوكمة مكاتب إدارة المشاريع، ووضوح التنفيذ، والقيادة متعددة التخصصات، وفق ممارسات ISO 27001 وNCA وCOBIT وPMI. مقيم في الرياض، المملكة العربية السعودية.',
  '#about .section-label': 'الملف المهني',
  '#about .section-title': 'نبذة',
  '.profile-copy p': [
    'أنا مدير برامج ومشاريع تقنية بخبرة تزيد على 13 عامًا في قيادة مبادرات التقنية والبنية التحتية والأمن السيبراني في القطاعين الحكومي والطيران في المملكة العربية السعودية.',
    'أركز على تحويل الاستراتيجية إلى تنفيذ عبر بناء حوكمة قوية لمكاتب إدارة المشاريع، وتحسين وضوح التنفيذ، وقيادة فرق متعددة التخصصات خلال البرامج المعقدة. تجمع خبرتي بين المعرفة التقنية العملية وقيادة البرامج المتوافقة مع ممارسات ISO 27001 وNCA وCOBIT وPMI.',
    'أقود حاليًا مكتب إدارة المشاريع التقنية في المركز الوطني لتنمية الغطاء النباتي، حيث أسسته من الصفر بمنهجية البناء والتشغيل والنقل، مستندًا إلى المعايير والأطر الدولية.'
  ],
  '.stat-label': ['سنوات من الخبرة', 'ريال سعودي في برامج تم تنفيذها', 'مشروعًا للبنية التحتية والأمن السيبراني'],
  '.cv-section:nth-of-type(2) .section-label': 'الخلفية الأكاديمية',
  '.cv-section:nth-of-type(2) .section-title': 'التعليم',
  '.edu-degree': ['ماجستير تنفيذي في إدارة الأعمال', 'بكالوريوس هندسة كهربائية وهندسة حاسب'],
  '.edu-school': ['جامعة الملك عبدالعزيز', 'جامعة الملك عبدالعزيز'],
  '.edu-subjects': ['إدارة المشاريع، نظم إدارة المعلومات، الاقتصاد، التمويل المؤسسي، المحاسبة الإدارية', 'التصميم الهندسي، الدوائر الكهربائية، الإلكترونيات، البرمجة (Java وC#)، قواعد البيانات، هندسة الاتصالات والشبكات'],
  '#experience .section-label': 'المسيرة المهنية',
  '#experience .section-title': 'الخبرة',
  '.exp-period': ['يناير 2024 — حتى الآن', 'مارس 2022 — يناير 2024', 'فبراير 2015 — مارس 2022', 'فبراير 2013 — فبراير 2015'],
  '.exp-role': ['مدير برامج تقنية المعلومات', 'مدير مشاريع تقنية المعلومات', 'مدير مشاريع تقنية المعلومات / أخصائي شبكات', 'مهندس شبكات'],
  '.exp-org': ['المركز الوطني لتنمية الغطاء النباتي', 'ويبرو / مطارات الرياض', 'شركة المياه الوطنية', 'آيكاد'],
  '#certifications .section-label': 'الشهادات المهنية',
  '#certifications .section-title': 'اعتمادات موثقة',
  '#certifications .cv-sub': 'اختر "عرض الشهادة" لفتح ملف PDF الموثق.',
  '.cert-button': 'عرض الشهادة <span>↗</span>',
  '.cv-download-link': 'تحميل السيرة الذاتية <span>↗</span>',
  '.columns > div:first-child .section-label': 'أثر مختار',
  '.columns > div:first-child .section-title': 'المشاريع',
  '.columns > div:last-child .section-label': 'القدرات الأساسية',
  '.columns > div:last-child .section-title': 'المهارات',
  '.list li': ['مكتب إدارة المشاريع التقنية بمنهجية البناء والتشغيل والنقل', 'برامج التحول الرقمي في نظم GIS والذكاء الاصطناعي', 'مراكز البيانات والتعافي من الكوارث', 'فصل شبكات تقنية المعلومات والتشغيل', 'تحديث البنية التحتية للمطارات'],
  '.skill': ['حوكمة PMO', 'إدارة البرامج', 'إدارة المخاطر', 'التحول الرقمي', 'الأمن السيبراني', 'قيادة أصحاب المصلحة', 'إدارة الموردين', 'هندسة الشبكات'],
  '.cv-contact h2': 'لنجعل الخطوة التالية<br><i>واضحة.</i>',
  '.contact-details > div:first-child': 'إياد باصبرين',
  '.contact-details > div:nth-of-type(2)': 'الرياض، المملكة العربية السعودية',
  '.contact-details a:last-child': 'لينكدإن / إياد باصبرين ↗',
  '.cv-footer span': ['© 2026 إياد باصبرين', 'حلول الجودة · الحوكمة / PMO / تنفيذ تقنية المعلومات']
};

const originalContent = new Map();
Object.keys(translations).forEach((selector) => {
  originalContent.set(selector, Array.from(document.querySelectorAll(selector), (element) => element.innerHTML));
});

const applyLanguage = (language) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'إياد باصبرين | السيرة الذاتية' : 'Eyad Basabrain | CV';

  Object.entries(translations).forEach(([selector, value]) => {
    const elements = document.querySelectorAll(selector);
    const values = Array.isArray(value) ? value : [value];
    elements.forEach((element, index) => {
      element.innerHTML = isArabic
        ? (values[index] ?? values[0])
        : (originalContent.get(selector)?.[index] ?? element.innerHTML);
    });
  });

  languageToggle.textContent = isArabic ? 'English' : 'العربية';
  languageToggle.setAttribute('aria-pressed', String(isArabic));
};

languageToggle.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
});
