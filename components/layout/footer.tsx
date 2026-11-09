import { ArrowLineUpIcon } from '@phosphor-icons/react/ssr';
import { Button } from '~/components/modules/core/button';
import { buttonVariantsCn } from '~/components/modules/core/button-variants';
import site from '~/data/site.json';

export default function Footer() {
	return (
		<footer className="mt-auto bg-foreground/5 px-4 py-3 text-center text-xs">
			<div className="container flex items-center justify-between gap-4">
				<p className="m-0">
					© {new Date().getFullYear()}.{' '}
					<a
						href={site.copyright.url}
						target="_blank"
						rel="noopener noreferrer"
						className={buttonVariantsCn({ variant: 'link', size: 'link' })}
					>
						{site.copyright.name}
					</a>
				</p>
				<Button
					render={<a href="#top" />}
					nativeButton={false}
					variant="ghost"
					size="icon-sm"
					aria-label="To the top"
				>
					<ArrowLineUpIcon aria-hidden="true" />
				</Button>
			</div>
		</footer>
	);
}
