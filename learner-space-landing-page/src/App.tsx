import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import HeroSection from "./components/Home/HeroSection";
import SolutionSection from "./components/Home/SolutionSection";
import ProblemSection from "./components/Home/ProblemSection";
import HowItWorksSection from "./components/Home/HowItWorks";
import ReadySection from "./components/Home/ReadySection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import FAQSection from "./components/Home/FAQSection";
import Footer from "./components/Home/Footer";
import Popup from "./components/Home/Popup";

const App: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Scroll Reveal and Parallax Logic
  useEffect(() => {
    // 1. Fade In Body on Load
    document.body.style.opacity = "1";

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Staggered delay logic
          if (
            entry.target.classList.contains("testimonial-card") ||
            entry.target.classList.contains("problem-card") ||
            entry.target.classList.contains("solution-card") ||
            entry.target.classList.contains("insight-card") ||
            entry.target.classList.contains("benefit-item")
          ) {
            const parent = entry.target.parentElement;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(entry.target);
              const element = entry.target as HTMLElement; // Type assertion for style access
              element.style.transitionDelay = `${index * 150}ms`;
            }
          }
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(
      ".feature-item, .feature-box, .testimonial-card, .problem-card, .solution-card, .insight-card, .benefit-item"
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    // 3. Parallax Effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(
        ".triangle-decoration, .floating-square, .dots-pattern"
      );

      parallaxElements.forEach((element, index) => {
        const htmlEl = element as HTMLElement;
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        htmlEl.style.transform = `translateY(${yPos}px)`;
      });

      const heroContent = document.querySelector(
        ".hero-content"
      ) as HTMLElement | null;
      const heroImage = document.querySelector(
        ".hero-image"
      ) as HTMLElement | null;

      if (heroContent)
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      if (heroImage)
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar onOpenPopup={() => setIsPopupOpen(true)} />
      <HeroSection onOpenPopup={() => setIsPopupOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ReadySection />
      <TestimonialsSection onOpenPopup={() => setIsPopupOpen(true)} />
      <FAQSection />
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default App;
