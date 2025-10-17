
import { CategoryKey, Recommendation } from '../types';

export const RECOMMENDATIONS: Record<CategoryKey, Recommendation> = {
  strategy: {
    immediate: "Convocar una sesión de trabajo con la alta dirección para alinear los 3 principales objetivos de negocio con posibles iniciativas de IA.",
    nextStep: "Designar un 'campeón de IA' a nivel ejecutivo para liderar la estrategia y asegurar recursos.",
    longTerm: "Desarrollar un roadmap de IA a 2-3 años, priorizando casos de uso por impacto de negocio y viabilidad técnica.",
  },
  data: {
    immediate: "Iniciar una auditoría de las 3-5 fuentes de datos más críticas para los casos de uso de IA prioritarios.",
    nextStep: "Nombrar 'Data Stewards' para estas fuentes de datos para que sean responsables de su calidad y documentación.",
    longTerm: "Desarrollar un plan de migración hacia una arquitectura de datos moderna (ej. Data Lakehouse) que unifique el acceso a los datos.",
  },
  infrastructure: {
    immediate: "Evaluar y seleccionar una plataforma cloud (AWS SageMaker, Azure ML, Google Vertex AI) para estandarizar el desarrollo de proyectos piloto.",
    nextStep: "Definir una arquitectura de referencia para proyectos de IA, incluyendo herramientas para control de versiones de datos y modelos.",
    longTerm: "Implementar un pipeline de MLOps (CI/CD para Machine Learning) para automatizar el despliegue, monitoreo y re-entrenamiento de modelos.",
  },
  talent: {
    immediate: "Realizar un mapa de habilidades (skills mapping) para identificar las carencias actuales en roles de IA.",
    nextStep: "Lanzar un programa piloto de 'AI Literacy' para los mandos intermedios de un área de negocio clave.",
    longTerm: "Establecer alianzas estratégicas con universidades o plataformas de formación online para crear itinerarios de carrera para roles de IA.",
  },
  governance: {
    immediate: "Crear un comité multidisciplinar de ética y gobernanza de IA que incluya representantes legales, de negocio y técnicos.",
    nextStep: "Definir y documentar un marco de principios para una IA responsable (transparencia, justicia, rendición de cuentas).",
    longTerm: "Implementar una herramienta de MLOps para auditar y monitorear los modelos en producción en busca de sesgos y deriva del modelo (model drift).",
  },
  culture: {
    immediate: "Lanzar una iniciativa de 'data storytelling', donde los equipos presenten decisiones exitosas basadas en datos en reuniones generales.",
    nextStep: "Crear 'squads' o equipos de proyecto mixtos con miembros de negocio y de tecnología para desarrollar los primeros casos de uso de IA.",
    longTerm: "Establecer un programa de innovación que asigne tiempo y recursos para la experimentación con IA, celebrando tanto los éxitos como los aprendizajes de los fracasos.",
  },
};
