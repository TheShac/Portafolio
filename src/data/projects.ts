import type { TechKey } from "./techIcons";

interface Localized {
	es: string;
	en: string;
}

export interface Project {
	title: string;
	description: Localized;
	image: string;
	tags: TechKey[];
	repoUrl?: string;
	previewUrl?: string;
}

export const projects: Project[] = [
	{
		title: "Sistema de Gestión Académica Postgrado de Historia UTA",
		description: {
			es: "Sistema web de gestión de producción científica y académica para el programa de Postgrado en Historia (Magíster y Doctorado) de la Universidad de Tarapacá, orientado al proceso de acreditación: los académicos registran su producción y el Profesional de Apoyo administra, verifica y descarga los recursos que la sustentan. Existen dos versiones en uso: una simple con cerca de 30 usuarios, y otra que suma login con Google, envío de correos con Resend, notificaciones en tiempo real vía SSE y colas de tareas con BullMQ y Redis.",
			en: "Web system to manage scientific and academic output for the Postgraduate Program in History (Master's and PhD) at Universidad de Tarapacá, built for the program's accreditation process: faculty register their output and the support staff manage, verify and download the resources that back it. Two versions are in use: a simple one with around 30 users, and another that adds Google login, email delivery with Resend, real-time notifications via SSE, and background jobs with BullMQ and Redis.",
		},
		image: "/images/projects/sistema-gestion.png",
		tags: ["REACT", "BOOTSTRAP", "NODEJS", "EXPRESS", "MYSQL"],
		repoUrl: "https://github.com/TheShac/Practica-1/tree/develop",
	},
	{
		title: "Manga Store TL - Tienda Ecommerce",
		description: {
			es: "E-commerce de manga, figuras y artículos de anime construido como proyecto full stack de demostración: catálogo con filtros y búsqueda, carrito para clientes registrados e invitados, checkout tipo wizard con pago simulado, reseñas verificadas por compra y un panel de administración completo con inventario, pedidos, envíos y métricas de ventas. Backend en Node.js, Express y MySQL con autenticación JWT y Google OAuth; frontend en React y Bootstrap.",
			en: "E-commerce for manga, figures and anime merchandise, built as a full stack demo project: catalog with filters and search, cart for both registered and guest customers, wizard-style checkout with simulated payment, purchase-verified reviews, and a full admin panel with inventory, orders, shipping and sales metrics. Backend in Node.js, Express and MySQL with JWT auth and Google OAuth; frontend in React and Bootstrap.",
		},
		image: "/images/projects/e-commerce.png",
		tags: ["REACT", "BOOTSTRAP", "NODEJS", "EXPRESS", "MYSQL"],
		repoUrl: "https://github.com/TheShac/Proyecto-MSTL",
	},
	{
		title: "Anime Calendar - Calendario de Animes en Emisión",
		description: {
			es: "Proyecto de un calendario con los animes de la temporada en emisión, generados a partir del uso de la API de MyAnimeList. Creada desde cero con Express, PostgreSQL, React y Tailwind CSS, proyecto desplegado en Supabase, Render y Vercel.",
			en: "A calendar of the anime airing in the current season, generated from the MyAnimeList API. Built from scratch with Express, PostgreSQL, React and Tailwind CSS, deployed on Supabase, Render and Vercel.",
		},
		image: "/images/projects/anime-calendar.png",
		tags: ["REACT", "TAILWIND", "NODEJS", "EXPRESS", "POSTGRESQL"],
		repoUrl: "https://github.com/TheShac/Anime-Calendar",
		previewUrl: "https://anime-calendar-dun.vercel.app/",
	},
	{
		title: "Proyecto de uso de Docker y Kubernetes",
		description: {
			es: "Proyecto universitario que implementa una plataforma de microservicios para la trazabilidad, reserva y facturación de insumos médicos hospitalarios, con los servicios comunicándose de forma asíncrona vía Apache Kafka y una base de datos PostgreSQL independiente por servicio. Desplegado con Docker Compose en desarrollo y en un clúster Kubernetes (K3s) con ambientes separados de QA y producción.",
			en: "University project implementing a microservices platform to track, reserve and bill hospital medical supplies, with services communicating asynchronously via Apache Kafka and an independent PostgreSQL database per service. Deployed with Docker Compose in development and on a Kubernetes cluster (K3s) with separate QA and production environments.",
		},
		image: "/images/projects/gestion-medica.png",
		tags: ["VUEJS", "TAILWIND", "NODEJS", "EXPRESS", "DOCKER", "POSTGRESQL"],
		repoUrl: "https://github.com/TheShac/Proyecto-Insumos-M-dicos",
	},
];
