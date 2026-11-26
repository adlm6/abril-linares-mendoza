import type { Metadata } from "next";
import { Music } from "@/components/Music";
import { music } from "@/data/content";

export const metadata: Metadata = {
  title: music.label,
  description: music.empty,
  alternates: {
    canonical: "/music",
  },
};

export default function MusicPage() {
  return (
    <main id="content">
      <Music />
    </main>
  );
}
