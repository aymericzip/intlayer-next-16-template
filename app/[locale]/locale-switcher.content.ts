import { type Dictionary, t } from "intlayer";

const localeSwitcherContent = {
	key: "locale-switcher",
	content: {
		title: t({
			en: "Language",
			fr: "Langue",
			es: "Idioma",
		}),
		selectLanguage: t({
			en: "Select Language",
			fr: "Sélectionner la langue",
			es: "Seleccionar idioma",
		}),
		currentLanguage: t({
			en: "Current language",
			fr: "Langue actuelle",
			es: "Idioma actual",
		}),
		changeLanguage: t({
			en: "Change language",
			fr: "Changer de langue",
			es: "Cambiar idioma",
		}),
	},
} satisfies Dictionary;

export default localeSwitcherContent;


