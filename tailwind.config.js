/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,jsx,js}"],
	theme: {
		extend: {
			colors: {
				"bg-withe": "#eeee",
				"neavy-b": "#FF934F",
				cambridge: "#A9CBB7",
				beige: "#EFECCA",
				wange: "#333333",
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
