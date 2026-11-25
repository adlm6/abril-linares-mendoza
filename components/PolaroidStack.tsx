import Image from "next/image";
import type { ExperiencePhoto } from "@/data/content";

const slots = [
  { rotate: -11, x: -52, y: -36, z: 1 },
  { rotate: 9, x: 48, y: -24, z: 2 },
  { rotate: -3, x: -6, y: 42, z: 3 },
];

type PolaroidStackProps = {
  photos: readonly ExperiencePhoto[];
};

export function PolaroidStack({ photos }: PolaroidStackProps) {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[260px] md:mx-0 md:h-[340px] md:max-w-none">
      {photos.map((photo, index) => {
        const slot = slots[index % slots.length] ?? slots[0];
        return (
          <figure
            key={photo.src}
            className="absolute left-1/2 top-1/2 w-[58%] bg-white p-2 pb-7 shadow-[0_16px_32px_rgba(28,25,23,0.16)]"
            style={{
              zIndex: slot.z,
              transform: `translate(-50%, -50%) translate(${slot.x}px, ${slot.y}px) rotate(${slot.rotate}deg)`,
            }}
          >
            <div className="relative aspect-square overflow-hidden bg-[#e6e1d9]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </figure>
        );
      })}
    </div>
  );
}
