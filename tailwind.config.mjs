/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'light-bg-start': '#f3f4f6', // Color de inicio del gradiente claro
				'light-bg-end': '#e5e7eb',   // Color de fin del gradiente claro
				'dark-bg-start': '#1f2937',  // Color de inicio del gradiente oscuro
				'dark-bg-end': '#4b5563',
			},
			backgroundImage: {
				'gradient-light': 'linear-gradient(to right, var(--tw-gradient-stops))',
				'gradient-dark': 'linear-gradient(to right, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [animations,
		require('@tailwindcss/typography'),
	],

}