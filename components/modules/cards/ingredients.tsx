'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '~/components/modules/core/card';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '~/components/modules/core/accordion';

export default function IngredientsCard({
	ingredients
}: {
	ingredients: string[];
}) {
	const list = (
		<ul>
			{ingredients.map((ingredient, index) => (
				<li key={`${index}-${ingredient}`}>{ingredient}</li>
			))}
		</ul>
	);
	return (
		<>
			<Card variant="ingredients" className="hidden lg:block">
				<CardHeader>
					<CardTitle as="h2">Ingredients:</CardTitle>
				</CardHeader>
				<CardContent>{list}</CardContent>
			</Card>
			<Card variant="ingredients" className="lg:hidden">
				<Accordion defaultValue={['ingredients']}>
					<AccordionItem value="ingredients">
						<AccordionTrigger variant="recipe">Ingredients:</AccordionTrigger>
						<AccordionContent variant="recipe">{list}</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Card>
		</>
	);
}
