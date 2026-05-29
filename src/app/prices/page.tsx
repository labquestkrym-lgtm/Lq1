import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Цены",
  description: "Цены на услуги медицинского центра ЛабКвест в Симферополе. УЗИ от 400₽, приём врачей от 1100₽, анализы от 150₽.",
};

const PRICE_CATEGORIES = [
  {
    name: "Приём врачей",
    items: [
      { service: "Первичный приём терапевта", price: "1 100 ₽" },
      { service: "Первичный приём гинеколога", price: "1 500 ₽" },
      { service: "Первичный приём эндокринолога", price: "1 500 ₽" },
      { service: "Первичный приём кардиолога", price: "1 500 ₽" },
      { service: "Первичный приём невролога", price: "1 500 ₽" },
      { service: "Повторный приём специалиста", price: "1 000 ₽" },
    ],
  },
  {
    name: "УЗИ",
    items: [
      { service: "УЗИ органов брюшной полости", price: "1 200 ₽" },
      { service: "УЗИ щитовидной железы", price: "800 ₽" },
      { service: "УЗИ сердца (ЭХО-КГ)", price: "1 600 ₽" },
      { service: "УЗИ молочных желез", price: "900 ₽" },
      { service: "УЗИ почек", price: "700 ₽" },
      { service: "УЗИ малого таза", price: "1 000 ₽" },
      { service: "УЗИ печени", price: "500 ₽" },
      { service: "УЗИ селезенки", price: "400 ₽" },
      { service: "УЗИ желчного пузыря", price: "500 ₽" },
      { service: "УЗИ суставов", price: "800 ₽" },
    ],
  },
  {
    name: "Процедуры",
    items: [
      { service: "Постановка капельницы", price: "500 ₽" },
      { service: "Инъекция внутривенная", price: "250 ₽" },
      { service: "Инъекция внутримышечная", price: "200 ₽" },
      { service: "Кольпоскопия", price: "1 500 ₽" },
    ],
  },
  {
    name: "Функциональная диагностика",
    items: [
      { service: "ЭКГ", price: "500 ₽" },
      { service: "Холтер-мониторирование (суточное)", price: "2 500 ₽" },
    ],
  },
  {
    name: "Капельницы здоровья",
    items: [
      { service: "Витаминный коктейль", price: "2 500 ₽" },
      { service: "Детокс", price: "3 000 ₽" },
      { service: "Иммунитет+", price: "2 800 ₽" },
      { service: "Антистресс", price: "3 200 ₽" },
      { service: "Энергия+", price: "2 500 ₽" },
      { service: "Лаеннек", price: "4 500 ₽" },
    ],
  },
];

export default function PricesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Цены</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Наши цены
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Актуальный прайс-лист на основные услуги медицинского центра
        </p>

        <div className="space-y-8">
          {PRICE_CATEGORIES.map((category) => (
            <div key={category.name} className="card overflow-hidden">
              <div className="bg-primary-50 px-6 py-4 border-b border-primary-100">
                <h2 className="text-xl font-semibold text-primary-900">{category.name}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {category.items.map((item) => (
                  <div key={item.service} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                    <span className="text-gray-700">{item.service}</span>
                    <span className="font-semibold text-primary-900 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-gray-600 mb-4">
            Полный прайс-лист на все виды анализов и исследований уточняйте по телефону
          </p>
          <a href="tel:+79789620303" className="btn-primary">
            Узнать цену
          </a>
        </div>
      </div>
    </div>
  );
}
