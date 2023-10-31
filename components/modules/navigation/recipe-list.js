import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import RecipeCard from '~/components/modules/cards/recipe';
import Grid from '~/components/modules/grid';
import FilterRecipeForm from '~/components/modules/forms/recipe-filter';

import RecipeTypes from 'data/recipe-types';

const NavRecipeList = ({
	pages,
	className
}) => {
	const [filter, setFilter] = useState(RecipeTypes.find(item => item.id === 'all'));

	const items = filter.id !== 'all' ? pages.filter(page => page.frontMatter?.type === filter.id) : pages;

	const MotionCard = motion(RecipeCard);

	return (
		<div>
			<FilterRecipeForm
				setFilter={setFilter}
				filteredValue={filter}
				className="mb-4"
			/>

			<Grid
				columns="grid-cols-2 lg:grid-cols-3"
				gap="gap-x-2 gap-y-4 sm:gap-[2px]"
				className={className ?? ''}
			>
				{items.length === 0 &&
					<p className="my-4 text-lg text-gray-600">No recipes found.</p>
				}

				<AnimatePresence mode="popLayout">
					{items.map(item => (
						(item.kind === 'MdxPage' && item.frontMatter?.hideInMenu !== true) &&
						<MotionCard
							key={item.name}
							recipe={item}
							initial={{
								opacity: 0,
								scale: 0.85,
								translateY: '20%'
							}}
							animate={{
								opacity: 1,
								scale: 1,
								translateY: 0
							}}
							exit={{
								opacity: 0,
								scale: 0.85,
								translateY: '20%'
							}}
							transition={{
								type: 'linear',
								duration: 0.2
							}}
						/>
					))}
				</AnimatePresence>
			</Grid>
		</div>
	);
};

export default NavRecipeList;
