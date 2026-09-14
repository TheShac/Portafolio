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
		role: "Desarrollador de Software",
		company: "Empresa",
		period: "Septiembre 2026 — Actualidad",
		description:
			"[Describe brevemente tu rol, responsabilidades y algún logro destacado en esta posición.]",
	},
	{
		role: "Desarrollador de Software",
		company: "Universidad de Tarapacá - Posgrado en Historia",
		period: "Enero 2026 — Febrero 2026",
		description:
			"[Describe brevemente qué hiciste en este puesto, tecnologías usadas y resultados obtenidos.]",
	},
	{
		role: "Desarrollador de Software",
		company: "Universidad de Tarapacá - Magíster en Educación",
		period: "Agosto 2025 — Diciembre 2025",
		description:
			"[Describe brevemente tus inicios: qué aprendiste y en qué proyectos participaste.]",
	},
];
