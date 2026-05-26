"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const serviceOptions = {
  fr: ["Services administratifs variés", "Services de sécurité sociale", "Dossiers de retraite à l'étranger", "Services VISA", "Services étudiants", "Ressources Humaines"],
  ar: ["خدمات إدارية متنوعة", "خدمات الضمان الاجتماعي", "ملفات التقاعد بالخارج", "خدمات التأشيرة", "خدمات الطلاب", "الموارد البشرية"],
};

export default function BookingForm() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a3c6e]/30 focus:border-[#1a3c6e] bg-white text-gray-700 placeholder-gray-400 text-sm transition-all";

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1a3c6e]/10 rounded-2xl mb-4">
              <CalendarDays className="w-7 h-7 text-[#1a3c6e]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-2">{t("booking.title")}</h2>
            <p className="text-gray-500">
              {language === "fr" ? "Remplissez le formulaire et nous vous contacterons rapidement" : "املأ النموذج وسنتصل بك في أقرب وقت"}
            </p>
            <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.name")} *</label>
                <input type="text" required value={form.name} onChange={e => set("name", e.target.value)}
                  className={inputClass} placeholder={language === "fr" ? "Votre nom complet" : "اسمك الكامل"} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.phone")} *</label>
                <input type="tel" required value={form.phone} onChange={e => set("phone", e.target.value)}
                  className={inputClass} placeholder="+216 XX XXX XXX" dir="ltr" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.email")} *</label>
                <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                  className={inputClass} placeholder="email@exemple.com" dir="ltr" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.date")} *</label>
                <input type="date" required value={form.date} onChange={e => set("date", e.target.value)}
                  className={inputClass} min={new Date().toISOString().split("T")[0]} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.service")} *</label>
              <select required value={form.service} onChange={e => set("service", e.target.value)} className={inputClass}>
                <option value="">{language === "fr" ? "Choisir un service..." : "اختر خدمة..."}</option>
                {serviceOptions[language].map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">{t("booking.message")}</label>
              <textarea rows={3} value={form.message} onChange={e => set("message", e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder={language === "fr" ? "Informations complémentaires..." : "معلومات إضافية..."} />
            </div>
            <button type="submit" disabled={status === "loading"}
              className="w-full bg-[#1a3c6e] hover:bg-[#0d2140] disabled:bg-gray-300 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.01] shadow-lg text-sm">
              {status === "loading" ? t("form.loading") : t("booking.submit")}
            </button>
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium text-center">{t("form.success")}</div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium text-center">{t("form.error")}</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
