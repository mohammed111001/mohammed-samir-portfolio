export const operationalProjects = {
  en: [
    {
      id: "attendance",
      title: "Attendance Sheet Generator",
      subtitle: "Formatted Excel attendance workbooks",
      category: "Education · Document Automation",
      description:
        "An Arabic application that turns course details and student lists into Excel attendance sheets for diploma, computer, and English programs.",
      role:
        "Application development, template-preserving Excel generation, date handling, and department access controls.",
      tech: ["Python", "Flask", "PostgreSQL"],
      url: "https://attendance-system-dn1b.onrender.com/",
      accessNote: "An authorized account is required to use the application.",
      illustrationCaption:
        "Workflow illustration · Not a product screenshot",
      diagramLabels: [
        "Course & student data",
        "Dates & templates",
        "Excel attendance sheets",
      ],
      study: {
        challenge:
          "Prepare consistent attendance sheets for different training programs while keeping the approved Excel layouts intact.",
        solution:
          "Combine manual or Excel input with date-based workbook generation and department-specific account permissions.",
        outcome:
          "A live application delivering formatted XLSX attendance workbooks for review and printing.",
      },
      decisions: [
        {
          title: "Preserve the approved layout",
          description:
            "Update workbook data while retaining styles, merged cells, print settings, logos, and signature areas.",
        },
        {
          title: "Keep departments under owner control",
          description:
            "Require authorized accounts and enforce section permissions, account disabling, and global shutdown on the server.",
        },
      ],
      features: [
        "Diploma, computer, and English-course sheets",
        "Manual student entry or Excel import",
        "Weekly sheets with Hijri/Gregorian date support",
        "XLSX export preserving the approved templates",
      ],
    },
    {
      id: "allocation",
      title: "Allocation Assistant",
      subtitle: "Room, Lab & Trainer Planner",
      category: "Training Operations · Resource Planning",
      description:
        "An Arabic resource-booking application for organizing rooms, labs, and trainers around training sessions, capacity, and availability.",
      role:
        "Application development, booking constraints, reviewable alternatives, and shared saving with controlled access.",
      tech: ["JavaScript", "Cloudflare Workers", "D1 / SQLite"],
      url: "https://institute-room-planner.moh-samir2572976.workers.dev/",
      accessNote: "Sign-in is required; access is managed by the owner.",
      illustrationCaption:
        "Allocation workflow illustration · Not a product screenshot",
      diagramLabels: [
        "Session requirements",
        "Resource checks",
        "Reviewed allocation",
      ],
      study: {
        challenge:
          "Allocate rooms, labs, and trainers while accounting for student capacity, availability, and conflicting bookings.",
        solution:
          "Centralize bookings with resource checks and reviewable alternatives for times, rooms, and trainers before saving.",
        outcome:
          "A shared booking planner with revision-protected saves, role-based access, and Excel/JSON exports.",
      },
      decisions: [
        {
          title: "Check capacity and eligibility",
          description:
            "Validate student counts, room type, trainer eligibility, and resource availability when reviewing a booking.",
        },
        {
          title: "Keep alternatives under user control",
          description:
            "Apply suggestions to the draft, then require an explicit save with a revision check before updating shared data.",
        },
      ],
      features: [
        "Capacity-aware room and lab bookings",
        "Trainer, room, and cohort conflict checks",
        "Reviewable time, room, and trainer alternatives",
        "Shared saving with Excel and JSON export",
      ],
    },
  ],
  ar: [
    {
      id: "attendance",
      title: "نظام كشوف الحضور والغياب",
      subtitle: "توليد كشوف Excel بالقوالب المعتمدة",
      category: "التعليم · أتمتة المستندات",
      description:
        "تطبيق عربي يحوّل بيانات البرامج وقوائم المتدربين إلى كشوف حضور Excel للدبلومات ودورات الحاسب واللغة الإنجليزية.",
      role:
        "تطوير التطبيق ومحرك تصدير Excel، ومعالجة التواريخ وصلاحيات الأقسام.",
      tech: ["Python", "Flask", "PostgreSQL"],
      url: "https://attendance-system-dn1b.onrender.com/",
      accessNote: "يتطلب استخدام التطبيق حسابًا مصرحًا به.",
      illustrationCaption:
        "رسم توضيحي لسير العمل · ليس لقطة من التطبيق",
      diagramLabels: [
        "بيانات البرامج والمتدربين",
        "التواريخ والقوالب",
        "كشوف حضور Excel",
      ],
      study: {
        challenge:
          "إعداد كشوف حضور موحدة لبرامج تدريبية مختلفة مع الحفاظ على قوالب Excel المعتمدة.",
        solution:
          "إدخال يدوي أو استيراد من Excel، وتوليد أوراق العمل حسب الفترة الدراسية، مع صلاحيات مستقلة للأقسام.",
        outcome:
          "تطبيق منشور ينتج كشوف XLSX منسقة للمراجعة والطباعة.",
      },
      decisions: [
        {
          title: "الحفاظ على القالب المعتمد",
          description:
            "تحديث بيانات الملف مع الإبقاء على التنسيقات والخلايا المدمجة وإعدادات الطباعة والشعارات وخانات التوقيع.",
        },
        {
          title: "إدارة الأقسام بصلاحيات المالك",
          description:
            "اشتراط الحسابات المصرح بها وفرض صلاحيات الأقسام وتعطيل الحسابات والإغلاق العام على الخادم.",
        },
      ],
      features: [
        "كشوف للدبلومات ودورات الحاسب والإنجليزية",
        "إدخال المتدربين يدويًا أو استيراد Excel",
        "كشوف أسبوعية ودعم التواريخ الهجرية والميلادية",
        "تصدير XLSX مع الحفاظ على القوالب المعتمدة",
      ],
    },
    {
      id: "allocation",
      title: "مساعد التخصيص",
      subtitle: "منظم القاعات والمعامل والمدربين",
      category: "التدريب · تخصيص الموارد",
      description:
        "تطبيق عربي لتنظيم حجز القاعات والمعامل والمدربين للجلسات التدريبية، مع مراعاة السعة وأوقات التوفر.",
      role:
        "تطوير التطبيق وقواعد الحجز والبدائل القابلة للمراجعة والحفظ المشترك بصلاحيات محددة.",
      tech: ["JavaScript", "Cloudflare Workers", "D1 / SQLite"],
      url: "https://institute-room-planner.moh-samir2572976.workers.dev/",
      accessNote: "يتطلب تسجيل الدخول، ويدير المالك صلاحيات الوصول.",
      illustrationCaption:
        "رسم توضيحي لمسار التخصيص · ليس لقطة من التطبيق",
      diagramLabels: [
        "متطلبات الجلسة",
        "فحص الموارد",
        "تخصيص بعد المراجعة",
      ],
      study: {
        challenge:
          "تخصيص القاعات والمعامل والمدربين مع مراعاة أعداد المتدربين وأوقات التوفر وتعارضات الحجز.",
        solution:
          "تنظيم الحجوزات في تطبيق مشترك يفحص الموارد ويعرض بدائل للمواعيد والقاعات والمدربين قبل الحفظ.",
        outcome:
          "منظم حجز مشترك يحمي الحفظ من تعارض التعديلات، ويدعم الصلاحيات وتصدير Excel وJSON.",
      },
      decisions: [
        {
          title: "فحص السعة والأهلية",
          description:
            "التحقق من أعداد المتدربين ونوع القاعة وأهلية المدرب وأوقات توفر الموارد عند مراجعة الحجز.",
        },
        {
          title: "إبقاء البدائل تحت مراجعة المستخدم",
          description:
            "تطبيق الاقتراح على المسودة، ثم اشتراط حفظ صريح وفحص رقم المراجعة قبل تحديث البيانات المشتركة.",
        },
      ],
      features: [
        "حجز القاعات والمعامل بحسب السعة",
        "فحص تعارضات المدربين والقاعات والشُعب",
        "بدائل للمواعيد والقاعات والمدربين قابلة للمراجعة",
        "حفظ مشترك وتصدير Excel وJSON",
      ],
    },
  ],
};
