import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import { parse } from 'yaml';
import { z } from 'zod';

import { recipeTypeIds } from '../data/recipe-types.ts';

const recipesDirectory = path.join(process.cwd(), 'app', 'recipes', 'content');

export const recipeMetadataSchema = z.object({
	title: z.string().min(1),
	type: z.enum(recipeTypeIds),
	time: z.string().optional(),
	servings: z.string().optional(),
	image: z.url().optional(),
	ingredients: z.array(z.string().min(1)).min(1),
	hideInMenu: z.boolean().optional()
});

export type RecipeMetadata = z.infer<typeof recipeMetadataSchema>;
export type Recipe = { slug: string; metadata: RecipeMetadata };

function readFrontmatter(filePath: string): unknown {
	const source = fs.readFileSync(filePath, 'utf8');
	const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source);
	if (!match?.[1]) throw new Error(`Missing frontmatter in ${filePath}`);
	return parse(match[1]) as unknown;
}

export function getRecipeSlugs(): string[] {
	return fs
		.readdirSync(recipesDirectory)
		.filter(file => file.endsWith('.mdx'))
		.map(file => file.slice(0, -4))
		.sort((a, b) => a.localeCompare(b));
}

export const getAllRecipes = cache((): Recipe[] =>
	getRecipeSlugs().map(slug => {
		const filePath = path.join(recipesDirectory, `${slug}.mdx`);
		const result = recipeMetadataSchema.safeParse(readFrontmatter(filePath));
		if (!result.success) {
			throw new Error(
				`Invalid recipe metadata in ${filePath}: ${result.error.message}`
			);
		}
		return { slug, metadata: result.data };
	})
);

export function getRecipeBySlug(slug: string): Recipe | undefined {
	return getAllRecipes().find(recipe => recipe.slug === slug);
}

export function getHomeMetadata() {
	return z
		.object({ title: z.string(), image: z.url().optional() })
		.parse(readFrontmatter(path.join(process.cwd(), 'app', 'home.mdx')));
}
