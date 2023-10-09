import React from 'react';

const Content = ({
	as = 'div',
	className,
	children
}) => {
	const Container = as;

	return (
		<>
			<Container
				className={`
					prose prose-inherit max-w-none
					${className ?? ''}
				`}
			>
				{children}
			</Container>
		</>
	);
};

export default Content;
