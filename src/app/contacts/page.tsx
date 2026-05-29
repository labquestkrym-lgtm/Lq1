import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC } from "@/data/clinic";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты медицинского центра ЛабКвест: ${CLINIC.address}. Телефон: ${CLINIC.phones[0]}. Работаем ежедневно.`,
};

export default function ContactsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Контакты</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-12">
          Контакты
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-lg">Адрес</div>
                  <div className="text-gray-600">{CLINIC.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-lg">Телефоны</div>
                  <div className="space-y-1">
                    <a href={`tel:${CLINIC.phonesRaw[0]}`} className="block text-primary-600 hover:underline text-lg">
                      {CLINIC.phones[0]}
                    </a>
                    <a href={`tel:${CLINIC.phonesRaw[1]}`} className="block text-primary-600 hover:underline text-lg">
                      {CLINIC.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-lg">Время работы</div>
                  <div className="text-gray-600 space-y-0.5">
                    <div>Понедельник – Пятница: {CLINIC.workHours.weekdays}</div>
                    <div>Суббота: {CLINIC.workHours.saturday}</div>
                    <div>Воскресенье: {CLINIC.workHours.sunday}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-lg">Мы в соцсетях</div>
                  <div className="flex gap-3 mt-2">
                    <a href={CLINIC.social.vk} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                      ВКонтакте
                    </a>
                    <a href={CLINIC.social.telegram} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium hover:bg-sky-100 transition-colors">
                      Telegram
                    </a>
                    <a href={CLINIC.social.ok} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                      OK
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?pt=${CLINIC.mapCoords[1]},${CLINIC.mapCoords[0]},pm2rdm&z=16&l=map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Карта — Медицинский центр ЛабКвест"
              />
            </div>
          </div>

          {/* Appointment form */}
          <div id="appointment">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">
              Записаться на приём
            </h2>
            <div className="card p-6 md:p-8">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
