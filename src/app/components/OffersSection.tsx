"use client";

import React, { useMemo, useState } from "react";

type OfferItem = {
  id: number;
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  price: string;
  image: string;
};

const offers: OfferItem[] = [
  {
    id: 1,
    number: "01",
    label: "Coiffure",
    title: "Coiffure",
    description:
      "Notre pain et notre beurre. Des coupes nettes, des dégradés précis et une attention au détail qui transforme une coupe de cheveux en une vraie expérience. C'est l'art de vous faire paraître bien et de vous faire sentir encore mieux.",
    items: [
      "Coupe de cheveux",
      "Coupe de cheveux + barbe",
      "Coupe de barbe",
      "Coupe de cheveux à la ciseaux complète",
      "Coupe de cheveux complète avec barbe",
      "Service complet",
      "Coupe de cheveux pour enfant",
    ],
    price: "Prix varient entre 30 $ et 75 $",
    image: "/gallery/Karim.jpeg",
  },
  {
    id: 2,
    number: "02",
    label: "Barbe & finition",
    title: "Barbe & finition",
    description:
      "Une barbe propre, dessinée avec précision et adaptée à votre visage. Nous travaillons les contours, le volume et la finition pour un résultat net, élégant et durable.",
    items: [
      "Taille de barbe",
      "Contours précis",
      "Rasage de finition",
      "Barbe + serviette chaude",
      "Finition premium",
    ],
    price: "Prix varient entre 20 $ et 45 $",
    image: "/gallery/3.jpg",
  },
  {
    id: 3,
    number: "03",
    label: "Soin & expérience",
    title: "Soin & expérience",
    description:
      "Au-delà de la coupe, nous créons une ambiance. Des soins, une attention haut de gamme et une expérience salon qui vous laisse avec une sensation de confiance et de fraîcheur.",
    items: [
      "Service premium",
      "Conseils de style",
      "Retouches",
      "Soins cheveux et barbe",
      "Expérience signature",
    ],
    price: "Prix varient selon le service",
    image: "/gallery/16.jpeg",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

function PriceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M13.9 8.7c-.4-.4-1.1-.7-1.9-.7-1.4 0-2.3.7-2.3 1.8 0 1 .7 1.5 2.2 1.9 1.6.4 2.4.9 2.4 2.1 0 1.3-1.1 2.1-2.7 2.1-.9 0-1.8-.3-2.5-.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 6.9V17.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OffersSection() {
  const [activeId, setActiveId] = useState(offers[0].id);

  const activeOffer = useMemo(
    () => offers.find((offer) => offer.id === activeId) ?? offers[0],
    [activeId]
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[220px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,196,87,0.45)_0%,_rgba(255,196,87,0.14)_35%,_transparent_72%)] blur-2xl" />

      <div className="mx-auto max-w-[1450px]">
        {/* top header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <div className="pt-3">
            <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[#8f955c]">
              <span>✦</span>
              <span>Ce que nous offrons</span>
            </div>
          </div>

          <div>
            <h2 className="text-[54px] leading-[0.92] tracking-[-0.06em] text-black sm:text-[78px] md:text-[96px] lg:text-[110px]">
              <span className="font-[800]">Tous nos</span>{" "}
              <span className='font-["var(--font-serif)"] italic font-medium text-[#ff5b68]'>
                Offres
              </span>
            </h2>
          </div>
        </div>

        {/* main content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.62fr] lg:gap-16">
          {/* LEFT MENU */}
          <div className="pt-2">
            <div className="space-y-0">
              {offers.map((offer, index) => {
                const isActive = offer.id === activeId;

                return (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={() => setActiveId(offer.id)}
                    className="block w-full text-left"
                  >
                    <div
                      className={[
                        "flex items-center gap-2 py-7 text-[24px] tracking-[-0.04em] transition",
                        isActive
                          ? "text-black"
                          : "text-black/38 hover:text-black/65",
                      ].join(" ")}
                    >
                      <span className={isActive ? "font-medium" : "font-normal"}>
                        ({offer.number})
                      </span>
                      <span className={isActive ? "font-medium" : "font-normal"}>
                        {offer.label}
                      </span>
                    </div>

                    {index !== offers.length && (
                      <div className="h-px w-full bg-black/18" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition hover:bg-white/90"
              >
                <span>Venez vous sentir chez vous</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5b68] text-white transition group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[26px] bg-[#f5f3f1] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              {/* TEXT */}
              <div className="rounded-[22px] bg-[#f5f3f1] px-4 py-5 sm:px-6 sm:py-6 lg:px-6 lg:py-6">
                <h3 className="text-[36px] leading-none tracking-[-0.04em] text-[#f08a4b] sm:text-[44px]">
                  {activeOffer.title}
                </h3>

                <p className="mt-6 max-w-[620px] text-[17px] leading-[1.4] text-black/72 sm:text-[18px]">
                  {activeOffer.description}
                </p>

                <ul className="mt-8 space-y-3 text-[18px] leading-[1.35] text-black/78">
                  {activeOffer.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[2px] text-black/75">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 inline-flex items-center gap-2 text-[17px] font-medium text-[#909657]">
                  <PriceIcon />
                  <span>{activeOffer.price}</span>
                </div>
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={activeOffer.image}
                  alt={activeOffer.title}
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}