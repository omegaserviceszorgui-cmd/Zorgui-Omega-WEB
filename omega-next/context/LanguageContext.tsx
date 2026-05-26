"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "ar";

interface Translations {
  [key: string]: { fr: string; ar: string };
}

const translations: Translations = {
  "nav.services": { fr: "Services", ar: "خدماتنا" },
  "nav.about": { fr: "Qui Sommes Nous", ar: "من نحن" },
  "nav.knowledge": { fr: "Guides & Infos", ar: "الأدلة والمعلومات" },
  "nav.blog": { fr: "Blog", ar: "المدونة" },
  "nav.contact": { fr: "Contact", ar: "تواصل معنا" },
  "hero.title": { fr: "Tous vos services en un seul endroit", ar: "جميع خدماتك في مكان واحد" },
  "hero.subtitle": { fr: "L'expertise et la confiance à votre service pour toutes vos démarches administratives.", ar: "الخبرة والثقة في خدمتك لجميع إجراءاتك الإدارية." },
  "hero.book": { fr: "Réserver", ar: "احجز الآن" },
  "hero.whatsapp": { fr: "WhatsApp", ar: "واتساب" },
  "services.title": { fr: "Nos Services", ar: "خدماتنا" },
  "services.subtitle": { fr: "Une gamme complète de services administratifs pour faciliter votre quotidien.", ar: "مجموعة كاملة من الخدمات الإدارية لتسهيل حياتك اليومية." },
  "services.admin": { fr: "Services administratifs variés", ar: "خدمات إدارية متنوعة" },
  "services.social": { fr: "Services de sécurité sociale", ar: "خدمات الضمان الاجتماعي" },
  "services.retirement": { fr: "Dossiers de retraite à l'étranger", ar: "ملفات التقاعد بالخارج" },
  "services.visa": { fr: "Services VISA", ar: "خدمات التأشيرة" },
  "services.student": { fr: "Services étudiants", ar: "خدمات الطلاب" },
  "services.hr": { fr: "Ressources Humaines", ar: "الموارد البشرية" },
  "about.title": { fr: "Qui Sommes Nous", ar: "من نحن" },
  "knowledge.title": { fr: "Centre de Connaissances", ar: "مركز المعرفة" },
  "knowledge.guides": { fr: "Guides PDF", ar: "أدلة PDF" },
  "knowledge.infographics": { fr: "Infographies", ar: "الرسوم البيانية" },
  "knowledge.download": { fr: "Télécharger", ar: "تحميل" },
  "knowledge.view": { fr: "Voir", ar: "عرض" },
  "blog.title": { fr: "Notre Blog", ar: "المدونة" },
  "blog.read_more": { fr: "Lire la suite", ar: "اقرأ المزيد" },
  "booking.title": { fr: "Prendre Rendez-vous", ar: "حجز موعد" },
  "booking.name": { fr: "Nom Complet", ar: "الاسم الكامل" },
  "booking.phone": { fr: "Téléphone", ar: "رقم الهاتف" },
  "booking.email": { fr: "Email", ar: "البريد الإلكتروني" },
  "booking.service": { fr: "Service souhaité", ar: "الخدمة المطلوبة" },
  "booking.date": { fr: "Date", ar: "التاريخ" },
  "booking.message": { fr: "Message (Optionnel)", ar: "رسالة (اختياري)" },
  "booking.submit": { fr: "Réserver", ar: "تأكيد الحجز" },
  "contact.title": { fr: "Contactez-nous", ar: "تواصل معنا" },
  "contact.subject": { fr: "Sujet", ar: "الموضوع" },
  "contact.message": { fr: "Votre message", ar: "رسالتك" },
  "contact.submit": { fr: "Envoyer", ar: "إرسال" },
  "form.loading": { fr: "En cours...", ar: "جاري الإرسال..." },
  "form.success": { fr: "Message envoyé avec succès!", ar: "تم الإرسال بنجاح!" },
  "form.error": { fr: "Une erreur s'est produite. Veuillez réessayer.", ar: "حدث خطأ. يرجى المحاولة مرة أخرى." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: (key) => key,
  isRtl: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("omega-lang") as Language | null;
    if (saved === "ar" || saved === "fr") setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("omega-lang", lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl: language === "ar" }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
