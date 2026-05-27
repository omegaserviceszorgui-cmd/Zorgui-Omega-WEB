"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { FileText, ImageIcon, Download, Eye } from "lucide-react";

const guides = [
  { fr: "Guide de la retraite à l'étranger", ar: "دليل التقاعد بالخارج", file: "guide-retraite.pdf" },
  { fr: "Guide VISA Schengen", ar: "دليل تأشيرة شنغن", file: "visa/guide-visa-schengen.pdf" },
  { fr: "Guide Sécurité Sociale", ar: "دليل الضمان الاجتماعي", file: "securite-sociale/pension-vieillesse-tunisie.pdf" },
  { fr: "Guide Étudiant à l'étranger", ar: "دليل الطالب بالخارج", file: "guide-etudiant.pdf" },
];

const infographics = [
  { fr: "Étapes de la demande VISA", ar: "خطوات طلب التأشيرة", file: "infographie-visa.png" },
  { fr: "Dossier de retraite", ar: "ملف التقاعد", file: "infographie-retraite.png" },
  { fr: "Services administratifs", ar: "الخدمات الإدارية", file: "infographie-services.png" },
];

export default function KnowledgeCenter() {
  const { t, language } = useLanguage();

  return (
    <section id="knowledge" className="py-20 bg-gradient-to-br from-[#1a3c6e]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("knowledge.title")}</h2>
          <p className="text-gray-500 text-lg">
            {language === "fr" ? "Ressources pratiques pour vous guider dans vos démarches" : "موارد عملية لإرشادك في إجراءاتك الإدارية"}
          </p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#1a3c6e] rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1a3c6e]">{t("knowledge.guides")}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guides.map((guide, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-5 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="w-7 h-7 text-red-500" />
                </div>
                <p className="font-semibold text-[#1a3c6e] text-sm mb-4 leading-snug">
                  {language === "fr" ? guide.fr : guide.ar}
                </p>
                <a href={`/guides/${guide.file}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8801a] hover:gap-2.5 transition-all">
                  <Download className="w-3.5 h-3.5" />
                  {t("knowledge.download")}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#e8801a] rounded-xl flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#1a3c6e]">{t("knowledge.infographics")}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {infographics.map((info, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="h-36 bg-gradient-to-br from-[#1a3c6e]/10 to-[#e8801a]/10 flex items-center justify-center">
                  <ImageIcon className="w-14 h-14 text-[#1a3c6e]/30" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#1a3c6e] text-sm mb-3">
                    {language === "fr" ? info.fr : info.ar}
                  </p>
                  <a href={`/infographics/${info.file}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8801a]">
                    <Eye className="w-3.5 h-3.5" />
                    {t("knowledge.view")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
