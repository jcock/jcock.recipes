'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useReducedMotionPreference } from '~/hooks/use-reduced-motion';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { BowlFoodIcon } from '@phosphor-icons/react';
import RecipeCard from '~/components/modules/cards/recipe';
import RecipeFilterSelect from '~/components/modules/forms/recipe-filter';
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle
} from '~/components/modules/core/empty';
import { recipeTypes } from '~/data/recipe-types';
import type { Recipe } from '~/lib/recipes';

const filters = recipeTypes.map(type => type.value);

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
	const [filter, setFilter] = useQueryState(
		'type',
		parseAsStringLiteral(filters)
			.withDefault('all')
			.withOptions({ history: 'push', shallow: true, scroll: false })
	);
	const reducedMotion = useReducedMotionPreference();
	const items = recipes.filter(
		recipe =>
			!recipe.metadata.hideInMenu &&
			(filter === 'all' || recipe.metadata.type === filter)
	);
	return (
		<>
			<div className="mb-4">
				<RecipeFilterSelect
					value={filter}
					onValueChange={value => {
						void setFilter(value);
					}}
				/>
			</div>
			<span className="sr-only" role="status" aria-live="polite">
				{items.length} recipes
			</span>
			{items.length === 0 && (
				<Empty className="my-4 bg-card">
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<BowlFoodIcon />
						</EmptyMedia>
						<EmptyTitle>No recipes found.</EmptyTitle>
						<EmptyDescription>
							Select a different type from the filter.
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			)}
			<div
				className="grid auto-rows-min grid-cols-2 gap-x-2 gap-y-4 sm:gap-0.5 lg:grid-cols-3"
				data-recipe-grid
			>
				<AnimatePresence mode="popLayout" initial={false}>
					{items.map((recipe, index) => (
						<motion.div
							key={recipe.slug}
							layout={!reducedMotion}
							initial={
								reducedMotion ? false : { opacity: 0, scale: 0.85, y: '20%' }
							}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.85 }}
							transition={{
								ease: 'anticipate',
								duration: reducedMotion ? 0 : 0.1
							}}
						>
							<RecipeCard recipe={recipe} eager={index === 0} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	);
}
