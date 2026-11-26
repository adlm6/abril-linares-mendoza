import Image from "next/image";
import type { Photo } from "@/data/photos";

type PhotoMasonryProps = {
  photos: readonly Photo[];
  captions?: "hover" | "none";
  zoom?: boolean;
};

export function PhotoMasonry({ photos, captions = "none", zoom = false }: PhotoMasonryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          tabIndex={captions === "hover" ? 0 : undefined}
          className="photo-card photo-float relative mb-4 inline-block w-full break-inside-avoid rounded-[20px] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink"
        >
          <div
            className="relative overflow-hidden rounded-[20px] bg-[#e6e1d9]"
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
              className={zoom ? "object-cover photo-zoom" : "object-cover"}
            />
            {captions === "hover" ? (
              <figcaption className="photo-caption pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-16">
                <span className="font-sans text-[15px] leading-snug text-paper">
                  {photo.title}
                </span>
              </figcaption>
            ) : null}
          </div>
        </figure>
      ))}
    </div>
  );
}
