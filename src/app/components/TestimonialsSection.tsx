"use client";

import { useLanguage } from "../context/LanguageContext";

type Testimonial = {
  author: string;
  text: string;
  stars: number;
};

const testimonialsContent = {
  fr: {
    label: "Avis Google",
    title: "Ce que nos clients disent",
    description:
      "Une expérience appréciée pour la précision, l’accueil et la qualité du service.",
    testimonials: [
      {
        author: "Khalil Ben Youssef",
        text: "Toujours au top avec Karim ! Coupe propre, bonne ambiance et service nickel à chaque fois.",
        stars: 5,
      },
      {
        author: "Jason Garfinkle",
        text: "Karim fait un travail fantastique avec une grande attention aux détails. Je recommande fortement.",
        stars: 5,
      },
      {
        author: "Souhail Berhouma",
        text: "Un excellent coiffeur à Montréal ! Karim est très professionnel, à l’écoute et réalise des coupes impeccables.",
        stars: 5,
      },
    ] satisfies Testimonial[],
  },

  en: {
    label: "Google Reviews",
    title: "What our clients say",
    description:
      "An experience appreciated for its precision, warm welcome and quality of service.",
    testimonials: [
      {
        author: "Khalil Ben Youssef",
        text: "Always excellent with Karim! Clean haircut, great atmosphere and perfect service every time.",
        stars: 5,
      },
      {
        author: "Jason Garfinkle",
        text: "Karim does a fantastic job with great attention to detail. Would highly recommend!",
        stars: 5,
      },
      {
        author: "Souhail Berhouma",
        text: "An excellent barber in Montreal! Karim is very professional, attentive and delivers impeccable haircuts.",
        stars: 5,
      },
    ] satisfies Testimonial[],
  },
} as const;

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const content = testimonialsContent[language];

  return (
    <section id="testimonials" className="bg-page text-ink">
      <div className="w-full px-6 py-24 sm:px-10 lg:px-20">
        {/* Title */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.28em] opacity-70">
            {content.label}
          </p>

          <h2 className="mt-5 max-w-[760px] font-serif text-[42px] leading-[1] tracking-[-0.04em] sm:text-[58px] lg:text-[72px]">
            {content.title}
          </h2>

          <p className="mt-6 max-w-[560px] text-sm leading-7 opacity-70 sm:text-[15px]">
            {content.description}
          </p>

          <div className="mt-8 h-px w-24 bg-ink/30" />
        </div>

        {/* Grid */}
        <div className="grid gap-16 md:grid-cols-3 lg:gap-20">
          {content.testimonials.map((testimonial) => (
            <ReviewCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-[300px] flex-col border-t border-ink/20 pt-8">
      {/* Stars */}
      <div className="mb-8 flex gap-1">
        {Array.from({ length: testimonial.stars }).map((_, index) => (
          <Star key={index} />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm leading-7 opacity-80">“{testimonial.text}”</p>

      {/* Author */}
      <p className="mt-8 text-sm font-medium opacity-90">
        — {testimonial.author}
      </p>
    </article>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 17.27l-5.18 2.73 1-5.82-4.23-4.12 5.84-.85L12 3.9l2.57 5.31 5.84.85-4.23 4.12 1 5.82z" />
    </svg>
  );
}