import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
		<form className={className ?? ''}>
			<nav className="flex flex-wrap items-center gap-2">
				{RecipeTypes.map(item => (
					<label
						key={item.id}
						className={`
							cursor-pointer relative inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-sans border
							${filteredValue.id === item.id ? RecipeTypes.find(type => type.id === item.id).selected : `text-white/80 border-transparent ${RecipeTypes.find(type => type.id === item.id).color}`}
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
					</label>
				))}
			</nav>
		</form>
	);
};

export default FormRecipeFilter;
