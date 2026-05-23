"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/78tpzxlw4jqmo4/location/LK9EBBZT64PRB/services";

type ServiceItem = {
  title: string;
  description: string;
  jr: string;
  sr: string;
};

const servicesContent = {
  fr: {
    imageAlt: "Service barbier Salon Barbe Blanche",
    bookNow: "Réserver",
    juniorLabel: "JR",
    seniorLabel: "SR",
    services: [
      {
        title: "Coupe homme",
        description:
          "Une coupe personnalisée, pensée selon votre style, la forme de votre visage et vos préférences. Le lavage des cheveux est disponible sur demande.",
        jr: "34.78 $",
        sr: "39.14 $",
      },
      {
        title: "Coupe & barbe",
        description:
          "Un service complet qui combine une coupe soignée et une barbe travaillée avec précision pour un résultat propre, harmonieux et élégant.",
        jr: "39.14 $",
        sr: "43.49 $",
      },
      {
        title: "Coupe à la tondeuse",
        description:
          "Une coupe réalisée entièrement à la tondeuse, idéale pour les coupes courtes, les buzz cuts ou les styles uniformes.",
        jr: "30.43 $",
        sr: "34.79 $",
      },
      {
        title: "Taille de barbe",
        description:
          "Mise en forme, nettoyage et finition de la barbe avec consultation pour un résultat adapté à votre visage.",
        jr: "21.74 $",
        sr: "26.09 $",
      },
      {
        title: "Coupe enfant",
        description:
          "Une coupe simple, propre et adaptée aux enfants de 13 ans et moins, dans une ambiance confortable.",
        jr: "30.43 $",
        sr: "34.79 $",
      },
    ] satisfies ServiceItem[],
  },

  en: {
    imageAlt: "Salon Barbe Blanche barber service",
    bookNow: "Book now",
    juniorLabel: "JR",
    seniorLabel: "SR",
    services: [
      {
        title: "Haircut",
        description:
          "A tailored haircut designed around your style, face shape and personal preferences. A hair wash is available upon request.",
        jr: "$34.78",
        sr: "$39.14",
      },
      {
        title: "Hair & Beard",
        description:
          "A complete service combining a clean haircut and detailed beard grooming for a sharp, balanced and elegant result.",
        jr: "$39.14",
        sr: "$43.49",
      },
      {
        title: "Clipper Cut",
        description:
          "A haircut done entirely with clippers, ideal for short styles, buzz cuts or clean uniform-length trims.",
        jr: "$30.43",
        sr: "$34.79",
      },
      {
        title: "Beard Trim",
        description:
          "Professional beard shaping, trimming and clean-up with a consultation to match your face and style.",
        jr: "$21.74",
        sr: "$26.09",
      },
      {
        title: "Kids Haircut",
        description:
          "A clean, simple and age-appropriate haircut for children 13 and under in a comfortable atmosphere.",
        jr: "$30.43",
        sr: "$34.79",
      },
    ] satisfies ServiceItem[],
  },
} as const;

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = servicesContent[language];

  return (
    <section
      id="services"
      className="w-full bg-page px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-2">
        {/* Left image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none bg-black/5">
          <Image
            src="/service-man.jpg"
            alt={content.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>

        {/* Services list */}
        <div className="w-full">
          {content.services.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              description={service.description}
              jr={service.jr}
              sr={service.sr}
              bookNow={content.bookNow}
              juniorLabel={content.juniorLabel}
              seniorLabel={content.seniorLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== SERVICE ITEM ===================== */

function Service({
  title,
  description,
  jr,
  sr,
  bookNow,
  juniorLabel,
  seniorLabel,
}: {
  title: string;
  description: string;
  jr: string;
  sr: string;
  bookNow: string;
  juniorLabel: string;
  seniorLabel: string;
}) {
  return (
    <div className="border-t border-ink/40 py-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="mb-2 font-serif text-xl">{title}</h3>

          <p className="max-w-xl text-sm leading-relaxed opacity-80">
            {description}
          </p>

          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex border border-ink px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition hover:bg-ink hover:text-page"
          >
            {bookNow}
          </a>
        </div>

        <div className="whitespace-nowrap text-right text-sm">
          <div className="mb-1">
            {juniorLabel} {jr}
          </div>

          <div>
            {seniorLabel} {sr}
          </div>
        </div>
      </div>
    </div>
  );
}