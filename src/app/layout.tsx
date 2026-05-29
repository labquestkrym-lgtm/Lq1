import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Медицинский центр ЛабКвест | Симферополь",
    template: "%s | ЛабКвест Симферополь",
  },
  description:
    "Медицинский центр ЛабКвест в Симферополе: более 3500 анализов, 40+ видов УЗИ, приём врачей-специалистов. Записаться: +7 978 962-03-03",
  keywords: [
    "медицинский центр симферополь",
    "узи симферополь",
    "анализы симферополь",
    "лабквест",
    "врачи симферополь",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ЛабКвест — Медицинский центр в Симферополе",
    title: "Медицинский центр ЛабКвест | Симферополь",
    description:
      "Более 3500 анализов, 40+ видов УЗИ, приём врачей. Работаем ежедневно с 7:30.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <JsonLd />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
