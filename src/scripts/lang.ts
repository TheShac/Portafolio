export type Lang = "es" | "en";

const LANG_KEY = "lang";

export function getStoredLang(): Lang {
	return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es";
}

/**
 * Aplica el idioma actual: fija `<html lang>` (con lo que las reglas CSS
 * `html[lang="en"] [data-i18n]` muestran/ocultan el texto correspondiente)
 * y actualiza los atributos (aria-label, alt, etc.) marcados con
 * `data-i18n-attr` + `data-i18n-es` / `data-i18n-en`.
 */
export function applyLang(lang: Lang) {
	document.documentElement.lang = lang;

	document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((el) => {
		const attr = el.dataset.i18nAttr;
		const value = lang === "en" ? el.dataset.i18nEn : el.dataset.i18nEs;
		if (attr && value) el.setAttribute(attr, value);
	});

	document.dispatchEvent(new CustomEvent<Lang>("langchange", { detail: lang }));
}

export function setLang(lang: Lang) {
	localStorage.setItem(LANG_KEY, lang);
	applyLang(lang);
}
