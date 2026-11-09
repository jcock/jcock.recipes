'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { Button } from '~/components/modules/core/button';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ViewMode() {
	const mounted = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot
	);
	const { resolvedTheme, setTheme } = useTheme();
	const isDark = mounted && resolvedTheme === 'dark';
	const ThemeIcon = isDark ? MoonIcon : SunIcon;
	const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			aria-label={label}
			title={label}
			disabled={!mounted}
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			<ThemeIcon aria-hidden="true" />
		</Button>
	);
}
