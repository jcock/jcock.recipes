const RecipeTypes = [
	{
		id: 'all',
		name: 'All',
		color: {
			background: 'bg-gray-900',
			hover: 'data-[highlighted]:bg-gray-900',
			selected: {
				color: 'text-gray-900',
				background: 'data-[state=checked]:bg-gray-900'
			}
		}
	},
	{
		id: 'dessert',
		name: 'Dessert',
		color: {
			background: 'bg-pink-400',
			hover: 'data-[highlighted]:bg-pink-400',
			selected: {
				color:  'text-pink-400',
				background: 'data-[state=checked]:bg-pink-400'
			}
		}
	},
	{
		id: 'drink',
		name: 'Drink',
		color: {
			background: 'bg-orange-400',
			hover: 'data-[highlighted]:bg-orange-400',
			selected: {
				color:  'text-orange-400',
				background: 'data-[state=checked]:bg-orange-400'
			}
		}
	},
	{
		id: 'meal',
		name: 'Meal',
		color: {
			background: 'bg-blue-400',
			hover: 'data-[highlighted]:bg-blue-400',
			selected: {
				color:  'text-blue-400',
				background: 'data-[state=checked]:bg-blue-400'
			}
		}
	},
	{
		id: 'misc',
		name: 'Misc',
		color: {
			background: 'bg-gray-500',
			hover: 'data-[highlighted]:bg-gray-500',
			selected: {
				color:  'text-gray-500',
				background: 'data-[state=checked]:bg-gray-500'
			}
		}
	},
	{
		id: 'side',
		name: 'Side',
		color: {
			background: 'bg-purple-400',
			hover: 'data-[highlighted]:bg-purple-400',
			selected: {
				color:  'text-purple-400',
				background: 'data-[state=checked]:bg-purple-400'
			}
		}
	},
	{
		id: 'snack',
		name: 'Snack',
		color: {
			background: 'bg-yellow-400',
			hover: 'data-[highlighted]:bg-yellow-400',
			selected: {
				color:  'text-yellow-400',
				background: 'data-[state=checked]:bg-yellow-400'
			}
		}
	}
];

export default RecipeTypes;
