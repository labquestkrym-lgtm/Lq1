export const CLINIC = {
  name: "ЛабКвест",
  fullName: "Медицинский центр ЛабКвест",
  city: "Симферополь",
  address: "г. Симферополь, ул. Гагарина, 17",
  phones: ["+7 978 962-03-03", "+7 978 963-03-03"],
  phonesRaw: ["+79789620303", "+79789630303"],
  whatsapp: "+79789630303",
  workHours: {
    weekdays: "7:30 – 18:00",
    saturday: "7:30 – 15:00",
    sunday: "7:30 – 15:00",
  },
  social: {
    vk: "https://vk.com/labquest_simferopol",
    ok: "https://ok.ru/labkvestsi",
    telegram: "https://t.me/labquest_simferopol",
  },
  site: "https://med-krym.ru",
  mapCoords: [44.952117, 34.102417] as [number, number],
};

export const SERVICES = [
  {
    slug: "doctors",
    name: "Приём врачей",
    description: "Высококвалифицированные специалисты: гинеколог, эндокринолог, кардиолог, терапевт, невролог",
    price: "от 1 100 ₽",
    icon: "stethoscope",
  },
  {
    slug: "procedures",
    name: "Процедурный кабинет",
    description: "Капельницы, внутривенные и внутримышечные инъекции в комфортных условиях",
    price: "от 200 ₽",
    icon: "syringe",
  },
  {
    slug: "diagnostics",
    name: "Функциональная диагностика",
    description: "Холтер-мониторирование, ЭКГ и другие методы исследования работы сердца",
    price: "от 800 ₽",
    icon: "heart-pulse",
  },
  {
    slug: "analyses",
    name: "Анализы",
    description: "Более 3 500 видов лабораторных исследований: биохимия, гормоны, аллергология, инфекции",
    price: "от 150 ₽",
    icon: "flask",
  },
  {
    slug: "uzi",
    name: "УЗИ",
    description: "Более 40 видов ультразвуковых исследований на современном оборудовании",
    price: "от 400 ₽",
    icon: "scan",
  },
  {
    slug: "drips",
    name: "Капельницы здоровья",
    description: "Витаминные коктейли, детокс, иммунитет, энергия, антистресс и другие программы",
    price: "от 1 500 ₽",
    icon: "droplets",
  },
];

export const SPECIALISTS = [
  {
    slug: "sherstobitov-aleksandr",
    name: "Шерстобитов Александр Александрович",
    specialty: "Врач ультразвуковой диагностики",
    experience: "Более 10 лет опыта",
  },
  {
    slug: "skoromnaya-elena",
    name: "Скоромная Елена Ивановна",
    specialty: "Эндокринолог",
    experience: "Более 15 лет опыта",
  },
  {
    slug: "hachatryan-anait",
    name: "Хачатрян Анаит Лаврентовна",
    specialty: "Акушер-гинеколог",
    experience: "Более 12 лет опыта",
  },
  {
    slug: "farikova-elvida",
    name: "Фарикова Эльвида Джемаладиновна",
    specialty: "Терапевт",
    experience: "Более 8 лет опыта",
  },
  {
    slug: "zhukovskaya-natalia",
    name: "Жуковская Наталья Вячеславовна",
    specialty: "Невролог",
    experience: "Более 10 лет опыта",
  },
];

export const PROMOTIONS = [
  {
    slug: "ekspress-chek-ap",
    title: "Экспресс чек-ап + капельница",
    date: "24 апреля 2025",
    price: "5 990 ₽",
    description: "Комплексное обследование + витаминная капельница для быстрой диагностики и восстановления",
  },
  {
    slug: "6-kapelnica-v-podarok",
    title: "6-ая капельница в подарок",
    date: "24 апреля 2025",
    description: "При покупке курса из 6 капельниц — 6-ая капельница в подарок",
  },
  {
    slug: "dela-serdechnie-std",
    title: "Дела сердечные. Базовый",
    date: "6 апреля 2024",
    price: "3 500 ₽",
    description: "Комплексное обследование сердца: ЭКГ + УЗИ сердца + консультация кардиолога",
  },
  {
    slug: "dela-serdechnie-rasshiren",
    title: "Дела сердечные. Расширенный",
    date: "3 апреля 2024",
    price: "5 900 ₽",
    description: "Расширенное обследование сердца: ЭКГ + Холтер + УЗИ + анализы + консультация кардиолога",
  },
];

export const STATS = [
  { value: "3 500+", label: "лабораторных исследований" },
  { value: "40+", label: "видов УЗИ" },
  { value: "5", label: "врачей-специалистов" },
  { value: "7", label: "лет работы" },
];
