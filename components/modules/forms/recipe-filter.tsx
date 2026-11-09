'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/components/modules/core/select';
import {
	isRecipeFilter,
	recipeTypes,
	type RecipeFilter
} from '~/data/recipe-types';

type RecipeFilterProps = {
	value: RecipeFilter;
	onValueChange: (value: RecipeFilter) => void;
};

export default function RecipeFilterSelect({
	value,
	onValueChange
}: RecipeFilterProps) {
	return (
		<Select
			items={recipeTypes}
			value={value}
			onValueChange={next => {
				if (isRecipeFilter(next)) onValueChange(next);
			}}
		>
			<SelectTrigger variant="recipe" data-category={value} aria-label="Food">
				<SelectValue />
			</SelectTrigger>
			<SelectContent align="start" alignItemWithTrigger={false} backdrop>
				<SelectGroup>
					{recipeTypes.map(item => (
						<SelectItem
							key={item.value}
							value={item.value}
							data-category={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
