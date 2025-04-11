'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
	url: string;
	title: string;
}

const NavbarLink = ({ url, title }: LinkProps) => {
	const pathName = usePathname();
	return (
		<div>
			<Link
				href={url}
				className={`rounded p-1 ${pathName === url && 'bg-black text-white'}`}
			>
				{title}
			</Link>
		</div>
	);
};

export default NavbarLink;
