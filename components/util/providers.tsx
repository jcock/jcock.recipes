'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ThemeProvider } from './context/theme';

export function Provider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			storageKey="jcock-recipes-theme"
		>
			<NuqsAdapter>
				<MotionConfig reducedMotion="user">{children}</MotionConfig>
			</NuqsAdapter>
		</ThemeProvider>
	);
}
