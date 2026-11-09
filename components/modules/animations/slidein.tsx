'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useReducedMotionPreference } from '~/hooks/use-reduced-motion';

export default function SlideIn({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const reducedMotion = useReducedMotionPreference();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'start 0.85']
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const spring = useSpring(scale, { damping: 100, stiffness: 1000 });
	return (
		<motion.div
			ref={ref}
			className="h-full"
			data-motion-reveal
			style={{ scale: reducedMotion ? 1 : spring }}
		>
			{children}
		</motion.div>
	);
}
