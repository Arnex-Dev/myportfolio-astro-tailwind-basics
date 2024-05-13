/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				'glow': '0 0 5px rgba(139, 92, 246, 1), 0 0 25px rgba(139, 92, 246, 1)',
			  },
		},
	},
	plugins: [],
}
