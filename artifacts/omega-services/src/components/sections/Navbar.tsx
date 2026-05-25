import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Menu, X } from "lucide-react";

const searchableItems = [
  { label: { fr: "Services administratifs variés", ar: "خدمات إدارية متنوعة" }, section: "services" },
  { label: { fr: "Services de sécurité sociale", ar: "خدمات الضمان الاجتماعي" }, section: "services" },
  { label: { fr: "Dossiers de retraite à l'étranger", ar: "ملفات التقاعد بالخارج" }, section: "services" },
  { label: { fr: "Services VISA", ar: "خدمات التأشيرة" }, section: "services" },
  { label: { fr: "Services étudiants", ar: "خدمات الطلاب" }, section: "services" },
  { label: { fr: "Ressources Humaines", ar: "الموارد البشرية" }, section: "services" },
  { label: { fr: "Guides PDF", ar: "أدلة PDF" }, section: "knowledge" },
  { label: { fr: "Infographies", ar: "الرسوم البيانية" }, section: "knowledge" },
  { label: { fr: "Blog Retraite", ar: "مدونة التقاعد" }, section: "blog" },
  { label: { fr: "Blog VISA", ar: "مدونة التأشيرة" }, section: "blog" },
  { label: { fr: "Sécurité Sociale", ar: "الضمان الاجتماعي" }, section: "blog" },
];

export default function Navbar() {
  const { t, language, setLanguage, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<typeof searchableItems>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (val: string) => {
    setSearch(val);
    if (val.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const lower = val.toLowerCase();
    const filtered = searchableItems.filter(
      (i) =>
        i.label.fr.toLowerCase().includes(lower) ||
        i.label.ar.includes(val)
    );
    setResults(filtered);
    setShowResults(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setShowResults(false);
    setSearch("");
  };

  const navLinks = [
    { key: "nav.services", id: "services" },
    { key: "nav.about", id: "about" },
    { key: "nav.knowledge", id: "knowledge" },
    { key: "nav.blog", id: "blog" },
    { key: "nav.contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a3c6e] shadow-lg"
          : "bg-[#1a3c6e]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xl tracking-tight">OMEGA</span>
              <span className="text-[#e8801a] font-black text-xl tracking-tight">SERVICES</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.id)}
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* Search + Lang + Mobile */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div ref={searchRef} className="relative hidden md:block">
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 gap-2">
                <Search size={15} className="text-white/60" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => search.length >= 2 && setShowResults(true)}
                  placeholder={language === "fr" ? "Rechercher..." : "بحث..."}
                  className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-36"
                />
              </div>
              {showResults && results.length > 0 && (
                <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100">
                  {results.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => scrollTo(r.section)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a3c6e] transition-colors block"
                    >
                      {r.label[language]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  language === "fr"
                    ? "bg-[#e8801a] text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  language === "ar"
                    ? "bg-[#e8801a] text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                AR
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-3">
            <div className="flex flex-col gap-1 mb-3">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.id)}
                  className="text-white/90 hover:bg-white/10 text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
            <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 gap-2">
              <Search size={15} className="text-white/60" />
              <input
                type="search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={language === "fr" ? "Rechercher..." : "بحث..."}
                className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
              />
            </div>
            {showResults && results.length > 0 && (
              <div className="mt-1 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(r.section)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors block"
                  >
                    {r.label[language]}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
