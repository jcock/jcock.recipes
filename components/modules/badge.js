import RecipeTypes from '~/data/recipe-types';

const Badge = ({
	variant = 'misc',
	className,
	children
}) => {
	return (
		<span
			className={`
				inline-flex items-center rounded-sm px-2 py-0.5 text-2xs font-sans text-white/80
				${RecipeTypes.find(type => type.id === variant).color}
				${className ?? ''}
			`}
		>
			{children}
		</span>
	);
};

export default Badge;
