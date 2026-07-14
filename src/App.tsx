import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTION_IDS = ["home", "about", "services", "portfolio", "blog", "contact"];

export default function App() {
  const active = useScrollSpy(SECTION_IDS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar active={active} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}