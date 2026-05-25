import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useSubmitContact } from "@workspace/api-client-react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  const mutation = useSubmitContact();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ data: form });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a3c6e]/30 focus:border-[#1a3c6e] bg-white text-gray-700 placeholder-gray-400 text-sm transition-all";

  const contactInfo = [
    {
      icon: Phone,
      labelFr: "Téléphone",
      labelAr: "الهاتف",
      value: "98 284 858",
      href: "tel:+21698284858",
    },
    {
      icon: MessageCircle,
      labelFr: "WhatsApp",
      labelAr: "واتساب",
      value: "54 651 063",
      href: "https://wa.me/21654651063",
    },
    {
      icon: Mail,
      labelFr: "Email",
      labelAr: "البريد الإلكتروني",
      value: "omegaserviceszorgui@gmail.com",
      href: "mailto:omegaserviceszorgui@gmail.com",
    },
    {
      icon: MapPin,
      labelFr: "Adresse",
      labelAr: "العنوان",
      value: "Kasserine – Tunisie",
      href: "https://maps.google.com/?q=Kasserine,Tunisia",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a3c6e]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("contact.title")}</h2>
          <p className="text-gray-500 text-lg">
            {language === "fr"
              ? "Nous sommes à votre disposition du lundi au samedi"
              : "نحن في خدمتكم من الاثنين إلى السبت"}
          </p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all group"
              >
                <div className="w-12 h-12 bg-[#1a3c6e]/10 group-hover:bg-[#1a3c6e] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <info.icon className="w-5 h-5 text-[#1a3c6e] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {language === "fr" ? info.labelFr : info.labelAr}
                  </div>
                  <div className="font-semibold text-[#1a3c6e] text-sm">{info.value}</div>
                </div>
              </a>
            ))}

            <div className="bg-gradient-to-br from-[#1a3c6e] to-[#0d2140] rounded-2xl p-6 text-white mt-4">
              <h3 className="font-bold text-lg mb-2">
                {language === "fr" ? "Horaires d'ouverture" : "ساعات العمل"}
              </h3>
              <div className="space-y-1 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>{language === "fr" ? "Lun – Ven" : "الاثنين – الجمعة"}</span>
                  <span className="font-semibold text-white">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === "fr" ? "Samedi" : "السبت"}</span>
                  <span className="font-semibold text-white">09:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === "fr" ? "Dimanche" : "الأحد"}</span>
                  <span className="font-semibold text-[#e8801a]">
                    {language === "fr" ? "Fermé" : "مغلق"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">
                    {t("booking.name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={inputClass}
                    placeholder={language === "fr" ? "Votre nom" : "اسمك"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">
                    {t("booking.email")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass}
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">
                    {t("booking.phone")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputClass}
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">
                    {t("contact.subject")}
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => set("subject", e.target.value)}
                    className={inputClass}
                    placeholder={language === "fr" ? "Sujet de votre message" : "موضوع رسالتك"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a3c6e] mb-1.5">
                  {t("contact.message")} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder={
                    language === "fr"
                      ? "Comment pouvons-nous vous aider?"
                      : "كيف يمكننا مساعدتك؟"
                  }
                />
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#e8801a] hover:bg-[#d0720f] disabled:bg-gray-300 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#e8801a]/20 text-sm"
              >
                {mutation.isPending ? t("form.loading") : t("contact.submit")}
              </button>

              {mutation.isSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium text-center">
                  {mutation.data?.message || t("form.success")}
                </div>
              )}
              {mutation.isError && (
                <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium text-center">
                  {t("form.error")}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
