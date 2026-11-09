import { Suspense } from 'react';
import Jumbotron from '~/components/modules/jumbotron';
import Section from '~/components/modules/section';
import RecipeList from '~/components/modules/navigation/recipe-list';
import RecipeListFallback from '~/components/modules/navigation/recipe-list-fallback';
import StructuredData from '~/components/util/structured-data';
import { getAllRecipes, getHomeMetadata } from '~/lib/recipes';
import { buildPageMetadata, buildWebPageStructuredData } from '~/lib/seo';
import HomeContent from './home.mdx';

export const metadata = buildPageMetadata('Recipes', '/');

export default function HomePage() {
	const home = getHomeMetadata();
	const recipes = getAllRecipes();
	return (
		<>
			<StructuredData data={buildWebPageStructuredData('/', home.title)} />
			<Jumbotron title={home.title} image={home.image} />
			<Section
				id="recipe-list"
				className="container my-12 px-4"
				aria-label="Recipes"
			>
				<Suspense fallback={<RecipeListFallback recipes={recipes} />}>
					<RecipeList recipes={recipes} />
				</Suspense>
			</Section>
			<Section id="recipe" className="container mb-12 px-4">
				<div className="recipe-prose prose prose-sm max-w-none">
					<HomeContent />
				</div>
			</Section>
		</>
	);
}
