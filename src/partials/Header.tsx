'use client';

import Logo from '@/components/Logo';
import NavigationDesktop from '@/components/navigation/NavigationDesktop.';
import NavigationMobile from '@/components/navigation/NavigationMobile';
import SocialsList from '@/components/SocialsList';

const Header = () => {
	return (
		<div className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 h-full text-xl">
			{/* DESKTOP MENU */}
			<NavigationDesktop />
			{/* LOGO */}
			<Logo />
			{/* SOCIALS */}
			<SocialsList />
			{/* MOBILE MENU */}
			<NavigationMobile />
		</div>
	);
};

export default Header;
