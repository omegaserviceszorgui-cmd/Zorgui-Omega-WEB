"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPost {
  title: { fr: string; ar: string };
  category: { fr: string; ar: string };
  date: string;
  img: string;
  color: string;
  content: { fr: string; ar: string };
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!post) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] pointer-events-auto flex flex-col"
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="relative h-52 flex-shrink-0 overflow-hidden">
                  <img src={post.img} alt={post.title[language]} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/80 via-[#1a3c6e]/30 to-transparent" />
                  <button onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors">
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-4 left-5 right-14 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.color} inline-flex items-center gap-1`}>
                        <Tag size={10} /> {post.category[language]}
                      </span>
                      <span className="text-white/70 text-xs flex items-center gap-1">
                        <Calendar size={10} /> {post.date}
                      </span>
                    </div>
                    <h2 className="text-white font-black text-lg leading-tight drop-shadow">
                      {post.title[language]}
                    </h2>
                  </div>
                </div>

                <div className="p-6 overflow-y-auto flex-1 text-sm text-gray-600 leading-relaxed space-y-3"
                  dir={language === "ar" ? "rtl" : "ltr"}>
                  {post.content[language].split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return <h3 key={i} className="font-bold text-[#1a3c6e] text-base mt-4">{paragraph.slice(2, -2)}</h3>;
                    }
                    if (paragraph.startsWith("• ")) {
                      return (
                        <ul key={i} className="space-y-1 pl-2">
                          {paragraph.split("\n").filter(l => l.startsWith("• ")).map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-[#e8801a] mt-1 flex-shrink-0">•</span>
                              <span>{item.slice(2)}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={i}>{paragraph}</p>;
                  })}
                </div>

                <div className="flex-shrink-0 px-6 pb-6 pt-2 border-t border-gray-100">
                  <div className="flex gap-3 justify-end">
                    <button onClick={onClose}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors">
                      {language === "fr" ? "Fermer" : "إغلاق"}
                    </button>
                    <a href={`https://wa.me/21654651063?text=${encodeURIComponent(language === "fr" ? `Bonjour, j'ai une question sur : ${post.title.fr}` : `مرحبا، لديّ سؤال حول: ${post.title.ar}`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#e8801a] hover:bg-[#d0720f] text-white text-sm font-semibold transition-all">
                      {language === "fr" ? "Nous contacter" : "تواصل معنا"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
