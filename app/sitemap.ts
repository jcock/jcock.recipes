import type { MetadataRoute } from 'next';
import { getAllRecipes } from '~/lib/recipes';
import { siteOrigin } from '~/lib/seo';
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteOrigin.toString() },
		...getAllRecipes()
			.filter(recipe => !recipe.metadata.hideInMenu)
			.map(recipe => ({
				url: new URL(`/${recipe.slug}`, siteOrigin).toString()
			}))
	];
}
