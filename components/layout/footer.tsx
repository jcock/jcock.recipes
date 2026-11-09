import { ArrowLineUpIcon } from '@phosphor-icons/react/ssr';
import { buttonVariantsCn } from '~/components/modules/core/button-variants';
import ViewMode from '~/components/modules/navigation/view-mode';
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
				<div className="flex shrink-0 items-center gap-1">
					<ViewMode />
					<a
						href="#top"
						className={buttonVariantsCn({ variant: 'ghost', size: 'icon-sm' })}
						aria-label="To the top"
					>
						<ArrowLineUpIcon aria-hidden="true" />
					</a>
				</div>
			</div>
		</footer>
	);
}
