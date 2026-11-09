import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const cardVariants = cva(
	'group/card relative flex flex-col overflow-hidden border border-border bg-clip-border',
	{
		variants: {
			variant: {
				default: 'bg-card text-card-foreground',
				ingredients: 'bg-transparent text-foreground',
				recipe: 'bg-card text-card-foreground shadow-lg sm:shadow-none'
			}
		},
		defaultVariants: { variant: 'default' }
	}
);

function Card({
	className,
	variant,
	...props
}: ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
	return (
		<div
			data-slot="card"
			data-variant={variant}
			className={cn(cardVariants({ variant }), className)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'not-prose bg-panel-header px-4 py-3 md:px-5 lg:px-6',
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({
	as: Heading = 'h3',
	className,
	...props
}: ComponentProps<'h3'> & { as?: 'h2' | 'h3' }) {
	return (
		<Heading
			data-slot="card-title"
			className={cn(
				'm-0 font-sans text-xs font-bold sm:text-sm md:text-base',
				className
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-content"
			className={cn('flex-auto p-4 md:px-5 lg:px-6 lg:py-5', className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: ComponentProps<'p'>) {
	return (
		<p
			data-slot="card-description"
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex items-center px-4 py-2 md:px-5 lg:px-6', className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter
};
