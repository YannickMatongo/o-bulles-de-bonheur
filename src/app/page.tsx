'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Contact from "./components/Contact/page";
import Faq from "./components/Faq/page";
import Features from "./components/Features/page";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";
import Pricing from "./components/Pricing/page";
import Navbar from "./components/navbar/page";
import Massage from "./components/Massage/page";

export default function Home() {
  // Crée des contrôles pour déclencher les animations
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refFeatures, inViewFeatures] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refPricing, inViewPricing] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refFaq, inViewFaq] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refContact, inViewContact] = useInView({ triggerOnce: true, threshold: 0.2 });

  const controlsHero = useAnimation();
  const controlsFeatures = useAnimation();
  const controlsPricing = useAnimation();
  const controlsFaq = useAnimation();
  const controlsContact = useAnimation();

  // Déclenche les animations lorsque les sections sont dans la vue
  useEffect(() => {
    if (inViewHero) controlsHero.start({ opacity: 1, y: 0 });
    if (inViewFeatures) controlsFeatures.start({ opacity: 1, x: 0 });
    if (inViewPricing) controlsPricing.start({ opacity: 1, y: 0 });
    if (inViewFaq) controlsFaq.start({ opacity: 1, scale: 1 });
    if (inViewContact) controlsContact.start({ opacity: 1 });
  }, [inViewHero, inViewFeatures, inViewPricing, inViewFaq, inViewContact, controlsHero, controlsFeatures, controlsPricing, controlsFaq, controlsContact]);

  return (
    <div className="min-h-screen bg-zen-cream">
      <Navbar />
      <motion.div
        ref={refHero}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsHero}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={refFeatures}
        initial={{ opacity: 0, x: -50 }}
        animate={controlsFeatures}
        transition={{ duration: 0.6 }}
      >
        <Features />
      </motion.div>

      <Massage />

      <motion.div
        ref={refPricing}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsPricing}
        transition={{ duration: 0.6 }}
      >
        <Pricing />
      </motion.div>

      <motion.div
        ref={refFaq}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controlsFaq}
        transition={{ duration: 0.6 }}
      >
        <Faq />
      </motion.div>

      <motion.div
        ref={refContact}
        initial={{ opacity: 0 }}
        animate={controlsContact}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
}

