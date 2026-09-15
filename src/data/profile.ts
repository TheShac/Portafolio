export interface Profile {
	name: string;
	role: string;
	/** Frase corta de años de experiencia, ej. "+1 año de experiencia." */
	experienceSummary: string;
	location: string;
	/** Cierra la presentación del Hero: en qué te especializas. */
	specialty: string;
	available: boolean;
	/** Ruta dentro de /public. Reemplazar por la foto real. */
	photo: string;
	/** Descripción larga para la sección "Sobre mí". Puede tener varios párrafos. */
	about: string[];
}

export const profile: Profile = {
	name: "Leonardo Rodriguez Lagos",
	role: "Desarrollador Full Stack",
	experienceSummary: "+1 año de experiencia.",
	location: "Arica, Chile",
	specialty:
		"Especializado en la construcción de aplicaciones web escalables y eficientes, del backend a la interfaz.",
	available: true,
	photo: "/images/profile.png",
	about: [
		"Me llamo Leonardo Rodriguez Lagos y soy desarrollador full stack. Me interesa el ciclo completo de un producto web: diseñar el modelo de datos, construir la API y la interfaz, y dejarlo funcionando en producción, no solo la parte visible. La mayoría de lo que he construido resuelve un problema concreto dentro de una organización: reemplazar procesos manuales por herramientas que la gente usa todos los días.",
		"Desarrollé el Sistema de Gestión Académica del Postgrado en Historia de la Universidad de Tarapacá, hoy en producción y en uso activo por los académicos y el equipo del postgrado, además de los módulos de acreditación del Magíster en Educación. En mi tiempo libre construí un calendario de animes en emisión que consume la API de MyAnimeList, y un proyecto universitario de microservicios con Docker y Kubernetes para explorar arquitecturas distribuidas.",
		"Actualmente estoy como desarrollador full stack e ingeniero de IA en un proyecto llamado Privacy IA, construyendo un sistema RAG para apoyar la gestión de riesgos de privacidad y protección de datos. Ahí estoy enfocando mi crecimiento: sumar ingeniería de IA a mi trabajo full stack, sin perder de vista que el producto final tiene que funcionar bien y ser útil para quien lo usa.",
	],
};
