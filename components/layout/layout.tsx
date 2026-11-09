import type { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import SkipLink from '~/components/modules/navigation/skip-link';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div id="top" className="relative flex min-h-dvh flex-col">
			<SkipLink />
			<Header />
			<main id="start-of-content" tabIndex={-1}>
				{children}
			</main>
			<Footer />
		</div>
	);
}
