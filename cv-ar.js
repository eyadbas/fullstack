const cvLanguageToggle = document.querySelector('[data-cv-language]');
const visibleCertifications = '.cv-section[id="certifications"]:not(:has(+ .cv-section[id="certifications"]))';

const cvTranslations = {
  '.brand-copy': 'حلول الجودة<br>استشارات GRC وPMO التقني',
  '.cv-nav > a': ['من نحن', 'الخبرة', 'الشهادات', 'تواصل', 'العودة إلى QS ↗'],
  '.cv-hero .eyebrow': 'مدير أول للبرامج التقنية · قائد PMO والتحول الرقمي',
  '.cv-hero h1': 'تحويل الاستراتيجية إلى <i>تنفيذ</i> عبر المؤسسات.',
  '.cv-hero .cv-sub': 'أكثر من 13 عامًا في قيادة برامج التقنية والبنية التحتية والأمن السيبراني. أركز على حوكمة مكاتب إدارة المشاريع ووضوح التنفيذ والقيادة المشتركة بين الفرق، بما يتوافق مع ممارسات ISO 27001 وNCA وCOBIT وPMI. مقيم في الرياض، المملكة العربية السعودية.',
  '#about .section-label': 'الملف الشخصي',
  '#about .section-title': 'نبذة عني',
  '.profile-copy p': ['أنا مدير برامج ومشاريع تقنية أمتلك أكثر من 13 عامًا من الخبرة في قيادة مبادرات التقنية والبنية التحتية والأمن السيبراني عبر القطاعات الحكومية وقطاع الطيران في المملكة العربية السعودية.', 'أركز على تحويل الاستراتيجية إلى تنفيذ من خلال بناء حوكمة قوية لمكاتب إدارة المشاريع وتحسين وضوح التنفيذ وقيادة الفرق المشتركة عبر البرامج المعقدة. تجمع خبرتي بين المعرفة التقنية العملية وقيادة البرامج وفق ممارسات ISO 27001 وNCA وCOBIT وPMI.', 'أقود حاليًا مكتب إدارة المشاريع التقنية في المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر، بعد تأسيسه من الصفر وفق نهج البناء والتشغيل والنقل القائم على المعايير والأطر الدولية.'],
  '.profile-stats .stat-label': ['سنوات من الخبرة', 'قيمة البرامج المنفذة بالريال السعودي', 'مشاريع البنية التحتية والأمن السيبراني'],
  '.cv-section:nth-of-type(3) .section-label': 'الخلفية الأكاديمية',
  '#experience .section-label': 'المسار المهني',
  '.cv-section:nth-of-type(3) .section-title': 'التعليم',
  '.cv-section:nth-of-type(4) .section-title': 'الخبرة',
  '.edu-degree': ['ماجستير إدارة أعمال تنفيذي', 'بكالوريوس العلوم في الهندسة الكهربائية وهندسة الحاسب'],
  '.edu-school': ['جامعة الملك عبدالعزيز', 'جامعة الملك عبدالعزيز'],
  '.edu-subjects': ['إدارة المشاريع، إدارة نظم المعلومات، الاقتصاد، تمويل الشركات، المحاسبة الإدارية', 'التصميم الهندسي، الدوائر الكهربائية، الإلكترونيات، البرمجة (Java وC#)، قواعد البيانات، هندسة الاتصالات والشبكات'],
  '.exp-role': ['مدير برامج تقنية المعلومات', 'مدير مشاريع تقنية المعلومات', 'مدير مشاريع تقنية المعلومات / أخصائي شبكات', 'مهندس شبكات'],
  '.exp-org': ['المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر', 'Wipro / مطارات الرياض', 'شركة المياه الوطنية', 'ICAD'],
  '.exp-desc li': ['تأسيس مكتب إدارة المشاريع التقنية من الصفر باستخدام نهج البناء والتشغيل والنقل وفق المعايير والأطر الدولية.', 'العمل مع القيادة التنفيذية لدفع مبادرات التحول الرقمي، بما في ذلك برامج نظم المعلومات الجغرافية والذكاء الاصطناعي.', 'تطبيق ممارسات حوكمة المحافظ وأتمتة تقارير PMO لإتاحة رؤية فورية للتنفيذ والمخاطر والميزانية.', 'قيادة إعداد نطاقات العمل وطلبات تقديم العروض ودعم تقييم الموردين وضمهم.', 'إدارة مشاريع البنية التحتية والأمن السيبراني الداعمة لعمليات المطارات الحيوية.', 'قيادة تحديث شبكات المؤسسة وتنسيق فرق الهندسة والأمن السيبراني والموردين.', 'تنفيذ عمليات ترحيل البنية التحتية دون توقف تشغيلي وتقديم تقارير تنفيذية.', 'تنفيذ برامج مراكز البيانات والتعافي من الكوارث لخدمات حيوية.', 'تطبيق فصل شبكات تقنية المعلومات والتقنية التشغيلية وتحديث منصات الشبكات والأمن.', 'تنفيذ حلول شبكات مؤسسية داعمة للأنظمة التشغيلية للطيران.', 'تهيئة بيئات التوجيه والتحويل وجدران الحماية للعمليات الآمنة.'],
  [`${visibleCertifications} .section-label`]: 'الشهادات',
  [`${visibleCertifications} .section-title`]: 'اعتمادات موثقة',
  [`${visibleCertifications} .cv-sub`]: 'اضغط على «عرض الشهادة» لفتح ملف PDF الموثق.',
  [`${visibleCertifications} .cert-full`]: ['محترف أمن نظم المعلومات المعتمد — ISC2', 'محترف إدارة المشاريع — PMI', 'الممارس المعتمد للمنهجيات الرشيقة — PMI', 'محترف الحوكمة والمخاطر والامتثال المعتمد — OCEG', 'مدقق الحوكمة والمخاطر والامتثال المعتمد — OCEG', 'محترف شبكات Cisco المعتمد', 'شهادة مهنية'],
  [`${visibleCertifications} .cert-number`]: ['رقم الشهادة #2851874', 'رقم الشهادة #2558722', 'رقم الشهادة #3369928', 'رقم الشهادة #179077139', 'رقم الشهادة #179224276', 'شهادة Cisco', 'ملف الشهادة مرفوع'],
  [`${visibleCertifications} .cert-button`]: ['عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>', 'عرض الشهادة <span>↗</span>'],
  '.columns .section-label': ['الأثر المختار', 'القدرات الأساسية'],
  '.columns .section-title': ['المشاريع', 'المهارات'],
  '.columns .list li': ['تأسيس مكتب إدارة المشاريع التقنية وفق نهج البناء والتشغيل والنقل', 'برامج التحول الرقمي في نظم المعلومات الجغرافية والذكاء الاصطناعي', 'برامج مراكز البيانات والتعافي من الكوارث', 'فصل شبكات تقنية المعلومات والتقنية التشغيلية', 'تحديث البنية التحتية للمطارات'],
  '.cv-contact h2': 'لنجعل الخطوة<br><i>التالية واضحة.</i>',
  '.cv-contact .contact-details > div:first-child': 'إياد باصبرين',
  '.cv-contact .contact-details > div:nth-of-type(2)': 'الرياض، المملكة العربية السعودية',
  '.cv-contact .contact-details a:last-child': 'لينكدإن / إياد باصبرين ↗',
  '.cv-footer span': ['© 2026 إياد باصبرين', 'حلول الجودة · الحوكمة / PMO / تنفيذ تقنية المعلومات']
};

const originalCvContent = new Map();
Object.keys(cvTranslations).forEach((selector) => {
  originalCvContent.set(selector, Array.from(document.querySelectorAll(selector), (element) => element.innerHTML));
});

const setCvLanguage = (language) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'إياد باصبرين | السيرة الذاتية' : 'Eyad Basabrain | CV';
  cvLanguageToggle.textContent = isArabic ? 'English' : 'العربية';
  cvLanguageToggle.setAttribute('aria-pressed', String(isArabic));

  Object.entries(cvTranslations).forEach(([selector, value]) => {
    const elements = document.querySelectorAll(selector);
    const values = Array.isArray(value) ? value : [value];
    elements.forEach((element, index) => {
      element.innerHTML = isArabic
        ? values[index] ?? values[0]
        : originalCvContent.get(selector)?.[index] ?? originalCvContent.get(selector)?.[0] ?? element.innerHTML;
    });
  });
};

cvLanguageToggle.addEventListener('click', () => {
  setCvLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
});
