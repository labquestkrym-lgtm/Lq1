import Link from "next/link";
import { CLINIC } from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LQ</span>
              </div>
              <div>
                <div className="font-bold text-lg">ЛабКвест</div>
                <div className="text-sm text-white/60">Медицинский центр</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Современная диагностика и лечение в Симферополе. Более 3 500 видов анализов, 40+ видов УЗИ, приём врачей-специалистов.
            </p>
            <div className="flex gap-3">
              <a href={CLINIC.social.vk} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="ВКонтакте">
                <span className="text-sm font-bold">VK</span>
              </a>
              <a href={CLINIC.social.telegram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Telegram">
                <span className="text-sm font-bold">TG</span>
              </a>
              <a href={CLINIC.social.ok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Одноклассники">
                <span className="text-sm font-bold">OK</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Услуги" },
                { href: "/specialists", label: "Специалисты" },
                { href: "/prices", label: "Цены" },
                { href: "/promotions", label: "Акции" },
                { href: "/about", label: "О нас" },
                { href: "/contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              {[
                "Приём врачей",
                "УЗИ",
                "Анализы",
                "Капельницы",
                "ЭКГ",
                "Процедурный кабинет",
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">{CLINIC.address}</span>
              </div>
              <div className="space-y-1">
                <a href={`tel:${CLINIC.phonesRaw[0]}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-accent-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {CLINIC.phones[0]}
                </a>
                <a href={`tel:${CLINIC.phonesRaw[1]}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors pl-7">
                  {CLINIC.phones[1]}
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-5 h-5 text-accent-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Пн–Пт: {CLINIC.workHours.weekdays}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {CLINIC.fullName} в Симферополе. Все права защищены.
          </p>
          <p className="text-xs text-white/40">
            Есть противопоказания. Требуется консультация специалиста. 18+
          </p>
        </div>
      </div>
    </footer>
  );
}
