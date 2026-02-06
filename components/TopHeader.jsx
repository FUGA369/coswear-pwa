"use client";

import { usePathname } from "next/navigation";

export default function TopHeader() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <header className="site-header">
      <img src="/icons/hue-logo.svg" alt="HUE" className="site-logo" />
    </header>
  );
}
