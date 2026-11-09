import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '~/components/util/structured-data';
import { buttonVariantsCn } from '~/components/modules/core/button-variants';
import { buildPageMetadata, buildWebPageStructuredData } from '~/lib/seo';
import FaceHurt from '~/images/inline/face.hurt.svg';

export const metadata: Metadata = buildPageMetadata('404: Not found', '/404');

export default function NotFoundPage() {
	return (
		<>
			<StructuredData
				data={buildWebPageStructuredData('/404', '404: Not found')}
			/>
			<section className="relative grid min-h-dvh place-items-center overflow-clip py-12">
				<div className="container relative z-10 px-4 text-center">
					<FaceHurt
						role="img"
						aria-hidden="true"
						className="mx-auto w-1/6 opacity-30 md:w-1/5"
					/>
					<h1 className="text-[clamp(3.34rem,20vw,18rem)] leading-tight font-extrabold text-pretty text-foreground/30 uppercase">
						Damn
					</h1>
					<p className="mx-auto mb-8 max-w-xl text-base text-pretty md:text-lg lg:text-xl">
						Looks like the page you’re looking for doesn’t exist. Don’t worry,
						it happens to the best of us. You can always head back to the
						recipes and start fresh.
					</p>
					<nav
						aria-label="Return navigation"
						className="mx-auto flex max-w-xl flex-wrap justify-center gap-4 font-sans"
					>
						<Link
							href="/"
							className={buttonVariantsCn({ variant: 'link', size: 'link' })}
						>
							Home
						</Link>
					</nav>
				</div>
			</section>
		</>
	);
}
