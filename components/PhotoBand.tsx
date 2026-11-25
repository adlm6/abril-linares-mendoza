import Image from "next/image";
import type { ReactNode } from "react";

type PhotoBandProps = {
  id?: string;
  src: string;
  children: ReactNode;
  inset?: "section" | "page";
};

export function PhotoBand({ id, src, children, inset = "section" }: PhotoBandProps) {
  const pad =
    inset === "page"
      ? "pb-[72px] pt-32 md:pb-[120px] md:pt-36"
      : "py-[72px] md:py-[120px]";

  return (
    <section id={id} className="relative isolate scroll-mt-28 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/20" />
      <div className={`relative mx-auto w-full max-w-[1120px] px-4 md:px-6 ${pad}`}>
        {children}
      </div>
    </section>
  );
}
