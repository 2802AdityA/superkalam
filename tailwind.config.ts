import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				leftC: "#101011",
				rightC: "#0A0A0A",
				centerC: "#18191B",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
export default config;
