module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				Guyot: ["Guyot", "sans-serif"],
				Neue: ["Neue", "sans-serif"],
				Freight: ["Freight", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
