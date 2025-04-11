import Link from 'next/link';

const Logo = () => {
	return (
		<div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
			<Link
				href="/"
				className="flex justify-center items-center bg-white p-1 border-[#000] border-2 rounded-md w-12 h-12 font-semibold text-black text-sm"
			>
				M.M
			</Link>
		</div>
	);
};

export default Logo;
