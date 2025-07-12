/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html"
	],
	theme: {
		extend: {
			margin: {
				vh: '5vh',
			},
			padding: {
				vh: '5vh',
			},
			borderRadius: {
				circle: '50%',
			},
			backgroundColor: {
				primary: '#8AE5F8',
			},
		},
	},
	plugins: [],
};
