'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

import Brain from '@/components/Brain';
import About from '@/partials/About';
import Experience from '@/partials/Experience';
import Skills from '@/partials/Skills';

const HomePage = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef<HTMLDivElement | null>(null);
	const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

	const experienceRef = useRef<HTMLDivElement | null>(null);
	const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

	const scrollToSection = (
		sectionRef: React.RefObject<HTMLDivElement | null>,
	) => {
		if (sectionRef.current) {
			sectionRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div
				className="lg:flex h-full overflow-y-scroll scroll-smooth about"
				ref={containerRef}
			>
				<div className="flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 lg:pr-0 lg:w-2/3 xl:w-1/2">
					<section className="flex flex-col justify-center gap-5">
						<About scrollNext={() => scrollToSection(skillRef)} />
					</section>
					<section
						className="flex flex-col justify-center gap-12"
						ref={skillRef}
					>
						<Skills
							isSkillRefInView={isSkillRefInView}
							scrollNext={() => scrollToSection(experienceRef)}
						/>
					</section>
					<section
						className="flex flex-col justify-center gap-12 pb-48"
						ref={experienceRef}
					>
						<Experience isExperienceRefInView={isExperienceRefInView} />
					</section>
				</div>
				<div className="hidden lg:block top-0 z-30 sticky w-1/3 xl:w-1/2">
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
