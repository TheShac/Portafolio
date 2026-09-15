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
			"Sistema web de gestión de producción científica y académica para el programa de Postgrado en Historia (Magíster y Doctorado) de la Universidad de Tarapacá, orientado al proceso de acreditación: los académicos registran su producción y el Profesional de Apoyo administra, verifica y descarga los recursos que la sustentan. Existen dos versiones en uso: una simple con cerca de 30 usuarios, y otra que suma login con Google, envío de correos con Resend, notificaciones en tiempo real vía SSE y colas de tareas con BullMQ y Redis.",
		image: "/images/projects/placeholder.svg",
		tags: ["REACT","BOOTSTRAP", "NODEJS", "EXPRESS", "MYSQL"],
		repoUrl: "https://github.com/TheShac/Practica-1/tree/develop",
	},
	{
		title: "Manga Store TL - Tienda Ecommerce",
		description:
			"E-commerce de manga, figuras y artículos de anime construido como proyecto full stack de demostración: catálogo con filtros y búsqueda, carrito para clientes registrados e invitados, checkout tipo wizard con pago simulado, reseñas verificadas por compra y un panel de administración completo con inventario, pedidos, envíos y métricas de ventas. Backend en Node.js, Express y MySQL con autenticación JWT y Google OAuth; frontend en React y Bootstrap.",
		image: "/images/projects/placeholder.svg",
		tags: ["REACT","BOOTSTRAP", "NODEJS", "EXPRESS", "MYSQL"],
		repoUrl: "https://github.com/TheShac/Proyecto-MSTL",
	},
	{
		title: "Anime Calendar - Calendario de Animes en Emisión",
		description:
			"Proyecto de un calendario con los animes de la temporada en emisión, generados a partir del uso de la API de MyAnimeList. Creada desde cero con Express, PostgreSQL, React y Tailwind CSS, proyecto desplegado en Supabase, Render y Vercel.",
		image: "/images/projects/anime-calendar.png",
		tags: ["REACT","TAILWIND", "NODEJS", "EXPRESS", "POSTGRESQL"],
		repoUrl: "https://github.com/TheShac/Anime-Calendar",
		previewUrl: "https://anime-calendar-dun.vercel.app/",
	},
	{
		title: "Proyecto de uso de Docker y Kubernetes",
		description:
			"Proyecto universitario que implementa una plataforma de microservicios para la trazabilidad, reserva y facturación de insumos médicos hospitalarios, con los servicios comunicándose de forma asíncrona vía Apache Kafka y una base de datos PostgreSQL independiente por servicio. Desplegado con Docker Compose en desarrollo y en un clúster Kubernetes (K3s) con ambientes separados de QA y producción.",
		image: "/images/projects/placeholder.svg",
		tags: ["VUEJS","TAILWIND", "NODEJS", "EXPRESS", "DOCKER", "POSTGRESQL"],
		repoUrl: "https://github.com/TheShac/Proyecto-Insumos-M-dicos",
	},
];
