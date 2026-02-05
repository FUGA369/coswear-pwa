import "./globals.css";
import { AppProvider } from "../components/AppProvider";
import Tabs from "../components/Tabs";
import AppHeader from "../components/AppHeader";

export const metadata = {
  title: "Coswear",
  description: "Cosplayer-focused WEAR-style PWA",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Coswear"
  }
};

export const viewport = {
  themeColor: "#1dafff",
  viewportFit: "cover"
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
        <div className="mobile-app">
          <AppProvider>
            <div className="app-shell">
              <AppHeader />
              <main>{children}</main>
            </div>
            <Tabs />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
