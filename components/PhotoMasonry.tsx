import Image from "next/image";
import type { Photo } from "@/data/photos";

type PhotoMasonryProps = {
  photos: readonly Photo[];
};

export function PhotoMasonry({ photos }: PhotoMasonryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="mb-4 inline-block w-full break-inside-avoid"
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
              className="object-cover"
            />
          </div>
          <figcaption className="display-sm mt-3 text-[1.25rem] leading-snug text-ink">
            {photo.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
