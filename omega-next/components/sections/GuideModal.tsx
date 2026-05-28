"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GuideModalProps {
  guide: {
    fr: string;
    ar: string;
    file: string;
    preview: string | null;
  } | null;
  onClose: () => void;
}

export default function GuideModal({ guide, onClose }: GuideModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!guide) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [guide, onClose]);

  return (
    <AnimatePresence>
      {guide && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-lg pointer-events-auto"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                <div className="relative h-56 overflow-hidden">
                  {guide.preview ? (
                    <img src={`/guides/${guide.preview}`} alt={guide.fr} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-red-50 flex items-center justify-center">
                      <Download className="w-16 h-16 text-red-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-14">
                    <h3 className="text-white font-black text-xl leading-tight drop-shadow">
                      {language === "fr" ? guide.fr : guide.ar}
                    </h3>
                  </div>
                  <button onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors">
                    <X size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <a href={`/guides/${guide.file}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#e8801a] hover:bg-[#d0720f] text-white font-semibold py-3 rounded-xl transition-all text-sm">
                    <Download className="w-4 h-4" />
                    {t("knowledge.download")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
                      }
