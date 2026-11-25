import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex min-h-[100svh] w-full max-w-[1120px] flex-col justify-center bg-paper px-4 py-32 md:px-6"
    >
      <p className="eyebrow">Missing page</p>
      <h1 className="display mt-4 text-[2.75rem] leading-[1.05] text-ink md:text-[4rem]">
        This page is not on the site.
      </h1>
      <Link className="link mt-8 inline-block w-fit" href="/">
        Back home
      </Link>
    </main>
  );
}
