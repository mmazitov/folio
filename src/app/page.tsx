'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HomePage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className="flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-full">
				{/* IMAGE CONTAINER */}
				<div className="relative lg:w-1/2 h-1/2 lg:h-full">
					<Image src="/hero.png" alt="" fill className="object-contain" />
				</div>
				{/* TEXT CONTAINER */}
				<div className="flex flex-col justify-center items-center gap-8 lg:w-1/2 h-1/2 lg:h-full">
					{/* TITLE */}
					<h1 className="font-bold text-4xl md:text-6xl">
						Building Seamless Interfaces, Empowering Digital Journeys.
					</h1>
					{/* DESC */}
					<p className="md:text-xl">
						Welcome to my front-end world — where clean code meets thoughtful
						design. With over a decade of experience, I blend creativity,
						precision, and modern technologies to craft engaging user
						experiences, lead development teams, and bring ideas to life through
						elegant and scalable solutions.
					</p>
					{/* BUTTONS */}
					<div className="flex gap-4 w-full">
						<button className="bg-black p-4 rounded-lg ring-1 ring-black text-white">
							View My Work
						</button>
						<button className="p-4 rounded-lg ring-1 ring-black">
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
