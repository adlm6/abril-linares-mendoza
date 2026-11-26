import Image from "next/image";
import type { ExperiencePhoto } from "@/data/content";

const slots = [
  { rotate: -7, x: -86, y: -78, z: 1 },
  { rotate: 6, x: 86, y: -64, z: 2 },
  { rotate: -2, x: 4, y: 92, z: 3 },
];

type PolaroidStackProps = {
  photos: readonly ExperiencePhoto[];
};

export function PolaroidStack({ photos }: PolaroidStackProps) {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[320px] md:mx-0 md:h-[440px] md:max-w-none">
      {photos.map((photo, index) => {
        const slot = slots[index % slots.length] ?? slots[0];
        return (
          <figure
            key={photo.src}
            className="absolute left-1/2 top-1/2 w-[46%] bg-white p-1.5 pb-5 shadow-[0_12px_24px_rgba(28,25,23,0.14)]"
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
                className="object-contain"
              />
            </div>
          </figure>
        );
      })}
    </div>
  );
}
