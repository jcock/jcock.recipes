import { defineConfig } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	...next,
	...typescript,
	prettier,
	{ ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
	{
		rules: { 'react/no-unescaped-entities': 'off', 'react/display-name': 'off' }
	}
]);
