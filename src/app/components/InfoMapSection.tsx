"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type Props = {
  mapQuery?: string;
};

const infoMapContent = {
  fr: {
    hoursTitle: "Horaires",
    locationTitle: "Adresse",
    reachTitle: "Nous contacter",
    monday: "Lundi : 12h à 18h",
    tuesdayFriday: "Mardi au vendredi : 10h à 19h",
    saturday: "Samedi : 11h à 17h",
    saturday: "Samedi : 11h à 17h",
    sunday: "Dimanche : 11  ",
    addressLine1: "3733 Rue Notre-Dame O",
    addressLine2: "Montréal, QC H4C 1P8",
    metro: "Métro : Lionel-Groulx",
    openMap: "Ouvrir dans Google Maps",
    premiumNote: "Service premium — sur rendez-vous",
    mapTitle: "Carte Google du Salon Barbe Blanche",
    instagram: "Instagram",
    tiktok: "TikTok",
    email: "Email",
  },

  en: {
    hoursTitle: "Hours",
    locationTitle: "Location",
    reachTitle: "Reach out",
    monday: "Monday: 12 PM to 6 PM",
    tuesdayFriday: "Tuesday to Friday: 10 AM to 7 PM",
    saturday: "Saturday: 10 AM to 5 PM",
    sunday: "Sunday: closed",
    addressLine1: "3733 Notre-Dame St W",
    addressLine2: "Montreal, QC H4C 1P8",
    metro: "Metro: Lionel-Groulx",
    openMap: "Open in Google Maps",
    premiumNote: "Premium service — by appointment",
    mapTitle: "Salon Barbe Blanche Google Map",
    instagram: "Instagram",
    tiktok: "TikTok",
    email: "Email",
  },
} as const;

export default function InfoMapSection({
  mapQuery = "3733 R. Notre-Dame O, Montréal, QC H4C 1P8, Canada",
}: Props) {
  const { language } = useLanguage();
  const content = infoMapContent[language];

  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="bg-[var(--page)]">
      <div
        ref={wrapRef}
        className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14"
      >
        {/* Main container */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--ink)]/20 bg-[color:rgba(255,255,255,0.25)] backdrop-blur-[2px] lg:grid-cols-2">
          {/* Left panel */}
          <div
            className={[
              "px-10 py-14 text-[var(--ink)] md:px-14 md:py-16 lg:px-20 lg:py-20",
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              "transition-all duration-700 ease-out",
            ].join(" ")}
          >
            {/* Hours / location */}
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              {/* Hours */}
              <div>
                <h3 className="mb-8 font-serif text-3xl md:text-4xl">
                  {content.hoursTitle}
                </h3>

                <ul className="space-y-2 text-sm leading-relaxed opacity-90 md:text-[15px]">
                  <li>{content.monday}</li>
                  <li>{content.tuesdayFriday}</li>
                  <li>{content.saturday}</li>
                  <li>{content.sunday}</li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h3 className="mb-8 font-serif text-3xl md:text-4xl">
                  {content.locationTitle}
                </h3>

                <div className="space-y-4 text-sm leading-relaxed opacity-90 md:text-[15px]">
                  <div>
                    <div className="font-medium">{content.addressLine1}</div>
                    <div>{content.addressLine2}</div>
                  </div>

                  <div>{content.metro}</div>
                </div>

                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(
                    mapQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-full border border-[var(--ink)]/30 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:bg-[var(--ink)] hover:text-[var(--page)]"
                >
                  {content.openMap}
                </a>
              </div>
            </div>

            {/* Separator */}
            <div className="my-16 h-px bg-[var(--ink)]/20" />

            {/* Reach out */}
            <div>
              <h3 className="mb-8 font-serif text-3xl md:text-4xl">
                {content.reachTitle}
              </h3>

              <ul className="space-y-3 text-sm opacity-90 md:text-[15px]">
                <li>
                  <a
                    href="tel:+15148466636"
                    className="underline underline-offset-4"
                  >
                    (514) 846-6636
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {content.instagram}
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {content.tiktok}
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:contact@barbeblanche.com"
                    className="underline underline-offset-4"
                  >
                    {content.email}
                  </a>
                </li>
              </ul>

              <div className="mt-10 text-[11px] uppercase tracking-[0.18em] opacity-60">
                {content.premiumNote}
              </div>
            </div>
          </div>

          {/* Right map */}
          <div className="relative min-h-[420px] lg:min-h-[620px]">
            {mounted && (
              <iframe
                title={content.mapTitle}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  mapQuery
                )}&z=15&output=embed`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}