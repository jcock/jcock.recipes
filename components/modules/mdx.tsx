import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';
import Link from 'next/link';

function MDXLink({ href = '', children, ...props }: ComponentProps<'a'>) {
	if (href.startsWith('/'))
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		);
	return (
		<a href={href} {...props}>
			{children}
		</a>
	);
}

export function getMDXComponents(overrides: MDXComponents = {}): MDXComponents {
	return { a: MDXLink, ...overrides };
}
