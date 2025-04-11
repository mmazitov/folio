'use client';
import Image from 'next/image';
import Link from 'next/link';

import { socialLinksData } from '@/../data/data';
const SocialsList = () => {
	return (
		<ul className="hidden md:flex justify-end gap-4 w-1/3">
			{socialLinksData.map((link, id) => (
				<li key={id} className="flex items-center">
					<Link
						href={link.utl}
						className="flex items-center gap-2 text-white text-2xl"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={link.img}
							alt={link.title}
							width={30}
							height={30}
							className="w-6 h-6"
						/>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SocialsList;
