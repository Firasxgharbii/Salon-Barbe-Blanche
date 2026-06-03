"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "fr" | "en";

const translations = {
  fr: {
    nav: {
      services: "Services",
      contact: "Contact",
      gallery: "Galerie",
      book: "Réserver",
      menu: "Menu",
    },

    hero: {
      eyebrow: "Bienvenue chez Barbe Blanche",
      titleTop: "Salon",
      titleBottom: "Moderne",
      signature: "Barbe Blanche",
      subtitle: "Un salon premium au cœur de Montréal",
      book: "Réserver",
      services: "Voir les services",
    },

    brands: {
      label: "Barbier premium à Montréal",
      title: "Une coupe précise. Une barbe soignée. Une allure affirmée.",
      description:
        "Chez Barbe Blanche, chaque service est réalisé avec soin dans une ambiance chaleureuse, élégante et professionnelle. Notre objectif est simple : révéler votre style avec précision, confort et confiance.",
      book: "Réservez maintenant",
    },

    mission: {
      labelLeft: "✦ Qui sommes-nous ?",
      labelCenter: "SALON BARBE BLANCHE © 2026",
      labelRight: "3733 R. Notre Dame O, Montréal",
      line1: "Chez Barbe Blanche, chaque",
      line2: "coupe est pensée comme une",
      line3: "expérience sur mesure. Un lieu où",
      line4: "la précision, le style et la confiance",
      line5: "se rencontrent.",
      reviews: "Basé sur 210 avis",
    },

    art: {
      labelLeft: "✦ Notre savoir-faire",
      labelRight: "✦ Notre portfolio",
      titleLeft: "L’Art",
      titleRight: "Exécution",
      year: "(@2026)",
      description:
        "Chez Barbe Blanche, chaque coupe est travaillée avec précision, patience et attention. De la première ligne jusqu’à la finition, nous créons un style propre, adapté à votre visage et à votre personnalité. Ici, l’élégance se voit dans les détails, et chaque rendez-vous devient une expérience soignée, confortable et professionnelle.",
      labelBottom: "✦ Notre art",
    },

    services: {
      label: "✦ Nos services",
      title: "Des services pensés pour votre style.",
      description:
        "Coupe, barbe, finition et entretien : chaque service est réalisé avec précision pour un résultat propre, moderne et adapté à votre personnalité.",
      book: "Réserver",
    },

    offers: {
      label: "✦ Offres",
      title: "Choisissez l’expérience qui vous convient.",
      description:
        "Des prestations claires, soignées et adaptées à chaque besoin.",
    },

    gallery: {
      label: "✦ Galerie",
      title: "Notre univers en images.",
      description:
        "Découvrez l’ambiance du salon, nos détails et notre savoir-faire.",
    },

    portfolio: {
      label: "✦ Portfolio",
      title: "Le style parle de lui-même.",
      description:
        "Un aperçu de notre travail, de nos finitions et de l’expérience Barbe Blanche.",
    },

    infoMap: {
      label: "✦ Nous trouver",
      title: "Salon Barbe Blanche à Montréal",
      address: "3733 Rue Notre-Dame O, Montréal, QC H4C 1P8",
      description:
        "Passez nous voir pour une coupe, une barbe ou une expérience grooming complète.",
    },

    testimonials: {
      label: "✦ Avis clients",
      title: "Ils nous font confiance.",
      description:
        "Une expérience appréciée pour la précision, l’accueil et la qualité du service.",
    },

    contact: {
      label: "✦ Contact",
      title: "Prenez rendez-vous",
      description:
        "Réservez votre place directement en ligne ou contactez-nous pour plus d’informations.",
      book: "Réserver maintenant",
    },

    footer: {
      eyebrow: "BARBERSHOP • MONTRÉAL",
      titleLine1: "Ayez du style.",
      titleLine2: "Sentez-vous chez vous.",
      description:
        "Une expérience moderne, soignée et raffinée pour une coupe nette, une barbe précise et une signature élégante.",
      book: "Réserver maintenant",
      navigation: "Navigation",
      home: "Accueil",
      services: "Services",
      gallery: "Galerie",
      contact: "Contact",
      contactTitle: "Contact",
      location: "Emplacement",
      addressLine1: "3733 Rue Notre-Dame O,",
      addressLine2: "Montréal, QC H4C 1P8",
      hours: "Horaires",
      hoursLine1: "Dimanche - vendredi : 11h à 20h",
      hoursLine2: "Samedi : 10h à 18h",
      hoursLine3: "Lundi : Fermé",
      brandText:
        "Un style intemporel, une finition précise et une identité moderne pensée pour ceux qui veulent plus qu’une simple coupe.",
      mapTitle: "Carte Salon Barbe Blanche",
      madeBy: "Made by OffClassic Studio",
    },
  },

  en: {
    nav: {
      services: "Services",
      contact: "Contact",
      gallery: "Gallery",
      book: "Book",
      menu: "Menu",
    },

    hero: {
      eyebrow: "Welcome to Barbe Blanche",
      titleTop: "Salon",
      titleBottom: "Modern",
      signature: "Barbe Blanche",
      subtitle: "A premium barbershop in the heart of Montreal",
      book: "Book now",
      services: "View services",
    },

    brands: {
      label: "Premium barber in Montreal",
      title: "A precise cut. A refined beard. A confident look.",
      description:
        "At Barbe Blanche, every service is crafted with care in a warm, elegant, and professional atmosphere. Our goal is simple: to reveal your style with precision, comfort, and confidence.",
      book: "Book now",
    },

    mission: {
      labelLeft: "✦ Who we are",
      labelCenter: "SALON BARBE BLANCHE © 2026",
      labelRight: "3733 Notre-Dame St W, Montreal",
      line1: "At Barbe Blanche, every",
      line2: "cut is designed as a",
      line3: "tailored experience. A place where",
      line4: "precision, style, and confidence",
      line5: "come together.",
      reviews: "Based on 210 reviews",
    },

    art: {
      labelLeft: "✦ Our craft",
      labelRight: "✦ Our portfolio",
      titleLeft: "The Art",
      titleRight: "Execution",
      year: "(@2026)",
      description:
        "At Barbe Blanche, every cut is shaped with precision, patience, and attention to detail. From the first line to the final finish, we create a clean style adapted to your face and personality. Here, elegance lives in the details, and every appointment becomes a refined, comfortable, and professional experience.",
      labelBottom: "✦ Our art",
    },

    services: {
      label: "✦ Our services",
      title: "Services designed around your style.",
      description:
        "Haircut, beard, finishing and grooming: every service is performed with precision for a clean, modern result adapted to your personality.",
      book: "Book",
    },

    offers: {
      label: "✦ Offers",
      title: "Choose the experience that fits you.",
      description: "Clear, refined services tailored to every grooming need.",
    },

    gallery: {
      label: "✦ Gallery",
      title: "Our world in images.",
      description:
        "Discover the atmosphere of the salon, our details and our craft.",
    },

    portfolio: {
      label: "✦ Portfolio",
      title: "The style speaks for itself.",
      description:
        "A glimpse of our work, our finishes and the Barbe Blanche experience.",
    },

    infoMap: {
      label: "✦ Find us",
      title: "Salon Barbe Blanche in Montreal",
      address: "3733 Notre-Dame St W, Montreal, QC H4C 1P8",
      description:
        "Visit us for a haircut, beard service or a complete grooming experience.",
    },

    testimonials: {
      label: "✦ Client reviews",
      title: "They trust us.",
      description:
        "An experience appreciated for its precision, warm welcome and quality service.",
    },

    contact: {
      label: "✦ Contact",
      title: "Book your appointment",
      description: "Reserve your spot online or contact us for more information.",
      book: "Book now",
    },

    footer: {
      eyebrow: "BARBERSHOP • MONTREAL",
      titleLine1: "Look sharp.",
      titleLine2: "Feel at home.",
      description:
        "A modern, refined and carefully crafted experience for a clean haircut, a precise beard and an elegant signature look.",
      book: "Book now",
      navigation: "Navigation",
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      contactTitle: "Contact",
      location: "Location",
      addressLine1: "3733 Notre-Dame St W,",
      addressLine2: "Montreal, QC H4C 1P8",
      hours: "Hours",

      // ✅ Horaires anglais corrigés pour correspondre au français
      hoursLine1: "Sunday - Friday: 11 AM to 8 PM",
      hoursLine2: "Saturday: 10 AM to 6 PM",
      hoursLine3: "Monday: Closed",

      brandText:
        "A timeless style, a precise finish and a modern identity designed for those who want more than just a haircut.",
      mapTitle: "Salon Barbe Blanche Map",
      madeBy: "Made by OffClassic Studio",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("barbe-blanche-language");

    if (savedLanguage === "fr" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("barbe-blanche-language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}