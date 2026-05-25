import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceModalProps {
  service: {
    titleKey: string;
    title: string;
    img: string;
    desc: { fr: string; ar: string };
  } | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-lg pointer-events-auto"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Glass card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-14">
                    <h3 className="text-white font-black text-xl leading-tight drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                  {/* Close */}
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {service.desc[language]}
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/21654651063?text=${encodeURIComponent(
                        language === "fr"
                          ? `Bonjour, je suis intéressé par: ${service.title}`
                          : `مرحبا، أنا مهتم بـ: ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        onClose();
                        setTimeout(() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }), 150);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#e8801a] hover:bg-[#d0720f] text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
                    >
                      {t("hero.book")}
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 150);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1a3c6e] hover:bg-[#0d2140] text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
                    >
                      {t("nav.contact")}
                    </button>
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
