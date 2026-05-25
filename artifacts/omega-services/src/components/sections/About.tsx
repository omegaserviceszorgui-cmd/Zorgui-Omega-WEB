import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";
import founderImg from "@assets/1775665136941_edit_1872198618500667_1779727325746.png";

const stats = [
  { icon: Clock, value: "30+", labelFr: "Ans d'expérience", labelAr: "عامًا من الخبرة" },
  { icon: Users, value: "5000+", labelFr: "Clients satisfaits", labelAr: "عميل راضٍ" },
  { icon: Award, value: "100%", labelFr: "Taux de réussite", labelAr: "معدل النجاح" },
  { icon: Star, value: "6", labelFr: "Services spécialisés", labelAr: "خدمات متخصصة" },
];

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-2">{t("about.title")}</h2>
          <div className="mt-3 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
              <img
                src={founderImg}
                alt="Mohamed Salah Zorgui"
                className="w-full h-auto object-cover"
              />
              {/* Overlay card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d2140]/95 via-[#0d2140]/70 to-transparent p-6">
                <h3 className="text-white font-black text-xl">Mohamed Salah Zorgui</h3>
                <p className="text-[#e8801a] text-sm font-semibold mt-0.5">
                  {language === "fr" ? "Fondateur & Directeur Général" : "المؤسس والمدير العام"}
                </p>
              </div>
              {/* Decorative accent */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#e8801a] flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#e8801a]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a3c6e]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-block bg-[#e8801a]/10 text-[#e8801a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {language === "fr" ? "Notre Fondateur" : "مؤسسنا"}
            </div>
            <h3 className="text-2xl font-black text-[#1a3c6e] mb-2">Mohamed Salah Zorgui</h3>
            <p className="text-[#e8801a] font-semibold mb-4 text-base">
              {language === "fr"
                ? "Plus de 30 ans d'expérience"
                : "أكثر من 30 عامًا من الخبرة"}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {language === "fr"
                ? "Plus de 30 ans d'expérience dans l'administration, la sécurité sociale et les dossiers de retraite. OMEGA SERVICES est né de cette expertise pour offrir un accompagnement rigoureux et de confiance à chaque client, à Kasserine et partout en Tunisie."
                : "أكثر من 30 عامًا من الخبرة في الإدارة والضمان الاجتماعي وملفات التقاعد. وُلدت أوميغا سيرفيسز من هذه الخبرة لتقديم دعم صارم وموثوق لكل عميل، في القصرين وفي جميع أنحاء تونس."}
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#e8801a] hover:bg-[#d0720f] text-white font-semibold px-7 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8801a]/20"
            >
              {t("nav.contact")}
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-[#e8801a]/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a3c6e]/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[#1a3c6e]" />
              </div>
              <div className="text-3xl font-black text-[#e8801a] mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{language === "fr" ? stat.labelFr : stat.labelAr}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
