"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  mapQuery?: string;
};

export default function InfoMapSection({
  mapQuery = "3733 R. Notre-Dame O, Montréal, QC H4C 1P8, Canada",
}: Props) {
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  return (
    <section id="contact" className="bg-[var(--page)]">
      <div
        ref={wrapRef}
        className="
          mx-auto 
          w-full 
          max-w-[1400px] 
          px-6 md:px-10 lg:px-14 
          py-20 md:py-28
        "
      >
        {/* CONTAINER PRINCIPAL */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            overflow-hidden
            rounded-3xl
            border border-[var(--ink)]/20
            bg-[color:rgba(255,255,255,0.25)]
            backdrop-blur-[2px]
          "
        >
          {/* LEFT PANEL */}
          <div
            className={[
              "px-10 md:px-14 lg:px-20",
              "py-14 md:py-16 lg:py-20",
              "text-[var(--ink)]",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "transition-all duration-700 ease-out",
            ].join(" ")}
          >
            {/* GRID HOURS / LOCATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* HOURS */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl mb-8">
                  Hours
                </h3>
                <ul className="space-y-2 text-sm md:text-[15px] leading-relaxed opacity-90">
                  <li>Monday: 12pm–6pm</li>
                  <li>Tuesday–Friday: 10am–7pm</li>
                  <li>Saturday: 10am–5pm</li>
                  <li>Sunday: closed</li>
                </ul>
              </div>

              {/* LOCATION */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl mb-8">
                  Location
                </h3>

                <div className="space-y-4 text-sm md:text-[15px] leading-relaxed opacity-90">
                  <div>
                    <div className="font-medium">
                      3733 R. Notre-Dame O
                    </div>
                    <div>Montréal, QC H4C 1P8</div>
                  </div>

                  {/* Si tu veux garder une info métro, change ici */}
                  <div>Metro: Lionel-Groulx</div>
                </div>

                {/* BOUTON MAP */}
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(
                    mapQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-8 inline-block
                    rounded-full
                    border border-[var(--ink)]/30
                    px-6 py-2
                    text-[11px]
                    font-semibold
                    tracking-[0.2em]
                    uppercase
                    hover:bg-[var(--ink)] hover:text-[var(--page)]
                    transition
                  "
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="my-16 h-px bg-[var(--ink)]/20" />

            {/* REACH OUT */}
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-8">
                Reach out
              </h3>

              <ul className="space-y-3 text-sm md:text-[15px] opacity-90">
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
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@barbeblanche.com"
                    className="underline underline-offset-4"
                  >
                    Tiktok
                  </a>
                </li>
                 <li>
                  <a
                    href="mailto:contact@barbeblanche.com"
                    className="underline underline-offset-4"
                  >
                    Email
                  </a>
                </li>
              </ul>

              <div className="mt-10 text-[11px] tracking-[0.18em] uppercase opacity-60">
                Premium service — sur rendez-vous
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative min-h-[420px] lg:min-h-[620px]">
            {mounted && (
              <iframe
                title="Google Map"
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

        {/* FOOT NOTE */}
        
      </div>
    </section>
  );
}
