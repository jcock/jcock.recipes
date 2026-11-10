'use client';

import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const badgeVariants = cva(
	'group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-sm px-2 py-0.5 font-sans text-2xs whitespace-nowrap [&>svg]:size-3',
	{
		variants: {
			variant: {
				dessert:
					'bg-recipe-dessert text-[contrast-color(var(--color-recipe-dessert))]',
				drink:
					'bg-recipe-drink text-[contrast-color(var(--color-recipe-drink))]',
				meal: 'bg-recipe-meal text-[contrast-color(var(--color-recipe-meal))]',
				misc: 'bg-recipe-misc text-[contrast-color(var(--color-recipe-misc))]',
				side: 'bg-recipe-side text-[contrast-color(var(--color-recipe-side))]',
				snack:
					'bg-recipe-snack text-[contrast-color(var(--color-recipe-snack))]',
				default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
				secondary:
					'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
				destructive:
					'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20',
				outline:
					'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
				ghost:
					'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
				link: 'text-primary underline-offset-4 hover:underline'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
);

function Badge({
	className,
	variant = 'default',
	render,
	...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
	return useRender({
		defaultTagName: 'span',
		props: mergeProps<'span'>(
			{
				className: cn(badgeVariants({ variant }), className)
			},
			props
		),
		render,
		state: {
			slot: 'badge',
			variant
		}
	});
}

export { Badge, badgeVariants };
