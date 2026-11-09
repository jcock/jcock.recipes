import { favicons } from 'favicons';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = JSON.parse(
	await fs.readFile(new URL('../data/site.json', import.meta.url), 'utf8')
);

async function generateFavicons() {
	const source = path.join(root, 'public', site.logo);
	const outputDir = path.join(root, 'public');

	console.log('Generating favicons...');

	try {
		const response = await favicons(source, {
			path: '/',
			appName: site.title,
			appShortName: site.titleShort,
			appDescription: site.description,
			developerName: site.author,
			display: 'browser',
			background: site.colors.manifest.backgroundColor,
			theme_color: site.colors.manifest.themeColor,
			icons: {
				android: ['android-chrome-192x192.png', 'android-chrome-512x512.png'],
				appleIcon: ['apple-touch-icon-180x180.png', 'apple-touch-icon.png'],
				appleStartup: false,
				favicons: [
					'favicon-16x16.png',
					'favicon-32x32.png',
					'favicon-48x48.png',
					'favicon.ico'
				],
				windows: false,
				yandex: false
			}
		});

		// Keep the editable SVG source, including its color-scheme styles.
		for (const image of response.images) {
			const outputPath = path.join(outputDir, image.name);
			if (outputPath !== source) {
				await fs.writeFile(outputPath, image.contents);
			}
		}

		// Write the manifest and other generated support files.
		for (const file of response.files) {
			await fs.writeFile(path.join(outputDir, file.name), file.contents);
		}

		console.log('✓ Favicons generated successfully!');
		console.log(`  Generated ${response.images.length} images`);
		console.log(`  Generated ${response.files.length} files`);
	} catch (error) {
		console.error('Error generating favicons:', error);
		process.exitCode = 1;
	}
}

generateFavicons();
