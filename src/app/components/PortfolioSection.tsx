"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  category: string;
};

const portfolioContent = {
  fr: {
    smallLabel: "Expression moderne",
    titleTop: "Notre",
    titleBottom: "Portfolio",
    viewPortfolio: "Voir le portfolio",
    previous: "Précédent",
    next: "Suivant",
    selection: "Sélection",
    slide: "Slide",
    panelDescription:
      "Une sélection visuelle pensée pour mettre en valeur la précision, l’élégance et l’identité premium du salon.",
    items: [
      {
        id: 1,
        image: "/gallery/1.JPG",
        title: "Coupe signature",
        category: "Barbe Blanche",
      },
      {
        id: 2,
        image: "/gallery/2.JPG",
        title: "Dégradé moderne",
        category: "Salon premium",
      },
      {
        id: 3,
        image: "/gallery/3.JPG",
        title: "Finition précise",
        category: "Style & détail",
      },
      {
        id: 4,
        image: "/gallery/4.JPG",
        title: "Look élégant",
        category: "Coupe homme",
      },
      {
        id: 5,
        image: "/gallery/Barbe Blanche-14.JPG",
        title: "Barbe sculptée",
        category: "Barbe",
      },
      {
        id: 6,
        image: "/gallery/Barbe Blanche-41.JPG",
        title: "Texture naturelle",
        category: "Signature",
      },
      {
        id: 7,
        image: "/gallery/10.JPG",
        title: "Coupe nette",
        category: "Montréal",
      },
      {
        id: 8,
        image: "/gallery/Barbe Blanche-74.JPG",
        title: "Style classique",
        category: "Premium",
      },
      {
        id: 9,
        image: "/gallery/Barbe Blanche-75.JPG",
        title: "Look urbain",
        category: "Studio",
      },
      {
        id: 10,
        image: "/gallery/Barbe Blanche-76.JPG",
        title: "Contour net",
        category: "Coupe & barbe",
      },
      {
        id: 11,
        image: "/gallery/Barbe Blanche-77.JPG",
        title: "Dégradé fondu",
        category: "Fade",
      },
      {
        id: 12,
        image: "/gallery/Barbe Blanche-46.JPG",
        title: "Style soigné",
        category: "Barber art",
      },
      {
        id: 13,
        image: "/gallery/Barbe Blanche-78.JPG",
        title: "Profil premium",
        category: "Luxury cut",
      },
      {
        id: 14,
        image: "/gallery/Barbe Blanche-79.JPG",
        title: "Expression moderne",
        category: "Éditorial",
      },
      {
        id: 15,
        image: "/gallery/Barbe Blanche-86.JPG",
        title: "Coupe structurée",
        category: "Barbe Blanche",
      },
      {
        id: 16,
        image: "/gallery/Barbe Blanche-87.JPG",
        title: "Ambiance salon",
        category: "Intérieur",
      },
      {
        id: 17,
        image: "/gallery/Barbe Blanche-88.JPG",
        title: "Atmosphère premium",
        category: "Ambiance",
      },
      {
        id: 18,
        image: "/gallery/Barbe Blanche-89.JPG",
        title: "Détail & matière",
        category: "Design",
      },
      {
        id: 19,
        image: "/gallery/Barbe Blanche-91.JPG",
        title: "Coupe raffinée",
        category: "Premium cut",
      },
      {
        id: 20,
        image: "/gallery/Barbe Blanche-92.JPG",
        title: "Ligne précise",
        category: "Sharp look",
      },
      {
        id: 21,
        image: "/gallery/Barbe Blanche-93.JPG",
        title: "Style distinctif",
        category: "Modern barber",
      },
    ] satisfies PortfolioItem[],
  },

  en: {
    smallLabel: "Modern expression",
    titleTop: "Our",
    titleBottom: "Portfolio",
    viewPortfolio: "View portfolio",
    previous: "Previous",
    next: "Next",
    selection: "Selection",
    slide: "Slide",
    panelDescription:
      "A visual selection designed to highlight the precision, elegance and premium identity of the salon.",
    items: [
      {
        id: 1,
        image: "/gallery/1.JPG",
        title: "Signature cut",
        category: "Barbe Blanche",
      },
      {
        id: 2,
        image: "/gallery/2.JPG",
        title: "Modern fade",
        category: "Premium salon",
      },
      {
        id: 3,
        image: "/gallery/3.JPG",
        title: "Precise finish",
        category: "Style & detail",
      },
      {
        id: 4,
        image: "/gallery/4.JPG",
        title: "Elegant look",
        category: "Men’s haircut",
      },
      {
        id: 5,
        image: "/gallery/Barbe Blanche-14.JPG",
        title: "Sculpted beard",
        category: "Beard",
      },
      {
        id: 6,
        image: "/gallery/Barbe Blanche-41.JPG",
        title: "Natural texture",
        category: "Signature",
      },
      {
        id: 7,
        image: "/gallery/10.JPG",
        title: "Clean cut",
        category: "Montreal",
      },
      {
        id: 8,
        image: "/gallery/Barbe Blanche-74.JPG",
        title: "Classic style",
        category: "Premium",
      },
      {
        id: 9,
        image: "/gallery/Barbe Blanche-75.JPG",
        title: "Urban look",
        category: "Studio",
      },
      {
        id: 10,
        image: "/gallery/Barbe Blanche-76.JPG",
        title: "Sharp contour",
        category: "Cut & beard",
      },
      {
        id: 11,
        image: "/gallery/Barbe Blanche-77.JPG",
        title: "Smooth fade",
        category: "Fade",
      },
      {
        id: 12,
        image: "/gallery/Barbe Blanche-46.JPG",
        title: "Refined style",
        category: "Barber art",
      },
      {
        id: 13,
        image: "/gallery/Barbe Blanche-78.JPG",
        title: "Premium profile",
        category: "Luxury cut",
      },
      {
        id: 14,
        image: "/gallery/Barbe Blanche-79.JPG",
        title: "Modern expression",
        category: "Editorial",
      },
      {
        id: 15,
        image: "/gallery/Barbe Blanche-86.JPG",
        title: "Structured cut",
        category: "Barbe Blanche",
      },
      {
        id: 16,
        image: "/gallery/Barbe Blanche-87.JPG",
        title: "Salon atmosphere",
        category: "Interior",
      },
      {
        id: 17,
        image: "/gallery/Barbe Blanche-88.JPG",
        title: "Premium ambiance",
        category: "Atmosphere",
      },
      {
        id: 18,
        image: "/gallery/Barbe Blanche-89.JPG",
        title: "Detail & texture",
        category: "Design",
      },
      {
        id: 19,
        image: "/gallery/Barbe Blanche-91.JPG",
        title: "Refined cut",
        category: "Premium cut",
      },
      {
        id: 20,
        image: "/gallery/Barbe Blanche-92.JPG",
        title: "Precise line",
        category: "Sharp look",
      },
      {
        id: 21,
        image: "/gallery/Barbe Blanche-93.JPG",
        title: "Distinctive style",
        category: "Modern barber",
      },
    ] satisfies PortfolioItem[],
  },
} as const;

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
      aria-hidden="true"
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
  const { language } = useLanguage();

  const content = portfolioContent[language];
  const portfolioItems = content.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeItem = useMemo(
    () => portfolioItems[activeIndex],
    [activeIndex, portfolioItems]
  );

  const total = portfolioItems.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [total, isPaused]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      goNext();
    } else if (distance < -50) {
      goPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="portfolio"
      className="bg-[var(--page)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="rounded-[28px] bg-black p-3 shadow-[0_18px_70px_rgba(0,0,0,0.14)] sm:rounded-[34px] sm:p-5 lg:p-6">
          <div className="overflow-hidden rounded-[24px] bg-black lg:grid lg:grid-cols-[1.18fr_0.44fr] lg:rounded-[30px]">
            {/* IMAGE SIDE */}
            <div
              className="group relative min-h-[620px] sm:min-h-[720px] lg:min-h-[760px] xl:min-h-[820px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                className="absolute inset-0 h-full w-full scale-[1.01] object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/28" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/36 via-transparent to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/12" />

              {/* Small label */}
              <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-8 lg:left-10 lg:top-10">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur-md sm:px-4 sm:py-2 sm:text-[12px]">
                  {content.smallLabel}
                </span>
              </div>

              {/* Title */}
              <div className="absolute left-5 top-20 z-20 sm:left-8 sm:top-24 lg:left-10 lg:top-24 xl:left-12">
                <h2 className="text-[54px] font-[900] leading-[0.86] tracking-[-0.085em] text-white sm:text-[78px] md:text-[92px] lg:text-[108px] xl:text-[126px]">
                  {content.titleTop}
                </h2>

                <div className="-mt-2 text-[52px] font-serif italic leading-[0.84] tracking-[-0.06em] text-white sm:text-[72px] md:text-[82px] lg:text-[94px] xl:text-[106px]">
                  {content.titleBottom}
                </div>
              </div>

              {/* Desktop controls */}
              <div className="absolute bottom-8 left-5 right-5 z-20 hidden sm:block lg:left-10 lg:right-10 lg:bottom-10 xl:left-12 xl:right-12">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-black/50">
                      {activeItem.category}
                    </span>

                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-md transition duration-300 hover:bg-black/50">
                      {activeItem.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 active:scale-95"
                      aria-label={content.previous}
                    >
                      <ArrowLeftIcon />
                    </button>

                    <div className="min-w-[96px] text-center text-[28px] font-medium tracking-[-0.05em] text-white sm:text-[30px]">
                      {String(activeIndex + 1).padStart(2, "0")}
                      <span className="text-white/55">
                        {" "}
                        / {String(total).padStart(2, "0")}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white/95 active:scale-95"
                    >
                      <span>{content.viewPortfolio}</span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white transition duration-300 group-hover:translate-x-1 group-hover:scale-105">
                        <ArrowRightIcon />
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 active:scale-95"
                      aria-label={content.next}
                    >
                      <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile bottom UI */}
              <div className="absolute bottom-5 left-4 right-4 z-20 sm:hidden">
                <div className="rounded-[28px] border border-white/10 bg-black/48 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                  <div className="mb-4 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white">
                      {activeItem.category}
                    </span>

                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white/95">
                      {activeItem.title}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:bg-white/10 active:scale-95"
                        aria-label={content.previous}
                      >
                        <ArrowLeftIcon />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 hover:bg-white/10 active:scale-95"
                        aria-label={content.next}
                      >
                        <ArrowRightIcon />
                      </button>
                    </div>

                    <div className="text-[20px] font-semibold tracking-[-0.05em] text-white">
                      {String(activeIndex + 1).padStart(2, "0")}
                      <span className="text-white/50">
                        {" "}
                        / {String(total).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="group mt-4 inline-flex w-full items-center justify-between rounded-full bg-white px-5 py-3.5 text-[15px] font-semibold text-black shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition duration-300 hover:bg-white/95 active:scale-[0.99]"
                  >
                    <span>{content.viewPortfolio}</span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white transition duration-300 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT DARK PANEL */}
            <div className="hidden bg-[#02040a] lg:flex lg:flex-col lg:justify-between">
              <div className="border-l border-white/6 px-8 py-10 xl:px-10 xl:py-12">
                <div className="max-w-[260px]">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-white/35">
                    {content.selection}
                  </p>

                  <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.04em] text-white">
                    {activeItem.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.8] text-white/52">
                    {content.panelDescription}
                  </p>
                </div>
              </div>

              <div className="border-l border-t border-white/6 px-8 py-8 xl:px-10">
                <div className="mb-5 h-[2px] w-full overflow-hidden rounded-full bg-white/6">
                  <div
                    className="h-full rounded-full bg-white/70 transition-all duration-500"
                    style={{
                      width: `${((activeIndex + 1) / total) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-[13px] uppercase tracking-[0.22em] text-white/38">
                    {content.slide}
                  </div>

                  <div className="text-[16px] font-medium tracking-[-0.04em] text-white/74">
                    {String(activeIndex + 1).padStart(2, "0")} —{" "}
                    {String(total).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile progress */}
          <div className="mt-4 sm:hidden">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-black transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / total) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}