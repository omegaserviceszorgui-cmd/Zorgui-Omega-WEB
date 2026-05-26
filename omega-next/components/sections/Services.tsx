"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ServiceModal";

const services = [
  {
    key: "services.admin",
    img: "/images/service-admin.jpg",
    desc: {
      fr: "Traitement complet et professionnel de tous vos dossiers administratifs. Nous vous accompagnons pour chaque démarche, de la constitution du dossier jusqu'à l'obtention du résultat, avec rigueur et efficacité.",
      ar: "معالجة شاملة واحترافية لجميع ملفاتك الإدارية. نرافقك في كل إجراء، من تجميع الملف حتى الحصول على النتيجة، بدقة وكفاءة.",
    },
  },
  {
    key: "services.social",
    img: "/images/service-social.jpg",
    desc: {
      fr: "Gestion et accompagnement pour toutes vos démarches de sécurité sociale : inscriptions, remboursements, prestations et droits. Nous simplifions les procédures pour vous et votre famille.",
      ar: "إدارة ومرافقة لجميع إجراءات الضمان الاجتماعي: التسجيلات، التعويضات، المزايا والحقوق. نبسط الإجراءات لك ولعائلتك.",
    },
  },
  {
    key: "services.retirement",
    img: "/images/service-retraite.jpg",
    desc: {
      fr: "Constitution et suivi des dossiers de retraite pour les Tunisiens résidant à l'étranger. Nous gérons toutes les formalités administratives et assurons un suivi régulier de votre dossier.",
      ar: "تجميع ومتابعة ملفات التقاعد للتونسيين المقيمين بالخارج. نتولى جميع الإجراءات الإدارية ونضمن المتابعة المنتظمة لملفك.",
    },
  },
  {
    key: "services.visa",
    img: "/images/service-visa.jpg",
    desc: {
      fr: "Assistance complète pour vos demandes de visa : Schengen, travail, études, regroupement familial. Préparation et vérification de l'intégralité du dossier consulaire.",
      ar: "مساعدة كاملة لطلبات التأشيرة: شنغن، العمل، الدراسة، لمّ الشمل. إعداد والتحقق من الملف القنصلي بالكامل.",
    },
  },
  {
    key: "services.student",
    img: "/images/service-etudiants.jpg",
    desc: {
      fr: "Support administratif complet pour les étudiants : demandes de bourses, inscriptions universitaires, équivalences de diplômes, et assistance pour les démarches liées aux études à l'étranger.",
      ar: "الدعم الإداري الكامل للطلاب: طلبات المنح، التسجيلات الجامعية، معادلة الشهادات، والمساعدة في الإجراءات المتعلقة بالدراسة بالخارج.",
    },
  },
  {
    key: "services.hr",
    img: "/images/service-hr.jpg",
    desc: {
      fr: "Solutions RH complètes pour entreprises et particuliers : rédaction de contrats, gestion de la paie, déclarations sociales, recrutement et accompagnement en droit du travail.",
      ar: "حلول موارد بشرية متكاملة للشركات والأفراد: صياغة العقود، إدارة الرواتب، التصريحات الاجتماعية، التوظيف والمرافقة في قانون العمل.",
    },
  },
];

type Service = { title: string; img: string; desc: { fr: string; ar: string } };

export default function Services() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("services.title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => {
            const title = t(svc.key);
            return (
              <motion.div key={svc.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelected({ title, img: svc.img, desc: svc.desc })}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={svc.img} alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 text-[#1a3c6e] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                      {language === "fr" ? "En savoir plus" : "اعرف أكثر"}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3c6e] text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{svc.desc[language]}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#e8801a] group-hover:gap-2 transition-all">
                    {language === "fr" ? "En savoir plus" : "اعرف أكثر"} <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
