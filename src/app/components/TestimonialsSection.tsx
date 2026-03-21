"use client";

type Testimonial = {
  author: string;
  text: string;
  stars: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Khalil Ben Youssef",
    text: "Toujours au top avec Karim ! Coupe propre, bonne ambiance et service nickel à chaque fois.",
    stars: 5,
  },
  {
    author: "Jason Garfinkle",
    text: "Karim does a fantastic job with great attention to detail. Would highly recommend!",
    stars: 5,
  },
  {
    author: "Souhail Berhouma",
    text: "Un excellent coiffeur à Montréal ! Karim est très professionnel, à l’écoute et réalise des coupes impeccables.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-page text-ink">
      <div className="w-full px-6 sm:px-10 lg:px-20 py-24">
        {/* Title */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.28em] uppercase opacity-70">
            Google Reviews
          </p>
          <div className="mt-4 h-px w-24 bg-ink/30" />
        </div>

        {/* Grid */}
        <div className="grid gap-20 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex flex-col min-h-[300px]">
      {/* Text */}
      <p className="text-sm leading-7 opacity-80">
        “{t.text}”
      </p>

      {/* Author */}
      <p className="mt-8 text-sm font-medium opacity-90">
        — {t.author}
      </p>

      {/* Stars */}
      <div className="mt-auto pt-10 flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
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
