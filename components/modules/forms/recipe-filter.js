import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Badge from '~/components/modules/badge';

import RecipeTypes from 'data/recipe-types';

let validationSchema = Yup.object().shape({
	recipes: Yup.string()
		.required('(select a life stage)')
});

const FormRecipeFilter = ({
	setFilter,
	filteredValue,
	className
}) => {
	const {
		register,
		formState:{ errors }
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			recipes: 'all'
		},
		resolver: yupResolver(validationSchema)
	});

	const updateFilter = item => {
		setFilter(item);
	};

	return (
		<div
			className={`
				mb-4 p-3 border border-gray-150
				${className ?? ''}
			`}
		>
			<form>
				<div className="flex flex-wrap items-center gap-2">
					{RecipeTypes.map(item => (
						<Badge
							key={item.id}
							as="label"
							className={`
								cursor-pointer text-xs border
								${filteredValue.id === item.id ? `${RecipeTypes.find(type => type.id === item.id).selected} bg-transparent` : `text-white/80 border-transparent ${RecipeTypes.find(type => type.id === item.id).color}`}
								transition hover:opacity-80 focus:opacity-80
							`}
						>
							<input
								{...register('recipes')}
								type="radio"
								value={item.id}
								className="hidden peer"
								onChange={() => updateFilter(item)}
							/>
							{item.name}
						</Badge>
					))}
				</div>
			</form>
		</div>
	);
};

export default FormRecipeFilter;
