import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ИИ × АПК — практический портал',
  description: 'Кейсы, рабочая тетрадь и материалы по безопасному внедрению ИИ в АПК.',
  openGraph: {
    title: 'Рабочая тетрадь по ИИ для руководителей АПК',
    description: 'Практические правила для отчётов, презентаций и безопасной работы с данными.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
