import "./globals.css";
import { AppProvider } from "../components/AppProvider";
import Tabs from "../components/Tabs";
import StartupSplash from "../components/StartupSplash";
import TopHeader from "../components/TopHeader";

export const metadata = {
  title: "Coswear",
  description: "Cosplayer-focused WEAR-style PWA",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Coswear"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff"
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
          <StartupSplash />
          <div className="app-shell">
            <TopHeader />
            <main>{children}</main>
            <Tabs />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
