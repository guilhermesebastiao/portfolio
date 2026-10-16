"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { LenisContext } from "@/shared/context/lenis-context";
import Lenis from "lenis";

export const LenisProvider = ({ children }: PropsWithChildren) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId: number;
    let published = false;

    const raf = (time: number) => {
      if (!published) {
        published = true;
        setLenis(instance);
      }

      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>;
};
