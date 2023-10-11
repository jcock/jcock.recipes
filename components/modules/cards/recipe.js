import Card from '~/components/modules/cards/default';
import Badge from '~/components/modules/badge';
import Button from '~/components/modules/button';

import imageRecipeDefault from '~/images/recipe-default.jpg';

const CardRecipe = ({
	recipe,
	className,
	...rest
}) => {
	const imageClassName = 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110';

	return (
		<Card.Link
			href={recipe.route}
			image={
				recipe.frontMatter?.image ?
					<Card.Image
						image={{
							src: recipe.frontMatter.image,
							width: 640,
							height: 480
						}}
						className="aspect-w-4 aspect-h-3"
						imageClassName={imageClassName}
					/>
					:
					<Card.Image
						image={imageRecipeDefault}
						width={640}
						height={480}
						className="aspect-w-16 aspect-h-9"
						imageClassName={imageClassName}
					/>
			}
			className={`
				shadow-lg sm:shadow-none
				${className ?? ''}
			`}
			{...rest}
		>
			<Card.Body className="sm:absolute inset-0 sm:text-white/90 sm:grid items-stretch sm:bg-gradient-to-b from-gray-850 via-transparent to-gray-850">
				<div className="flex flex-row sm:flex-col justify-between items-start">
					<Card.Title className="capitalize transition border-b sm:border-b-0 border-transparent group-hover:border-black/20 group-hover:sm:-translate-y-8 group-focus:border-black/20 group-focus:sm:-translate-y-8">{recipe.frontMatter?.title ? recipe.frontMatter.title : recipe.title}</Card.Title>

					<Button.Span
						variant="light"
						size="sq"
						className="order-last sm:absolute bottom-4 lg:bottom-5 left-4 md:left-5 lg:left-6 flex items-center ml-auto sm:ml-0 p-0 sm:opacity-0 text-black/20 sm:text-white/80 transition delay-100 group-hover:opacity-100 group-hover:text-black/30 group-hover:sm:text-white/80 group-focus:opacity-100 group-focus:text-black/30 group-focus:sm:text-white/80"
					>
						<Button.Icon icon="mdi:arrow-right" />
						<span className="sr-only">View recipe</span>
					</Button.Span>

					{(recipe.frontMatter?.type || recipe.frontMatter?.time) &&
						<div className="order-2 sm:order-first flex items-center justify-between gap-4  absolute sm:static top-0 inset-x-0 p-4 sm:p-0 sm:w-full text-white bg-gradient-to-b from-gray-850 sm:from-transparent to-transparent">
							{recipe.frontMatter.type &&
								<Badge
									variant={recipe.frontMatter.type.toLowerCase()}
								>
									{recipe.frontMatter.type}
								</Badge>
							}

							{recipe.frontMatter.time &&
								<p className="text-2xs font-sans font-semibold">
									{recipe.frontMatter.time}
								</p>
							}
						</div>
					}
				</div>
			</Card.Body>
		</Card.Link>
	);
};

export default CardRecipe;
