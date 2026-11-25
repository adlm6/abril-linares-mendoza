import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { experience } from "@/data/content";

export const metadata: Metadata = {
  title: experience.label,
  description: experience.title,
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main id="content">
      <Experience variant="page" />
    </main>
  );
}
