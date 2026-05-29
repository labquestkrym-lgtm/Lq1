import { CLINIC } from "@/data/clinic";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC.fullName,
    alternateName: CLINIC.name,
    url: CLINIC.site,
    telephone: CLINIC.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Гагарина, 17",
      addressLocality: "Симферополь",
      addressRegion: "Республика Крым",
      postalCode: "295000",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.mapCoords[0],
      longitude: CLINIC.mapCoords[1],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:30",
        closes: "15:00",
      },
    ],
    medicalSpecialty: [
      "Gynecology",
      "Endocrinology",
      "Cardiology",
      "Neurology",
      "Diagnostic",
    ],
    availableService: [
      { "@type": "MedicalTest", name: "УЗИ" },
      { "@type": "MedicalTest", name: "Анализы крови" },
      { "@type": "MedicalTest", name: "ЭКГ" },
    ],
    sameAs: [
      CLINIC.social.vk,
      CLINIC.social.telegram,
      CLINIC.social.ok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
