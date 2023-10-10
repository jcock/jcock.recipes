import Card from '~/components/modules/cards/default';

const CardInstructions = ({
	children
}) => {
	return (
		<Card.Default
			hasShadow={false}
		>
			<Card.Header>
				<Card.Title
					as="h2"
					className="my-0"
				>
					Instructions:
				</Card.Title>
			</Card.Header>
			<Card.Body>
				{children}
			</Card.Body>
		</Card.Default>
	);
};

export default CardInstructions;
