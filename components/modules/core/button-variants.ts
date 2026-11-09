import { cva } from 'class-variance-authority';
import { cn } from '~/lib/utils';

export const buttonVariants = cva(
	'group/button inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border border-transparent font-sans text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				outline: 'border-border bg-background text-foreground hover:bg-muted',
				ghost: 'text-foreground hover:bg-muted',
				link: 'rounded-none border-0 p-0 [font-family:inherit] [font-size:inherit] [font-weight:inherit] normal-case underline decoration-1 underline-offset-2 hover:no-underline'
			},
			size: {
				default: 'px-6 py-2',
				sm: 'px-4 py-1.5 text-sm',
				lg: 'px-10 py-4 text-lg',
				icon: 'size-9',
				'icon-sm': 'size-8',
				link: 'h-auto gap-0 p-0'
			}
		},
		defaultVariants: { variant: 'default', size: 'default' }
	}
);
export const buttonVariantsCn = (
	options: Parameters<typeof buttonVariants>[0]
) => cn(buttonVariants(options));
