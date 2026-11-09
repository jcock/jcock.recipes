import Link from 'next/link';
import { ChefHatIcon } from '@phosphor-icons/react/ssr';
import site from '~/data/site.json';

export default function Navbar() {
	return (
		<nav
			aria-label="Main navigation"
			className="border-b border-border bg-background px-4"
		>
			<div className="container flex items-center justify-between gap-4 px-6 py-2 max-[360px]:px-0">
				<Link
					href="/"
					className="flex items-center gap-2 rounded-sm font-sans font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
				>
					<ChefHatIcon
						weight="duotone"
						className="size-6 shrink-0"
						aria-hidden="true"
					/>
					<span>{site.title}</span>
				</Link>
			</div>
		</nav>
	);
}
