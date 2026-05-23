"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const miniGallery = [
  "/gallery/Barbe Blanche-1.JPG",
  "/gallery/Barbe Blanche-50.JPG",
  "/gallery/Barbe Blanche-77.JPG",
  "/gallery/Barbe Blanche-78.JPG",
  "/gallery/Barbe Blanche-14.JPG",
  "/gallery/logo.JPG",
];

export default function ArtExecutionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[28%] top-[22%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(120,120,110,0.20)_0%,_rgba(170,160,145,0.14)_38%,_transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1650px]">
        {/* Top labels */}
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="text-[14px] font-medium text-[#6f6f68]">
            {t.art.labelLeft}
          </div>

          <div className="text-right text-[14px] font-medium text-[#6f6f68]">
            {t.art.labelRight}
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:items-end">
          {/* Left title */}
          <div>
            <div className="font-serif text-[82px] font-[700] leading-[0.86] tracking-[-0.06em] text-[#2f3335] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
              {t.art.titleLeft}
            </div>

            <div className="mt-8 font-serif text-[42px] font-[600] tracking-[-0.04em] text-[#3d4143] sm:text-[58px] md:text-[72px]">
              {t.art.year}
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="relative">
              <div className="pointer-events-none absolute left-[-0.22em] top-[-0.24em] font-serif text-[90px] font-[500] italic leading-none text-[#9a958f]/70 sm:text-[130px] md:text-[170px] lg:text-[210px] xl:text-[250px]">
                &
              </div>

              <div className="relative pl-8 sm:pl-16 md:pl-20">
                <div className="font-serif text-[76px] font-[700] leading-[0.9] tracking-[-0.055em] text-[#2f3335] sm:text-[110px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
                  {t.art.titleRight}
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-[860px] text-[20px] leading-[1.45] tracking-[-0.02em] text-[#3f4345]/75 sm:text-[24px]">
              {t.art.description}
            </p>

            <div className="mt-8 text-[15px] font-medium text-[#6f6f68]">
              {t.art.labelBottom}
            </div>

            {/* Mini gallery */}
            <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
              {miniGallery.map((image, index) => (
                <div
                  key={image}
                  className="group overflow-hidden rounded-[18px] bg-white/45 shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                >
                  <img
                    src={image}
                    alt={`Salon Barbe Blanche ${index + 1}`}
                    className="h-[92px] w-[92px] object-cover transition duration-500 group-hover:scale-[1.06] sm:h-[120px] sm:w-[120px] md:h-[132px] md:w-[132px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}