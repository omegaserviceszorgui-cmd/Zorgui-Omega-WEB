import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import adminImg from "@/assets/images/service-admin.png";
import socialImg from "@/assets/images/service-social.png";
import retraiteImg from "@/assets/images/service-retraite.png";
import visaImg from "@/assets/images/service-visa.png";
import studentImg from "@/assets/images/service-student.png";
import hrImg from "@/assets/images/service-hr.png";

const services = [
  {
    key: "services.admin",
    img: adminImg,
    icon: "🏛",
    desc: {
      fr: "Traitement complet de vos dossiers administratifs avec professionnalisme et efficacité.",
      ar: "معالجة شاملة لملفاتك الإدارية باحترافية وكفاءة عالية.",
    },
  },
  {
    key: "services.social",
    img: socialImg,
    icon: "🛡",
    desc: {
      fr: "Gestion et accompagnement pour toutes vos démarches de sécurité sociale.",
      ar: "إدارة ومرافقة لجميع إجراءات الضمان الاجتماعي الخاصة بك.",
    },
  },
  {
    key: "services.retirement",
    img: retraiteImg,
    icon: "✈",
    desc: {
      fr: "Constitution et suivi des dossiers de retraite pour les Tunisiens résidant à l'étranger.",
      ar: "تجميع ومتابعة ملفات التقاعد للتونسيين المقيمين بالخارج.",
    },
  },
  {
    key: "services.visa",
    img: visaImg,
    icon: "🌍",
    desc: {
      fr: "Assistance pour les demandes de visa et la préparation des dossiers consulaires.",
      ar: "مساعدة في طلبات التأشيرة وإعداد الملفات القنصلية.",
    },
  },
  {
    key: "services.student",
    img: studentImg,
    icon: "🎓",
    desc: {
      fr: "Support administratif pour étudiants : bourses, inscriptions, équivalences.",
      ar: "الدعم الإداري للطلاب: المنح والتسجيلات والمعادلات.",
    },
  },
  {
    key: "services.hr",
    img: hrImg,
    icon: "👥",
    desc: {
      fr: "Solutions RH complètes : contrats, paie, gestion des équipes.",
      ar: "حلول موارد بشرية متكاملة: عقود، رواتب، إدارة الفرق.",
    },
  },
];

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("services.title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={svc.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={svc.img}
                  alt={t(svc.key)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/50 to-transparent" />
                <span className="absolute top-3 left-3 text-2xl">{svc.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a3c6e] text-lg mb-2">{t(svc.key)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {svc.desc[language]}
                </p>
                <button
                  onClick={() =>
                    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#e8801a] hover:gap-2 transition-all"
                >
                  {language === "fr" ? "En savoir plus" : "اعرف أكثر"}
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
