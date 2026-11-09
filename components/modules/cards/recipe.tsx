import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { Card, CardContent, CardTitle } from '~/components/modules/core/card';
import { Badge } from '~/components/modules/core/badge';
import type { Recipe } from '~/lib/recipes';
import defaultImage from '~/images/recipe-default.jpg';

export default function RecipeCard({
	recipe,
	eager = false
}: {
	recipe: Recipe;
	eager?: boolean;
}) {
	const { metadata } = recipe;
	return (
		<Link
			href={`/${recipe.slug}`}
			className="group block rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
			aria-label={metadata.title}
		>
			<Card variant="recipe">
				<div className="relative aspect-4/3 overflow-hidden">
					<Image
						src={metadata.image || defaultImage}
						fill
						loading={eager ? 'eager' : 'lazy'}
						alt=""
						sizes="(min-width: 1024px) 33vw, 50vw"
						className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transform-none"
					/>
				</div>
				<CardContent className="sm:absolute sm:inset-0 sm:grid sm:items-stretch sm:bg-linear-to-b sm:from-gray-850 sm:via-transparent sm:to-gray-850 sm:text-white/90">
					<div className="flex items-start justify-between sm:flex-col">
						<CardTitle className="border-b border-transparent capitalize transition-transform group-hover:border-foreground/20 group-focus-visible:border-foreground/20 sm:border-b-0 sm:group-hover:-translate-y-8 sm:group-focus-visible:-translate-y-8 motion-reduce:transform-none">
							{metadata.title}
						</CardTitle>
						<span
							aria-hidden="true"
							className="order-last ml-auto flex items-center text-foreground/20 transition-opacity delay-100 sm:absolute sm:bottom-4 sm:left-4 sm:ml-0 sm:text-white/80 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 md:sm:left-5 lg:sm:bottom-5 lg:sm:left-6"
						>
							<ArrowRightIcon className="size-4" />
						</span>
						<div className="absolute inset-x-0 top-0 order-2 flex items-start justify-between gap-4 bg-linear-to-b from-gray-850 to-transparent p-4 text-white sm:static sm:order-first sm:w-full sm:from-transparent sm:p-0">
							<Badge variant={metadata.type}>{metadata.type}</Badge>
							{(metadata.time || metadata.servings) && (
								<ul className="flex flex-col items-end gap-1 font-sans text-2xs font-semibold">
									{metadata.time && <li>{metadata.time}</li>}
									{metadata.servings && <li>{metadata.servings}</li>}
								</ul>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
