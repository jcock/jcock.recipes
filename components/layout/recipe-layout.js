import Layout from '~/components/layout/layout';
import PageHead from '~/components/util/page-head';
import Jumbotron from '~/components/modules/jumbotron';
import Section from '~/components/modules/sections/default';
import Badge from '~/components/modules/badge';
import Content from '~/components/util/content';
import RecipeList from '~/components/modules/navigation/recipe-list';
import Grid from '~/components/modules/grid';
import IngredientsCard from '~/components/modules/cards/ingredients';
import InstructionsCard from '~/components/modules/cards/instructions';

const RecipeLayout = ({
	children,
	pageOpts
}) => {
	const { title, frontMatter, pageMap } = pageOpts;

	return (
		<Layout>
			<PageHead
				title={title}
			/>

			<Jumbotron
				mode={frontMatter?.mode}
				image={frontMatter?.image &&
					<Jumbotron.Image
						image={{
							src: frontMatter.image,
							width: 1920,
							height: 720
						}}
					/>
				}
			>
				<Jumbotron.Title>{title}</Jumbotron.Title>
			</Jumbotron>

			{(frontMatter?.type || frontMatter?.time) &&
				<Section
					id="recipe-info"
					className="container px-4 -translate-y-7"
				>
					<div className="flex items-center justify-between gap-4 px-4 md:px-6 py-4 bg-sky-200 text-black/70 shadow-lg">
						{frontMatter.type &&
							<Badge
								variant={frontMatter.type.toLowerCase()}
							>
								{frontMatter.type}
							</Badge>
						}
						{(frontMatter.time || frontMatter.servings) &&
							<ul className="flex items-center gap-4 divide-x-2 divide-black/10 text-black/70 text-sm font-sans font-semibold">
								{frontMatter.time &&
									<li>
										{frontMatter.time}
									</li>
								}
								{frontMatter.servings &&
									<li className="pl-4">
										{frontMatter.servings}
									</li>
								}
							</ul>
						}
					</div>
				</Section>
			}

			{frontMatter?.showList &&
				<Section
					id="recipe-list"
					className="container px-4 my-12"
				>
					<RecipeList pages={pageMap} />
				</Section>
			}

			<Section
				id="recipe"
				className="container px-4 mb-12"
			>
				<Content>
					{frontMatter?.mode !== 'page' ?
						<Grid
							columns="grid-cols-1 lg:grid-cols-[1fr_1.5fr]"
							gap="gap-6 lg:gap-8"
						>
							{frontMatter?.ingredients &&
								<IngredientsCard>
									<ul>
										{frontMatter.ingredients.map(ingredient => (
											<li key={ingredient}>{ingredient}</li>
										))}
									</ul>
								</IngredientsCard>
							}
							<InstructionsCard>
								{children}
							</InstructionsCard>
						</Grid>
						:
						children
					}
				</Content>
			</Section>
		</Layout>
	);
};

export default RecipeLayout;
