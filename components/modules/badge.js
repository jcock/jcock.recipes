const BadgeVariant = {
	dessert: 'bg-pink-400/10 text-pink-400 ring-pink-400/20',
	drink: 'bg-orange-400/10 text-orange-400 ring-orange-400/20',
	meal: 'bg-blue-400/10 text-blue-400 ring-blue-400/30',
	misc: 'bg-gray-400/10 text-gray-400 ring-gray-400/20',
	side: 'bg-purple-400/10 text-purple-400 ring-purple-400/30',
	snack: 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/20'
};

const Badge = ({
	variant,
	className,
	children
}) => {
	return (
		<span
			className={`
				inline-flex items-center rounded-md px-2 py-0.5 text-2xs font-sans ring-1 ring-inset
				${variant ? BadgeVariant[variant] : BadgeVariant['misc']}
				${className ?? ''}
			`}
		>
			{children}
		</span>
	);
};

export default Badge;
