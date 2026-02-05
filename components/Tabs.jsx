"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/search", label: "Search", icon: "⌕" },
  { href: "/post", label: "Post", icon: "▢" },
  { href: "/saved", label: "Saved", icon: "♡" },
  { href: "/my", label: "My", icon: "◯" }
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="tabs">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`tab-item${isActive ? " active" : ""}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
