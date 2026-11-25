import Image from "next/image";
import type { ReactNode } from "react";

type PhotoBandProps = {
  id?: string;
  src: string;
  children: ReactNode;
};

export function PhotoBand({ id, src, children }: PhotoBandProps) {
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
      <div className="relative mx-auto w-full max-w-[1120px] px-4 py-[72px] md:px-6 md:py-[120px]">
        {children}
      </div>
    </section>
  );
}
