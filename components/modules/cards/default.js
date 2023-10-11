import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const cardClasses = (className, hasShadow) => twMerge(
	'relative flex flex-wrap flex-col bg-clip-border break-words bg-white/80 overflow-hidden border border-black/10 lg:border-black/5',
	hasShadow ? 'shadow-lg' : '',
	className ?? ''
);

const Card = ({
	children
}) => {
	return (
		{ children }
	);
};

const CardDefault = ({
	className,
	hasShadow = true,
	image,
	header,
	body,
	children,
	footer,
	...rest
}) => {
	return (
		<div
			className={cardClasses(className, hasShadow)}
			{...rest}
		>
			{image && image}
			{header && header}
			{children}
			{body && body}
			{footer && footer}
		</div>
	);
};

const CardLink = ({
	as = 'link',
	href,
	className,
	hasShadow = true,
	image,
	header,
	body,
	children,
	footer,
	...rest
}) => {
	const Container = as === 'link' ? Link : as;

	return (
		<Container
			href={href}
			className={twMerge(
				cardClasses(className, hasShadow),
				'group transition hover:shadow-xl hover:border-sky-450 focus:shadow-xl  focus:border-sky-450'
			)}
			{...rest}
		>
			{image && image}
			{header && header}
			{children}
			{body && body}
			{footer && footer}
		</Container>
	);
};

export const CardImage = ({
	image,
	alt,
	className,
	imageClassName,
	...rest
}) => {
	return (
		<div
			className={twMerge(
				'w-full overflow-hidden',
				className ?? ''
			)}
		>
			<Image
				src={image || image.src}
				width={image.width ? image.width : null}
				height={image.height ? image.height : null}
				alt={alt ?? ''}
				className={twMerge(
					'w-full h-auto',
					imageClassName ?? ''
				)}
				{...rest}
			/>
		</div>
	);
};

export const CardHeader = ({
	children,
	className
}) => {
	return (
		<div
			className={twMerge(
				'py-3 px-4 md:px-5 lg:px-6 bg-gray-100',
				className ?? ''
			)}
		>
			{children}
		</div>
	);
};

export const CardBody = ({
	children,
	className
}) => {
	return (
		<div
			className={twMerge(
				'flex-auto p-4 md:px-5 lg:px-6 lg:py-5',
				className ?? ''
			)}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({
	as = 'h3',
	children,
	className
}) => {
	const Title = as;

	return (
		<Title
			className={twMerge(
				'text-xs sm:text-sm md:text-base font-bold',
				className ?? ''
			)}
		>
			{children}
		</Title>
	);
};

export const CardFooter = ({
	children,
	className
}) => {
	return (
		<div
			className={twMerge(
				'py-2 px-4 md:px-5 lg:px-6 bg-gray-100',
				className ?? ''
			)}
		>
			{children}
		</div>
	);
};

Card.Default = CardDefault;
Card.Link = CardLink;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Footer = CardFooter;

export default Card;
