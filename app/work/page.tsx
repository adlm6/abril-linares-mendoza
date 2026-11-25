import type { Metadata } from "next";
import { Work } from "@/components/Work";
import { work } from "@/data/content";

export const metadata: Metadata = {
  title: work.label,
  description: work.title,
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main id="content">
      <Work variant="page" />
    </main>
  );
}
