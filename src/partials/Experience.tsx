import { motion } from 'framer-motion';

import ExperienceList from '@/components/ExperienceList';
import { ExperienceProps } from '@/types/index';

const Experience = ({ isExperienceRefInView }: ExperienceProps) => {
	return (
		<>
			<motion.h2
				initial={{ x: '-300px' }}
				animate={isExperienceRefInView ? { x: '0' } : {}}
				transition={{ delay: 0.2 }}
				className="font-bold text-2xl"
			>
				Experience
			</motion.h2>
			<ExperienceList isExperienceRefInView={isExperienceRefInView} />
		</>
	);
};

export default Experience;
