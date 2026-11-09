'use client';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { CaretDownIcon } from '@phosphor-icons/react';
import { cn } from '~/lib/utils';

type RecipeVariant = { variant?: 'default' | 'recipe' };

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			className={cn('flex w-full flex-col', className)}
			{...props}
		/>
	);
}
function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn('not-last:border-b', className)}
			{...props}
		/>
	);
}
function AccordionTrigger({
	className,
	children,
	variant = 'default',
	...props
}: AccordionPrimitive.Trigger.Props & RecipeVariant) {
	return (
		<AccordionPrimitive.Header render={<h2 />} className="not-prose m-0 flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				data-variant={variant}
				className={cn(
					'group/accordion-trigger flex flex-1 items-center justify-between gap-2 font-sans text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
					variant === 'recipe'
						? 'bg-panel-header px-4 py-3 text-xs font-bold md:px-5'
						: 'py-4 text-sm font-medium',
					className
				)}
				{...props}
			>
				{children}
				<CaretDownIcon
					aria-hidden="true"
					data-slot="accordion-trigger-icon"
					className="size-5 shrink-0 transition-transform group-aria-expanded/accordion-trigger:rotate-180"
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}
function AccordionContent({
	className,
	children,
	variant = 'default',
	...props
}: AccordionPrimitive.Panel.Props & RecipeVariant) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0"
			{...props}
		>
			<div
				className={cn(variant === 'recipe' ? 'px-8 py-4' : 'pb-4', className)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
