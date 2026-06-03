"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const IMAGES = [
  
  "/gallery/Barbe Blanche-86.JPG",
  
  "/gallery/Barbe Blanche-4.JPG",
  "/gallery/Barbe Blanche-89.JPG",
  "/gallery/Barbe Blanche-5.JPG",
  
  "/gallery/Barbe Blanche-19.JPG",
  "/gallery/Barbe Blanche-21.JPG",
  "/gallery/Barbe Blanche-46.JPG",
  
  "/gallery/Barbe Blanche-50.JPG",
  "/gallery/Barbe Blanche-97.JPG",
  "/gallery/Barbe Blanche-99.JPG",
];

const galleryContent = {
  fr: {
    label: "Galerie",
    note: "Défilement automatique — pause au survol",
    imageAlt: "Galerie Salon Barbe Blanche",
  },
  en: {
    label: "Gallery",
    note: "Automatic scrolling — pause on hover",
    imageAlt: "Salon Barbe Blanche gallery",
  },
} as const;

export default function GallerySection() {
  const { language } = useLanguage();

  const content = galleryContent[language];

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [inView, setInView] = useState(false);
  const [visibleAnim, setVisibleAnim] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const loopImages = useMemo(() => IMAGES, []);

  useEffect(() => {
    if (!wrapRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          setVisibleAnim(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(wrapRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;

    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % IMAGES.length);
    }, 700);

    return () => window.clearInterval(intervalId);
  }, [inView, paused]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const activeElement = itemRefs.current[index];

    if (!scroller || !activeElement) return;

    scroller.scrollTo({
      left: activeElement.offsetLeft,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section id="gallery" className="bg-page">
      <div
        ref={wrapRef}
        className="w-full px-6 py-14 md:px-10 md:py-20 lg:px-14"
      >
        <div
          className={[
            "relative overflow-hidden",
            visibleAnim
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
            "transition-all duration-700 ease-out",
          ].join(" ")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--page)] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--page)] to-transparent md:w-24" />

          {/* Horizontal scroller */}
          <div
            ref={scrollerRef}
            className={[
              "flex gap-6 overflow-x-auto scroll-smooth md:gap-8",
              "snap-x snap-mandatory",
              "no-scrollbar",
              "pb-2",
            ].join(" ")}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {loopImages.map((src, imageIndex) => (
              <div
                key={`${src}-${imageIndex}`}
                ref={(element) => {
                  itemRefs.current[imageIndex] = element;
                }}
                className={[
                  "relative shrink-0 snap-start overflow-hidden rounded-3xl",
                  "w-[78vw] sm:w-[55vw] md:w-[360px] lg:w-[380px]",
                  "h-[420px] sm:h-[520px] md:h-[540px] lg:h-[560px]",
                  "bg-black/5",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt={`${content.imageAlt} ${imageIndex + 1}`}
                  fill
                  sizes="(min-width:1024px) 380px, (min-width:768px) 360px, 78vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/0 transition hover:bg-black/10" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-xs uppercase tracking-[0.18em] opacity-60">
          {content.label} — {content.note}
        </div>
      </div>
    </section>
  );
}