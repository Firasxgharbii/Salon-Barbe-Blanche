"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const IMAGES = [
  "/gallery/Barbe Blanche-89.JPG",    
  "/gallery/Barbe Blanche-86.JPG",  
  "/gallery/Barbe Blanche-1.JPG",
  "/gallery/Barbe Blanche-4.JPG",
  "/gallery/Barbe Blanche-5.JPG",
  "/gallery/Barbe Blanche-19.JPG",
  "/gallery/Barbe Blanche-21.JPG",
  "/gallery/Barbe Blanche-22.JPG",
  "/gallery/Barbe Blanche-33.JPG",
  "/gallery/Barbe Blanche-46.JPG",
  "/gallery/Barbe Blanche-49.JPG",
  "/gallery/Barbe Blanche-50.JPG",
  "/gallery/Barbe Blanche-95.JPG",
  "/gallery/Barbe Blanche-96.JPG",
  "/gallery/Barbe Blanche-97.JPG",
  "/gallery/Barbe Blanche-99.JPG",

];

export default function GallerySection() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [inView, setInView] = useState(false);
  const [visibleAnim, setVisibleAnim] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ Observer: animation tourne seulement quand la section est visible
  useEffect(() => {
    if (!wrapRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);

        // petit effet d’entrée (une fois)
        if (entry.isIntersecting) setVisibleAnim(true);
      },
      { threshold: 0.25 }
    );

    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  // ✅ avance automatique 1 par 1 (quand visible + pas pause)
  useEffect(() => {
    if (!inView) return;
    if (paused) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 700); // ✅ PLUS RAPIDE (mets 600 si tu veux encore plus)

    return () => window.clearInterval(id);
  }, [inView, paused]);

  // ✅ scroll HORIZONTAL uniquement (ne touche PAS au scroll vertical)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const el = itemRefs.current[index];
    if (!scroller || !el) return;

    scroller.scrollTo({
      left: el.offsetLeft,
      behavior: "smooth",
    });
  }, [index]);

  const LOOP = useMemo(() => IMAGES, []);

  return (
    <section id="gallery" className="bg-page">
      <div
        ref={wrapRef}
        className="w-full px-6 md:px-10 lg:px-14 py-14 md:py-20"
      >
        <div
          className={[
            "relative overflow-hidden",
            visibleAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            "transition-all duration-700 ease-out",
          ].join(" ")}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ✅ fade premium sur les côtés */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[var(--page)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[var(--page)] to-transparent z-10" />

          {/* ✅ scroller horizontal */}
          <div
            ref={scrollerRef}
            className={[
              "flex gap-6 md:gap-8 overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory",
              "no-scrollbar",
              "pb-2",
            ].join(" ")}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {LOOP.map((src, i) => (
              <div
                key={`${src}-${i}`}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={[
                  "relative overflow-hidden rounded-3xl shrink-0 snap-start",
                  "w-[78vw] sm:w-[55vw] md:w-[360px] lg:w-[380px]",
                  "h-[420px] sm:h-[520px] md:h-[540px] lg:h-[560px]",
                  "bg-black/5",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  sizes="(min-width:1024px) 380px, (min-width:768px) 360px, 78vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-xs opacity-60 tracking-[0.18em] uppercase">
          Galerie — automatique (pause au survol)
        </div>
      </div>
    </section>
  );
}
