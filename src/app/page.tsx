"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MissionSection from "./components/MissionSection";
import ServicesSection from "./components/ServicesSection";
import OffersSection from "./components/OffersSection";
import GallerySection from "./components/GallerySection";
import InfoMapSection from "./components/InfoMapSection";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioSection from "./components/PortfolioSection";
import ArtExecutionSection from "./components/ArtExecutionSection";

/** ✅ Ton lien Square Booking */
const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/78tpzxlw4jqmo4/location/LK9EBBZT64PRB/services";

/** ✅ ouvre Square (nouvel onglet) */
function openSquareBooking() {
  if (typeof window === "undefined") return;
  window.open(SQUARE_BOOKING_URL, "_blank", "noopener,noreferrer");
}

/* ===================== I18N (FR / EN) ===================== */

type Lang = "fr" | "en";
const LANG_STORAGE_KEY = "bb_lang";

const I18N = {
  fr: {
    navServices: "Services",
    navContact: "Contact",
    navGallery: "Gallery",
    bookNow: "Book Now",
    reserve: "Réserver",
    seeServices: "Voir les services",
    welcome: "Bienvenue chez Barbe Blanche",
    heroTitleA: "Le Grooming Moderne",
    heroTitleB: "Barbe Blanche",
    heroSub: "Un salon premium au cœur de Montréal",
    statementBrand: "BARBE BLANCHE",
    statementLine1: "Un espace pensé pour votre confort et votre élégance.",
    statementLine2: "Détendez-vous et repartez avec un style qui vous ressemble.",
    statementLine3: "parfaitement taillé pour vous.",
    menuTitle: "Menu",
    madeBy: "Made by OffClassic Studio",
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
    statementBrand: "BARBE BLANCHE",
    statementLine1: "A space designed for your comfort and elegance.",
    statementLine2: "Relax and leave with a style that fits you.",
    statementLine3: "perfectly tailored for you.",
    menuTitle: "Menu",
    madeBy: "Made by OffClassic Studio",
  },
} as const;

function isLang(v: unknown): v is Lang {
  return v === "fr" || v === "en";
}

