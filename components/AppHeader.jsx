"use client";

import { usePathname } from "next/navigation";

const titles = {
  "/": "Coswear",
  "/search": "Search",
  "/post": "New Post",
  "/saved": "Saved",
  "/my": "My"
};

export default function AppHeader() {
  const pathname = usePathname();

  if (pathname === "/my" || pathname.startsWith("/looks/")) {
    return null;
  }

  const title = titles[pathname] || "Coswear";

  return (
    <header className="app-header">
      <div>
        <div className="app-title">{title}</div>
        <div className="app-subtitle">Cosplay inspiration feed</div>
      </div>
      <div className="header-actions">
        <button type="button" className="icon-button" aria-label="通知">
          🔔
        </button>
        <button type="button" className="icon-button" aria-label="メッセージ">
          💬
        </button>
      </div>
    </header>
  );
}
