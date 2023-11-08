import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Card from '~/components/modules/cards/default';
import RecipeCard from '~/components/modules/cards/recipe';
import Grid from '~/components/modules/grid';
import FilterRecipeForm from '~/components/modules/forms/recipe-filter';
import Icon from '~/components/modules/icon';

import RecipeTypes from 'data/recipe-types';

const NavRecipeList = ({
	pages,
	className
}) => {
	const [filter, setFilter] = useState(RecipeTypes.find(item => item.id === 'all'));

	const items = filter.id !== 'all' ? pages.filter(page => page.frontMatter?.type === filter.id) : pages;

	const updateFilter = item => {
		setFilter(item);
	};

	const MotionRecipeCard = motion(RecipeCard);
	const MotionCard = motion(Card.Default);

	return (
		<div>
			<FilterRecipeForm
				updateFilter={updateFilter}
				filteredValue={filter}
			/>

			<AnimatePresence mode="popLayout">
				{items.length === 0 &&
					<MotionCard
						className="my-4 text-center"
						hasShadow={false}
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
							ease: 'anticipate',
							duration: 0.1
						}}
					>
						<Card.Body>
							<div className="grid place-items-center w-24 h-24 mx-auto rounded-full bg-sky-450 text-white">
								<Icon
									icon="material-symbols:no-food-outline"
									size="w-12 h-12"
								/>
							</div>
							<h3 className="mt-6 mb-2 text-lg font-bold text-gray-600">No recipes found.</h3>
							<p>Select a different type from <span className="whitespace-nowrap">the filter.</span></p>
						</Card.Body>
					</MotionCard>
				}
			</AnimatePresence>

			<Grid
				columns="grid-cols-2 lg:grid-cols-3"
				gap="gap-x-2 gap-y-4 sm:gap-[2px]"
				className={className ?? ''}
			>
				<AnimatePresence mode="popLayout">
					{items.map(item => (
						(item.kind === 'MdxPage' && item.frontMatter?.hideInMenu !== true) &&
						<MotionRecipeCard
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
								ease: 'anticipate',
								duration: 0.1
							}}
						/>
					))}
				</AnimatePresence>
			</Grid>
		</div>
	);
};

export default NavRecipeList;
