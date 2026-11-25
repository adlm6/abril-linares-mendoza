import Link from "next/link";
import { PhotoPreview } from "@/components/PhotoPreview";
import { SectionHeading } from "@/components/SectionHeading";
import { photographs } from "@/data/content";

export function Photographs() {
  return (
    <section className="bg-paper py-[72px] md:py-[120px]">
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <SectionHeading eyebrow={photographs.label} title={photographs.title}>
          <p>{photographs.homeBody}</p>
        </SectionHeading>
        <div className="mt-10 md:mt-[72px]">
          <PhotoPreview />
        </div>
        <p className="mt-10">
          <Link className="btn btn-ink" href="/photos">
            {photographs.moreLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
