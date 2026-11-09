import Image from 'next/image';

type JumbotronProps = { title: string; image?: string };

export default function Jumbotron({ title, image }: JumbotronProps) {
	return (
		<section className="relative grid min-h-48 max-h-[33vh] grid-cols-1 grid-rows-1 overflow-hidden bg-[radial-gradient(#333842,#0d0e11)] text-white">
			<div className="container relative z-10 col-span-full row-span-full grid place-items-center px-4 py-14">
				<h1 className="font-sans text-3xl font-bold">{title}</h1>
			</div>
			{image && (
				<div className="relative col-span-full row-span-full">
					<Image
						src={image}
						width={1920}
						height={720}
						alt=""
						loading="eager"
						fetchPriority="high"
						sizes="100vw"
						className="size-full object-cover object-center opacity-20"
					/>
				</div>
			)}
		</section>
	);
}
