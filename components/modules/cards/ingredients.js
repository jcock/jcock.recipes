import Card from '~/components/modules/cards/default';
import Accordion from '~/components/modules/accordion';

const CardIngredients = ({
	children
}) => {
	return (
		<>
			<Card.Default
				hasShadow={false}
				className="bg-transparent hidden lg:block"
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

			<Card.Default
				hasShadow={false}
				className="bg-transparent lg:hidden"
			>
				<Accordion defaultValue="ingredients">
					<Accordion.Item
						value="ingredients"
						trigger={
							<Accordion.Trigger>
								<Card.Header className="!p-0 bg-transparent">
									<Card.Title
										as="h2"
										className="my-0"
									>
										Ingredients:
									</Card.Title>
								</Card.Header>
							</Accordion.Trigger>
						}
					>
						<Accordion.Content contentClassName="py-0">
							{children}
						</Accordion.Content>
					</Accordion.Item>
				</Accordion>
			</Card.Default>
		</>
	);
};

export default CardIngredients;