/* ===================== PAGE ===================== */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ DEFAULT = FR
  const [lang, setLang] = useState<Lang>("fr");
  const t = I18N[lang];

  // ✅ 1) Au chargement: lire la langue sauvegardée (si existe), sinon rester FR
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(saved)) setLang(saved);
  }, []);

  // ✅ 2) À chaque changement: sauvegarder + mettre <html lang="..">
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // ✅ lock scroll menu mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ✅ Scroll vers une section interne
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    setMenuOpen(false);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  // ✅ toggle FR/EN
  const toggleLang = () => setLang((p) => (p === "fr" ? "en" : "fr"));

  return (
    <main className="min-h-screen bg-page text-ink">
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

      <StatementSection t={t} />

      {/* ✅ Tes sections (si tu veux aussi les traduire, il faudra leur passer lang/t) */}
      <ServicesSection />
      <OffersSection />
      <InfoMapSection />
      <MissionSection />
      <PortfolioSection />
      <ScrollToTop />
      <GallerySection />
      <ArtExecutionSection />
<Footer
  onBookNow={openSquareBooking}
  lang={lang}
  onToggleLang={toggleLang}
/>

      <MobileBookNow onBookNow={openSquareBooking} t={t} />
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
        bg-[var(--page)]/95 backdrop-blur
        border-b border-ink/15
        shadow-[0_6px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 h-16 flex items-center">
        <div className="flex-1">
          <a
            className="text-2xl font-serif font-semibold leading-none text-ink"
            href="#"
          >
            BARBE BLANCHE
          </a>
        </div>

        <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-[0.22em] uppercase text-ink">
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

        <div className="flex-1 flex justify-end items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={onBookNow}
            className="
              hidden md:inline-flex h-9 px-6 items-center justify-center rounded-full
              border border-ink/40
              text-xs font-semibold tracking-[0.22em] uppercase
              text-ink
              hover:bg-ink hover:text-page transition
            "
          >
            {t.bookNow}
          </button>

          {/* ✅ Bouton langue: affiche EN quand on est en FR, et FR quand on est en EN */}
          <button
            type="button"
            onClick={onToggleLang}
            className="
              inline-flex items-center justify-center
              h-9 px-4 rounded-full
              border border-ink/25
              text-xs font-semibold tracking-[0.22em] uppercase
              text-ink
              hover:border-ink/50 hover:bg-ink hover:text-page transition
            "
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={onOpenMenu}
            className="
              md:hidden inline-flex items-center justify-center
              h-10 w-10 rounded-full
              bg-[var(--page)]/95
              border border-ink/35
              text-ink
              shadow-[0_8px_20px_rgba(0,0,0,0.10)]
              hover:border-ink/60 transition
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
        w-full py-5
        text-center
        text-xs font-semibold tracking-[0.28em] uppercase
        text-ink
        hover:bg-ink/5
        transition
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
        className="
          absolute inset-0
          bg-[rgba(244,236,220,0.92)]
          backdrop-blur-[6px]
        "
      />

      <div
        className="
          absolute left-1/2 top-6 -translate-x-1/2
          w-[92%] max-w-[420px]
          rounded-3xl
          border border-ink/15
          bg-[rgba(250,245,235,0.96)]
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          overflow-hidden
        "
      >
        <div className="h-14 px-4 flex items-center justify-between border-b border-ink/10">
          <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-ink/70">
            {t.menuTitle}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="
                h-9 px-4 rounded-full
                border border-ink/20
                text-[11px] font-semibold tracking-[0.22em] uppercase
                text-ink
                hover:bg-ink hover:text-page
                transition
              "
              onClick={onToggleLang}
              aria-label="Toggle language"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <button
              onClick={onClose}
              className="
                h-9 w-9 rounded-full
                border border-ink/20
                text-ink
                hover:bg-ink hover:text-page
                transition
              "
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-3 py-2">
          <div className="rounded-2xl border border-ink/10 overflow-hidden bg-white/40">
            <Item label={t.navServices} to="services" />
            <div className="h-px bg-ink/10" />
            <Item label={t.navContact} to="contact" />
            <div className="h-px bg-ink/10" />
            <Item label={t.navGallery} to="gallery" />
            <div className="h-px bg-ink/10" />
            <Item label={t.bookNow} to="book" />
          </div>

          <div className="pt-4 pb-3">
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="
                w-full h-12 rounded-full
                bg-ink text-page
                text-xs font-semibold tracking-[0.28em] uppercase
                hover:opacity-90
                transition
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
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/Karim.jpeg"
        alt="Salon Barbe Blanche"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 sm:px-10 lg:px-16 pb-14">
          <p className="text-white/80 text-xs tracking-[0.28em] uppercase">
            {t.welcome}
          </p>

          <h1 className="mt-3 text-white font-serif font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl">
            {t.heroTitleA} <span className="italic">{t.heroTitleB}</span>
          </h1>

          <p className="mt-4 text-white/90 text-xs sm:text-sm tracking-[0.24em] uppercase max-w-2xl">
            {t.heroSub}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
            <button
              onClick={onBookNow}
              className="inline-flex justify-center rounded-full bg-white text-black px-8 py-3 font-semibold hover:opacity-90 transition w-full sm:w-auto"
            >
              {t.reserve}
            </button>

            <button
              onClick={() => onGoTo("services")}
              className="inline-flex justify-center rounded-full border border-white/70 text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition w-full sm:w-auto"
            >
              {t.seeServices}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== STATEMENT ===================== */

function StatementSection({ t }: { t: (typeof I18N)[Lang] }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full py-28 sm:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "transition-all duration-1000 ease-out",
          visible ? "opacity-20 scale-100" : "opacity-0 scale-[0.96]",
        ].join(" ")}
      >
        <div className="h-[420px] w-[420px] rounded-full border border-page/20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
        <p
          className={[
            "text-xs tracking-[0.28em] uppercase",
            "transition-all duration-700 ease-out",
            visible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-3",
          ].join(" ")}
          style={{ color: "var(--page)" }}
        >
          {t.statementBrand}
        </p>

        <p
          className={[
            "mt-8 font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed",
            "transition-all duration-1000 ease-out delay-150",
            visible ? "opacity-95 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
          style={{ color: "var(--page)" }}
        >
          {t.statementLine1}
          <br />
          {t.statementLine2}
          <br />
          {t.statementLine3}
        </p>
      </div>
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[70] bg-page/95 backdrop-blur border-t border-ink/15 px-4 py-3">
      <button
        onClick={onBookNow}
        className="w-full inline-flex items-center justify-center rounded-full border border-ink h-12 text-xs font-semibold tracking-[0.22em] uppercase hover:bg-ink hover:text-page transition"
      >
        {t.bookNow}
      </button>
    </div>
  );
}

/* ===================== FOOTER ===================== */
import React from "react";



function Footer({
  onBookNow,
  lang,
  onToggleLang,
}: {
  onBookNow: () => void;
  lang: "fr" | "en";
  onToggleLang: () => void;
}) {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--footer-bg)] text-[var(--footer-text)]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#7a1200]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#7a1200]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#130200]/25 to-transparent" />
      </div>

      <div className="relative w-full px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* TOP */}
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
                className="footer-button group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-[700] text-black transition duration-300 hover:-translate-y-[1px] hover:bg-[#f6f6f6]"
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

          {/* NAV */}
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
                href="#about"
                className="group flex w-fit items-center gap-3 text-[18px] font-[400] text-white/62 transition hover:text-white"
              >
                <span className="h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-6" />
                À propos
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
              <div className="footer-card rounded-[24px] p-6">
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.30em] text-white/42">
                  Emplacement
                </div>

                <div className="text-[14px] font-[700] uppercase tracking-[0.18em] text-[var(--accent)]">
                  Salon Barbe Blanche
                </div>

                <div className="mt-4 text-[18px] font-[400] leading-[1.8] text-white/72">
                  3733 R. Notre Dame O,
                  <br />
                  Montréal, QC H4C 1P8
                </div>
              </div>

              <div className="footer-card rounded-[24px] p-6">
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

        {/* BRAND BLOCK */}
        <div className="mt-24 lg:mt-28">
          <div className="relative border-t border-white/8 pt-12">
            <div className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-[var(--accent)] to-transparent" />

            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="footer-brand select-none text-left text-[78px] uppercase text-white sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[210px]">
                  BARBE
                  <br />
                  BLANCHE
                  <span className="ml-2 align-top text-[14px] text-white/50 sm:text-[16px]">
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
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 text-[16px] font-[500] text-white/60 transition hover:text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.02] transition duration-300 group-hover:border-[var(--accent)]/35 group-hover:bg-white/[0.05]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
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

            <span>
              Instagram{" "}
              <span className="inline-block transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          <div className="text-[15px] font-[400] text-white/40">
            © 2026 Salon Barbe Blanche. Tous droits réservés. •{" "}
            <a
              href="#"
              className="text-white/55 underline underline-offset-4 transition hover:text-white"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}










/* ===================== REVEAL ON SCROLL ===================== */

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-revealed");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
