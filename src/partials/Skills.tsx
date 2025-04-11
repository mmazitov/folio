import { motion } from 'framer-motion';

import ScrollBtn from '@/components/ScrollBtn';
import SkillsList from '@/components/SkillsList';
import { ScrollNextProps, SkillsProps } from '@/types/index';

type Props = SkillsProps & ScrollNextProps;

const Skills = ({ isSkillRefInView, scrollNext }: Props) => {
	return (
		<>
			<motion.h2
				initial={{ x: '-300px' }}
				animate={isSkillRefInView ? { x: 0 } : {}}
				transition={{ delay: 0.2 }}
				className="font-bold text-2xl"
			>
				Skills
			</motion.h2>
			<SkillsList isSkillRefInView={isSkillRefInView} />
			<ScrollBtn onClick={scrollNext} />
		</>
	);
};

export default Skills;
