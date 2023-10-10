'use client';
import { Icon } from '@iconify/react';

const IconContained = ({
	className,
	size = 'w-4 h-4',
	icon,
	iconClasses,
	...iconProps
}) => {
	return (
		<span
			className={`
				inline-block align-middle
				${className ?? ''}
				${size ?? ''}
			`}
		>
			<Icon
				icon={icon}
				className={`
					${iconClasses ?? ''}
					${size ?? ''}
				`}
				{...iconProps}
			/>
		</span>
	);
};

export default IconContained;
