"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PhotoMasonry } from "@/components/PhotoMasonry";
import { photos, tags, type Tag } from "@/data/photos";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

export function Gallery() {
  const reduce = useReducedMotion();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const raw = (params.get("tag") ?? "").trim();
  const active = tags.find((tag) => tag.toLowerCase() === raw.toLowerCase()) ?? null;
  const filtered =
    raw.length === 0
      ? photos
      : active
        ? photos.filter((photo) => photo.tags.includes(active))
        : [];

  function select(tag: Tag | null) {
    const next = new URLSearchParams(params.toString());
    if (tag) {
      next.set("tag", tag);
    } else {
      next.delete("tag");
    }
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 pb-[72px] md:px-6 md:pb-[120px]">
      <div role="group" aria-label="Filter photographs" className="flex flex-wrap gap-2">
        <button
          type="button"
          className="chip"
          aria-pressed={raw.length === 0}
          onClick={() => select(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="chip"
            aria-pressed={active === tag}
            onClick={() => select(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={raw || "all"}
          className="mt-10"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.35, ease: easeOut }}
        >
          {filtered.length === 0 ? (
            <p role="status" className="text-[17px] leading-[1.5] text-ink">
              No photographs tagged {active ?? raw} yet.
            </p>
          ) : (
            <PhotoMasonry photos={filtered} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
