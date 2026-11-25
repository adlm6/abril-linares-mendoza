import type { Metadata } from "next";
import { About } from "@/components/About";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: about.label,
  description: about.headline,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="content">
      <About variant="page" />
    </main>
  );
}
