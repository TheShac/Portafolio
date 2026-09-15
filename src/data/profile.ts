interface Localized {
	es: string;
	en: string;
}

export interface Profile {
	name: string;
	role: Localized;
	/** Frase corta de años de experiencia, ej. "+1 año de experiencia." */
	experienceSummary: Localized;
	location: string;
	/** Cierra la presentación del Hero: en qué te especializas. */
	specialty: Localized;
	available: boolean;
	/** Ruta dentro de /public. Reemplazar por la foto real. */
	photo: string;
	/** Descripción larga para la sección "Sobre mí". Puede tener varios párrafos. */
	about: Localized[];
}

export const profile: Profile = {
	name: "Leonardo Rodriguez Lagos",
	role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
	experienceSummary: { es: "+1 año de experiencia.", en: "+1 year of experience." },
	location: "Arica, Chile",
	specialty: {
		es: "Especializado en la construcción de aplicaciones web escalables y eficientes, del backend a la interfaz.",
		en: "Focused on building scalable, efficient web applications, from the backend to the interface.",
	},
	available: true,
	photo: "/images/profile.png",
	about: [
		{
			es: "Me llamo Leonardo Rodriguez Lagos y soy desarrollador full stack. Me interesa el ciclo completo de un producto web: diseñar el modelo de datos, construir la API y la interfaz, y dejarlo funcionando en producción, no solo la parte visible. La mayoría de lo que he construido resuelve un problema concreto dentro de una organización: reemplazar procesos manuales por herramientas que la gente usa todos los días.",
			en: "My name is Leonardo Rodriguez Lagos and I'm a full stack developer. I care about the whole lifecycle of a web product: designing the data model, building the API and the interface, and getting it running in production, not just the visible part. Most of what I've built solves a concrete problem inside an organization: replacing manual processes with tools people use every day.",
		},
		{
			es: "Desarrollé el Sistema de Gestión Académica del Postgrado en Historia de la Universidad de Tarapacá, hoy en producción y en uso activo por los académicos y el equipo del postgrado, además de los módulos de acreditación del Magíster en Educación. En mi tiempo libre construí un calendario de animes en emisión que consume la API de MyAnimeList, y un proyecto universitario de microservicios con Docker y Kubernetes para explorar arquitecturas distribuidas.",
			en: "I built the Academic Management System for the Postgraduate Program in History at Universidad de Tarapacá, now in production and in active use by faculty and the program's staff, along with the accreditation modules for the Master's in Education. In my spare time I built a currently-airing anime calendar that consumes the MyAnimeList API, and a university microservices project with Docker and Kubernetes to explore distributed architectures.",
		},
		{
			es: "Actualmente estoy como desarrollador full stack e ingeniero de IA en un proyecto llamado Privacy IA, construyendo un sistema RAG para apoyar la gestión de riesgos de privacidad y protección de datos. Ahí estoy enfocando mi crecimiento: sumar ingeniería de IA a mi trabajo full stack, sin perder de vista que el producto final tiene que funcionar bien y ser útil para quien lo usa.",
			en: "I'm currently working as a full stack developer and AI engineer on a project called Privacy IA, building a RAG system to support privacy risk and data protection management. That's where I'm focusing my growth: adding AI engineering to my full stack work, without losing sight of the fact that the end product has to work well and be useful to whoever uses it.",
		},
	],
};
