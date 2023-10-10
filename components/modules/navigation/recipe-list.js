import Card from '~/components/modules/card';
import Grid from '~/components/modules/grid';

const NavRecipeList = ({
	pages,
	className
}) => {
	return (
		<Grid
			columns="md:grid-cols-2 lg:grid-cols-3"
			gap="gap-4 lg:gap-6"
			className={className ?? ''}
		>
			{pages.map(item => (
				(item.kind === 'MdxPage' && item.name !== 'index') &&
				<Card.Link
					key={item.name}
					href={item.route}
					image={
						item.frontMatter?.image ?
							<Card.Image
								image={{
									src: item.frontMatter.image,
									width: 640,
									height: 480
								}}
								className="aspect-w-16 aspect-h-9"
								imageClassName="w-full h-full object-cover"
							/>
							:
							null
					}
				>
					<Card.Body>
						<Card.Title className="capitalize">{item.frontMatter?.title}</Card.Title>
					</Card.Body>
				</Card.Link>
			))}
		</Grid>
	);
};

export default NavRecipeList;
