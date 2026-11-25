"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Logo } from "@/components/Logo";
import { navigation, site } from "@/data/content";

function currentPath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

function scrollToHash(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  path: string,
) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1 || path !== "/") {
    return;
  }

  const id = href.slice(hashIndex + 1);
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  event.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.pushState(null, "", `/#${id}`);
}

export function Nav() {
  const pathname = usePathname() || "/";
  const path = currentPath(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header ref={rootRef} className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto w-full max-w-[1120px] md:w-fit">
        <div className="glass-pill flex items-center justify-between gap-1 py-1.5 pl-1.5 pr-1.5 md:justify-start md:gap-2 md:pr-2">
          <Link
            href="/"
            aria-label={site.name}
            className="glass-pill grid h-9 w-9 shrink-0 place-items-center text-ink"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>
          <ul className="hidden items-center md:flex">
            {navigation.map((item) => {
              const active = item.href === "/photos" && path === "/photos";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-[15px] text-ink hover:bg-white/50 ${active ? "bg-white/70" : ""}`}
                    onClick={(event) => {
                      setOpen(false);
                      scrollToHash(event, item.href, path);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-full px-3 py-2 text-[15px] font-medium text-ink md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <div id="site-menu" hidden={!open} className="glass mt-2 p-2 md:hidden">
          <ul className="flex flex-col">
            {navigation.map((item) => {
              const active = item.href === "/photos" && path === "/photos";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="block rounded-2xl px-4 py-3 text-[17px] text-ink hover:bg-white/50"
                    onClick={(event) => {
                      setOpen(false);
                      scrollToHash(event, item.href, path);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
