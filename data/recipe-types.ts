export const recipeTypeIds = [
	'dessert',
	'drink',
	'meal',
	'misc',
	'side',
	'snack'
] as const;
export type RecipeType = (typeof recipeTypeIds)[number];
export type RecipeFilter = RecipeType | 'all';

export const recipeTypes = [
	{ value: 'all', label: 'All' },
	{ value: 'dessert', label: 'Dessert' },
	{ value: 'drink', label: 'Drink' },
	{ value: 'meal', label: 'Meal' },
	{ value: 'misc', label: 'Misc' },
	{ value: 'side', label: 'Side' },
	{ value: 'snack', label: 'Snack' }
] as const satisfies ReadonlyArray<{ value: RecipeFilter; label: string }>;

export function isRecipeFilter(value: unknown): value is RecipeFilter {
	return recipeTypes.some(type => type.value === value);
}
