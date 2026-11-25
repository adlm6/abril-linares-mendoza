import Image from "next/image";
import { PhotoBand } from "@/components/PhotoBand";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/content";
import { headshot } from "@/data/photos";

export function About() {
  return (
    <PhotoBand id="about" src={about.backdrop}>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-16">
        <div className="overflow-hidden rounded-[28px] bg-[#e6e1d9]">
          <Image
            src={headshot.src}
            alt={headshot.alt}
            width={headshot.width}
            height={headshot.height}
            className="h-auto w-full"
            sizes="(min-width: 768px) 460px, 100vw"
          />
        </div>
        <Reveal className="glass on-glass px-6 py-8 md:px-10 md:py-10">
          <p className="eyebrow">{about.label}</p>
          <h2 className="display mt-4 text-balance text-[2rem] leading-[1.15] md:text-[2.6rem]">
            {about.headline}
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.5] text-pretty">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 border-t border-ink/15 pt-6 text-[15px] leading-[1.6]">
            {about.skills}
          </p>
        </Reveal>
      </div>
    </PhotoBand>
  );
}
