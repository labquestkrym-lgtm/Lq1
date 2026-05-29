import { CLINIC } from "@/data/clinic";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="section-title">Как нас найти</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary-900">Адрес</div>
                  <div className="text-gray-600">{CLINIC.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary-900">Часы работы</div>
                  <div className="text-gray-600 text-sm space-y-0.5">
                    <div>Понедельник – Пятница: {CLINIC.workHours.weekdays}</div>
                    <div>Суббота: {CLINIC.workHours.saturday}</div>
                    <div>Воскресенье: {CLINIC.workHours.sunday}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-primary-900">Телефоны</div>
                  <div className="space-y-1">
                    <a href={`tel:${CLINIC.phonesRaw[0]}`} className="block text-primary-600 hover:underline">
                      {CLINIC.phones[0]}
                    </a>
                    <a href={`tel:${CLINIC.phonesRaw[1]}`} className="block text-primary-600 hover:underline">
                      {CLINIC.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="h-80 lg:h-96 bg-gray-200 rounded-2xl overflow-hidden relative">
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
      </div>
    </section>
  );
}
