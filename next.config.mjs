import nextra from 'nextra';

const svgAsComponentRule = {
	loader: '@svgr/webpack',
	options: { dimensions: false }
};

const withNextra = nextra({
	theme: './components/layout/recipe-layout.js'
});

const nextConfig = {
	reactStrictMode: true,
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
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		);
		if (!fileLoaderRule) {
			throw new Error(
				'Could not find the Next.js image loader for SVG imports.'
			);
		}

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...(fileLoaderRule.resourceQuery?.not ?? []), /url/]
				},
				use: [svgAsComponentRule]
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	}
};

export default withNextra(nextConfig);
