import Layout from '~/components/layout/layout';
import PageHead from '~/components/util/page-head';
import Jumbotron from '~/components/modules/jumbotron';
import Section from '~/components/modules/sections/default';
import Badge from '~/components/modules/badge';

const RecipeLayout = ({
	children,
	pageOpts
}) => {
	const { title, frontMatter } = pageOpts;

	return (
		<Layout>
			<PageHead
				title={`${title} | Recipes`}
			/>

			<Jumbotron>
				<Jumbotron.Title>{title}</Jumbotron.Title>
				<div>
					{frontMatter?.type &&
						<Badge>{frontMatter.type}</Badge>
					}
				</div>
			</Jumbotron>

			{frontMatter?.ingredients &&
			<Section
				id="ingredients"
				className="container px-4"
			>
				{frontMatter.ingredients}
			</Section>
			}

			<Section
				id="instructions"
				className="container px-4"
			>
				{children}
			</Section>
		</Layout>
	);
};

export default RecipeLayout;
