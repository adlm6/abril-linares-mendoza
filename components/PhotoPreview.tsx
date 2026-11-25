"use client";

import { useEffect, useState } from "react";
import { PhotoMasonry } from "@/components/PhotoMasonry";
import { photos, type Photo } from "@/data/photos";

const previewCount = 3;

function shuffle(source: readonly Photo[]) {
  const copy = [...source];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = copy[index];
    const next = copy[swap];
    if (current && next) {
      copy[index] = next;
      copy[swap] = current;
    }
  }
  return copy.slice(0, previewCount);
}

export function PhotoPreview() {
  const [selection, setSelection] = useState<readonly Photo[] | null>(null);

  useEffect(() => {
    setSelection(shuffle(photos));
  }, []);

  if (!selection) {
    return (
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3" aria-hidden="true">
        {[4 / 3, 3 / 4, 4 / 3].map((ratio, index) => (
          <div
            key={ratio + index}
            className="mb-4 break-inside-avoid rounded-[20px] bg-[#e6e1d9]"
            style={{ aspectRatio: String(ratio) }}
          />
        ))}
      </div>
    );
  }

  return <PhotoMasonry photos={selection} />;
}
