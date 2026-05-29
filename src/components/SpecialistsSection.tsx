import Link from "next/link";
import { SPECIALISTS } from "@/data/clinic";

export default function SpecialistsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши специалисты</h2>
          <p className="section-subtitle mx-auto">
            Опытные врачи, которым доверяют тысячи пациентов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SPECIALISTS.map((doc) => (
            <div key={doc.slug} className="card p-6 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary-900 text-sm mb-1 leading-tight">
                {doc.name}
              </h3>
              <p className="text-sm text-accent-600 font-medium mb-1">
                {doc.specialty}
              </p>
              <p className="text-xs text-gray-500">
                {doc.experience}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/specialists" className="btn-outline">
            Все специалисты
          </Link>
        </div>
      </div>
    </section>
  );
}
