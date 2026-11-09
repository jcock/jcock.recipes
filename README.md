# jcock.recipes

Family recipes and other favorites, built with Next.js 16 App Router, React 19,
strict TypeScript, MDX, Tailwind CSS 4, and shadcn/ui with Base UI primitives.

The project follows the structure of jcock.rocks-2026 while preserving the recipe
site’s layout, URLs, Inter/Lora typography, and existing color palette.

## Development

Use Node.js 24 (also selected on Netlify by `.nvmrc`):

```sh
nvm use
npm ci
npm run dev
```

## Commands

- `npm run dev`: generate favicons and start the Turbopack development server.
- `npm run build`: generate favicons and create the production build.
- `npm start`: serve the production build.
- `npm run lint` / `npm run lint:fix`: check or fix ESLint and formatting issues.
- `npm run typecheck`: run strict TypeScript checks.
- `npm test`: validate recipe metadata and protect existing recipe URLs.
- `npm run generate-favicons`: regenerate icons and the manifest manually.

## Structure

```text
app/
  layout.tsx                 Root layout, fonts, metadata, and providers
  page.tsx                   Recipe index
  home.mdx                   Home page content and frontmatter
  [slug]/page.tsx            Static recipe routes at the existing URLs
  recipes/content/*.mdx     Recipe sources
  not-found.tsx              Custom 404 from the reference project
  opengraph-image.png        Original recipe sharing image
components/
  layout/                   Header, footer, and recipe layout
  modules/core/             shadcn/Base UI primitives
  modules/                  Recipe UI, navigation, MDX, and animations
  util/                     Providers and structured data
data/                       Site settings and typed recipe categories
lib/                        Recipe loading/validation, SEO, and cn()
styles/
  app.css                   Tailwind/plugins and stylesheet imports
  theme.css                 Original color/font tokens and semantic themes
  base.css                  Global defaults and reduced-motion behavior
  components.css            Recipe-specific styling
  utilities.css             Containers and typography utilities
  fonts/index.ts            Inter and Lora via next/font
types/                      SVG type declarations
scripts/                    Favicon generation
tests/                      Content and route regression checks
```

## Recipes

Edit or add an MDX file in `app/recipes/content/`. The filename becomes the URL,
for example `steak.mdx` is served at `/steak`. Existing filenames are retained.
The build discovers recipes automatically and validates the frontmatter:

```mdx
---
title: Example Recipe
type: meal
time: 35 mins
servings: 4 servings
image: https://images.unsplash.com/example-image
ingredients:
  - 1 cup example ingredient
---

1. First instruction.
2. Next instruction.
```

Valid categories are dessert, drink, meal, misc, side, and snack. Time, servings,
and image are optional. The original 22 recipe URLs are covered by regression
checks; new recipes can be added without changing those checks.

Category filters use shareable URLs such as `/?type=meal` and support browser
back/forward navigation. The header theme selector follows the system by default
and remembers an explicit Light/Dark/System choice.

## Styling and components

Edit CSS theme variables in `styles/theme.css`; the former Tailwind config’s
custom colors and fluid typography scale have been carried over. The light theme
keeps the original appearance, with a dark theme built from the same palette.

The shadcn configuration matches the reference project’s Base UI/Vega setup,
Phosphor icons, `~/` alias, and `components/modules/core` location. Recipe-specific
variants preserve the existing card, select, and accordion styling.

## Images and favicons

SVG imports become React components through the Turbopack SVGR loader. For a
static SVG URL, place the asset in `public/` and use its root-relative path.

The logo selected by `data/site.json` generates the PNG/ICO icons and manifest
before development and production builds. Generated assets are ignored by Git;
the editable SVG favicon and its adaptive light/dark styling are preserved.

The original sharing image now lives at `app/opengraph-image.png`, using Next.js
metadata conventions. The former `/share.png` URL permanently redirects to it.

## Netlify

Keep the build command as `npm run build` and publish directory as `.next`.
Netlify’s automatic Next.js adapter handles the App Router. Node.js 24 is selected
by `.nvmrc`. No Nextra or legacy Webpack favicon plugin is required.

## Contributors

<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center" style=""><img src="https://avatars.githubusercontent.com/u/6616625?s=60&v=4" width="100px;"  style="background-color: #000; border-radius: 9999px;" alt="Jason Cockerham"/><br /><sub><b>Jason Cockerham</b></sub></td>
		<td align="center"><img src="https://avatars.githubusercontent.com/u/650202?s=120&v=4" width="100px;"  style="border-radius: 9999px;" alt="Chris Marts"/><br /><sub><b>Chris Marts</b></sub></td>
		<td align="center"><img src="https://avatars.githubusercontent.com/u/25408000?s=120&v=4" width="100px;" style="border-radius: 9999px;" alt="Stuart Thomas"/><br /><sub><b>Stuart Thomas</b></sub></td>
  </tr>
</table>
<!-- markdownlint-enable -->

---

### Enjoy

:metal:
