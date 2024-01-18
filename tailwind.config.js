/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,jsx,js}"],
	theme: {
		extend: {
			colors: {
				"bg-withe": "#eeee",
				"neavy-b": "#f7a072",
				cambridge: "#A9CBB7",
				beige: "#EFECCA",
				wange: "#333333",
				greenPastel: "#52976f",
				redPastel: "#FC5130",
				yellowPastel: "#F9C80E",
				"bg-beigeItem": "#F9C80E",
			},
			height: {
				600: "600px",
				94: "20rem",
			},
			maxHeight: {
				"max-height-94": "20rem",
			},
			borderWidth: {
				1: "1px",
			},
			boxShadow: {
				calendar: "22px 16px 10px 5px rgba(0,0,0,0.1)",
			},
		},
	},
	plugins: [],
};
