import Card from '~/components/modules/cards/default';

const CardIngredients = ({
	children
}) => {
	return (
		<Card.Default
			hasShadow={false}
			className="bg-transparent"
		>
			<Card.Header>
				<Card.Title
					as="h2"
					className="my-0"
				>
					Ingredients:
				</Card.Title>
			</Card.Header>
			<Card.Body>
				{children}
			</Card.Body>
		</Card.Default>
	);
};

export default CardIngredients;
