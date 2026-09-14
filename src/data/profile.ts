export interface Profile {
	name: string;
	role: string;
	/** Descripción corta que aparece debajo del nombre en el Hero. */
	tagline: string;
	location: string;
	available: boolean;
	/** Ruta dentro de /public. Reemplazar por la foto real. */
	photo: string;
	/** Descripción larga para la sección "Sobre mí". Puede tener varios párrafos. */
	about: string[];
}

export const profile: Profile = {
	name: "Leonardo Rodriguez Lagos",
	role: "Desarrollador de Software",
	tagline:
		"[Escribe aquí una descripción corta de tu experiencia y a qué te dedicas actualmente.]",
	location: "Arica - Chile",
	available: true,
	photo: "/images/profile.svg",
	about: [
		"[Cuéntanos quién eres, cómo empezaste en programación y qué te apasiona de tu trabajo.]",
		"[Menciona logros relevantes, proyectos destacados o colaboraciones importantes.]",
		"[Cierra con tu objetivo actual: qué buscas o en qué te enfocas hoy.]",
	],
};
