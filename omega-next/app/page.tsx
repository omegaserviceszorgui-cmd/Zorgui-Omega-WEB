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
import Slideshow from "@/components/Slideshow";
import slidesData from "@/public/slideshow/slides.json";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <KnowledgeCenter />
      <Blog />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
