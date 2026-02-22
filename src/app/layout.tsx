import type { Metadata } from 'next';
import { Montserrat, Halant, Padauk } from 'next/font/google';
import AOSProvider from '@/components/AOSProvider';
import { ThemeProvider } from '@/components/theme-provider';
import { JsonLd } from '@/components/JsonLd';

import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const halant = Halant({
  variable: '--font-halant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const padauk = Padauk({
  variable: '--font-padauk',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ia-landing.s4vi0r.tech/'),
  title: {
    default: 'Curso de Inteligencia Artificial | UNMSM 2026',
    template: '%s | Curso IA UNMSM',
  },
  description:
    'Curso de Inteligencia Artificial para estudiantes de la Universidad Nacional Mayor de San Marcos. Aprende fundamentos teóricos y prácticos de Machine Learning, Deep Learning e IA Generativa para diseñar, implementar y evaluar soluciones inteligentes.',
  authors: [{ name: 'Eder Gustavo Benites Pardave' }],
  keywords: [
    'inteligencia artificial',
    'IA',
    'machine learning',
    'deep learning',
    'IA generativa',
    'UNMSM',
    'universidad nacional mayor de san marcos',
    'curso',
    'San Marcos',
    'aprendizaje automático',
    'redes neuronales',
    'ciencia de datos',
    'Python',
    'curso IA Perú',
    'agentes inteligentes',
    'CNN',
    'RNN',
    'LSTM',
    'transformers',
    'GPT',
    'GANs',
    'búsqueda informada',
    'aprendizaje por refuerzo',
    'redes neuronales convolucionales',
    'Lima',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://ia-landing.s4vi0r.tech/',
    siteName: 'Curso de IA - UNMSM',
    title: 'Curso de Inteligencia Artificial | UNMSM 2026',
    description:
      'Descubre los fundamentos teóricos y prácticos que te prepararán para diseñar, implementar y evaluar soluciones inteligentes en distintos ámbitos.',
    images: [
      {
        url: '/guerrabarrasv2.png',
        width: 1200,
        height: 630,
        alt: 'Curso de Inteligencia Artificial - Universidad Nacional Mayor de San Marcos',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de Inteligencia Artificial | UNMSM 2026',
    description:
      'Curso completo de IA: desde fundamentos básicos hasta técnicas avanzadas de Deep Learning e IA Generativa.',
    images: [
      {
        url: '/guerrabarrasv2.png',
        alt: 'Curso de Inteligencia Artificial - UNMSM',
      },
    ],
  },
  icons: {
    icon: '/logounmsm.svg',
    apple: '/logounmsm.svg',
  },
  alternates: {
    canonical: 'https://ia-landing.s4vi0r.tech/',
    languages: {
      'es-PE': 'https://ia-landing.s4vi0r.tech/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  creator: 'Eder Gustavo Benites Pardave',
  publisher: 'Universidad Nacional Mayor de San Marcos',
  category: 'education',
  verification: {
    // Agrega tus códigos de verificación aquí cuando los tengas
    // google: 'tu-código-de-verificación-google',
    // yandex: 'tu-código-de-verificación-yandex',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="custom-scrollbar" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${halant.variable} ${padauk.variable} antialiased`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            {children}
            <ThemeToggle />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
