"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC } from "@/data/clinic";

const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/services", label: "Услуги" },
  { href: "/specialists", label: "Специалисты" },
  { href: "/prices", label: "Цены" },
  { href: "/promotions", label: "Акции" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {CLINIC.address}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Пн–Пт: {CLINIC.workHours.weekdays} | Сб–Вс: {CLINIC.workHours.saturday}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${CLINIC.phonesRaw[0]}`} className="hover:text-accent-300 transition-colors">
              {CLINIC.phones[0]}
            </a>
            <a href={`tel:${CLINIC.phonesRaw[1]}`} className="hover:text-accent-300 transition-colors">
              {CLINIC.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LQ</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-primary-900 text-lg leading-tight">ЛабКвест</div>
              <div className="text-xs text-gray-500">Медицинский центр</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a href={`tel:${CLINIC.phonesRaw[0]}`} className="md:hidden p-2 text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link href="/contacts#appointment" className="hidden sm:inline-flex btn-primary text-sm">
              Записаться
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              aria-label="Меню"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a href={`tel:${CLINIC.phonesRaw[0]}`} className="block px-4 py-2 text-primary-600 font-medium">
                  {CLINIC.phones[0]}
                </a>
                <a href={`tel:${CLINIC.phonesRaw[1]}`} className="block px-4 py-2 text-primary-600 font-medium">
                  {CLINIC.phones[1]}
                </a>
                <Link href="/contacts#appointment" className="btn-primary w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                  Записаться на приём
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
