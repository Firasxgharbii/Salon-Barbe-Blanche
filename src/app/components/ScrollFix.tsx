"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    // 1) Désactiver la restauration automatique du scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2) Si l’URL contient un #hash (ex: #gallery), on l’enlève
    if (window.location.hash) {
      window.history.replaceState(null, "", pathname);
    }

    // 3) Forcer en haut (double raf pour être sûr après render)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  }, [pathname]);

  return null;
}
