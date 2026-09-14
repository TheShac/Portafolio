import IconAngular from "../components/icons/tech/IconAngular.astro";
import IconAstro from "../components/icons/tech/IconAstro.astro";
import IconBootstrap from "../components/icons/tech/IconBootstrap.astro";
import IconExpress from "../components/icons/tech/IconExpress.astro";
import IconGit from "../components/icons/tech/IconGit.astro";
import IconJavascript from "../components/icons/tech/IconJavascript.astro";
import IconMysql from "../components/icons/tech/IconMysql.astro";
import IconNodejs from "../components/icons/tech/IconNodejs.astro";
import IconPostgresql from "../components/icons/tech/IconPostgresql.astro";
import IconReact from "../components/icons/tech/IconReact.astro";
import IconTailwind from "../components/icons/tech/IconTailwind.astro";
import IconTypescript from "../components/icons/tech/IconTypescript.astro";
import IconVuejs from "../components/icons/tech/IconVuejs.astro";
import IconDocker from "../components/icons/tech/IconDocker.astro";

export type TechKey =
	| "JAVASCRIPT"
	| "TYPESCRIPT"
	| "REACT"
	| "VUEJS"
	| "ANGULAR"
	| "NODEJS"
	| "EXPRESS"
	| "TAILWIND"
	| "BOOTSTRAP"
	| "MYSQL"
	| "POSTGRESQL"
	| "GIT"
	| "ASTRO"
	| "DOCKER";

export interface TechMeta {
	name: string;
	/** Clases de fondo + color de texto/ícono con el color de marca de la tecnología. */
	class: string;
	icon: typeof IconJavascript;
}

/**
 * Registro único de tecnologías: nombre, color de marca e ícono.
 * `technologies.ts` y `projects.ts` solo referencian estas claves,
 * así el ícono y el color no se repiten en cada lugar donde se usan.
 */
export const TECH: Record<TechKey, TechMeta> = {
	JAVASCRIPT: {
		name: "JavaScript",
		class: "bg-[#F7DF1E] text-[#1a1a1a]",
		icon: IconJavascript,
	},
	TYPESCRIPT: {
		name: "TypeScript",
		class: "bg-[#3178C6] text-white",
		icon: IconTypescript,
	},
	REACT: {
		name: "React",
		class: "bg-[#20232A] text-[#61DAFB]",
		icon: IconReact,
	},
	VUEJS: {
		name: "Vue.js",
		class: "bg-[#35495E] text-[#4FC08D]",
		icon: IconVuejs,
	},
	ANGULAR: {
		name: "Angular",
		class: "bg-[#DD0031] text-white",
		icon: IconAngular,
	},
	NODEJS: {
		name: "Node.js",
		class: "bg-[#3C873A] text-white",
		icon: IconNodejs,
	},
	EXPRESS: {
		name: "Express",
		class: "bg-[#000000] text-white",
		icon: IconExpress,
	},
	TAILWIND: {
		name: "Tailwind CSS",
		class: "bg-[#0EA5E9] text-white",
		icon: IconTailwind,
	},
	BOOTSTRAP: {
		name: "Bootstrap",
		class: "bg-[#7952B3] text-white",
		icon: IconBootstrap,
	},
	MYSQL: {
		name: "MySQL",
		class: "bg-[#00758F] text-white",
		icon: IconMysql,
	},
	POSTGRESQL: {
		name: "PostgreSQL",
		class: "bg-[#336791] text-white",
		icon: IconPostgresql,
	},
	GIT: {
		name: "Git",
		class: "bg-[#F05033] text-white",
		icon: IconGit,
	},
	ASTRO: {
		name: "Astro",
		class: "bg-[#17191E] text-[#FF5D01]",
		icon: IconAstro,
	},
	DOCKER: {
		name: "Docker",
		class: "bg-[#2496ED] text-white",
		icon: IconDocker,
	},
};
