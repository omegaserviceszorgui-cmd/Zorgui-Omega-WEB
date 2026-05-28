"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface InfographieModalProps {
  info: {
    fr: string;
    ar: string;
    file: string;
  } | null;
  onClose: () => void;
}

export default function InfographieModal({ info, onClose }: InfographieModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!info) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [info, onClose]);

  return (
    <AnimatePresence>
      {info && (
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
                <div className="relative overflow-hidden">
                  <img src={`/infographics/${info.file}`} alt={info.fr} className="w-full object-contain max-h-[70vh]" />
                  <button onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors">
                    <X size={16} />
                  </button>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#1a3c6e] text-sm mb-3">
                    {language === "fr" ? info.fr : info.ar}
                  </p>
                  <a href={`/infographics/${info.file}`} target="_blank" rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#e8801a] hover:bg-[#d0720f] text-white font-semibold py-3 rounded-xl transition-all text-sm">
                    <Eye className="w-4 h-4" />
                    {t("knowledge.view")}
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
