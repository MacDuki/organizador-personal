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
				redPastel: "#9a031e",
			},
			height: {
				600: "600px",
			},
			borderWidth: {
				1: "1px",
			},
		},
	},
	plugins: [],
};
