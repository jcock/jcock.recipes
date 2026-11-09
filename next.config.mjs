import createMDX from '@next/mdx';

const withMDX = createMDX({
	options: {
		remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter']
	}
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	allowedDevOrigins: ['127.0.0.1'],
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	images: {
		deviceSizes: [640, 750, 1080, 1920, 2048, 3840],
		qualities: [25, 50, 75, 90, 100],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	},
	turbopack: {
		rules: {
			'*.svg': {
				loaders: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
				as: '*.js'
			}
		}
	},
	async redirects() {
		return [
			{
				source: '/share.png',
				destination: '/opengraph-image.png',
				permanent: true
			}
		];
	}
};

export default withMDX(nextConfig);
