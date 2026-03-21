"use client";

import Image from "next/image";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-page px-6 sm:px-10 lg:px-16 py-20"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* IMAGE GAUCHE */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-none">
          <Image
            src="/service-man.jpg" // ⚠️ mets ton image ici
            alt="Barber service"
            fill
            className="object-cover"
          />
        </div>

        {/* LISTE SERVICES */}
        <div className="w-full">
          
          {/* HEADER PRIX */}
        

          <Service
            title="Haircut"
            description="A tailored haircut designed to suit your personal style and preferences. A hair wash is available upon request."
            jr="$34.78"
            sr="$39.14"
          />

          <Service
            title="Hair & Beard"
            description="A complete service that includes a personalized haircut and detailed beard grooming to create a clean, cohesive look."
            jr="$39.14"
            sr="$43.49"
          />

          <Service
            title="Clipper Cut"
            description="A haircut done entirely with clippers—ideal for styles like buzz cuts or uniform-length trims."
            jr="$30.43"
            sr="$34.79"
          />

          <Service
            title="Beard Trim"
            description="Professional shaping, trimming, or cleaning up of your beard with a consultation."
            jr="$21.74"
            sr="$26.09"
          />

          <Service
            title="Kids Haircut"
            description="A fun, age-appropriate haircut for children 13 and under."
            jr="$30.43"
            sr="$34.79"
          />

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
}: {
  title: string;
  description: string;
  jr: string;
  sr: string;
}) {
  return (
    <div className="border-t border-ink/40 py-8">
      <div className="flex justify-between items-start gap-6">
        <div>
          <h3 className="font-serif text-xl mb-2">{title}</h3>
          <p className="text-sm opacity-80 max-w-xl">{description}</p>

          <a
            href="#book"
            className="inline-flex mt-4 px-6 py-2 border border-ink text-xs font-semibold tracking-[0.22em] uppercase hover:bg-ink hover:text-page transition"
          >
            Book Now
          </a>
        </div>

        <div className="text-right text-sm whitespace-nowrap">
          <div className="mb-1">JR {jr}</div>
          <div>SR {sr}</div>
        </div>
      </div>
    </div>
  );
}
