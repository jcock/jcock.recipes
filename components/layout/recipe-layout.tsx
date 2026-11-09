import type { ReactNode } from 'react';
import type { RecipeMetadata } from '~/lib/recipes';
import Jumbotron from '~/components/modules/jumbotron';
import Section from '~/components/modules/section';
import { Badge } from '~/components/modules/core/badge';
import IngredientsCard from '~/components/modules/cards/ingredients';
import InstructionsCard from '~/components/modules/cards/instructions';
import SlideIn from '~/components/modules/animations/slidein';

export default function RecipeLayout({
	metadata,
	children
}: {
	metadata: RecipeMetadata;
	children: ReactNode;
}) {
	return (
		<>
			<Jumbotron title={metadata.title} image={metadata.image} />
			<Section id="recipe-info" className="container -translate-y-7 px-4">
				<div className="flex items-center justify-between gap-4 bg-recipe-info px-4 py-4 text-recipe-info-foreground shadow-lg md:px-6">
					<Badge variant={metadata.type}>{metadata.type}</Badge>
					{(metadata.time || metadata.servings) && (
						<ul className="flex items-center divide-x-2 divide-foreground/10 font-sans text-sm font-semibold">
							{metadata.time && <li className="px-3">{metadata.time}</li>}
							{metadata.servings && (
								<li className="px-3">{metadata.servings}</li>
							)}
						</ul>
					)}
				</div>
			</Section>
			<Section id="recipe" className="container mb-12 px-4">
				<div className="recipe-prose prose prose-sm max-w-none">
					<SlideIn>
						<div className="grid auto-rows-min grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-8">
							<IngredientsCard ingredients={metadata.ingredients} />
							<InstructionsCard>{children}</InstructionsCard>
						</div>
					</SlideIn>
				</div>
			</Section>
		</>
	);
}
