import Image from "next/image";
import Link from "next/link";
import { PhotoBand } from "@/components/PhotoBand";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/content";
import { headshot } from "@/data/photos";

type AboutProps = {
  variant?: "home" | "page";
};

export function About({ variant = "home" }: AboutProps) {
  const paragraphs =
    variant === "home" ? about.paragraphs.slice(0, 1) : about.paragraphs;
  const Heading = variant === "page" ? "h1" : "h2";

  return (
    <PhotoBand src={about.backdrop} inset={variant === "page" ? "page" : "section"}>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-16">
        <div className="photo-float overflow-hidden rounded-[28px] bg-[#e6e1d9]">
          <Image
            src={headshot.src}
            alt={headshot.alt}
            width={headshot.width}
            height={headshot.height}
            quality={90}
            sizes={`${headshot.width}px`}
            className="h-auto w-full"
          />
        </div>
        <Reveal className="glass on-glass px-6 py-8 md:px-10 md:py-10">
          <p className="eyebrow">{about.label}</p>
          <Heading className="display mt-4 text-balance text-[2rem] leading-[1.15] md:text-[2.6rem]">
            {about.headline}
          </Heading>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.5] text-pretty">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {variant === "page" ? (
            <p className="mt-8 border-t border-ink/15 pt-6 text-[15px] leading-[1.6]">
              {about.skills}
            </p>
          ) : (
            <p className="mt-8">
              <Link className="btn btn-ink" href="/about">
                {about.moreLabel}
              </Link>
            </p>
          )}
        </Reveal>
      </div>
    </PhotoBand>
  );
}
