"use client";

import { BackgroundEffect } from "@/shared/components/background-effect";
import { Experience } from "@/features/experience/view";
import { Project } from "@/features/project/view";
import { Contact } from "@/features/contact/view";
import { Footer } from "@/features/footer/view";
import { Header } from "@/features/header/view";
import { About } from "@/features/about/view";
import { Hero } from "@/features/hero/view";
import { SITE_CONTAINER_CLASSNAME } from "@/shared/lib/layout";
import { twMerge } from "tailwind-merge";

const Home = () => {
  return (
    <main className="relative min-h-dvh bg-background">
      <BackgroundEffect />
      <Header />
      <section className={twMerge("relative z-10", SITE_CONTAINER_CLASSNAME)}>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
