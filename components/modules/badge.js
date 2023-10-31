import { twMerge } from 'tailwind-merge';

import RecipeTypes from '~/data/recipe-types';

const Badge = ({
	as = 'span',
	variant = 'misc',
	className,
	children,
	...rest
}) => {
	const Container = as;

	return (
		<Container
			className={twMerge(
				'inline-flex items-center rounded-sm px-2 py-0.5 text-2xs font-sans text-white/80',
				RecipeTypes.find(type => type.id === variant).color,
				className ?? ''
			)}
			{...rest}
		>
			{children}
		</Container>
	);
};

export default Badge;
