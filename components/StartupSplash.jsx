"use client";

import { useEffect, useState } from "react";

export default function StartupSplash() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasShown = typeof window !== "undefined" && window.localStorage.getItem("coswear-splash-shown") === "1";
    if (hasShown) return;

    setVisible(true);

    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      window.localStorage.setItem("coswear-splash-shown", "1");
    }, 1900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`startup-splash${fadeOut ? " is-fading" : ""}`}>
      <div className="startup-glow" />
      <img src="/icons/hue-logo.svg" alt="HUE" className="startup-logo" />
      <p className="startup-copy">Create Your Cosplay Mood</p>
    </div>
  );
}
