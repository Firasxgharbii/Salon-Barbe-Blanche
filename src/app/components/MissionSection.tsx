"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import PortfolioSection from "./PortfolioSection";

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
}: {
  text: string;
  isVisible: boolean;
  startDelay?: number;
  step?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => {
        return (
          <span
            key={`${word}-${index}`}
            className="mr-[0.18em] inline-block overflow-hidden align-bottom"
          >
            <span
              className={[
                "inline-block font-sans-modern font-[700] not-italic transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-[120%] opacity-0 blur-[8px]",
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

function GoogleBadge({
  isVisible,
  reviewText,
}: {
  isVisible: boolean;
  reviewText: string;
}) {
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
            {reviewText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MissionSection() {
  const { t } = useLanguage();

  const section = useInView<HTMLDivElement>(0.16);
  const rating = useInView<HTMLDivElement>(0.22);
  const portfolio = useInView<HTMLDivElement>(0.16);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[6%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,_rgba(210,180,120,0.30)_0%,_rgba(170,145,115,0.20)_35%,_rgba(120,110,100,0.12)_55%,_transparent_75%)] blur-2xl sm:h-[380px] sm:w-[380px] lg:right-[8%] lg:top-[12%] lg:h-[560px] lg:w-[560px]" />
      </div>

      <div ref={section.ref} className="relative mx-auto max-w-[1560px]">
        {/* Top labels */}
        <div
          className={[
            "mb-10 grid grid-cols-1 gap-3 text-[13px] font-medium transition-all duration-700 ease-out sm:mb-14 sm:grid-cols-3 sm:gap-6 sm:text-[14px]",
            section.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0",
          ].join(" ")}
        >
          <div className="text-left text-[#9b6b3d]">
            {t.mission.labelLeft}
          </div>

          <div className="text-left text-[#6f6f68] sm:text-center">
            {t.mission.labelCenter}
          </div>

          <div className="text-left text-[#9b6b3d] sm:text-right">
            {t.mission.labelRight}
          </div>
        </div>

        {/* Text */}
        <div className="mx-auto max-w-[1350px] text-center text-[#2e2e2e]">
          <h2 className="font-sans-modern text-[40px] font-[700] leading-[1.02] tracking-[-0.06em] sm:text-[56px] md:text-[74px] lg:text-[92px] xl:text-[104px]">
            <AnimatedWordLine
              text={t.mission.line1}
              isVisible={section.isVisible}
              startDelay={0}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={t.mission.line2}
              isVisible={section.isVisible}
              startDelay={0.42}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={t.mission.line3}
              isVisible={section.isVisible}
              startDelay={0.9}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={t.mission.line4}
              isVisible={section.isVisible}
              startDelay={1.35}
              step={0.085}
              className="mb-[0.06em]"
            />

            <AnimatedWordLine
              text={t.mission.line5}
              isVisible={section.isVisible}
              startDelay={1.9}
              step={0.085}
              className="mb-[0.06em]"
            />
          </h2>

          {/* Google badge */}
          <div ref={rating.ref} className="mt-10 flex justify-center sm:mt-12">
            <GoogleBadge
              isVisible={rating.isVisible}
              reviewText={t.mission.reviews}
            />
          </div>
        </div>

        {/* Portfolio */}
        <div
          id="portfolio"
          ref={portfolio.ref}
          className={[
            "mt-14 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-20",
            portfolio.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-14 opacity-0",
          ].join(" ")}
        >
          <PortfolioSection />
        </div>
      </div>
    </section>
  );
}