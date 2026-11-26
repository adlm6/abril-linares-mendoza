import { arrangements, music } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Music() {
  return (
    <section className="bg-paper px-4 pb-[72px] pt-32 md:px-6 md:pb-[120px] md:pt-36">
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHeading eyebrow={music.label} title={music.title} as="h1" />
        <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.5] text-pretty text-ink">
          {music.channelLead}{" "}
          <a className="link" href={music.channelHref} target="_blank" rel="noreferrer">
            {music.channelName}
          </a>
        </p>
        {arrangements.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-12 md:grid-cols-2">
            {arrangements.map((video) => (
              <li key={video.youtubeId}>
                <div className="overflow-hidden rounded-[20px] bg-[#e6e1d9]">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <h2 className="display mt-3 text-[1.35rem] leading-tight text-ink">{video.title}</h2>
                {video.note ? (
                  <p className="mt-2 max-w-[42ch] text-[15px] leading-[1.5] text-pretty text-ink">
                    {video.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
