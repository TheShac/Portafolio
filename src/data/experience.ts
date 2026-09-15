export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	description: string;
	/** Link opcional ("Saber más sobre X →"). */
	link?: { label: string; href: string };
}

export const experience: ExperienceItem[] = [
	{
		role: "Desarrollador Full Stack e Ingeniero de IA",
		company: "Empresa",
		period: "Septiembre 2026 — Actualidad",
		description:
			"Desarrollador full stack e ingeniero de IA en Privacy IA, una plataforma que usa inteligencia artificial para apoyar la identificación, análisis y gestión de riesgos de privacidad y cumplimiento en protección de datos, siempre con supervisión y validación humana. Construyo un sistema RAG (Retrieval-Augmented Generation) que analiza tratamientos de datos, políticas y documentación para generar recomendaciones de mitigación, reportes ejecutivos y trazabilidad de las fuentes utilizadas por la IA.",
	},
	{
		role: "Desarrollador de Software",
		company: "Universidad de Tarapacá - Postgrado en Historia",
		period: "Enero 2026 — Febrero 2026",
		description:
			"Desarrollo del Sistema de Gestión Académica del Postgrado en Historia de la Universidad de Tarapacá, una plataforma para el registro y verificación de la producción académica de cara al proceso de acreditación del programa. Construido con Express, MySQL y React; el sistema está desplegado en producción y en uso activo por los académicos y el equipo del postgrado de historia.",
	},
	{
		role: "Desarrollador Full Stack",
		company: "Universidad de Tarapacá - Magíster en Educación",
		period: "Agosto 2025 — Diciembre 2025",
		description:
			"Desarrollador full stack de los módulos para el proceso de acreditación del Magíster en Educación de la Universidad de Tarapacá, encargados de centralizar y analizar la información del programa en reportes PDF listos para presentar ante la comisión. Construido con Express, MySQL, React, y Docker.",
	},
];
