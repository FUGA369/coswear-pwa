import "./globals.css";
import { AppProvider } from "../components/AppProvider";
import Tabs from "../components/Tabs";
import AppHeader from "../components/AppHeader";

export const metadata = {
  title: "Coswear",
  description: "Cosplayer-focused WEAR-style PWA",
  manifest: "/manifest.json",
  themeColor: "#ff5c8d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <AppProvider>
          <div className="app-shell">
            <AppHeader />
            <main>{children}</main>
          </div>
          <Tabs />
        </AppProvider>
      </body>
    </html>
  );
}
