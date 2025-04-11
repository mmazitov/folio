import { motion } from 'framer-motion';

import { skillsData } from '@/../data/data';
import { SkillsProps } from '@/types/index';

const SkillsList = ({ isSkillRefInView }: SkillsProps) => {
	return (
		<motion.ul
			initial={{ x: '-300px' }}
			animate={isSkillRefInView ? { x: 0 } : {}}
			className="flex flex-wrap gap-4"
		>
			{skillsData.map((skill, id) => (
				<li
					key={id}
					className="bg-black hover:bg-white p-2 rounded text-white hover:text-black text-sm transition-colors cursor-pointer"
				>
					{skill.title}
				</li>
			))}
		</motion.ul>
	);
};

export default SkillsList;
