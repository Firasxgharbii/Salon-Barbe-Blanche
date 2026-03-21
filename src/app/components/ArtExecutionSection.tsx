"use client";

import React from "react";

const miniGallery = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function ArtExecutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[28%] top-[22%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(255,211,107,0.20)_0%,_rgba(255,166,120,0.16)_38%,_transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1650px]">
        {/* top row */}
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="text-[14px] font-medium text-[#f08a4b]">
            ✦ Notre savoir-faire
          </div>

          <div className="text-right text-[14px] font-medium text-[#f08a4b]">
            ✦ Notre portfolio
          </div>
        </div>

        {/* big title area */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-end">
          {/* left */}
          <div>
            <div className="text-[82px] font-[800] leading-[0.86] tracking-[-0.07em] text-[#0d0d0d] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
              L’Art
            </div>

            <div className="mt-8 text-[42px] font-semibold tracking-[-0.05em] text-[#1d1d1d] sm:text-[58px] md:text-[72px]">
              (@2026)
            </div>
          </div>

          {/* right */}
          <div>
            <div className="relative">
              <div className='absolute left-[-0.22em] top-[-0.22em] text-[90px] leading-none text-[#8f8a95] sm:text-[130px] md:text-[170px] lg:text-[210px] xl:text-[250px] font-display italic font-medium pointer-events-none'>
                &
              </div>

              <div className="relative pl-8 sm:pl-16 md:pl-20">
                <div className="text-[76px] font-[800] leading-[0.9] tracking-[-0.06em] text-[#ff5b68] sm:text-[110px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
                  Exécution
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-[860px] text-[20px] leading-[1.35] tracking-[-0.02em] text-black/65 sm:text-[24px]">
              C’est ici que le travail parle de lui-même. Chez Salon Barbe
              Blanche, chaque détail compte : la précision du geste, la finition,
              la coupe adaptée à la personne et l’attention portée à l’ensemble.
              Nous faisons les choses avec soin, pour que vous repartiez avec un
              style net, assumé et élevé.
            </div>

            <div className="mt-8 text-[15px] font-medium text-[#8f955c]">
              ✦ Notre art
            </div>

            {/* mini gallery */}
            <div className="mt-5 flex flex-wrap gap-3 sm:gap-4">
              {miniGallery.map((image, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[18px] bg-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
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