import RecipeCard from '~/components/modules/cards/recipe';
import { Skeleton } from '~/components/modules/core/skeleton';
import type { Recipe } from '~/lib/recipes';

export default function RecipeListFallback({ recipes }: { recipes: Recipe[] }) {
	return (
		<>
			<Skeleton className="mb-4 h-8 w-full sm:w-24" />
			<div className="grid auto-rows-min grid-cols-2 gap-x-2 gap-y-4 sm:gap-0.5 lg:grid-cols-3">
				{recipes
					.filter(recipe => !recipe.metadata.hideInMenu)
					.map((recipe, index) => (
						<RecipeCard key={recipe.slug} recipe={recipe} eager={index === 0} />
					))}
			</div>
		</>
	);
}
