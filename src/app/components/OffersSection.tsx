"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type OfferItem = {
  id: number;
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  price: string;
  image: string;
  image2?: string;
};

const offersContent = {
  fr: {
    eyebrow: "Ce que nous offrons",
    titleFirst: "Nos services",
    titleAccent: "signature",
    cta: "Réserver votre moment",
    secondImageAlt: "image secondaire",
    offers: [
      {
        id: 1,
        number: "01",
        label: "Coupe",
        title: "Coupe homme",
        description:
          "Une coupe nette, moderne et adaptée à votre style. Chaque détail est travaillé avec précision, du dégradé jusqu’à la finition, pour un résultat propre, élégant et facile à porter au quotidien.",
        items: [
          "Coupe de cheveux",
          "Dégradé précis",
          "Coupe aux ciseaux",
          "Coupe de cheveux pour enfant",
          "Conseils personnalisés selon votre style",
        ],
        price: "Prix entre 30 $ et 45 $",
        image: "/gallery/1.JPG",
      },
      {
        id: 2,
        number: "02",
        label: "Barbe",
        title: "Barbe & finition",
        description:
          "Une barbe bien dessinée change toute l’allure. Nous travaillons les contours, le volume et la ligne avec soin pour créer une finition propre, masculine et parfaitement adaptée à votre visage.",
        items: [
          "Taille de barbe",
          "Contours précis",
          "Rasage de finition",
          "Barbe avec serviette chaude",
          "Finition premium",
        ],
        price: "Prix entre 20 $ et 45 $",
        image: "/gallery/14.jpeg",
      },
      {
        id: 3,
        number: "03",
        label: "Expérience",
        title: "Service complet",
        description:
          "Une expérience complète pour ceux qui veulent repartir avec une allure fraîche, soignée et confiante. Coupe, barbe, finition et conseils : tout est pensé pour offrir un moment confortable et premium.",
        items: [
          "Coupe de cheveux + barbe",
          "Service complet",
          "Conseils de style",
          "Retouches et finition",
          "Expérience signature Barbe Blanche",
        ],
        price: "Prix entre 55 $ et 75 $",
        image: "/gallery/Barbe Blanche-49.JPG",
        image2: "/gallery/Barbe Blanche-33.JPG",
      },
    ] satisfies OfferItem[],
  },

  en: {
    eyebrow: "What we offer",
    titleFirst: "Our signature",
    titleAccent: "services",
    cta: "Book your moment",
    secondImageAlt: "secondary image",
    offers: [
      {
        id: 1,
        number: "01",
        label: "Haircut",
        title: "Men’s haircut",
        description:
          "A clean, modern haircut tailored to your style. Every detail is shaped with precision, from the fade to the final finish, for a sharp, elegant look that is easy to wear every day.",
        items: [
          "Haircut",
          "Precise fade",
          "Scissor cut",
          "Kids haircut",
          "Personalized style advice",
        ],
        price: "Prices from $30 to $45",
        image: "/gallery/1.JPG",
      },
      {
        id: 2,
        number: "02",
        label: "Beard",
        title: "Beard & finish",
        description:
          "A well-shaped beard changes the whole look. We work on the lines, volume and contours with care to create a clean, masculine finish perfectly adapted to your face.",
        items: [
          "Beard trim",
          "Precise contours",
          "Final shave",
          "Beard with hot towel",
          "Premium finish",
        ],
        price: "Prices from $20 to $45",
        image: "/gallery/14.jpeg",
      },
      {
        id: 3,
        number: "03",
        label: "Experience",
        title: "Full service",
        description:
          "A complete experience for those who want to leave with a fresh, refined and confident look. Haircut, beard, finishing and advice: everything is designed to offer a comfortable premium moment.",
        items: [
          "Haircut + beard",
          "Full service",
          "Style advice",
          "Touch-ups and finishing",
          "Barbe Blanche signature experience",
        ],
        price: "Prices from $55 to $75",
        image: "/gallery/Barbe Blanche-49.JPG",
        image2: "/gallery/Barbe Blanche-33.JPG",
      },
    ] satisfies OfferItem[],
  },
} as const;

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
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

function PriceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
  const { language } = useLanguage();

  const content = offersContent[language];
  const offers = content.offers;

  const [activeId, setActiveId] = useState(offers[0].id);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const activeOffer = useMemo(
    () => offers.find((offer) => offer.id === activeId) ?? offers[0],
    [activeId, offers]
  );

  useEffect(() => {
    setActiveId(offers[0].id);
  }, [language, offers]);

  useEffect(() => {
    if (activeOffer.id !== 3 || !activeOffer.image2) {
      setShowSecondImage(false);
      return;
    }

    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeOffer.id, activeOffer.image2]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#ece9e6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      {/* Premium glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[220px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(155,107,61,0.32)_0%,_rgba(155,107,61,0.12)_35%,_transparent_72%)] blur-2xl" />

      <div className="mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
          <div className="pt-3">
            <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6f6f68]">
              <span>✦</span>
              <span>{content.eyebrow}</span>
            </div>
          </div>

          <div>
            <h2 className="text-[54px] leading-[0.92] tracking-[-0.06em] text-[#2f3335] sm:text-[78px] md:text-[96px] lg:text-[110px]">
              <span className="font-[800]">{content.titleFirst}</span>{" "}
              <span className="font-serif italic font-medium text-[#9b6b3d]">
                {content.titleAccent}
              </span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.88fr_1.62fr] lg:gap-16">
          {/* Left tabs */}
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
                          ? "text-[#2f3335]"
                          : "text-[#2f3335]/38 hover:text-[#2f3335]/70",
                      ].join(" ")}
                    >
                      <span className={isActive ? "font-medium" : "font-normal"}>
                        ({offer.number})
                      </span>

                      <span className={isActive ? "font-medium" : "font-normal"}>
                        {offer.label}
                      </span>
                    </div>

                    {index !== offers.length - 1 && (
                      <div className="h-px w-full bg-black/18" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#2f3335] shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition hover:bg-white/90"
              >
                <span>{content.cta}</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9b6b3d] text-white transition group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>
          </div>

          {/* Service card */}
          <div className="rounded-[26px] bg-[#f5f3f1] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-5 lg:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[22px] bg-[#f5f3f1] px-4 py-5 sm:px-6 sm:py-6 lg:px-6 lg:py-6">
                <h3 className="text-[36px] leading-none tracking-[-0.04em] text-[#9b6b3d] sm:text-[44px]">
                  {activeOffer.title}
                </h3>

                <p className="mt-6 max-w-[620px] text-[17px] leading-[1.45] text-[#2f3335]/72 sm:text-[18px]">
                  {activeOffer.description}
                </p>

                <ul className="mt-8 space-y-3 text-[18px] leading-[1.35] text-[#2f3335]/78">
                  {activeOffer.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[2px] text-[#9b6b3d]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 inline-flex items-center gap-2 text-[17px] font-medium text-[#6f6f68]">
                  <PriceIcon />
                  <span>{activeOffer.price}</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[20px]">
                <div className="relative h-full min-h-[420px] w-full">
                  {activeOffer.id === 3 && activeOffer.image2 ? (
                    <>
                      <img
                        src={activeOffer.image}
                        alt={activeOffer.title}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                          showSecondImage ? "opacity-0" : "opacity-100"
                        }`}
                      />

                      <img
                        src={activeOffer.image2}
                        alt={`${activeOffer.title} ${content.secondImageAlt}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                          showSecondImage ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </>
                  ) : (
                    <img
                      src={activeOffer.image}
                      alt={activeOffer.title}
                      className="h-full min-h-[420px] w-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}