import type { Metadata } from "next";
import Link from "next/link";
import { SPECIALISTS } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Специалисты",
  description: "Врачи медицинского центра ЛабКвест в Симферополе: гинеколог, эндокринолог, кардиолог, терапевт, невролог, УЗИ-специалист.",
};

export default function SpecialistsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Специалисты</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Наши специалисты
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Опытные врачи с многолетним стажем работы, которым доверяют тысячи пациентов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALISTS.map((doc) => (
            <div key={doc.slug} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-primary-900 text-lg mb-1">
                    {doc.name}
                  </h2>
                  <p className="text-accent-600 font-medium mb-1">{doc.specialty}</p>
                  <p className="text-sm text-gray-500">{doc.experience}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/contacts#appointment" className="text-sm text-primary-600 font-medium hover:underline">
                  Записаться на приём →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
