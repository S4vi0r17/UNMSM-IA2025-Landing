import { WeekCardProps } from '@/components/WeekCard';

interface UnitData {
  title: string;
  weeks: WeekCardProps[];
  columns: number;
  hasGroup?: boolean;
}

export const programData: UnitData[] = [
  {
    title: 'Unidad 1: Fundamentos de IA y Agentes',
    weeks: [
      {
        weekNumber: 1,
        title: 'Fundamentos de IA',
        description:
          'Introducción a conceptos, historia, áreas y aprendizaje automático.',
        variant: 'light',
        hasGroup: false,
      },
      {
        weekNumber: 2,
        title: 'Agentes Inteligentes',
        description: 'Conceptos, tipos, arquitectura y diseño de agentes.',
        variant: 'light',
        hasGroup: false,
      },
    ],
    columns: 2,
  },
  {
    title: 'Unidad 2: Estrategias de Búsqueda y Juegos',
    weeks: [
      {
        weekNumber: 3,
        title: 'Búsquedas',
        description:
          'Resolución de problemas mediante búsquedas: ciegas e informadas.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 4,
        title: 'Juegos de Estrategia',
        description:
          'Desarrollo y análisis de algoritmos para juegos humano-máquina y con aprendizaje automático.',
        variant: 'dark',
        hasGroup: false,
      },
    ],
    columns: 2,
  },
  {
    title: 'Unidad 3: Machine Learning',
    weeks: [
      {
        weekNumber: 5,
        title: 'Métodos Supervisados',
        description:
          'Fundamentos, aplicaciones, algoritmos básicos y desarrollo de modelos en Python.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 6,
        groupLink: 'https://fisigrupo6.wordpress.com/',
      },
      {
        weekNumber: 6,
        title: 'Métodos No Supervisados',
        description:
          'Introducción al aprendizaje no supervisado, aplicaciones y modelado práctico.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 4,
        groupLink: 'https://fisiiagrupo4.wordpress.com/',
      },
      {
        weekNumber: 7,
        title: 'Métodos por Refuerzo',
        description:
          'Fundamentos, algoritmos y aplicación práctica en entornos dinámicos.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 7,
        groupLink: 'https://gabplus2802.github.io/ia-pagina-web-grupo07/',
      },
    ],
    columns: 3,
  },
  {
    title: 'Evaluación Parcial',
    weeks: [
      {
        weekNumber: 8,
        title: 'Examen Parcial',
        description: 'Evaluación acumulativa de los contenidos vistos.',
        hasGroup: false,
        variant: 'light',
      },
    ],
    columns: 1,
  },
  {
    title: 'Unidad 4: Deep Learning',
    weeks: [
      {
        weekNumber: 9,
        title: 'Fundamentos del Deep Learning',
        description:
          'Conceptos básicos, diferencias con ML clásico, redes neuronales y visualización de convergencia.',
        variant: 'white',
        hasGroup: true,
        groupNumber: 2,
        groupLink: 'https://whimsical-mooncake-f0edd8.netlify.app/',
      },
      {
        weekNumber: 10,
        title: 'Redes Neuronales Convolucionales',
        description:
          'Arquitecturas clásicas y construcción de modelos CNN en Python.',
        variant: 'white',
        hasGroup: true,
        groupNumber: 3,
        groupLink: 'https://grupo3inteligenciaartificial2025.wordpress.com/',
      },
      {
        weekNumber: 11,
        title: 'Redes Recurrentes y LSTM',
        description:
          'Funcionamiento, aplicaciones y modelado para series temporales y procesamiento de texto.',
        variant: 'white',
        hasGroup: true,
        groupNumber: 5,
        groupLink: 'https://proyecto-ia-rnn-2c7q.vercel.app/',
      },
    ],
    columns: 3,
  },
  {
    title: 'Unidad 5: IA Generativa',
    weeks: [
      {
        weekNumber: 12,
        title: 'Fundamentos de la IA Generativa',
        description:
          'Introducción a modelos generativos, diferencias y aplicaciones, con énfasis en Transformers y GPT.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 1,
        groupLink: 'https://studio-black-ten.vercel.app/',
      },
      {
        weekNumber: 13,
        title: 'Redes Generativas Adversarias',
        description:
          'Aplicaciones en generación de imágenes y transferencia de estilo mediante GANs.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 8,
        groupLink: 'https://gan-g8.vercel.app/',
      },
      {
        weekNumber: 14,
        title: 'IA Creativa y Ética',
        description:
          'Conceptos y aplicaciones en arte, música, narrativa; consideraciones legales y éticas.',
        variant: 'green',
        hasGroup: true,
        groupNumber: 9,
        groupLink: 'https://iagrupo9.wordpress.com/',
      },
    ],
    columns: 3,
  },
  {
    title: 'Evaluación Final',
    weeks: [
      {
        weekNumber: 15,
        title: 'Presentación de Trabajos',
        description: 'Exposición y discusión de proyectos finales en equipo.',
        variant: 'dark',
        hasGroup: false,
      },
      {
        weekNumber: 16,
        title: 'Examen Final',
        description:
          'Evaluación final que integra todo lo aprendido durante el curso.',
        variant: 'dark',
        hasGroup: false,
      },
    ],
    columns: 2,
  },
];
