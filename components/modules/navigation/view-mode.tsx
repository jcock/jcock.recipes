'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, MonitorIcon } from '@phosphor-icons/react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/components/modules/core/select';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;
const themes = [
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },
	{ value: 'system', label: 'System' }
];

export default function ViewMode() {
	const mounted = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot
	);
	const { theme, setTheme } = useTheme();
	const selected = mounted ? (theme ?? 'system') : 'system';
	const ThemeIcon =
		selected === 'dark'
			? MoonIcon
			: selected === 'light'
				? SunIcon
				: MonitorIcon;
	return (
		<Select
			items={themes}
			value={selected}
			onValueChange={value => {
				if (value) setTheme(value);
			}}
		>
			<SelectTrigger
				variant="theme"
				aria-label="Color theme"
				disabled={!mounted}
			>
				<ThemeIcon aria-hidden="true" />
				<SelectValue />
			</SelectTrigger>
			<SelectContent align="end" alignItemWithTrigger={false}>
				<SelectGroup>
					{themes.map(item => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
