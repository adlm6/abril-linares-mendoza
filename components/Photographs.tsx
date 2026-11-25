import Link from "next/link";
import { PhotoMasonry } from "@/components/PhotoMasonry";
import { SectionHeading } from "@/components/SectionHeading";
import { photographs } from "@/data/content";
import { photos } from "@/data/photos";

export function Photographs() {
  return (
    <section
      id="photographs"
      className="scroll-mt-28 bg-paper py-[72px] md:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
        <SectionHeading eyebrow={photographs.label} title={photographs.title}>
          <p>{photographs.body}</p>
          <p className="mt-6">
            <Link className="link" href="/photos">
              {photographs.filterLabel}
            </Link>
          </p>
        </SectionHeading>
        <div className="mt-10 md:mt-[72px]">
          <PhotoMasonry photos={photos} />
        </div>
      </div>
    </section>
  );
}
