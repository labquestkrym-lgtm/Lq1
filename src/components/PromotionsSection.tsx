import Link from "next/link";
import { PROMOTIONS } from "@/data/clinic";

export default function PromotionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="section-title">Акции и спецпредложения</h2>
            <p className="section-subtitle">
              Выгодные программы обследования для вашего здоровья
            </p>
          </div>
          <Link href="/promotions" className="hidden md:inline-flex btn-outline text-sm">
            Все акции
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMOTIONS.map((promo) => (
            <div key={promo.slug} className="card overflow-hidden group">
              <div className="h-40 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-400 mb-2">{promo.date}</div>
                <h3 className="font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {promo.description}
                </p>
                {promo.price && (
                  <span className="inline-block bg-accent-50 text-accent-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {promo.price}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/promotions" className="btn-outline">
            Все акции
          </Link>
        </div>
      </div>
    </section>
  );
}
