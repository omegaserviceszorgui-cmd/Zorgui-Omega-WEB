import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logoImg from "@assets/5770-removebg-preview_edit_1199571528561730_1779727430767.png";

export default function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { key: "nav.services", id: "services" },
    { key: "nav.about", id: "about" },
    { key: "nav.knowledge", id: "knowledge" },
    { key: "nav.blog", id: "blog" },
    { key: "nav.contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0d2140] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logoImg} alt="OMEGA SERVICES" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              {language === "fr"
                ? "Votre partenaire de confiance pour toutes vos démarches administratives à Kasserine, Tunisie."
                : "شريكك الموثوق لجميع إجراءاتك الإدارية في القصرين، تونس."}
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/21654651063" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="mailto:omegaserviceszorgui@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-[#e8801a] rounded-lg flex items-center justify-center transition-colors">
                <Mail size={16} />
              </a>
              <a href="tel:+21698284858"
                className="w-9 h-9 bg-white/10 hover:bg-[#1a3c6e] rounded-lg flex items-center justify-center transition-colors">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold text-sm text-white/90 uppercase tracking-wider mb-4">
              {language === "fr" ? "Navigation" : "التنقل"}
            </h4>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.key}>
                  <button onClick={() => scrollTo(l.id)}
                    className="text-white/60 hover:text-[#e8801a] text-sm transition-colors">
                    {t(l.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white/90 uppercase tracking-wider mb-4">
              {language === "fr" ? "Contact" : "تواصل"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-[#e8801a] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">98 284 858</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={14} className="text-[#e8801a] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">54 651 063</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="text-[#e8801a] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm break-all">omegaserviceszorgui@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#e8801a] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">Kasserine – Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/40 text-sm">
            &copy; {year} OMEGA SERVICES. {language === "fr" ? "Tous droits réservés." : "جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
}
