const Badge = ({
	className,
	children
}) => {
	return (
		<span
			className={`
				inline-flex items-center rounded-md bg-gray-400/10 px-2 py-0.5 text-2xs font-sans text-gray-400 ring-1 ring-inset ring-gray-400/20
				${className}
			`}
		>
			{children}
		</span>
	);
};

export default Badge;
