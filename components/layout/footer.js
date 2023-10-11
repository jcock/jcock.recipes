import Button from '~/components/modules/button';

import site from '~/data/site.json';

const Footer = ({ className }) => {
	return (
		<footer
			className={`
				mt-auto px-4 py-3 bg-black/5 text-center text-xs
				${className ?? ''}
			`}
		>
			<div className="container flex justify-between items-center">
				<p className="m-0">
					© {new Date().getFullYear()}. <Button.Anchor href={`${site.copyright.url}`} variant="link" hasUnderline>{site.copyright.name}</Button.Anchor>
				</p>

				<div className="flex">
					<Button.Scroll
						href="top"
						variant="none"
						size="sq"
					>
						<span className="sr-only">To the top!</span>
						<Button.Icon
							icon="mdi:arrow-collapse-up"
							size="w-4 h-4"
						/>
					</Button.Scroll>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
