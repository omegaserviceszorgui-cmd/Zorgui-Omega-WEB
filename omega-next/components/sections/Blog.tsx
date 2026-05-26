"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import BlogModal from "@/components/BlogModal";

const posts = [
  {
    img: "/images/service-hr.jpg",
    category: { fr: "Ressources Humaines", ar: "الموارد البشرية" },
    title: { fr: "Comment créer un CV professionnel percutant", ar: "كيف تصنع سيرة ذاتية احترافية مؤثرة" },
    excerpt: { fr: "Les clés pour rédiger un CV moderne qui attire l'attention des recruteurs dès la première lecture.", ar: "المفاتيح لكتابة سيرة ذاتية حديثة تلفت انتباه المجنّدين من أول قراءة." },
    date: "20 Mai 2026", color: "bg-rose-100 text-rose-700",
    content: {
      fr: `Un CV professionnel est votre carte de visite sur le marché du travail.\n\n**Structure recommandée**\n\n• En-tête avec vos coordonnées complètes\n• Résumé professionnel en 2-3 lignes\n• Expériences professionnelles (ordre antichronologique)\n• Formation et diplômes\n• Compétences techniques et linguistiques\n\n**Les erreurs à éviter**\n\n• Fautes d'orthographe ou de grammaire\n• CV trop long (maximum 2 pages)\n• Photo non professionnelle\n\nChez OMEGA SERVICES, nous vous aidons à concevoir et améliorer votre CV.`,
      ar: `السيرة الذاتية الاحترافية هي بطاقة تعريفك في سوق العمل.\n\n**الهيكل الموصى به**\n\n• ترويسة مع معلومات الاتصال الكاملة\n• ملخص مهني في 2-3 سطور\n• الخبرات المهنية (بترتيب زمني عكسي)\n• التكوين والشهادات\n• المهارات التقنية واللغوية\n\n**الأخطاء الواجب تجنبها**\n\n• أخطاء إملائية أو نحوية\n• سيرة ذاتية طويلة جداً (2 صفحات كحد أقصى)\n• صورة غير احترافية\n\nفي أوميغا سيرفيسز، نساعدك على تصميم وتحسين سيرتك الذاتية.`,
    },
  },
  {
    img: "/images/service-retraite.jpg",
    category: { fr: "Retraite", ar: "التقاعد" },
    title: { fr: "Comment préparer votre dossier de retraite à l'étranger", ar: "كيف تحضر ملف تقاعدك بالخارج" },
    excerpt: { fr: "Un guide complet pour constituer votre dossier de retraite depuis l'étranger en évitant les erreurs courantes.", ar: "دليل شامل لتجميع ملف تقاعدك من الخارج مع تجنب الأخطاء الشائعة." },
    date: "15 Mai 2026", color: "bg-blue-100 text-blue-700",
    content: {
      fr: `La préparation d'un dossier de retraite depuis l'étranger nécessite organisation et anticipation.\n\n**Documents obligatoires**\n\n• Copie intégrale de l'acte de naissance\n• Justificatif d'identité en cours de validité\n• Relevé de carrière complet (CNSS)\n• Attestations d'employeurs précédents\n• Relevés de cotisations sociales\n\n**Délais à respecter**\n\nCommencez les démarches 12 à 18 mois avant la date de départ à la retraite souhaitée.\n\n**Erreurs fréquentes à éviter**\n\n• Ne pas vérifier la durée de cotisation requise\n• Oublier de déclarer les périodes travaillées à l'étranger\n\nFaites confiance à OMEGA SERVICES pour un suivi rigoureux.`,
      ar: `إعداد ملف التقاعد من الخارج عملية تتطلب التنظيم والاستباق.\n\n**الوثائق الإلزامية**\n\n• نسخة كاملة من عقد الميلاد\n• وثيقة هوية سارية المفعول\n• كشف المسار الكامل (CNSS)\n• شهادات من أصحاب العمل السابقين\n• كشوف الاشتراكات الاجتماعية\n\n**المواعيد الواجب احترامها**\n\nيُنصح بالبدء في الإجراءات قبل 12 إلى 18 شهراً من تاريخ التقاعد المنشود.\n\n**الأخطاء الشائعة للتجنب**\n\n• عدم التحقق من مدة الاشتراك المطلوبة\n• نسيان الإعلان عن فترات العمل بالخارج\n\nثق في أوميغا سيرفيسز لمتابعة صارمة لملفك.`,
    },
  },
  {
    img: "/images/service-visa.jpg",
    category: { fr: "VISA", ar: "التأشيرة" },
    title: { fr: "VISA Schengen : les documents indispensables en 2026", ar: "تأشيرة شنغن: الوثائق الضرورية في 2026" },
    excerpt: { fr: "Découvrez la liste complète et actualisée des documents nécessaires pour votre demande de VISA Schengen.", ar: "اكتشف القائمة الكاملة والمحدثة للوثائق اللازمة لطلب تأشيرة شنغن." },
    date: "10 Mai 2026", color: "bg-green-100 text-green-700",
    content: {
      fr: `Le VISA Schengen permet de circuler librement dans 27 pays européens.\n\n**Documents personnels**\n\n• Passeport valide (6 mois minimum après la date de retour)\n• 2 photos d'identité récentes conformes aux normes\n• Formulaire de demande de visa Schengen rempli\n\n**Justificatifs financiers**\n\n• 3 derniers relevés bancaires\n• Attestation d'emploi et fiche de paie\n• Assurance voyage avec couverture minimale de 30 000 €\n\n**Conseils pratiques**\n\n• Déposez votre dossier 15 jours avant le départ\n• Respectez la règle du pays principal de destination\n\nOMEGA SERVICES prend en charge la préparation complète de votre dossier VISA.`,
      ar: `تأشيرة شنغن تتيح التنقل الحر في 27 دولة أوروبية.\n\n**الوثائق الشخصية**\n\n• جواز سفر ساري (6 أشهر على الأقل بعد تاريخ العودة)\n• صورتان شخصيتان حديثتان مطابقتان للمعايير\n• استمارة طلب تأشيرة شنغن مملوءة\n\n**المستندات المالية**\n\n• آخر 3 كشوف بنكية\n• شهادة عمل وكشف الراتب\n• تأمين سفر بتغطية 30,000 يورو على الأقل\n\n**نصائح عملية**\n\n• قدم ملفك 15 يوماً قبل السفر\n\nأوميغا سيرفيسز تتولى الإعداد الكامل لملف التأشيرة.`,
    },
  },
  {
    img: "/images/service-admin.jpg",
    category: { fr: "Administration", ar: "الإدارة" },
    title: { fr: "Services administratifs numériques en Tunisie", ar: "الخدمات الإدارية الرقمية في تونس" },
    excerpt: { fr: "Découvrez comment les services administratifs évoluent vers le numérique et simplifiez vos démarches.", ar: "اكتشف كيف تتطور الخدمات الإدارية نحو الرقمنة وبسّط إجراءاتك." },
    date: "8 Mai 2026", color: "bg-indigo-100 text-indigo-700",
    content: {
      fr: `La Tunisie accélère sa transformation numérique administrative.\n\n**Services disponibles en ligne**\n\n• Demande de casier judiciaire\n• Renouvellement de la carte d'identité nationale\n• Inscription aux registres de commerce\n• Déclarations fiscales\n\n**Avantages de la démarche numérique**\n\n• Gain de temps considérable\n• Suivi en temps réel de votre dossier\n• Disponibilité 24h/24\n\nSi vous rencontrez des difficultés, notre équipe vous accompagne.`,
      ar: `تونس تُسرّع تحولها الرقمي الإداري.\n\n**الخدمات المتاحة عبر الإنترنت**\n\n• طلب السجل العدلي\n• تجديد بطاقة الهوية الوطنية\n• التسجيل في السجلات التجارية\n• التصريحات الجبائية\n\n**مزايا الإجراءات الرقمية**\n\n• توفير الوقت\n• متابعة ملفك في الوقت الحقيقي\n• متاح 24 ساعة/24\n\nإذا واجهت صعوبات، فريق أوميغا سيرفيسز مستعد لمرافقتك.`,
    },
  },
  {
    img: "/images/service-hr.jpg",
    category: { fr: "Travail & Droits", ar: "العمل والحقوق" },
    title: { fr: "Contrats de travail : vos droits et obligations", ar: "عقود العمل: حقوقك وواجباتك" },
    excerpt: { fr: "Tout ce que vous devez savoir sur vos droits en matière de contrat de travail en Tunisie.", ar: "كل ما تحتاج معرفته عن حقوقك في مجال عقود العمل بتونس." },
    date: "5 Mai 2026", color: "bg-amber-100 text-amber-700",
    content: {
      fr: `Le contrat de travail est la base de toute relation professionnelle.\n\n**Types de contrats en Tunisie**\n\n• CDI — le contrat standard\n• CDD — limité dans le temps\n• Contrat d'apprentissage\n• Contrat à temps partiel\n\n**Droits fondamentaux du salarié**\n\n• Salaire minimum garanti (SMIG)\n• Congés annuels payés (18 jours minimum)\n• Protection contre le licenciement abusif\n• Accès à la sécurité sociale\n\nEn cas de litige, OMEGA SERVICES vous oriente vers les démarches appropriées.`,
      ar: `عقد العمل هو أساس كل علاقة مهنية.\n\n**أنواع العقود في تونس**\n\n• عقد غير محدد المدة — العقد القياسي\n• عقد محدد المدة — مقيد بالوقت\n• عقد التدريب المهني\n• عقد العمل بدوام جزئي\n\n**الحقوق الأساسية للأجير**\n\n• الأجر الأدنى المضمون\n• إجازة سنوية مدفوعة (18 يوماً على الأقل)\n• الحماية من الفصل التعسفي\n• الانتفاع بالضمان الاجتماعي\n\nفي حالة نزاع، أوميغا سيرفيسز تُرشدك نحو الإجراءات المناسبة.`,
    },
  },
  {
    img: "/images/service-etudiants.jpg",
    category: { fr: "Étudiants", ar: "الطلاب" },
    title: { fr: "Bourses d'études à l'étranger : comment postuler", ar: "منح الدراسة بالخارج: كيف تتقدم بطلب" },
    excerpt: { fr: "Toutes les étapes pour postuler aux bourses d'études et préparer votre dossier administratif.", ar: "جميع الخطوات للتقدم بطلب منح الدراسة وإعداد ملفك الإداري الكامل." },
    date: "3 Mai 2026", color: "bg-orange-100 text-orange-700",
    content: {
      fr: `De nombreuses bourses d'études sont accessibles aux étudiants tunisiens chaque année.\n\n**Types de bourses disponibles**\n\n• Bourses gouvernementales\n• Bourses des ambassades (France, Allemagne, Canada)\n• Bourses des universités étrangères\n• Bourses d'organisations internationales\n\n**Dossier de candidature type**\n\n• Lettre de motivation en langue du pays cible\n• CV académique et professionnel\n• Relevés de notes traduits et légalisés\n• Lettres de recommandation (2 à 3)\n• Preuve de niveau de langue\n\nOMEGA SERVICES vous aide à préparer et vérifier votre dossier complet.`,
      ar: `منح الدراسة متاحة للطلاب التونسيين كل عام.\n\n**أنواع المنح المتاحة**\n\n• المنح الحكومية\n• منح السفارات (فرنسا، ألمانيا، كندا)\n• منح الجامعات الأجنبية\n• منح المنظمات الدولية\n\n**ملف الترشح النموذجي**\n\n• رسالة تحفيز بلغة البلد المستهدف\n• سيرة ذاتية أكاديمية ومهنية\n• كشوف النقاط مترجمة وموثقة\n• رسائل توصية (2 إلى 3)\n• إثباتات الكفاءات اللغوية\n\nأوميغا سيرفيسز تساعدك على إعداد والتحقق من ملفك الكامل.`,
    },
  },
  {
    img: "/images/blog-securite-sociale.png",
    category: { fr: "Sécurité Sociale", ar: "الضمان الاجتماعي" },
    title: { fr: "Vos droits à la sécurité sociale expliqués simplement", ar: "حقوقك في الضمان الاجتماعي بشكل مبسط" },
    excerpt: { fr: "Comprendre vos droits et obligations en matière de sécurité sociale pour mieux protéger votre famille.", ar: "فهم حقوقك والتزاماتك في مجال الضمان الاجتماعي لحماية عائلتك بشكل أفضل." },
    date: "28 Avr 2026", color: "bg-purple-100 text-purple-700",
    content: {
      fr: `La sécurité sociale en Tunisie protège les travailleurs et leurs familles.\n\n**Prestations maladie**\n\n• Remboursement des frais médicaux\n• Indemnités journalières en cas d'arrêt de travail\n• Couverture des hospitalisations\n\n**Prestations familiales**\n\n• Allocations familiales pour enfants à charge\n• Congé maternité indemnisé\n• Aide au décès\n\n**Comment accéder à vos droits ?**\n\nInscription auprès de la CNSS, suivi régulier des cotisations, et déclaration de toute situation nouvelle.\n\nOMEGA SERVICES vous accompagne dans toutes vos démarches auprès des organismes sociaux.`,
      ar: `الضمان الاجتماعي في تونس يحمي العمال وعائلاتهم.\n\n**مزايا المرض**\n\n• استرداد نفقات العلاج\n• تعويضات يومية في حالة توقف عن العمل\n• تغطية الاستشفاء\n\n**المزايا العائلية**\n\n• منح العائلة للأطفال في الكفالة\n• إجازة أمومة مدفوعة\n• مساعدة وفاة\n\n**كيف تصل إلى حقوقك؟**\n\nالتسجيل في الصندوق الوطني، المتابعة المنتظمة للاشتراكات.\n\nأوميغا سيرفيسز ترافقك في جميع إجراءاتك لدى الهيئات الاجتماعية.`,
    },
  },
  {
    img: "/images/service-admin.jpg",
    category: { fr: "Administration", ar: "الإدارة" },
    title: { fr: "Documents officiels : les essentiels à connaître", ar: "الوثائق الرسمية: الأساسيات التي يجب معرفتها" },
    excerpt: { fr: "Guide pratique des documents officiels tunisiens : où les obtenir, comment les valider.", ar: "دليل عملي للوثائق الرسمية التونسية: أين تحصل عليها، كيف تعتمدها." },
    date: "22 Avr 2026", color: "bg-cyan-100 text-cyan-700",
    content: {
      fr: `Les démarches administratives commencent toujours par la constitution d'un dossier de documents officiels.\n\n**Documents d'état civil**\n\n• Acte de naissance : mairie du lieu de naissance\n• Carte d'identité nationale : auprès du commissariat\n• Passeport : auprès du Ministère de l'Intérieur\n\n**Légalisation et apostille**\n\nPour les documents destinés à l'étranger, une légalisation ou apostille est souvent nécessaire.\n\n**Délais habituels**\n\n• Carte d'identité : 7 à 15 jours\n• Passeport : 10 à 30 jours\n• Légalisation : 2 à 5 jours ouvrables\n\nOMEGA SERVICES se charge de l'obtention et de la légalisation de l'ensemble de vos documents.`,
      ar: `الإجراءات الإدارية تبدأ دائماً بتجميع ملف الوثائق الرسمية.\n\n**وثائق الحالة المدنية**\n\n• عقد الميلاد: بلدية مكان الولادة\n• بطاقة الهوية الوطنية: لدى مركز الأمن\n• جواز السفر: لدى وزارة الداخلية\n\n**التصديق والأبوستيل**\n\nللوثائق المخصصة للخارج، غالباً ما يكون التصديق ضرورياً.\n\n**المدد المعتادة**\n\n• بطاقة الهوية: 7 إلى 15 يوماً\n• جواز السفر: 10 إلى 30 يوماً\n\nأوميغا سيرفيسز تتولى استخراج وتوثيق جميع وثائقك.`,
    },
  },
  {
    img: "/images/service-etudiants.jpg",
    category: { fr: "Étudiants", ar: "الطلاب" },
    title: { fr: "Inscriptions universitaires à l'étranger : guide 2026", ar: "التسجيل في الجامعات بالخارج: دليل 2026" },
    excerpt: { fr: "Les étapes clés pour réussir votre inscription dans une université étrangère.", ar: "الخطوات الأساسية للنجاح في التسجيل بجامعة أجنبية." },
    date: "18 Avr 2026", color: "bg-teal-100 text-teal-700",
    content: {
      fr: `S'inscrire dans une université étrangère demande une préparation minutieuse.\n\n**Étape 1 : Choisir sa destination**\n\nFrance, Canada, Allemagne et Belgique sont les destinations les plus prisées.\n\n**Étape 2 : Préparer le dossier**\n\n• Relevés de notes (bac + années universitaires)\n• Diplômes certifiés conformes\n• Lettres de motivation et de recommandation\n• Preuves de compétences linguistiques\n\n**Étape 3 : Obtenir le visa étudiant**\n\nUne fois admis, demandez un visa étudiant auprès du consulat du pays concerné.\n\nOMEGA SERVICES vous accompagne à chaque étape.`,
      ar: `التسجيل في جامعة أجنبية مشروع يتطلب إعداداً دقيقاً.\n\n**الخطوة 1: اختيار الوجهة**\n\nفرنسا وكندا وألمانيا وبلجيكا هي الوجهات الأكثر طلباً.\n\n**الخطوة 2: إعداد الملف**\n\n• كشوف النقاط (الباكالوريا + السنوات الجامعية)\n• شهادات مصادق على صحتها\n• رسائل تحفيز وتوصية\n• إثباتات الكفاءات اللغوية\n\n**الخطوة 3: الحصول على تأشيرة الطالب**\n\nبمجرد القبول، اطلب تأشيرة الطالب لدى قنصلية البلد المعني.\n\nأوميغا سيرفيسز ترافقك في كل خطوة.`,
    },
  },
  {
    img: "/images/service-hr.jpg",
    category: { fr: "Carrière", ar: "المسار المهني" },
    title: { fr: "Préparer son entretien d'embauche : les clés du succès", ar: "التحضير للمقابلة المهنية: مفاتيح النجاح" },
    excerpt: { fr: "Conseils pratiques pour vous préparer et réussir vos entretiens d'embauche avec confiance.", ar: "نصائح عملية للتحضير والنجاح في مقابلاتك المهنية بثقة." },
    date: "12 Avr 2026", color: "bg-pink-100 text-pink-700",
    content: {
      fr: `L'entretien d'embauche est une étape décisive. Voici comment vous y préparer.\n\n**Avant l'entretien**\n\n• Renseignez-vous sur l'entreprise\n• Relisez votre CV et préparez des exemples concrets\n• Soignez votre tenue vestimentaire\n• Planifiez votre trajet pour arriver 10 min avant\n\n**Pendant l'entretien**\n\n• Soyez ponctuel et souriant\n• Utilisez la méthode STAR (Situation, Tâche, Action, Résultat)\n• Posez des questions pertinentes sur le poste\n\n**Questions fréquentes à préparer**\n\n• Parlez-moi de vous\n• Quels sont vos points forts et vos faiblesses ?\n• Pourquoi voulez-vous ce poste ?\n\nEnvoyez un email de remerciement dans les 24 heures après l'entretien.`,
      ar: `المقابلة المهنية مرحلة حاسمة. إليك كيف تتحضر لها.\n\n**قبل المقابلة**\n\n• تعرّف على الشركة وقطاع نشاطها\n• أعِد قراءة سيرتك الذاتية\n• اعتنِ بمظهرك\n• خطّط مسارك للوصول قبل 10 دقائق\n\n**خلال المقابلة**\n\n• كن منضبطاً ومبتسماً\n• استخدم أسلوب STAR\n• اطرح أسئلة مناسبة حول المنصب\n\n**الأسئلة المتكررة للتحضير**\n\n• حدثني عن نفسك\n• ما هي نقاط قوتك وضعفك؟\n• لماذا تريد هذا المنصب؟\n\nأرسل بريداً إلكترونياً شاكراً خلال 24 ساعة.`,
    },
  },
  {
    img: "/images/service-visa.jpg",
    category: { fr: "VISA", ar: "التأشيرة" },
    title: { fr: "VISA travail à l'étranger : démarches et conseils", ar: "تأشيرة العمل بالخارج: الإجراءات والنصائح" },
    excerpt: { fr: "Tout savoir sur les visas de travail pour partir travailler légalement à l'étranger.", ar: "كل ما تحتاج معرفته عن تأشيرات العمل للعمل قانونياً في الخارج." },
    date: "6 Avr 2026", color: "bg-lime-100 text-lime-700",
    content: {
      fr: `Travailler à l'étranger nécessite une préparation rigoureuse sur le plan administratif.\n\n**Types de visas de travail**\n\n• Visa de travail temporaire\n• Carte bleue européenne (pour l'UE)\n• Permis de travail canadien\n\n**Conditions générales**\n\n• Avoir une offre d'emploi validée\n• Casier judiciaire vierge\n• Diplômes et expériences correspondant au poste\n\n**Documents habituellement demandés**\n\n• Contrat de travail signé\n• Passeport valide\n• Preuve de qualifications professionnelles\n\nContactez OMEGA SERVICES pour une assistance personnalisée.`,
      ar: `العمل في الخارج مشروع يستلزم إعداداً إدارياً صارماً.\n\n**أنواع تأشيرات العمل**\n\n• تأشيرة العمل المؤقت\n• البطاقة الزرقاء الأوروبية\n• تصريح العمل الكندي\n\n**الشروط العامة**\n\n• امتلاك عرض عمل معتمد\n• صحيفة سوابق قضائية نظيفة\n• شهادات وخبرات مطابقة للمنصب\n\n**الوثائق المطلوبة عادةً**\n\n• عقد عمل موقع\n• جواز سفر ساري\n• إثبات المؤهلات المهنية\n\nتواصل مع أوميغا سيرفيسز للحصول على مساعدة شخصية.`,
    },
  },
  {
    img: "/images/service-admin.jpg",
    category: { fr: "Conseils", ar: "نصائح" },
    title: { fr: "Améliorer son CV : conseils pratiques d'experts", ar: "تحسين السيرة الذاتية: نصائح عملية من الخبراء" },
    excerpt: { fr: "Les experts d'OMEGA SERVICES partagent leurs meilleures astuces pour améliorer votre profil.", ar: "خبراء أوميغا سيرفيسز يشاركون أفضل نصائحهم لتحسين ملفك المهني." },
    date: "1 Avr 2026", color: "bg-violet-100 text-violet-700",
    content: {
      fr: `Un CV efficace se lit en 30 secondes et donne envie de vous rencontrer.\n\n**Conseil 1 : Personnalisez à chaque candidature**\n\nAdaptez votre CV à chaque offre d'emploi.\n\n**Conseil 2 : Quantifiez vos réalisations**\n\nPlutôt que "j'ai augmenté les ventes", écrivez "j'ai augmenté les ventes de 25% en 6 mois".\n\n**Conseil 3 : Choisissez les bons mots-clés**\n\nIntégrez les termes de l'offre d'emploi dans votre CV.\n\n**Conseil 4 : Soyez concis**\n\n1 à 2 pages maximum. Chaque ligne doit apporter de la valeur.\n\nOMEGA SERVICES propose un service de rédaction et d'optimisation de CV professionnel.`,
      ar: `السيرة الذاتية الفعّالة تُقرأ في 30 ثانية.\n\n**النصيحة 1: خصّص لكل ترشح**\n\nكيّف سيرتك الذاتية لكل عرض عمل.\n\n**النصيحة 2: قيّم إنجازاتك بأرقام**\n\nبدلاً من "رفعت المبيعات"، اكتب "رفعت المبيعات بنسبة 25% في 6 أشهر".\n\n**النصيحة 3: اختر الكلمات المفتاحية الصحيحة**\n\nادمج مصطلحات عرض العمل في سيرتك.\n\n**النصيحة 4: كن موجزاً**\n\n1 إلى 2 صفحة كحد أقصى.\n\nأوميغا سيرفيسز تقدم خدمة كتابة وتحسين السيرة الذاتية الاحترافية.`,
    },
  },
];

