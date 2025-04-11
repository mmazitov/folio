'use client';
import { navigationLinksData } from '@/../data/data';

import NavigationLink from './NavigationLink';

const NavigationDesktop = () => {
	return (
		<nav
			className="hidden md:flex w-1/3"
			role="navigation"
			aria-label="Main Navigation"
		>
			<ul className="flex gap-4">
				{navigationLinksData.map((link, id) => (
					<li key={id} className="">
						<NavigationLink url={link.url} title={link.title} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationDesktop;
