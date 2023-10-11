const BadgeVariant = {
	dessert: 'bg-pink-400/80',
	drink: 'bg-orange-400/80',
	meal: 'bg-blue-400/80',
	misc: 'bg-gray-500/80',
	side: 'bg-purple-400/80',
	snack: 'bg-yellow-400/80'
};

const Badge = ({
	variant,
	className,
	children
}) => {
	return (
		<span
			className={`
				inline-flex items-center rounded-sm px-2 py-0.5 text-2xs font-sans text-white/80
				${variant ? BadgeVariant[variant] : BadgeVariant['misc']}
				${className ?? ''}
			`}
		>
			{children}
		</span>
	);
};

export default Badge;
