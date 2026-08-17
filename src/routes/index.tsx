import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Studio } from "@/components/Studio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useReveal } from "@/hooks/use-reveal";
import { useClickSound } from "@/hooks/use-click-sound";

const TITLE = "Kusooo — Studio de design web sur mesure";
const DESCRIPTION =
  "Kusooo imagine des expériences digitales sobres et mémorables : sites vitrines, pages de conversion et interfaces animées.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  useClickSound();
  useReveal();

  return (
    <div className="relative min-h-screen w-full bg-background">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navigation />
      <main>
        <Hero />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
