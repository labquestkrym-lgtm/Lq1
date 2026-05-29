import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SpecialistsSection from "@/components/SpecialistsSection";
import StatsSection from "@/components/StatsSection";
import PromotionsSection from "@/components/PromotionsSection";
import AppointmentSection from "@/components/AppointmentSection";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsSection />
      <SpecialistsSection />
      <PromotionsSection />
      <AppointmentSection />
      <MapSection />
    </>
  );
}
