import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/data/clinic";

export const metadata: Metadata = {
  title: "О нас",
  description: `${CLINIC.fullName} — современная клиника в Симферополе. Высококвалифицированные врачи, новейшее оборудование, комфортная атмосфера.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">О нас</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            О медицинском центре
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Медицинский центр «ЛабКвест» в Симферополе — это современная клиника, где каждый
              пациент получает качественную медицинскую помощь в комфортной атмосфере.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Профессионализм</h3>
                <p className="text-gray-600 text-sm">
                  Наш коллектив состоит из опытных врачей и медицинских специалистов, которые
                  постоянно совершенствуют свои навыки и знания.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Современное оборудование</h3>
                <p className="text-gray-600 text-sm">
                  Мы используем новейшее диагностическое оборудование для точных результатов
                  исследований.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Забота о пациентах</h3>
                <p className="text-gray-600 text-sm">
                  Мы создаём дружелюбную и уютную атмосферу, чтобы каждый чувствовал себя
                  комфортно.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Прозрачность</h3>
                <p className="text-gray-600 text-sm">
                  Все наши действия основаны на принципах этики и законности. Мы всегда стремимся
                  к открытости с пациентами.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary-900 mt-12">Наши возможности</h2>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Более 3 500 видов лабораторных исследований</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Более 40 видов ультразвуковых исследований</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Приём врачей: гинеколог, эндокринолог, кардиолог, терапевт, невролог</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Процедурный кабинет: капельницы, инъекции</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Функциональная диагностика: ЭКГ, холтер-мониторирование</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
