import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Полный спектр медицинских услуг: УЗИ, анализы, приём врачей, капельницы, ЭКГ. Медицинский центр ЛабКвест в Симферополе.",
};

const SERVICE_DETAILS: Record<string, string[]> = {
  doctors: ["Гинеколог", "Эндокринолог", "Кардиолог", "Терапевт", "Невролог"],
  procedures: ["Постановка капельницы", "Инъекция внутривенная", "Инъекция внутримышечная", "Кольпоскопия"],
  diagnostics: ["Холтер-мониторирование", "ЭКГ"],
  analyses: [
    "Комплексные анализы (чекапы)", "Биохимические исследования", "Гормональные исследования",
    "Аллергология", "Онкомаркеры", "Инфекционные заболевания", "Генетические исследования",
    "Бактериологические исследования", "Гемостазиологические исследования", "Витамины",
  ],
  uzi: [
    "УЗИ органов брюшной полости", "УЗИ щитовидной железы", "УЗИ сердца (ЭХО-КГ)",
    "УЗИ молочных желез", "УЗИ почек", "УЗИ малого таза", "УЗИ суставов",
    "УЗИ сосудов (дуплекс)", "УЗИ при беременности", "УЗИ предстательной железы",
  ],
  drips: [
    "Витаминный коктейль", "Детокс", "Иммунитет+", "Антистресс",
    "Энергия+", "Для похудения", "Здоровая печень", "Для спортсменов",
    "Омоложение", "Активность мозга", "Лаеннек",
  ],
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Услуги</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Наши услуги
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Медицинский центр ЛабКвест предлагает полный спектр диагностических и лечебных услуг
        </p>

        <div className="space-y-8">
          {SERVICES.map((service) => (
            <div key={service.slug} className="card p-6 md:p-8" id={service.slug}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl font-bold text-primary-900">{service.name}</h2>
                    <span className="bg-accent-50 text-accent-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {SERVICE_DETAILS[service.slug] && (
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_DETAILS[service.slug].map((item) => (
                        <span key={item} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-8 bg-primary-50 border-primary-200 text-center">
          <h3 className="text-xl font-semibold text-primary-900 mb-2">Не нашли нужную услугу?</h3>
          <p className="text-gray-600 mb-4">Позвоните нам — мы поможем подобрать нужное исследование</p>
          <a href="tel:+79789620303" className="btn-primary">
            +7 978 962-03-03
          </a>
        </div>
      </div>
    </div>
  );
}
