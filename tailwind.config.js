module.exports = {
	darkMode: "class",

	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "var(--color-bg-primary)",
				secondary: "var(--color-bg-secondary)",
			},
			textColor: {
				accent: "var(--color-text-accent)",
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
			},
			screens: {
				phone: "340px",
				// => @media (min-width: 640px) { ... }

				laptop: "1024px",
				// => @media (min-width: 1024px) { ... }

				desktop: "1280px",
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
};
