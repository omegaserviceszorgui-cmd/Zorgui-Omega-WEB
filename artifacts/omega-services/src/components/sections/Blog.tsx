import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import retraiteImg from "@/assets/images/blog-retraite.png";
import visaImg from "@/assets/images/blog-visa.png";
import etudiantsImg from "@/assets/images/blog-etudiants.png";
import securiteSocialeImg from "@assets/1779728864526_1779728891028.png";

const posts = [
  {
    img: retraiteImg,
    category: { fr: "Retraite", ar: "التقاعد" },
    title: { fr: "Comment préparer votre dossier de retraite à l'étranger", ar: "كيف تحضر ملف تقاعدك بالخارج" },
    excerpt: {
      fr: "Un guide complet pour constituer votre dossier de retraite depuis l'étranger en évitant les erreurs courantes.",
      ar: "دليل شامل لتجميع ملف تقاعدك من الخارج مع تجنب الأخطاء الشائعة.",
    },
    date: "15 Mai 2026",
    color: "bg-blue-100 text-blue-700",
  },
  {
    img: visaImg,
    category: { fr: "VISA", ar: "التأشيرة" },
    title: { fr: "VISA Schengen : les documents indispensables en 2026", ar: "تأشيرة شنغن: الوثائق الضرورية في 2026" },
    excerpt: {
      fr: "Découvrez la liste complète et actualisée des documents nécessaires pour votre demande de VISA Schengen.",
      ar: "اكتشف القائمة الكاملة والمحدثة للوثائق اللازمة لطلب تأشيرة شنغن.",
    },
    date: "10 Mai 2026",
    color: "bg-green-100 text-green-700",
  },
  {
    img: etudiantsImg,
    category: { fr: "Étudiants", ar: "الطلاب" },
    title: { fr: "Bourses d'études à l'étranger : comment postuler", ar: "منح الدراسة بالخارج: كيف تتقدم بطلب" },
    excerpt: {
      fr: "Toutes les étapes pour postuler aux bourses d'études et préparer votre dossier administratif complet.",
      ar: "جميع الخطوات للتقدم بطلب منح الدراسة وإعداد ملفك الإداري الكامل.",
    },
    date: "3 Mai 2026",
    color: "bg-orange-100 text-orange-700",
  },
  {
    img: securiteSocialeImg,
    category: { fr: "Sécurité Sociale", ar: "الضمان الاجتماعي" },
    title: { fr: "Vos droits à la sécurité sociale expliqués simplement", ar: "حقوقك في الضمان الاجتماعي بشكل مبسط" },
    excerpt: {
      fr: "Comprendre vos droits et obligations en matière de sécurité sociale pour mieux protéger votre famille.",
      ar: "فهم حقوقك والتزاماتك في مجال الضمان الاجتماعي لحماية عائلتك بشكل أفضل.",
    },
    date: "28 Avr 2026",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Blog() {
  const { t, language } = useLanguage();

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3c6e] mb-3">{t("blog.title")}</h2>
          <p className="text-gray-500 text-lg">
            {language === "fr"
              ? "Actualités, conseils et guides pratiques pour vos démarches"
              : "أخبار ونصائح وأدلة عملية لإجراءاتك"}
          </p>
          <div className="mt-4 w-16 h-1 bg-[#e8801a] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.color}`}>
                    {post.category[language]}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#1a3c6e] text-sm leading-snug mb-2">
                  {post.title[language]}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                  {post.excerpt[language]}
                </p>
                <button className="inline-flex items-center gap-1 text-xs font-semibold text-[#e8801a] hover:gap-2 transition-all mt-auto">
                  {t("blog.read_more")} <span>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
