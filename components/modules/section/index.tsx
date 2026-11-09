import type { ComponentProps } from 'react';
import { cn } from '~/lib/utils';

export default function Section({
	className,
	...props
}: ComponentProps<'section'>) {
	return <section className={cn('scroll-mt-20', className)} {...props} />;
}
