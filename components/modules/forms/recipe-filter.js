import { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';

import { inter } from '~/styles/fonts';

import Icon from '~/components/modules/icon';

import RecipeTypes from 'data/recipe-types';

const FormRecipeFilter = ({
	setFilter,
	filteredValue,
	className
}) => {
	const updateFilter = item => {
		setFilter(item);
	};

	return (
		<div
			className={`
				mb-4
				${className ?? ''}
			`}
		>
			<form>
				<Select.Root
					defaultValue={filteredValue.id}
					onValueChange={e => updateFilter(RecipeTypes.find(item => item.id === e))}
				>
					<Select.Trigger
						className={`
							flex items-center justify-between gap-2 w-full sm:w-auto min-w-[6rem] rounded-sm px-3 py-2 text-xs leading-none font-sans bg-opacity-10 border border-black/10 transition hover:bg-opacity-80 hover:text-white focus:bg-opacity-80 focus:text-white focus:shadow-[0_0_0_1px] focus:shadow-black/50 outline-none
							${filteredValue.color.selected.color}
							${filteredValue.color.background}
						`}
						aria-label="Food"
					>
						<Select.Value placeholder="Select a food type" />
						<Select.Icon>
							<Icon
								icon="mdi:chevron-down"
							/>
						</Select.Icon>
					</Select.Trigger>
					<Select.Portal>
						<Select.Content
							className={`
								${inter.variable}
								font-sans overflow-hidden bg-white rounded-sm shadow-md
							`}
						>
							<Select.Viewport className="p-1 space-y-px">
								{RecipeTypes.map(item => (
									<SelectItem
										key={item.id}
										item={item}
									/>
								))}
							</Select.Viewport>
						</Select.Content>
					</Select.Portal>
				</Select.Root>
			</form>
		</div>
	);
};

const SelectItem = forwardRef((
	{
		children,
		className,
		item,
		...props
	},
	forwardedRef
) => {
	return (
		<Select.Item
			ref={forwardedRef}
			value={item.id}
			className={twMerge(
				'group flex items-center py-1.5 px-3 relative select-none text-xs leading-none rounded-sm cursor-pointer data-[disabled]:text-gray-550 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:text-white data-[state=checked]:text-white',
				item.color.selected.background,
				item.color.hover,
				className ?? ''
			)}
			{...props}
		>
			<Select.ItemText>{item.name}</Select.ItemText>
		</Select.Item>
	);
});

SelectItem.displayName = 'SelectItem';
export default FormRecipeFilter;
