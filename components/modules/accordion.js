import { forwardRef, useEffect } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

import Icon from '~/components/modules/icon';

import trackEvent from '~/hooks/useEventTracker';

const Accordion = ({
	className,
	type = 'single',
	defaultValue,
	collapsible = true,
	children
}) => {
	return (
		<RadixAccordion.Root
			type={type}
			defaultValue={defaultValue ?? null}
			collapsible={collapsible}
			className={className ?? ''}
			onValueChange={value => trackEvent('Engagement', 'Open Accordion', value)}
		>
			{children}
		</RadixAccordion.Root>
	);
};

export const AccordionItem = forwardRef((
	{
		id,
		trigger,
		children,
		bodyClasses,
		...props
	},
	forwardedRef
) => {
	return (
		<RadixAccordion.Item
			ref={forwardedRef}
			value={id}
			{...props}
		>
			{trigger}
			<AccordionContent className={bodyClasses ?? ''}>
				{children}
			</AccordionContent>
		</RadixAccordion.Item>
	);
});

export const AccordionTrigger = forwardRef((
	{
		children,
		className,
		...props
	},
	forwardedRef
) => (
	<RadixAccordion.Header asChild className="AccordionHeader">
		<RadixAccordion.Trigger
			ref={forwardedRef}
			className={twMerge(
				'group flex justify-between w-full py-3 px-4 md:px-5 font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-sky-450 focus-visible:ring-opacity-75 transition-colors data-[state=closed]:bg-gray-100 data-[state=open]:bg-gray-100',
				className ?? ''
			)}
			{...props}
		>
			{children}
			<Icon
				icon="mdi:chevron-down"
				size="w-5 h-5"
				className="transition-transform group-data-[state=open]:!rotate-180"
				aria-hidden="true"
			/>
		</RadixAccordion.Trigger>
	</RadixAccordion.Header>
));

export const AccordionContent = forwardRef((
	{
		children,
		className,
		contentClassName,
		...props
	},
	forwardedRef
) => (
	<RadixAccordion.Content
		ref={forwardedRef}
		className={twMerge(
			'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
			className ?? ''
		)}
		{...props}
	>
		<div
			className={twMerge(
				'p-4',
				contentClassName ?? ''
			)}
		>
			{children}
		</div>
	</RadixAccordion.Content>
));

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';

export default Accordion;
