import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Photographs } from "@/components/Photographs";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Work />
      <Experience />
      <About />
      <Photographs />
      <Contact />
    </main>
  );
}
