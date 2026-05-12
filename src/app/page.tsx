"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CompareSection from "../components/CompareSection";
import BenefitsSection from "../components/BenefitsSection";
import ScienceSection from "../components/ScienceSection";
import KitSection from "../components/KitSection";
import HowSection from "../components/HowSection";
import TestimoniosSection from "../components/TestimoniosSection";
import FaqSection from "../components/FaqSection";
import FinalCtaSection from "../components/FinalCtaSection";
import MouthTapeSection from "../components/MouthTapeSection";

export default function Home() {
  const [activeColor, setActiveColor] = useState<"blanco" | "negro">("negro");

  useEffect(() => {
    // SCROLL REVEAL ANIMATION
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-right").forEach((el) => {
      revealObserver.observe(el);
    });

    // SMOOTH SCROLL FOR IN_PAGE ANCHORS
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      revealObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <main>
      <HeroSection color={activeColor} />
      <CompareSection />
      <BenefitsSection />
      <ScienceSection />
      <KitSection color={activeColor} setColor={setActiveColor} />
      <HowSection />
      <TestimoniosSection />
      <MouthTapeSection />
      <FaqSection />
      <FinalCtaSection color={activeColor} />
    </main>
  );
}
