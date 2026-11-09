import { Skeleton } from '~/components/modules/core/skeleton';
export default function Loading() {
	return (
		<div
			aria-label="Loading recipes"
			role="status"
			className="container flex flex-col gap-6 px-4 py-12"
		>
			<Skeleton className="h-40 w-full" />
			<div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
				{Array.from({ length: 6 }, (_, index) => (
					<Skeleton key={index} className="aspect-4/3 w-full" />
				))}
			</div>
			<span className="sr-only">Loading…</span>
		</div>
	);
}
