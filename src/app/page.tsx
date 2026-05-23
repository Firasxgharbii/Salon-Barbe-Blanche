"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import MissionSection from "./components/MissionSection";

import OffersSection from "./components/OffersSection";
import GallerySection from "./components/GallerySection";

import ScrollToTop from "./components/ScrollToTop";
import PortfolioSection from "./components/PortfolioSection";
import ArtExecutionSection from "./components/ArtExecutionSection";
import BrandsStatementSection from "./components/BrandsStatementSection";
import SectionReveal from "./components/SectionReveal";

/** Square Booking */
const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/78tpzxlw4jqmo4/location/LK9EBBZT64PRB/services";

function openSquareBooking() {
  if (typeof window === "undefined") return;
  window.open(SQUARE_BOOKING_URL, "_blank", "noopener,noreferrer");
}

/* ===================== I18N ===================== */

type Lang = "fr" | "en";
const LANG_STORAGE_KEY = "bb_lang";

const I18N = {
  fr: {
    navServices: "Services",
    navContact: "Contact",
    navGallery: "Galerie",
    bookNow: "Réserver",
    reserve: "Réserver",
    seeServices: "Voir les services",
    welcome: "Bienvenue chez Barbe Blanche",
    heroTitleA: "Le Grooming Moderne",
    heroTitleB: "Barbe Blanche",
    heroSub: "Un salon premium au cœur de Montréal",
    menuTitle: "Menu",
  },
  en: {
    navServices: "Services",
    navContact: "Contact",
    navGallery: "Gallery",
    bookNow: "Book Now",
    reserve: "Book Now",
    seeServices: "View services",
    welcome: "Welcome to Barbe Blanche",
    heroTitleA: "Modern Grooming",
    heroTitleB: "Barbe Blanche",
    heroSub: "A premium barbershop in the heart of Montreal",
    menuTitle: "Menu",
  },
} as const;

function isLang(v: unknown): v is Lang {
  return v === "fr" || v === "en";
}

/* ===================== PAGE ===================== */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");

  const t = I18N[lang];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    setMenuOpen(false);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <main className="min-h-screen bg-[var(--page)] text-[var(--ink)]">
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        onBookNow={openSquareBooking}
        lang={lang}
        onToggleLang={toggleLang}
        t={t}
      />

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onGoTo={goTo}
        onBookNow={openSquareBooking}
        lang={lang}
        onToggleLang={toggleLang}
        t={t}
      />

      <Hero onGoTo={goTo} onBookNow={openSquareBooking} t={t} />

      <SectionReveal variant="blurIn">
        <MissionSection />
      </SectionReveal>

      <SectionReveal variant="fadeRight">
        <OffersSection />
      </SectionReveal>
      <SectionReveal variant="zoomIn">
        <PortfolioSection />
      </SectionReveal>

      <SectionReveal variant="rotateUp">
        <BrandsStatementSection />
      </SectionReveal>

     

     

      <SectionReveal variant="zoomOut">
        <ArtExecutionSection />
      </SectionReveal>

      <SectionReveal variant="splitRise">
        
        <GallerySection />
      </SectionReveal>

      

      <Footer
        onBookNow={openSquareBooking}
        lang={lang}
        onToggleLang={toggleLang}
      />

      <MobileBookNow onBookNow={openSquareBooking} t={t} />
      <ScrollToTop />
    </main>
  );
}

/* ===================== HEADER ===================== */

