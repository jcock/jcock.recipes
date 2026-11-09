export default function SkipLink() {
	return (
		<a
			href="#start-of-content"
			className="sr-only bg-primary font-sans font-bold text-primary-foreground focus:not-sr-only focus:absolute focus:z-50 focus:px-6 focus:py-2"
		>
			Skip to content
		</a>
	);
}
