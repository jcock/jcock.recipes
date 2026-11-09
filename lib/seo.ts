import type { Metadata, Viewport } from 'next';
import site from '~/data/site.json';

export const siteOrigin = new URL(process.env.NEXT_PUBLIC_HOST || site.url);

export const siteMetadata: Metadata = {
	metadataBase: siteOrigin,
	title: { default: site.title, template: `%s | ${site.title}` },
	description: site.description,
	manifest: '/manifest.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
		],
		apple: '/apple-touch-icon.png'
	},
	openGraph: { type: 'website', siteName: site.title, locale: 'en_US' },
	twitter: { card: 'summary_large_image', creator: site.author },
	other: { 'msapplication-TileColor': site.colors.manifest.tileColor }
};

export const siteViewport: Viewport = {
	themeColor: [
		{
			media: '(prefers-color-scheme: light)',
			color: site.colors.manifest.themeColor
		},
		{ media: '(prefers-color-scheme: dark)', color: '#191b21' }
	]
};

export function buildPageMetadata(title: string, pathname: string): Metadata {
	return {
		title: { absolute: `${title} | ${site.title}` },
		alternates: { canonical: pathname },
		openGraph: {
			title,
			description: site.description,
			images: [
				{
					url: '/opengraph-image.png',
					width: 1200,
					height: 630,
					alt: site.title
				}
			],
			url: pathname,
			type: 'website',
			siteName: site.title
		},
		twitter: {
			card: 'summary_large_image',
			creator: site.author,
			title,
			description: site.description,
			images: ['/opengraph-image.png']
		}
	};
}

export function buildWebPageStructuredData(pathname: string, title: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		url: new URL(pathname, siteOrigin).toString(),
		name: title,
		about: site.description
	};
}
