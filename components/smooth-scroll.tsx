"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.18,
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
