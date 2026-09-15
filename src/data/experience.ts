interface Localized {
	es: string;
	en: string;
}

export interface ExperienceItem {
	role: Localized;
	company: string;
	period: Localized;
	description: Localized;
	/** Link opcional ("Saber más sobre X →"). */
	link?: { label: Localized; href: string };
}

export const experience: ExperienceItem[] = [
	{
		role: {
			es: "Desarrollador Full Stack e Ingeniero de IA",
			en: "Full Stack Developer & AI Engineer",
		},
		company: "DataLexIA",
		period: { es: "Septiembre 2026 — Actualidad", en: "September 2026 — Present" },
		description: {
			es: "Desarrollador full stack e ingeniero de IA en Privacy IA, una plataforma que usa inteligencia artificial para apoyar la identificación, análisis y gestión de riesgos de privacidad y cumplimiento en protección de datos, siempre con supervisión y validación humana. Construyo un sistema RAG (Retrieval-Augmented Generation) que analiza tratamientos de datos, políticas y documentación para generar recomendaciones de mitigación, reportes ejecutivos y trazabilidad de las fuentes utilizadas por la IA.",
			en: "Full stack developer and AI engineer on Privacy IA, a platform that uses artificial intelligence to support identifying, analyzing and managing privacy and data protection compliance risks, always with human review and validation. I build a RAG (Retrieval-Augmented Generation) system that analyzes data processing activities, policies and documentation to generate mitigation recommendations, executive reports and traceability of the sources the AI uses.",
		},
	},
	{
		role: { es: "Desarrollador de Software", en: "Software Developer" },
		company: "Universidad de Tarapacá - Postgrado en Historia",
		period: { es: "Enero 2026 — Febrero 2026", en: "January 2026 — February 2026" },
		description: {
			es: "Desarrollo del Sistema de Gestión Académica del Postgrado en Historia de la Universidad de Tarapacá, una plataforma para el registro y verificación de la producción académica de cara al proceso de acreditación del programa. Construido con Express, MySQL y React; el sistema está desplegado en producción y en uso activo por los académicos y el equipo del postgrado de historia.",
			en: "Built the Academic Management System for the Postgraduate Program in History at Universidad de Tarapacá, a platform to register and verify academic output for the program's accreditation process. Built with Express, MySQL and React; the system is deployed in production and in active use by faculty and the program's staff.",
		},
	},
	{
		role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
		company: "Universidad de Tarapacá - Magíster en Educación",
		period: { es: "Agosto 2025 — Diciembre 2025", en: "August 2025 — December 2025" },
		description: {
			es: "Desarrollador full stack de los módulos para el proceso de acreditación del Magíster en Educación de la Universidad de Tarapacá, encargados de centralizar y analizar la información del programa en reportes PDF listos para presentar ante la comisión. Construido con Express, MySQL, React, y Docker.",
			en: "Full stack developer for the accreditation modules of the Master's in Education at Universidad de Tarapacá, in charge of centralizing and analyzing the program's information into PDF reports ready to present to the accreditation committee. Built with Express, MySQL, React, and Docker.",
		},
	},
];
