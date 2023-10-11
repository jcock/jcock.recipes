import RecipeCard from '~/components/modules/cards/recipe';
import Grid from '~/components/modules/grid';

const NavRecipeList = ({
	pages,
	className
}) => {
	const imageClassName = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110';

	return (
		<Grid
			columns="grid-cols-2 lg:grid-cols-3"
			gap="gap-2 sm:gap-[2px]"
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
