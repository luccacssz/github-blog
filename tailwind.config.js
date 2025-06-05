/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
	theme: {
		extend: {
			borderRadius: {
				10: "10px",
			},
		},
	},
	plugins: [],
}
