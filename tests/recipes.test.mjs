import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
	getAllRecipes,
	getRecipeBySlug,
	getRecipeSlugs,
	getHomeMetadata,
	recipeMetadataSchema
} from '../lib/recipes.ts';

const baseline = JSON.parse(
	fs.readFileSync(
		new URL('./fixtures/original-recipe-slugs.json', import.meta.url),
		'utf8'
	)
);

test('all original recipe URLs remain available while allowing new recipes', () => {
	const slugs = getRecipeSlugs();
	assert.ok(slugs.length >= baseline.length);
	for (const slug of baseline) assert.ok(slugs.includes(slug), slug);
	assert.deepEqual(
		slugs,
		[...slugs].sort((a, b) => a.localeCompare(b))
	);
});

test('all recipe frontmatter validates and retains ingredients', () => {
	for (const recipe of getAllRecipes()) {
		assert.ok(recipe.metadata.title);
		assert.ok(recipe.metadata.ingredients.length > 0);
		assert.ok(recipeMetadataSchema.safeParse(recipe.metadata).success);
	}
	assert.equal(getRecipeBySlug('steak')?.metadata.time, '35 mins');
	assert.equal(
		getRecipeBySlug('grandmas-sweet-tea')?.metadata.servings,
		'2 pitchers'
	);
	assert.ok(getRecipeBySlug('foccacia-bread'));
});

test('invalid or unknown slugs never resolve to source files', () => {
	for (const slug of [
		'missing',
		'../package',
		'../../data/site',
		'',
		'Steak',
		'steak.mdx'
	])
		assert.equal(getRecipeBySlug(slug), undefined);
});

test('missing required metadata fails with validation rather than rendering a broken recipe', () => {
	assert.equal(
		recipeMetadataSchema.safeParse({
			title: 'Missing ingredients',
			type: 'meal'
		}).success,
		false
	);
	assert.equal(
		recipeMetadataSchema.safeParse({
			title: 'Unknown category',
			type: 'unknown',
			ingredients: ['salt']
		}).success,
		false
	);
});

test('home metadata remains separate from recipe listings', () => {
	assert.equal(getHomeMetadata().title, 'Recipes');
	assert.ok(
		getHomeMetadata().image?.startsWith('https://images.unsplash.com/')
	);
	assert.equal(getRecipeBySlug('index'), undefined);
});
