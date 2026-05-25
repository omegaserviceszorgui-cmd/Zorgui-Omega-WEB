import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#e8801a]/10 text-[#e8801a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {language === "fr" ? "À Notre Sujet" : "عن مكتبنا"}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-4">{t("about.title")}</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">{t("about.desc")}</p>

            <div className="bg-gradient-to-br from-[#1a3c6e] to-[#0d2140] rounded-2xl p-6 text-white mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#e8801a] flex items-center justify-center flex-shrink-0 text-xl font-black">
                  MZ
                </div>
                <div>
                  <p className="font-bold text-lg">{t("about.founder")}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {language === "fr"
                      ? "Fondateur & Directeur Général, OMEGA SERVICES"
                      : "المؤسس والمدير العام، أوميغا سيرفيسز"}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#e8801a] hover:bg-[#d0720f] text-white font-semibold px-7 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#e8801a]/20"
            >
              {t("nav.contact")}
            </button>
          </motion.div>

          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-[#e8801a]/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a3c6e]/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-[#1a3c6e]" />
                </div>
                <div className="text-3xl font-black text-[#e8801a] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">
                  {language === "fr" ? stat.labelFr : stat.labelAr}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
