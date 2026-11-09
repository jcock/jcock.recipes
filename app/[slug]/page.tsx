import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RecipeLayout from '~/components/layout/recipe-layout';
import StructuredData from '~/components/util/structured-data';
import { getRecipeBySlug, getRecipeSlugs } from '~/lib/recipes';
import { buildPageMetadata, buildWebPageStructuredData } from '~/lib/seo';

type RecipePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
	return getRecipeSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
	params
}: RecipePageProps): Promise<Metadata> {
	const { slug } = await params;
	const recipe = getRecipeBySlug(slug);
	return recipe
		? buildPageMetadata(recipe.metadata.title, `/${slug}`)
		: { title: 'Recipe not found' };
}

export default async function RecipePage({ params }: RecipePageProps) {
	const { slug } = await params;
	const recipe = getRecipeBySlug(slug);
	if (!recipe) notFound();
	const { default: RecipeContent } = (await import(
		`../recipes/content/${slug}.mdx`
	)) as { default: ComponentType };
	return (
		<>
			<StructuredData
				data={buildWebPageStructuredData(`/${slug}`, recipe.metadata.title)}
			/>
			<RecipeLayout metadata={recipe.metadata}>
				<RecipeContent />
			</RecipeLayout>
		</>
	);
}
