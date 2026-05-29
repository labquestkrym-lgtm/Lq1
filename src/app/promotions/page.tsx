import type { Metadata } from "next";
import Link from "next/link";
import { PROMOTIONS } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Акции",
  description: "Акции и спецпредложения медицинского центра ЛабКвест в Симферополе. Выгодные комплексные программы обследования.",
};

export default function PromotionsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Акции</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Акции и спецпредложения
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Выгодные программы обследования для вашего здоровья
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMOTIONS.map((promo) => (
            <div key={promo.slug} className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{promo.date}</div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">{promo.title}</h2>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  {promo.price && (
                    <span className="bg-accent-50 text-accent-700 font-bold px-4 py-2 rounded-lg">
                      {promo.price}
                    </span>
                  )}
                  <Link href="/contacts#appointment" className="text-primary-600 font-medium hover:underline">
                    Записаться →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