function Header({
  onOpenMenu,
  onBookNow,
  lang,
  onToggleLang,
  t,
}: {
  onOpenMenu: () => void;
  onBookNow: () => void;
  lang: Lang;
  onToggleLang: () => void;
  t: (typeof I18N)[Lang];
}) {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-ink/15
        bg-[var(--page)]/90 backdrop-blur
        shadow-[0_6px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex h-16 items-center px-6 sm:px-10 lg:px-16">
        <div className="flex-1">
          <a
            className="text-2xl font-serif font-semibold leading-none text-ink"
            href="#"
          >
            BARBE BLANCHE
          </a>
        </div>

        <nav className="hidden gap-12 text-xs font-semibold uppercase tracking-[0.22em] text-ink md:flex">
          <a className="hover:opacity-70" href="#services">
            {t.navServices}
          </a>
          <a className="hover:opacity-70" href="#contact">
            {t.navContact}
          </a>
          <a className="hover:opacity-70" href="#gallery">
            {t.navGallery}
          </a>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-5">
          <button
            type="button"
            onClick={onBookNow}
            className="
              hidden h-9 items-center justify-center rounded-full
              border border-ink/40 px-6
              text-xs font-semibold uppercase tracking-[0.22em]
              text-ink transition
              hover:bg-ink hover:text-page md:inline-flex
            "
          >
            {t.bookNow}
          </button>

          <button
            type="button"
            onClick={onToggleLang}
            className="
              inline-flex h-9 items-center justify-center rounded-full
              border border-ink/25 px-4
              text-xs font-semibold uppercase tracking-[0.22em]
              text-ink transition
              hover:border-ink/50 hover:bg-ink hover:text-page
            "
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={onOpenMenu}
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-ink/35 bg-[var(--page)]/95
              text-ink shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition
              hover:border-ink/60 md:hidden
            "
            aria-label="Open menu"
          >
            <span className="text-[18px] leading-none">☰</span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ===================== MOBILE MENU ===================== */

function MobileMenu({
  open,
  onClose,
  onGoTo,
  onBookNow,
  lang,
  onToggleLang,
  t,
}: {
  open: boolean;
  onClose: () => void;
  onGoTo: (id: string) => void;
  onBookNow: () => void;
  lang: Lang;
  onToggleLang: () => void;
  t: (typeof I18N)[Lang];
}) {
  if (!open) return null;

  const Item = ({ label, to }: { label: string; to?: string }) => (
    <button
      onClick={() => {
        if (!to) return onClose();

        if (to === "book") {
          onClose();
          onBookNow();
          return;
        }

        onGoTo(to);
      }}
      className="
        w-full py-5 text-center
        text-xs font-semibold uppercase tracking-[0.28em]
        text-ink transition hover:bg-ink/5
      "
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[9999] md:hidden">
      <button
        aria-label="Close menu overlay"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(230,232,236,0.90)] backdrop-blur-[6px]"
      />

      <div
        className="
          absolute left-1/2 top-6 w-[92%] max-w-[420px] -translate-x-1/2
          overflow-hidden rounded-3xl border border-ink/15
          bg-[rgba(245,246,248,0.96)]
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        "
      >
        <div className="flex h-14 items-center justify-between border-b border-ink/10 px-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/70">
            {t.menuTitle}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="
                h-9 rounded-full border border-ink/20 px-4
                text-[11px] font-semibold uppercase tracking-[0.22em]
                text-ink transition hover:bg-ink hover:text-page
              "
              onClick={onToggleLang}
              aria-label="Toggle language"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <button
              onClick={onClose}
              className="
                h-9 w-9 rounded-full border border-ink/20
                text-ink transition hover:bg-ink hover:text-page
              "
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white/40">
            <Item label={t.navServices} to="services" />
            <div className="h-px bg-ink/10" />
            <Item label={t.navContact} to="contact" />
            <div className="h-px bg-ink/10" />
            <Item label={t.navGallery} to="gallery" />
            <div className="h-px bg-ink/10" />
            <Item label={t.bookNow} to="book" />
          </div>

          <div className="pb-3 pt-4">
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="
                h-12 w-full rounded-full bg-ink text-page
                text-xs font-semibold uppercase tracking-[0.28em]
                transition hover:opacity-90
              "
            >
              {t.bookNow}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== HERO ===================== */

function Hero({
  onGoTo,
  onBookNow,
  t,
}: {
  onGoTo: (id: string) => void;
  onBookNow: () => void;
  t: (typeof I18N)[Lang];
}) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#06070a]"
    >
      {/* IMAGE MOBILE */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/gallery/10.JPG"
          alt="Barber background mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% center" }}
        />
      </div>

      {/* IMAGE DESKTOP */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/gallery/10.JPG"
          alt="Barber background desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 24%" }}
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_58%)]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.08)_35%,rgba(0,0,0,0.08)_65%,rgba(0,0,0,0.30)_100%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.35)_100%)]" />

      {/* LOGO GHOST */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] lg:h-[520px] lg:w-[520px]">
          <Image
            src="/logo.JPG"
            alt="Barbe Blanche logo background"
            fill
            className="object-contain opacity-[0.07] blur-[1px]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 pb-24 pt-24 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1200px] justify-center text-center">
          <div className="max-w-[980px]">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.34em] text-white/72 sm:text-[13px] md:mb-6">
              {t.welcome}
            </p>

            <h1 className="mx-auto max-w-[900px] text-[58px] font-[800] leading-[0.9] tracking-[-0.075em] text-white sm:text-[78px] md:text-[100px] lg:text-[126px] xl:text-[142px]">
              {t.heroTitleA}
            </h1>

            <h2 className="mx-auto mt-2 max-w-[900px] font-serif text-[40px] italic leading-[0.96] text-white/95 sm:text-[56px] md:mt-3 md:text-[72px] lg:text-[88px] xl:text-[98px]">
              {t.heroTitleB}
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.65] text-white/78 sm:text-[18px] md:mt-7 md:text-[20px]">
              {t.heroSub}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
              <button
                onClick={onBookNow}
                className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold text-black shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-white/95"
              >
                {t.reserve}
              </button>

              <button
                onClick={() => onGoTo("services")}
                className="inline-flex h-12 min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-white/[0.03] px-8 text-[15px] font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-[1px] hover:border-white/50 hover:bg-white/10"
              >
                {t.seeServices}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06070a] to-transparent" />
    </section>
  );
}

