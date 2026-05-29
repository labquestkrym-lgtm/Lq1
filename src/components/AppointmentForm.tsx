"use client";

import { useState } from "react";
import { SERVICES } from "@/data/clinic";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-600">Мы перезвоним вам в ближайшее время для подтверждения записи.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="appointment">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Иван Иванов"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Направление
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-gray-700"
        >
          <option value="">Выберите направление</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" id="consent" required className="mt-1 rounded border-gray-300" />
        <label htmlFor="consent" className="text-sm text-gray-500">
          Даю согласие на обработку персональных данных
        </label>
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Записаться на приём
      </button>
    </form>
  );
}
