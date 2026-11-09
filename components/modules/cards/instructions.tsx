import type { ReactNode } from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '~/components/modules/core/card';

export default function InstructionsCard({
	children
}: {
	children: ReactNode;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle as="h2">Instructions:</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
