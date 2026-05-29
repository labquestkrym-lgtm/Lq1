---
name: testing-labquest-website
description: Test the LabQuest medical center website end-to-end. Use when verifying UI, navigation, forms, or responsive design changes.
---

# Testing LabQuest Website

## Prerequisites

- Node.js 18+ installed
- `npm install` completed in the project root

## Starting the Dev Server

```bash
cd /home/ubuntu/repos/labquest-website
npx next dev --port 3000
```

Server ready at http://localhost:3000 (typically starts in ~1-2 seconds).

If port 3000 is occupied, kill the existing process:
```bash
fuser -k 3000/tcp
```

## Pages to Test

| Route | Key Content |
|-------|-------------|
| `/` | Hero with clinic name, stats (3500+, 40+, 5), services section, specialists, promotions, map |
| `/about` | Clinic values and history |
| `/services` | 6 service cards with prices and tags |
| `/specialists` | 5 doctor profiles with specialties |
| `/prices` | Price list by category |
| `/promotions` | Active promotions |
| `/contacts` | Contact info, map, appointment form |

## Key Test Flows

### 1. Homepage Hero
- Verify h1 contains "Медицинский центр ЛабКвест" and "в Симферополе"
- Verify stats: "3 500+" (анализов), "40+" (видов УЗИ), "5" (специалистов)
- Verify WhatsApp button (green circle, bottom-right, fixed position)
- Verify top bar shows address, hours, phone numbers

### 2. Navigation
- Desktop (lg+ breakpoint, 1024px+): 7 nav items visible in header
- Clicking nav links routes to correct pages
- Each page has breadcrumbs ("Главная / PageName")

### 3. Mobile Responsive (< 1024px)
- Desktop nav hidden, burger button (☰) visible
- Click burger → mobile menu opens with all 7 items vertically
- Click X → menu closes
- Use Chrome DevTools responsive mode (Ctrl+Shift+M) to toggle viewport

### 4. Appointment Form (`/contacts` page)
- Fields: Ваше имя (text, required), Телефон (tel, required), Направление (select), consent checkbox (required)
- **Note:** Cyrillic input via `type` tool may not work; use browser console with React-compatible input simulation:
  ```js
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(document.getElementById('name'), 'Тест Тестов');
  document.getElementById('name').dispatchEvent(new Event('input', { bubbles: true }));
  ```
- After submit: form replaced by success message "Заявка отправлена!" with green checkmark
- Success state auto-resets after 5 seconds

### 5. Footer
- Dark background (primary-900)
- 4 columns: Logo+description, Navigation links, Services links, Contacts
- Social links: VK, TG, OK
- Address, phones, hours displayed

## Data Source

All clinic data is hardcoded in `src/data/clinic.ts` — no external API calls needed for testing.

## Common Issues

- **Port 3000 in use:** Kill with `fuser -k 3000/tcp` (not `lsof` which may not be installed)
- **Cyrillic typing:** Use browser console for React-controlled inputs with Cyrillic text
- **No CI configured:** This repo has no GitHub Actions — verify locally with `npm run build`

## Build Verification

```bash
npm run build
```

Expected: All 11 routes generate statically, First Load JS ~96 KB, no TypeScript or lint errors.

## Devin Secrets Needed

None — all data is hardcoded, no external services required for local testing.
