"use client";

import React, { useMemo, useState } from "react";

type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  category: string;
};

const portfolioItems: PortfolioItem[] = [
  { id: 1, image: "/gallery/1.jpg", title: "Coupe signature", category: "Barbe Blanche" },
  { id: 2, image: "/gallery/2.jpg", title: "Dégradé moderne", category: "Salon Premium" },
  { id: 3, image: "/gallery/3.jpg", title: "Finition précise", category: "Style & détail" },
  { id: 4, image: "/gallery/4.jpg", title: "Look élégant", category: "Coupe homme" },
  { id: 5, image: "/gallery/5.jpg", title: "Barbe sculptée", category: "Barbe" },
  { id: 6, image: "/gallery/6.jpg", title: "Texture naturelle", category: "Signature" },
  { id: 7, image: "/gallery/7.jpg", title: "Coupe clean", category: "Montréal" },
  { id: 8, image: "/gallery/8.jpg", title: "Style classique", category: "Premium" },
  { id: 9, image: "/gallery/9.jpg", title: "Look urbain", category: "Studio" },
  { id: 10, image: "/gallery/10.jpg", title: "Contour net", category: "Coupe & barbe" },
  { id: 11, image: "/gallery/11.jpg", title: "Dégradé fondu", category: "Fade" },
  { id: 12, image: "/gallery/12.jpg", title: "Style soigné", category: "Barber art" },
  { id: 13, image: "/gallery/13.jpg", title: "Profil premium", category: "Luxury cut" },
  { id: 14, image: "/gallery/14.jpg", title: "Expression moderne", category: "Editorial" },
  { id: 15, image: "/gallery/15.jpeg", title: "Coupe structurée", category: "Barbe Blanche" },
  { id: 16, image: "/gallery/16.jpeg", title: "Visuel salon", category: "Interior" },
  { id: 17, image: "/gallery/17.jpeg", title: "Ambiance premium", category: "Atmosphere" },
  { id: 18, image: "/gallery/18.jpeg", title: "Détail & matière", category: "Design" },
];

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M11 6L5 12L11 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(() => portfolioItems[activeIndex], [activeIndex]);
  const total = portfolioItems.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="portfolio"
      className="bg-[var(--page)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="rounded-[32px] bg-black p-4 sm:p-5 lg:p-6">
          <div className="grid gap-0 overflow-hidden rounded-[28px] bg-black lg:grid-cols-[1.15fr_0.45fr]">
            {/* LEFT IMAGE */}
            <div className="relative min-h-[620px] lg:min-h-[760px]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

              {/* TITLE */}
              <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8 md:left-10 md:top-10">
                <div className="text-[60px] font-[800] leading-[0.88] tracking-[-0.07em] text-white sm:text-[86px] md:text-[100px] lg:text-[110px]">
                  Notre
                </div>

                <div className='-mt-3 text-[56px] italic leading-[0.9] tracking-[-0.04em] text-white sm:text-[74px] md:text-[88px] lg:text-[96px] font-["var(--font-serif)"]'>
                  Portfolio
                </div>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10 md:right-10">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                  {/* badges */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                      {activeItem.category}
                    </span>

                    <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-medium text-white/92 backdrop-blur-sm">
                      {activeItem.title}
                    </span>
                  </div>

                  {/* controls */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/35 text-white backdrop-blur-sm transition hover:bg-white/10"
                      aria-label="Précédent"
                    >
                      <ArrowLeftIcon />
                    </button>

                    <div className="min-w-[84px] text-center text-[30px] font-medium tracking-[-0.04em] text-white">
                      {String(activeIndex + 1).padStart(2, "0")}
                      <span className="text-white/55">
                        {" "}
                        / {String(total).padStart(2, "0")}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/92"
                    >
                      <span>Voir portfolio</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white transition group-hover:translate-x-1">
                        <ArrowRightIcon />
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/35 text-white backdrop-blur-sm transition hover:bg-white/10"
                      aria-label="Suivant"
                    >
                      <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT DARK PANEL */}
            <div className="hidden bg-[#02040a] lg:block">
              <div className="h-full w-full bg-gradient-to-b from-[#02040a] via-[#02040a] to-[#010308]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}