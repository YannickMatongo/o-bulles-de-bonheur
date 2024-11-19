'use client'
import Contact from "./components/Contact/page";
import Faq from "./components/Faq/page";
import Features from "./components/Features/page";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";
import Pricing from "./components/Pricing/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-zen-cream">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
