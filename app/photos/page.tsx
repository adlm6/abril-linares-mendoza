import type { Metadata } from "next";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { photographs } from "@/data/content";

export const metadata: Metadata = {
  title: photographs.label,
  description: `${photographs.title} ${photographs.body}`,
  alternates: {
    canonical: "/photos",
  },
};

export default function PhotosPage() {
  return (
    <main id="content" className="bg-paper">
      <div className="mx-auto w-full max-w-[1120px] px-4 pb-2 pt-32 md:px-6 md:pt-36">
        <p className="eyebrow">{photographs.label}</p>
        <h1 className="display mt-4 max-w-3xl text-balance text-[2.25rem] leading-[1.12] text-ink md:text-[3.25rem]">
          {photographs.title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
          {photographs.body}
        </p>
        <p className="mt-[1.5em] max-w-[62ch] text-[17px] leading-[1.5] text-ink">
          {photographs.instagramLead}{" "}
          <a
            className="link"
            href={photographs.instagramHref}
            target="_blank"
            rel="noreferrer"
          >
            {photographs.instagramHandle}
          </a>
        </p>
      </div>
      <Suspense
        fallback={
          <p className="mx-auto w-full max-w-[1120px] px-4 py-10 text-[17px] md:px-6">
            Loading the photographs.
          </p>
        }
      >
        <Gallery />
      </Suspense>
    </main>
  );
}
