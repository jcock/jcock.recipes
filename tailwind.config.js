const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,md,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,md,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,md,mdx}'
	],
	theme: {
		extend: {
			animation: {
				slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
				slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
			},
			container: {
				center: true
			},
			cursor: {
				grab: 'grab'
			},
			colors: {
				emerald: {
					550: '#12f292'
				},
				gray: {
					75:'#f7f7f9',
					150:'#e2e3e3',
					550: '#65676e',
					650:'#333842',
					750:'#21252b',
					850:'#191b21',
					950: '#0d0e11'

				},
				pink: {
					450: '#ed4e6e'
				},
				sky: {
					450: '#2095f0'
				}
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif]
			},
			fontSize: {
				'2xs': '0.65rem',
				100: 'clamp(0.22rem, calc(0.55rem + -0.35vw), 0.48rem)',
				200: 'clamp(0.35rem, calc(0.64rem + -0.30vw), 0.58rem)',
				300: 'clamp(0.57rem, calc(0.73rem + -0.16vw), 0.69rem)',
				400: 'clamp(0.83rem, calc(0.81rem + 0.12vw), 0.93rem)',
				500: 'clamp(1.00rem, calc(0.87rem + 0.66vw), 1.50rem)',
				600: 'clamp(1.20rem, calc(0.88rem + 1.61vw), 2.43rem)',
				700: 'clamp(1.44rem, calc(0.79rem + 3.27vw), 3.93rem)',
				800: 'clamp(1.73rem, calc(0.51rem + 6.09vw), 6.35rem)',
				900: 'clamp(2.07rem, calc(-0.09rem + 10.80vw), 10.28rem)',
				1000: 'clamp(2.49rem, calc(-1.23rem + 18.61vw), 16.63rem)',
				1100: 'clamp(2.99rem, calc(-3.31rem + 31.48vw), 26.91rem)',
				1200: 'clamp(3.58rem, calc(-6.93rem + 52.58vw), 43.55rem)',
				1300: 'clamp(4.30rem, calc(-13.11rem + 87.05vw), 70.46rem)',
				1400: 'clamp(5.16rem, calc(-23.48rem + 143.21vw), 114.00rem)',
				1500: 'clamp(6.19rem, calc(-40.72rem + 234.55vw), 184.45rem)'
			},
			keyframes: {
				slideDown: {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				slideUp: {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			typography: {
				DEFAULT: {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'sm': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'md': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'lg': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'xl': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				},
				'2xl': {
					css: {
						video: {
							'margin-bottom': 0,
							'margin-top': 0
						}
					}
				}
			},
			zIndex: {
				'-1': '-1',
				1: '1',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				9999: '9999'
			}
		}
	},
	variants: {
		scrollSnapType: ['responsive']
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
};
