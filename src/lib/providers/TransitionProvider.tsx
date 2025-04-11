'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import Header from '@/partials/Header';

interface TransitionProviderProps {
	children: ReactNode;
}

const TransitionProvider = ({ children }: TransitionProviderProps) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathName}
				className="bg-gradient-to-b from-blue-100 to-red-100 w-screen h-screen"
			>
				<motion.div
					className="z-40 fixed bg-black rounded-b-[100px] w-screen h-screen"
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				<motion.div
					className="top-0 right-0 bottom-0 left-0 z-50 fixed m-auto w-fit h-fit text-white text-8xl cursor-default"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					{pathName.substring(1).charAt(0).toUpperCase() +
						pathName.substring(1).slice(1) || 'Home'}
				</motion.div>
				<motion.div
					className="bottom-0 z-30 fixed bg-black rounded-t-[100px] w-screen h-screen"
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>
				<div className="h-24">
					<Header />
				</div>
				<div className="h-[calc(100vh-6rem)]">{children}</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
