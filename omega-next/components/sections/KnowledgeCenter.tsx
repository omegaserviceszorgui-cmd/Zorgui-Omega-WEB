"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { FileText, ImageIcon, Download, Eye } from "lucide-react";
import GuideModal from "./GuideModal";
import InfographieModal from "./InfographieModal";

const guides = [
  { fr: "Guide de la retraite à l'étranger", ar: "دليل التقاعد بالخارج", file: "retraite-etranger/retraite-tunisie-etranger.pdf", preview: "previews/preview-retaite-etranger.png" },
  { fr: "Guide VISA Schengen", ar: "دليل تأشيرة شنغن", file: "visa/guide-visa-schengen.pdf", preview: "previews/etapes-visa.jpg" },
  { fr: "Guide Sécurité Sociale", ar: "دليل الضمان الاجتماعي", file: "securite-sociale/pension-vieillesse-tunisie.pdf", preview: "previews/pension-vieillesse.jpg" },
  { fr: "Guide de l' Étudiant ", ar: "دليل الطالب ", file: "guide-etudiant.pdf", preview: "previews/pfe-etudiants.png" },
];

const infographics = [
  { fr: "Étapes de la demande VISA", ar: "خطوات طلب التأشيرة", file: "visa/etapes-demande-visa.png" },
  { fr: "Dossier de retraite", ar: "ملف التقاعد", file: "retraite/retraite-etranger.png" },
  { fr: "Services administratifs", ar: "الخدمات الإدارية", file: "administration/societes-tunisiennes.png" },
  { fr: "Services sécurité sociale", ar: "الضمان الاجتماعي", file: "securite-sociale/pension-de-vieillesse.png" },
  { fr: "Services Étudiants ", ar: " خدمات الطلبة", file: "etudiants/guide-etudiants-pfe.png" },
];

export default function KnowledgeCenter() {
  const { t, language } = useLanguage();
  const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null);
  const [selectedInfo, setSelectedInfo] = useState<typeof infographics[0] | null>(null);

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
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedGuide(guide)}
              >
                {guide.preview ? (
                  <div className="h-40 overflow-hidden"><img src={`/guides/${guide.preview}`} alt={guide.fr} className="w-full h-full object-cover" /></div>
                ) : (
                  <div className="h-40 bg-red-50 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-red-300" />
                  </div>
                )}
                <div className="p-4">
                  <p className="font-semibold text-[#1a3c6e] text-sm mb-4 leading-snug">
                    {language === "fr" ? guide.fr : guide.ar}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8801a]">
                    <Download className="w-3.5 h-3.5" />
                    {t("knowledge.download")}
                  </span>
                </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {infographics.map((info, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedInfo(info)}
              >
                <div className="h-36 overflow-hidden"><img src={`/infographics/${info.file}`} alt={info.fr} className="w-full h-full object-cover" /></div>
                <div className="p-4">
                  <p className="font-semibold text-[#1a3c6e] text-sm mb-3">
                    {language === "fr" ? info.fr : info.ar}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8801a]">
                    <Eye className="w-3.5 h-3.5" />
                    {t("knowledge.view")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
      <InfographieModal info={selectedInfo} onClose={() => setSelectedInfo(null)} />
    </section>
  );
}
