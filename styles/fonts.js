import { Inter, Lora } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter'
});

const lora = Lora({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lora'
});

export { inter, lora };
