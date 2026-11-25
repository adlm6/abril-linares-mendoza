"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { hero } from "@/data/content";
import { photos, type Photo } from "@/data/photos";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setPhoto(photos[index] ?? null);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-paper">
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
            sizes="100vw"
            className="object-cover"
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
            <a className="btn btn-ink" href="#work">
              {hero.workLabel}
            </a>
            <Link className="btn btn-line" href="/photos">
              {hero.photosLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
