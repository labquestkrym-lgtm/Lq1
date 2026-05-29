import AppointmentForm from "./AppointmentForm";

export default function AppointmentSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-50" id="appointment">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Записаться на приём</h2>
            <p className="section-subtitle mx-auto">
              Оставьте заявку и мы перезвоним вам для подтверждения записи
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
