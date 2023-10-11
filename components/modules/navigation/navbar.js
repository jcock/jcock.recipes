'use client';

import Link from 'next/link';

import Icon from '~/components/modules/icon';

import site from '~/data/site.json';

const Navbar = () => {
	return (
		<div className="px-4 transition-all bg-gray-50 border-b border-gray-400/20">
			<div className="flex flex-wrap items-center justify-between py-2 px-6 container transition-all">
				<Link
					href="/"
					className="flex gap-2 items-center"
				>
					<Icon
						icon="icon-park-twotone:chef-hat"
						size="w-6 h-6"
					/>
					<h1 className="text-gray-800 font-bold text-md no-underline">
						{site.title}
					</h1>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
