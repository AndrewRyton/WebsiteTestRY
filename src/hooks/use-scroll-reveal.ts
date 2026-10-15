import { useEffect } from "react";

/** Enhancement only: prerendered content remains visible without JavaScript. */
export function useScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>(
      ".scroll-reveal, .section-band .page-width, .section-content, .services-grid, .report-figure",
    );
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 40) return;
      element.classList.add("reveal-pending");
      observer.observe(element);
    });
    const showAll = () => {
      if (!motion.matches) return;
      elements.forEach((element) => element.classList.remove("reveal-pending"));
      observer.disconnect();
    };
    motion.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showAll);
      elements.forEach((element) => element.classList.remove("reveal-pending", "is-visible"));
    };
  }, []);
}