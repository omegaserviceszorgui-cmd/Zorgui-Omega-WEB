import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import KnowledgeCenter from "@/components/sections/KnowledgeCenter";
import Blog from "@/components/sections/Blog";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const { isRtl } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-gray-50 text-foreground ${isRtl ? 'font-sans' : 'font-sans'}`}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <KnowledgeCenter />
        <Blog />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}