import { arrangements, music } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Music() {
  return (
    <section className="bg-paper px-4 pb-[72px] pt-32 md:px-6 md:pb-[120px] md:pt-36">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeading eyebrow={music.label} title={music.title} as="h1" />
        {arrangements.length === 0 ? (
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
            {music.empty}
          </p>
        ) : (
          <ul className="mt-10 space-y-16 md:mt-[72px]">
            {arrangements.map((video) => (
              <li key={video.youtubeId}>
                <div className="overflow-hidden rounded-[28px] bg-[#e6e1d9]">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h2 className="display mt-4 text-[2rem] leading-tight text-ink">{video.title}</h2>
                {video.note ? (
                  <p className="mt-3 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
                    {video.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
