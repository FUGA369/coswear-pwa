"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function StartupSplash() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && window.sessionStorage.getItem("coswear-splash-seen") === "1";
    if (hasSeen) return;

    setVisible(true);

    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("coswear-splash-seen", "1");
      if (pathname !== "/") {
        router.replace("/");
      }
    }, 1900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname, router]);

  if (!visible) return null;

  return (
    <div className={`startup-splash${fadeOut ? " is-fading" : ""}`}>
      <div className="startup-glow" />
      <img src="/icons/hue-logo.svg" alt="HUE" className="startup-logo" />
      <p className="startup-copy">Create Your Cosplay Mood</p>
    </div>
  );
}
