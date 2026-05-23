"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const SQUARE_BOOKING_URL =
  "https://book.squareup.com/appointments/78tpzxlw4jqmo4/location/LK9EBBZT64PRB/services";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
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

const brands = [
  { name: "WAHL", type: "text" },
  { name: "andis", type: "text" },
  { name: "BaBylissPRO", type: "text" },
  { name: "Reuzel", type: "text" },
  { name: "Proraso", type: "muted" },
] as const;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function BrandsStatementSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--page)] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <motion.div
        className="mx-auto max-w-[1680px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="relative overflow-hidden rounded-[34px] bg-[#ededed] px-7 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
          {/* Halo premium */}
          <motion.div
            className="pointer-events-none absolute right-[-70px] top-[-70px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(210,180,120,0.55)_0%,rgba(210,180,120,0.18)_38%,transparent_72%)]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Shine effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-[-20%] w-[28%] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl"
              animate={{ x: ["0%", "420%"] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1.5,
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.28fr] lg:gap-16">
            <motion.div variants={itemVariants} className="flex items-start pt-1">
              <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[#9b6b3d] sm:text-[15px]">
                <span className="text-[16px]">✦</span>
                <span>{t.brands.label}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="max-w-[980px] text-[42px] font-[780] leading-[0.92] tracking-[-0.075em] text-[#373737] sm:text-[56px] md:text-[68px] lg:text-[82px] xl:text-[92px]">
                {t.brands.title}
              </h2>

              <p className="mt-8 max-w-[760px] text-[17px] leading-[1.65] text-[#666] sm:text-[19px] md:text-[20px]">
                {t.brands.description}
              </p>
            </motion.div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 mt-14 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-12 lg:flex lg:flex-wrap lg:items-center lg:gap-16 xl:gap-20"
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  className="flex h-[38px] items-center justify-start"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                >
                  <span
                    className={
                      brand.type === "muted"
                        ? "text-[26px] font-semibold tracking-[-0.05em] text-[#b7b7b7] sm:text-[30px]"
                        : "text-[26px] font-semibold tracking-[-0.05em] text-[#2f2f2f] sm:text-[30px]"
                    }
                  >
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href={SQUARE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex self-start whitespace-nowrap text-[16px] font-medium text-[#505050] transition hover:text-black lg:self-end"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25 }}
              aria-label={t.brands.book}
            >
              <span className="flex items-center gap-4">
                <span>{t.brands.book}</span>

                <motion.span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9b6b3d] text-white shadow-[0_14px_30px_rgba(155,107,61,0.28)]"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    boxShadow: [
                      "0 14px 30px rgba(155,107,61,0.20)",
                      "0 18px 34px rgba(155,107,61,0.34)",
                      "0 14px 30px rgba(155,107,61,0.20)",
                    ],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRightIcon />
                </motion.span>
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}