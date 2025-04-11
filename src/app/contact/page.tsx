'use client';
import { motion } from 'framer-motion';

const ContactPage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className="flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-full">
				Contact
			</div>
		</motion.div>
	);
};

export default ContactPage;