/* ===================== MOBILE BOOK NOW ===================== */

function MobileBookNow({
  onBookNow,
  t,
}: {
  onBookNow: () => void;
  t: (typeof I18N)[Lang];
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] border-t border-ink/15 bg-page/95 px-4 py-3 backdrop-blur md:hidden">
      <button
        onClick={onBookNow}
        className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink text-xs font-semibold uppercase tracking-[0.22em] transition hover:bg-ink hover:text-page"
      >
        {t.bookNow}
      </button>
    </div>
  );
}

/* ===================== FOOTER ===================== */
function Footer({
  onBookNow,
  lang,
  onToggleLang,
}: {
  onBookNow: () => void;
  lang: Lang;
  onToggleLang: () => void;
}) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[var(--footer-bg)] text-[var(--footer-text)]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d6dbe0]/[0.08] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#9ea3ab]/[0.08] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/[0.03] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* TOP SECTION */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-white/35">
              BARBERSHOP • MONTRÉAL
            </div>

            <h2 className="max-w-[700px] text-[48px] font-[800] leading-[0.95] tracking-[-0.06em] text-[var(--accent)] sm:text-[64px] lg:text-[76px]">
              Ayez du style.
              <br />
              Sentez-vous chez vous.
            </h2>

            <p className="mt-7 max-w-[560px] text-[17px] font-[400] leading-[1.8] text-white/58">
              Une expérience moderne, soignée et raffinée pour une coupe nette,
              une barbe précise et une signature élégante.
            </p>

            <div className="mt-10">
              <button
                type="button"
                onClick={onBookNow}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-[700] text-black transition duration-300 hover:-translate-y-[1px] hover:bg-[#f6f6f6]"
              >
                <span>Réserver maintenant</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-strong)] text-white transition duration-300 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path
                      d="M5 12h12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-2 lg:pt-7">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42">
              Navigation
            </div>

            <nav className="space-y-4">
              <a
                href="#home"
                className="group flex w-fit items-center gap-3 text-[18px] font-[500] text-white/92 transition hover:text-white"
              >
                <span className="h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
                Accueil
              </a>

              <a
                href="#services"
                className="group flex w-fit items-center gap-3 text-[18px] font-[400] text-white/62 transition hover:text-white"
              >
                <span className="h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
                Services
              </a>

              <a
                href="#gallery"
                className="group flex w-fit items-center gap-3 text-[18px] font-[400] text-white/62 transition hover:text-white"
              >
                <span className="h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
                Galerie
              </a>

              <a
                href="#contact"
                className="group flex w-fit items-center gap-3 text-[18px] font-[400] text-white/62 transition hover:text-white"
              >
                <span className="h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
                Contact
              </a>

              <button
                type="button"
                onClick={onToggleLang}
                className="pt-5 text-[16px] font-[500] text-white/55 transition hover:text-[var(--accent)]"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 lg:pt-7">
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42">
              Contact
            </div>

            <a
              href="tel:+15147976544"
              className="inline-block text-[42px] font-[800] tracking-[-0.05em] text-white transition hover:text-[var(--accent)] sm:text-[48px]"
            >
              (514) 797-6544
            </a>

            <div className="mt-10 grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.30em] text-white/42">
                  Emplacement
                </div>

                <div className="text-[14px] font-[700] uppercase tracking-[0.18em] text-[var(--accent)]">
                  Salon Barbe Blanche
                </div>

                <div className="mt-4 text-[18px] font-[400] leading-[1.8] text-white/72">
                  3733 Rue Notre-Dame O,
                  <br />
                  Montréal, QC H4C 1P8
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.30em] text-white/42">
                  Horaires
                </div>

                <div className="text-[18px] font-[400] leading-[2] text-white/72">
                  Lun - Ven : 10h à 19h
                  <br />
                  Samedi : 10h à 18h
                  <br />
                  Dimanche : Fermé
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BRAND SECTION */}
        <div className="mt-24 lg:mt-28">
          <div className="relative border-t border-white/8 pt-12">
            <div className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-[var(--accent)] to-transparent" />

            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="select-none text-left text-[78px] font-[800] uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
                  BARBE
                  <br />
                  BLANCHE
                  <span className="ml-2 align-top text-[14px] text-white/45 sm:text-[16px]">
                    ™
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 lg:pb-5">
                <p className="max-w-[420px] text-[18px] font-[400] leading-[1.8] text-white/40">
                  Un style intemporel, une finition précise et une identité
                  moderne pensée pour ceux qui veulent plus qu’une simple coupe.
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10">
              <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/45" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/30 to-transparent" />

                <div className="absolute left-5 top-5 z-20 rounded-full border border-white/12 bg-black/50 px-4 py-2 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
                    </span>

                    <span className="text-[13px] font-[600] tracking-[0.08em] text-white">
                      Salon Barbe Blanche
                    </span>
                  </div>
                </div>

                <div className="h-[220px] w-full sm:h-[260px] lg:h-[300px]">
                  <iframe
                    title="Carte Salon Barbe Blanche"
                    src="https://www.google.com/maps?q=3733+Rue+Notre-Dame+Ouest,+Montréal,+QC+H4C+1P8&z=15&output=embed"
                    className="h-full w-full grayscale contrast-125 brightness-75 saturate-0 transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-5">
              <a
                href="https://offclassicstudio.com"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-[12px] font-[500] uppercase tracking-[0.34em] text-white/45 transition hover:text-[var(--accent)]"
              >
                Made by OffClassic Studio
              </a>

              <div className="flex flex-col items-start gap-4">
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-[500] text-white/65 transition hover:border-[var(--accent)]/35 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M16.9 2H13.7V14.2C13.7 15.7 12.5 16.9 11 16.9C9.5 16.9 8.3 15.7 8.3 14.2C8.3 12.8 9.4 11.6 10.9 11.5V8.3C7.6 8.4 5 11 5 14.2C5 17.5 7.7 20.2 11 20.2C14.3 20.2 17 17.5 17 14.2V8.1C18.2 9 19.7 9.6 21.3 9.6V6.4C18.9 6.3 16.9 4.4 16.9 2Z" />
                    </svg>
                  </span>
                  <span>TikTok</span>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-[500] text-white/65 transition hover:border-[var(--accent)]/35 hover:bg-white/[0.05] hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M12 16.2A4.2 4.2 0 1 0 12 7.8a4.2 4.2 0 0 0 0 8.4Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M17.5 6.5h.1"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
     
          </div>
        </div>
      </div>
    </footer>
  );


}