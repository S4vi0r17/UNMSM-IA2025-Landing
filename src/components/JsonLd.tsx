export function JsonLd() {
  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Curso de Inteligencia Artificial',
    description:
      'Curso de Inteligencia Artificial para estudiantes de la Universidad Nacional Mayor de San Marcos. Aprende fundamentos teóricos y prácticos de Machine Learning, Deep Learning e IA Generativa.',
    provider: {
      '@type': 'Organization',
      name: 'Universidad Nacional Mayor de San Marcos',
      sameAs: 'https://unmsm.edu.pe',
      logo: 'https://ia-landing.s4vi0r.tech/logounmsm.svg',
    },
    url: 'https://ia-landing.s4vi0r.tech/',
    image: 'https://ia-landing.s4vi0r.tech/guerrabarrasv2.png',
    inLanguage: 'es',
    courseCode: 'IA-2026',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      courseWorkload: 'PT16W',
      startDate: '2026-04-01',
      endDate: '2026-07-31',
      instructor: {
        '@type': 'Person',
        name: 'Luis Angel Guerra Grados',
      },
      location: {
        '@type': 'Place',
        name: 'Universidad Nacional Mayor de San Marcos',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lima',
          addressCountry: 'PE',
        },
      },
    },
    teaches: [
      'Fundamentos de Inteligencia Artificial',
      'Agentes Inteligentes',
      'Estrategias de Búsqueda',
      'Machine Learning',
      'Deep Learning',
      'IA Generativa',
    ],
    about: [
      {
        '@type': 'Thing',
        name: 'Inteligencia Artificial',
      },
      {
        '@type': 'Thing',
        name: 'Machine Learning',
      },
      {
        '@type': 'Thing',
        name: 'Deep Learning',
      },
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Curso de Inteligencia Artificial | UNMSM 2026',
    url: 'https://ia-landing.s4vi0r.tech/',
    description:
      'Página oficial del Curso de Inteligencia Artificial de la Universidad Nacional Mayor de San Marcos.',
    publisher: {
      '@type': 'Organization',
      name: 'Universidad Nacional Mayor de San Marcos',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ia-landing.s4vi0r.tech/logounmsm.svg',
      },
    },
    inLanguage: 'es',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://ia-landing.s4vi0r.tech/',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
