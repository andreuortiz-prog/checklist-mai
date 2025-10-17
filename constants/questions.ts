import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    key: 'strategy',
    title: 'Estrategia (Strategy)',
    questions: [
      { id: 's1', text: '¿Nuestra estrategia de IA está claramente definida y directamente alineada con los objetivos de negocio clave (ej. aumentar ingresos, reducir costes, mejorar experiencia del cliente)?' },
      { id: 's2', text: '¿Existe un patrocinio claro por parte de la alta dirección, con presupuesto asignado y un campeón ejecutivo visible?' },
      { id: 's3', text: '¿Hemos identificado y priorizado casos de uso específicos para la IA con un retorno de la inversión (ROI) estimado y métricas de éxito claras?' },
      { id: 's4', text: '¿Existe un entendimiento básico a nivel directivo sobre qué es la IA y los potenciales beneficios que podría traer al negocio?' },
      { id: 's5', text: '¿Se han realizado conversaciones informales o exploratorias sobre cómo la IA podría resolver problemas específicos en la empresa?' },
      { id: 's6', text: '¿Se ha analizado cómo nuestros competidores están utilizando la IA o la analítica de datos?' },
      { id: 's7', text: '¿Existe algún presupuesto, por pequeño que sea, asignado formalmente a la exploración de nuevas tecnologías o a la innovación?' },
      { id: 's8', text: '¿La empresa ha definido formalmente cuáles son sus KPIs (Indicadores Clave de Rendimiento) más importantes, independientemente de la IA?' },
      { id: 's9', text: '¿Se han identificado problemas de negocio específicos (ej. \'alta tasa de abandono de clientes\') que podrían ser candidatos para soluciones analíticas, aunque no se mencione la IA explícitamente?' }
    ],
  },
  {
    key: 'data',
    title: 'Datos (Data)',
    questions: [
      { id: 'd1', text: '¿Nuestros datos son fácilmente accesibles para los equipos correctos, y contamos con procesos automatizados para asegurar su calidad, integridad y consistencia?' },
      { id: 'd2', text: '¿Disponemos de una infraestructura de datos moderna y escalable (ej. Data Lakehouse, plataformas en la nube) que soporte las necesidades de la IA?' },
      { id: 'd3', text: '¿Existen roles definidos (ej. Data Stewards, Data Owners) responsables de la gestión y calidad de los dominios de datos críticos?' },
      { id: 'd4', text: '¿La empresa recopila y almacena digitalmente los datos clave de sus operaciones (ej. ventas, clientes, producción) de forma consistente?' },
      { id: 'd5', text: '¿Tenemos un inventario básico que nos diga qué datos poseemos y dónde se encuentran, aunque sea de forma general?' },
      { id: 'd6', text: '¿Existe un proceso, aunque sea manual, para revisar la calidad de los datos antes de utilizarlos en informes importantes?' },
      { id: 'd7', text: '¿Se utilizan los mismos sistemas o fuentes de datos de referencia (ej. el mismo ERP o CRM) en toda la empresa para métricas clave como las ventas?' },
      { id: 'd8', text: '¿Los datos generados por diferentes departamentos se almacenan de una manera que permita, al menos teóricamente, cruzarlos o combinarlos?' },
      { id: 'd9', text: '¿Existe documentación, aunque sea básica, sobre qué significa cada campo en nuestras principales fuentes de datos (ej. un diccionario de datos)?' }
    ],
  },
  {
    key: 'infrastructure',
    title: 'Infraestructura y Herramientas (Infrastructure)',
    questions: [
      { id: 'i1', text: '¿Hemos estandarizado una plataforma y un conjunto de herramientas para el desarrollo, entrenamiento y despliegue de modelos de IA?' },
      { id: 'i2', text: '¿Nuestra infraestructura (cloud, híbrida o on-premise) permite escalar los recursos computacionales de forma flexible según la demanda de los proyectos de IA?' },
      { id: 'i3', text: '¿Tenemos procesos automatizados y estandarizados para el ciclo de vida completo de los modelos (CI/CD, monitoreo, re-entrenamiento)?' },
      { id: 'i4', text: '¿Contamos con herramientas básicas de business intelligence (ej. Power BI, Tableau) o software de reportería para explorar nuestros datos?' },
      { id: 'i5', text: '¿Existe un departamento de TI o un equipo técnico centralizado que gestiona la tecnología de la empresa?' },
      { id: 'i6', text: '¿Disponemos de una base de datos centralizada para nuestros datos operativos más importantes, o la información reside principalmente en archivos aislados y hojas de cálculo?' },
      { id: 'i7', text: '¿Nuestra conectividad a internet y la capacidad de nuestros servidores son adecuadas para manejar un aumento en el volumen de datos o el uso de servicios en la nube?' },
      { id: 'i8', text: '¿Los empleados tienen acceso a herramientas de software que les permitan realizar análisis básicos por sí mismos (ej. hojas de cálculo avanzadas)?' },
      { id: 'i9', text: '¿La empresa tiene una política de respaldo (backup) y recuperación de sus datos digitales críticos?' }
    ],
  },
  {
    key: 'talent',
    title: 'Talento y Capacidades (Talent)',
    questions: [
      { id: 't1', text: '¿Contamos con los perfiles técnicos necesarios (ej. científicos de datos, ingenieros de ML, arquitectos de datos) para ejecutar nuestra estrategia?' },
      { id: 't2', text: '¿Estamos invirtiendo en la formación del personal no técnico para que comprendan cómo la IA puede impactar su trabajo y puedan identificar oportunidades?' },
      { id: 't3', text: '¿Tenemos un plan definido para atraer, desarrollar y retener al talento especializado en IA?' },
      { id: 't4', text: '¿Hay personas en la organización con fuertes habilidades analíticas (aunque no sean \'científicos de datos\') que puedan interpretar datos y generar informes?' },
      { id: 't5', text: '¿La empresa incentiva de alguna forma la formación y el aprendizaje de nuevas habilidades tecnológicas entre sus empleados?' },
      { id: 't6', text: '¿Hemos identificado a "campeones de datos" informales en diferentes departamentos que muestran interés y habilidad para el análisis?' },
      { id: 't7', text: '¿Los gerentes animan activamente a sus equipos a dedicar tiempo al aprendizaje y la experimentación con datos, aunque no forme parte de sus responsabilidades principales?' },
      { id: 't8', text: '¿La descripción de los puestos de trabajo para roles de negocio incluye explícitamente habilidades deseables relacionadas con el manejo de datos?' },
      { id: 't9', text: '¿Existe algún programa de mentoría (formal o informal) donde empleados con más habilidades analíticas ayuden a otros a desarrollar esas competencias?' }
    ],
  },
  {
    key: 'governance',
    title: 'Gobernanza y Ética (Governance)',
    questions: [
      { id: 'g1', text: '¿Hemos establecido un marco de gobernanza formal que incluye principios de IA responsable, ética, justicia (fairness) y transparencia?' },
      { id: 'g2', text: '¿Tenemos procesos para evaluar y mitigar los riesgos asociados a los modelos de IA (ej. sesgos, privacidad, seguridad) y asegurar el cumplimiento normativo (ej. GDPR)?' },
      { id: 'g3', text: '¿Están claramente definidos los roles y responsabilidades sobre los modelos de IA, desde su desarrollo hasta su puesta en producción y sus resultados?' },
      { id: 'g4', text: '¿Tenemos políticas claras sobre la privacidad y el uso adecuado de los datos de los clientes y de la empresa?' },
      { id: 'g5', text: '¿Aseguramos el cumplimiento de las regulaciones locales básicas de protección de datos?' },
      { id: 'g6', text: '¿Están definidos y gestionados los permisos de acceso a los datos sensibles para asegurar que solo el personal autorizado pueda verlos?' },
      { id: 'g7', text: '¿Tenemos un entendimiento claro de qué datos son considerados sensibles o confidenciales dentro de la organización?' },
      { id: 'g8', text: '¿Se ha comunicado claramente a todos los empleados cuáles son sus responsabilidades en cuanto al manejo y la seguridad de los datos?' },
      { id: 'g9', text: '¿Existe un proceso definido para solicitar acceso a nuevos conjuntos de datos, o es completamente ad-hoc y basado en relaciones personales?' }
    ],
  },
  {
    key: 'culture',
    title: 'Cultura y Organización (Culture)',
    questions: [
      { id: 'c1', text: '¿Nuestra cultura organizacional promueve la toma de decisiones basada en datos y evidencia por encima de la intuición?' },
      { id: 'c2', text: '¿Fomentamos activamente la colaboración entre los equipos técnicos (IA, datos) y las unidades de negocio para co-crear soluciones?' },
      { id: 'c3', text: '¿Se permite y alienta la experimentación, aceptando el fallo como parte del proceso de innovación en IA?' },
      { id: 'c4', text: '¿Los líderes están abiertos a revisar informes con datos antes de tomar decisiones, en lugar de basarse únicamente en la intuición?' },
      { id: 'c5', text: '¿Los departamentos tienden a trabajar en silos, o se fomenta de alguna manera la colaboración entre áreas diferentes?' },
      { id: 'c6', text: 'Cuando se presenta una nueva iniciativa, ¿es común que se pregunte "¿qué datos respaldan esta idea?" como parte del proceso de evaluación?' },
      // FIX: The file was truncated, causing a syntax error. Completing the list of questions for the 'culture' category.
      { id: 'c7', text: '¿Se comparten públicamente (dentro de la empresa) los resultados y aprendizajes de los proyectos de datos, tanto los éxitos como los fracasos?' },
      { id: 'c8', text: '¿La organización tiene un lenguaje común o una taxonomía para hablar de datos y análisis, que es entendida tanto por perfiles técnicos como de negocio?' },
      { id: 'c9', text: '¿Se incentiva a los empleados (ej. mediante bonus, reconocimiento) por encontrar nuevas formas de utilizar los datos para mejorar los resultados del negocio?' }
    ],
  },
];
