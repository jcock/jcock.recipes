import RecipeCard from '~/components/modules/cards/recipe';
import Grid from '~/components/modules/grid';

const NavRecipeList = ({
	pages,
	className
}) => {
	return (
		<Grid
			columns="grid-cols-2 lg:grid-cols-3"
			gap="gap-x-2 gap-y-4 sm:gap-[2px]"
			className={className ?? ''}
		>
			{pages.map(item => (
				(item.kind === 'MdxPage' && item.frontMatter.hideInMenu !== true) &&
				<RecipeCard
					key={item.name}
					recipe={item}
				/>
			))}
		</Grid>
	);
};

export default NavRecipeList;
