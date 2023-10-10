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
			className={className ?? ''}
			{...rest}
		>
			<Card.Body className="sm:absolute inset-0 sm:text-white sm:grid items-end sm:bg-gradient-to-b from-transparent to-gray-850">
				<div>
					<Card.Title className="capitalize transition-transform group-hover:sm:-translate-y-8 group-focus:sm:-translate-y-8">{recipe.frontMatter?.title ? recipe.frontMatter.title : recipe.title}</Card.Title>
					<div className="sm:absolute bottom-4 lg:bottom-5 inset-x-4 md:inset-x-5 lg:inset-x-6 flex items-center mt-4 sm:opacity-0 transition-opacity delay-100 group-hover:opacity-100 group-focus:opacity-100">
						{recipe.frontMatter?.type &&
							<Badge>{recipe.frontMatter.type}</Badge>
						}
						<Button.Span
							variant="light"
							size="sq"
							className="p-0 ml-auto"
						>
							<Button.Icon icon="mdi:arrow-right" />
							<span className="sr-only">View recipe</span>
						</Button.Span>
					</div>
				</div>
			</Card.Body>
		</Card.Link>
	);
};

export default CardRecipe;
