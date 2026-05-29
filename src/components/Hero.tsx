import Link from "next/link";
import { CLINIC } from "@/data/clinic";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-4 py-1.5 text-sm text-accent-700 font-medium">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Работаем ежедневно с 7:30
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight">
              {CLINIC.fullName}
              <span className="block text-primary-600 mt-2">в Симферополе</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Современная диагностика, опытные врачи и более 3 500 видов лабораторных исследований.
              Заботимся о вашем здоровье каждый день.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/contacts#appointment" className="btn-primary text-base px-8 py-4">
                Записаться на приём
              </Link>
              <a href={`tel:${CLINIC.phonesRaw[0]}`} className="btn-outline text-base px-8 py-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary-900">3 500+</div>
                <div className="text-sm text-gray-500">анализов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-900">40+</div>
                <div className="text-sm text-gray-500">видов УЗИ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-900">5</div>
                <div className="text-sm text-gray-500">специалистов</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-sm font-medium text-primary-900">УЗИ от 400 ₽</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-sm font-medium text-primary-900">Приём врачей от 1 100 ₽</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <div className="text-sm font-medium text-primary-900">Капельницы от 200 ₽</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
