"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type RevealVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "zoomIn"
  | "zoomOut"
  | "rotateUp"
  | "blurIn"
  | "splitRise";

const variantsMap: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  },

  fadeLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  },

  fadeRight: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  },

  zoomIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  },

  zoomOut: {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
    },
  },

  rotateUp: {
    hidden: { opacity: 0, y: 80, rotate: 2, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  },

  blurIn: {
    hidden: { opacity: 0, filter: "blur(18px)", y: 50 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  },

  splitRise: {
    hidden: { opacity: 0, y: 120, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

export default function SectionReveal({
  children,
  variant = "fadeUp",
  className = "",
  once = true,
  amount = 0.25,
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  once?: boolean;
  amount?: number;
  delay?: number;
}) {
  const selected = variantsMap[variant];

  return (
    <motion.section
      className={className}
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}