import ScrollBtn from '@/components/ScrollBtn';
import { ScrollNextProps } from '@/types/index';
const About = ({ scrollNext }: ScrollNextProps) => {
	return (
		<>
			<h2 className="font-bold text-2xl">About</h2>
			<p className="text-lg">
				I`m a front-end developer with over 10 years of experience in building
				responsive, accessible, and pixel-perfect web interfaces. My journey
				started with clean HTML and CSS, grew through mastering JavaScript and
				jQuery, and evolved into creating complex applications using React and
				Next.js.
			</p>
			<p className="text-lg">
				Throughout my career, I’ve developed 40+ themes for October CMS,
				migrated legacy systems to modern stacks, and built rich dashboard
				solutions. I’ve led teams, mentored newcomers, conducted over 50 code
				reviews, and collaborated directly with clients to deliver high-quality
				results.
			</p>
			<p className="text-lg">
				I`m passionate about clean code, thoughtful UI/UX, and continuous
				learning. Whether it’s solving a tricky layout issue or designing
				scalable architecture, I approach each task with attention to detail,
				curiosity, and a drive to make the web better.
			</p>
			<ScrollBtn onClick={scrollNext} />
		</>
	);
};

export default About;
