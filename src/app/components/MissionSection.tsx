"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function AnimatedWordLine({
  text,
  isVisible,
  startDelay = 0,
  step = 0.08,
  className = "",
  specialWords = [],
}: {
  text: string;
  isVisible: boolean;
  startDelay?: number;
  step?: number;
  className?: string;
  specialWords?: string[];
}) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, "");
        const isSpecial = specialWords.includes(cleanWord);

        return (
          <span
            key={`${word}-${index}`}
            className="mr-[0.18em] inline-block overflow-hidden align-bottom"
          >
            <span
              className={[
                "inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-[120%] opacity-0 blur-[8px]",
                isSpecial ? "font-display italic font-medium" : "",
              ].join(" ")}
              style={{
                transitionDelay: isVisible
                  ? `${startDelay + index * step}s`
                  : `${(words.length - index - 1) * 0.02}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function GoogleBadge({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={[
        "mx-auto flex w-full max-w-[420px] items-center gap-3 rounded-[20px] bg-white/75 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-4 sm:px-5",
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-[0.96]",
      ].join(" ")}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] sm:h-14 sm:w-14">
        <span className="text-[28px] font-bold leading-none text-[#4285F4] sm:text-[30px]">
          G
        </span>
      </div>

      <div className="min-w-0 text-left">
        <div className="text-[16px] tracking-[0.1em] text-[#ffb400] sm:text-[20px]">
          ★★★★★
        </div>
        <div className="text-[16px] font-semibold text-[#2e2e2e] sm:text-[18px]">
          5/5{" "}
          <span className="font-normal text-[#2e2e2e]/70">
            Basé sur 210 avis 
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MissionSection() {
  const section = useInView<HTMLDivElement>(0.16);
  const rating = useInView<HTMLDivElement>(0.22);
  const image = useInView<HTMLDivElement>(0.22);

  const line1 = "Chez Barbe Blanche, chaque";
const line2 = "coupe est pensée comme une";
const line3 = "expérience sur mesure. Un lieu où";
const line4 = "la précision, le style et la confiance";
const line5 = "se rencontrent.";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_rgba(255,211,107,0.34)_0%,_rgba(255,166,120,0.22)_35%,_rgba(255,119,119,0.15)_55%,_transparent_75%)] blur-2xl sm:h-[380px] sm:w-[380px] lg:right-[8%] lg:top-[12%] lg:h-[560px] lg:w-[560px]" />
      </div>

      <div ref={section.ref} className="relative mx-auto max-w-[1560px]">
        {/* top labels */}
        <div
          className={[
            "mb-10 grid grid-cols-1 gap-3 text-[13px] font-medium transition-all duration-700 ease-out sm:mb-14 sm:grid-cols-3 sm:gap-6 sm:text-[14px]",
            section.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          <div className="text-left text-[#f08a4b]">✦ Qui sommes-nous ?</div>
          <div className="text-left text-[#ff5b68] sm:text-center">
            SALON BARBE BLANCHE © 2026
          </div>
          <div className="text-left text-[#f08a4b] sm:text-right">
            3733 R. Notre Dame O, Montréal
          </div>
        </div>

        {/* text */}
        <div className="mx-auto max-w-[1350px] text-center text-[#2e2e2e]">
          <h2 className="font-sans-modern text-[40px] font-[700] leading-[1.02] tracking-[-0.06em] sm:text-[56px] md:text-[74px] lg:text-[92px] xl:text-[104px]">
            <AnimatedWordLine
              text={line1}
              isVisible={section.isVisible}
              startDelay={0}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={line2}
              isVisible={section.isVisible}
              startDelay={0.42}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={line3}
              isVisible={section.isVisible}
              startDelay={0.9}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={line4}
              isVisible={section.isVisible}
              startDelay={1.35}
              step={0.085}
              specialWords={["personnalité", "connexions"]}
              className="mb-[0.06em] text-[34px] leading-[1.04] tracking-[-0.04em] sm:text-[46px] md:text-[58px] lg:text-[74px] xl:text-[82px]"
            />

            <AnimatedWordLine
              text={line5}
              isVisible={section.isVisible}
              startDelay={1.9}
              step={0.085}
              className="text-[34px] leading-[1.04] tracking-[-0.04em] sm:text-[46px] md:text-[58px] lg:text-[74px] xl:text-[82px]"
            />
          </h2>

          {/* google */}
          <div ref={rating.ref} className="mt-10 flex justify-center sm:mt-12">
            <GoogleBadge isVisible={rating.isVisible} />
          </div>

          {/* image */}
          <div
            ref={image.ref}
            className={[
              "mx-auto mt-10 max-w-[860px] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-14",
              image.isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-14 opacity-0",
            ].join(" ")}
          >
            <div className="overflow-hidden rounded-[24px] border border-white/50 bg-white/25 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:rounded-[30px] sm:p-3">
              <img
                src="/gallery/logo.JPG"
                alt="Salon Barbe Blanche"
                className="h-[240px] w-full rounded-[18px] object-cover transition duration-700 hover:scale-[1.02] sm:h-[360px] sm:rounded-[24px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}