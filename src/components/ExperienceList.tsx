import { motion } from 'framer-motion';

import { experienceData } from '@/../data/data';
import { ExperienceProps } from '@/types/index';

const ExperienceList = ({ isExperienceRefInView }: ExperienceProps) => {
	return (
		<motion.ul
			initial={{ x: '-300px' }}
			animate={isExperienceRefInView ? { x: '0' } : {}}
		>
			{experienceData.map((exp, id) => (
				<li key={id} className="flex justify-between">
					{id % 2 === 0 ? (
						<>
							<div className="w-1/3">
								<h3 className="bg-white p-3 rounded-s-lg rounded-b-lg font-semibold">
									{exp.title}
								</h3>
								<p className="p-3 text-sm italic">{exp.desc}</p>
								<p className="p-3 font-semibold text-red-400 text-sm">
									{exp.date}
								</p>
								<p className="bg-white p-1 rounded w-fit font-semibold text-sm">
									{exp.company}
								</p>
							</div>

							{/* CENTER */}
							<div className="flex justify-center w-1/6">
								<div className="relative bg-gray-600 rounded w-1 h-full">
									<div className="-left-2 absolute bg-white rounded-full ring-4 ring-red-400 w-5 h-5"></div>
								</div>
							</div>
							{/* EMPTY */}
							<div className="w-1/3"></div>
						</>
					) : (
						<>
							{/* EMPTY */}
							<div className="w-1/3"></div>

							{/* CENTER */}
							<div className="flex justify-center w-1/6">
								<div className="relative bg-gray-600 rounded w-1 h-full">
									<div className="-left-2 absolute bg-white rounded-full ring-4 ring-red-400 w-5 h-5"></div>
								</div>
							</div>

							<div className="w-1/3">
								<h3 className="bg-white p-3 rounded-s-lg rounded-b-lg font-semibold">
									{exp.title}
								</h3>
								<p className="p-3 text-sm italic">{exp.desc}</p>
								<p className="p-3 font-semibold text-red-400 text-sm">
									{exp.date}
								</p>
								<p className="bg-white p-1 rounded w-fit font-semibold text-sm">
									{exp.company}
								</p>
							</div>
						</>
					)}
				</li>
			))}
		</motion.ul>
	);
};

export default ExperienceList;