const INITIAL_COUNT = 6;

export default function Blog() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState<(typeof posts)[0] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? posts : posts.slice(0, INITIAL_COUNT);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("blog.title")}</h2>
          <p className="text-gray-500 text-lg">
            {language === "fr" ? "Actualités, conseils et guides pratiques pour vos démarches" : "أخبار ونصائح وأدلة عملية لإجراءاتك"}
          </p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((post, i) => (
            <motion.article key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              onClick={() => setSelected(post)}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={post.img} alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-[#1a3c6e] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {language === "fr" ? "Lire l'article" : "اقرأ المقال"}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.color}`}>
                    {post.category[language]}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#1a3c6e] text-sm leading-snug mb-2">{post.title[language]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{post.excerpt[language]}</p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#e8801a] group-hover:gap-2 transition-all mt-auto">
                  {t("blog.read_more")} <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && posts.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-[#1a3c6e] hover:bg-[#0d2140] text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105">
              {language === "fr" ? `Voir plus d'articles (${posts.length - INITIAL_COUNT})` : `عرض المزيد (${posts.length - INITIAL_COUNT})`}
            </button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-10">
            <button onClick={() => { setShowAll(false); document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-xl transition-all">
              {language === "fr" ? "Réduire" : "تقليص"}
            </button>
          </div>
        )}
      </div>
      {selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
