"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { experience, hero } from "@/data/content";
import { photos, type Photo } from "@/data/photos";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const heroPhotos = photos.filter((photo) => photo.hero);

/**
 * Cover the viewport, but do not enlarge a photo past its own pixels.
 * A larger screen contains the frame instead of scaling it soft.
 */
function heroFit(
  boxWidth: number,
  boxHeight: number,
  imageWidth: number,
  imageHeight: number,
): "cover" | "contain" {
  if (boxWidth <= 0 || boxHeight <= 0) {
    return "cover";
  }

  const scale = Math.max(boxWidth / imageWidth, boxHeight / imageHeight);
  return scale > 1 ? "contain" : "cover";
}

export function Hero() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLElement>(null);
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [fit, setFit] = useState<"cover" | "contain">("contain");

  useEffect(() => {
    if (heroPhotos.length === 0) {
      return;
    }
    const index = Math.floor(Math.random() * heroPhotos.length);
    setPhoto(heroPhotos[index] ?? null);
  }, []);

  useEffect(() => {
    if (!photo) {
      return;
    }

    const node = frameRef.current;
    if (!node) {
      return;
    }

    const measure = () => {
      const rect = node.getBoundingClientRect();
      setFit(heroFit(rect.width, rect.height, photo.width, photo.height));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [photo]);

  return (
    <section
      ref={frameRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-paper"
    >
      {photo ? (
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, ease: easeOut }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            quality={90}
            sizes={`${photo.width}px`}
            className={fit === "cover" ? "object-cover" : "object-contain"}
            style={{ objectPosition: photo.heroPosition }}
          />
        </motion.div>
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1120px] items-end justify-center px-4 pb-10 pt-28 md:justify-start md:px-6 md:pb-[72px]">
        <Reveal immediate className="glass on-glass w-full max-w-[520px] px-6 py-8 md:px-10 md:py-10">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display-lg mt-4 text-balance text-[3.15rem] leading-[0.98] md:text-[4.5rem]">
            {hero.name}
          </h1>
          <p className="mt-5 text-[1.2rem] leading-snug">{hero.line}</p>
          <p className="mt-4 text-[17px] leading-[1.5]">{hero.support}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-ink" href="/experience">
              {experience.label}
            </Link>
            <Link className="btn btn-line" href="/photos">
              {hero.photosLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
