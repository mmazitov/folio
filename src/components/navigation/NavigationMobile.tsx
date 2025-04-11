import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navigationLinksData } from '@/../data/data';

const NavigationMobile = () => {
	const [open, setOpen] = useState(false);

	const handleMenuToggle = () => {
		setOpen((prev) => !prev);
	};

	useEffect(() => {
		document.body.classList.toggle('overflow-hidden', open);
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [open]);

	const burgerTopVariant = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255, 255, 255)',
		},
	};
	const burgerMiddleVariant = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const burgerBottomVariant = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255, 255, 255)',
		},
	};

	const navigationHolderVariant = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				staggerChildren: 0.2,
				when: 'beforeChildren',
			},
		},
	};
	const navigationItemVariant = {
		closed: {
			opacity: 0,
			y: -10,
		},
		opened: {
			opacity: 1,
			y: 0,
		},
	};
	return (
		<div className="md:hidden">
			<button
				className="z-50 relative flex flex-col justify-between w-10 h-8 cursor-pointer"
				onClick={handleMenuToggle}
			>
				<motion.span
					variants={burgerTopVariant}
					animate={open ? 'opened' : 'closed'}
					className="bg-black rounded w-10 h-1 origin-left"
				></motion.span>
				<motion.span
					variants={burgerMiddleVariant}
					animate={open ? 'opened' : 'closed'}
					className="bg-black rounded w-10 h-1"
				></motion.span>
				<motion.span
					variants={burgerBottomVariant}
					animate={open ? 'opened' : 'closed'}
					className="bg-black rounded w-10 h-1 origin-left"
				></motion.span>
			</button>
			{open && (
				<motion.nav
					variants={navigationHolderVariant}
					initial="closed"
					animate={open ? 'opened' : 'closed'}
					className="z-10 absolute inset-0 flex justify-center items-center bg-black navigation"
					role="navigation"
					aria-label="Main Navigation"
				>
					<ul className="flex flex-col gap-8">
						{navigationLinksData.map((link, id) => (
							<motion.li variants={navigationItemVariant} key={id} className="">
								<Link href={link.url} className="text-white text-4xl">
									{link.title}
								</Link>
							</motion.li>
						))}
					</ul>
				</motion.nav>
			)}
		</div>
	);
};

export default NavigationMobile;
