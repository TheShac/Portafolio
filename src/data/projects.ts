import type { TechKey } from "./techIcons";

export interface Project {
	title: string;
	description: string;
	image: string;
	tags: TechKey[];
	repoUrl?: string;
	previewUrl?: string;
}

export const projects: Project[] = [
	{
		title: "Sistema de Gestión Académica Postgrado de Historia UTA",
		description:
			"[Describe qué hace el proyecto, el problema que resuelve y algún dato destacado (visitas, usuarios, etc.).]",
		image: "/images/projects/placeholder.svg",
		tags: ["REACT","BOOTSTRAP", "NODEJS", "EXPRESS", "MYSQL"],
		repoUrl: "https://github.com/TheShac/Practica-1",
		previewUrl: "https://postgrado-historia-coral.vercel.app/",
	},
	{
		title: "[Nombre del proyecto 2]",
		description:
			"[Describe qué hace el proyecto, el problema que resuelve y algún dato destacado.]",
		image: "/images/projects/placeholder.svg",
		tags: ["REACT", "NODEJS"],
		previewUrl: "https://proyecto-2.ejemplo.com",
	},
];
