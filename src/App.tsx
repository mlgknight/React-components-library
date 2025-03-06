import Card from './Components/Card';
import Badge from './Components/Badge';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import Banner from './Components/Banner';
import Testimonials from './Components/Testimonials';
import { FcHome } from 'react-icons/fc';
import { FaDownload } from 'react-icons/fa6';
import './App.css';
import { colorSelection, colorType, variantType } from './types/definitions';
import testimg from '../src/assets/testimg.jpg';
import { BiBell } from 'react-icons/bi';
import { BiAnchor } from 'react-icons/bi';
import { BiBaguette } from 'react-icons/bi';
import { BiCaretRightCircle } from 'react-icons/bi';

function App() {
	// Card props
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <FaDownload />,
		cardColor: 'blue' as colorSelection,
		iconColor: 'blue' as colorSelection,
	};
	const cardPropsTwo = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <BiBaguette />,
		cardColor: 'red' as colorSelection,
		iconColor: 'red' as colorSelection,
	};
	const cardPropsThree = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <BiCaretRightCircle />,
		cardColor: 'yellow' as colorSelection,
		iconColor: 'yellow' as colorSelection,
	};

	// Button props
	const badgeProps = {
		variant: 'info' as variantType,
		color: 'blue' as colorSelection,
		colorType: 'light' as colorType,
	};
	const badgePropsTwo = {
		variant: 'info' as variantType,
		color: 'indigo' as colorSelection,
		colorType: 'dark' as colorType,
	};
	const badgePropsThree = {
		variant: 'info' as variantType,
		color: 'red' as colorSelection,
		colorType: 'dark' as colorType,
	};

	// Tooltip props
	const toolTipProps = {
		header_text: 'Archive notes',
		color: 'gray' as colorSelection,
		colorType: 'light' as colorType,
	};
	const toolTipPropsTwo = {
		header_text: 'Archive notes',
		color: 'gray' as colorSelection,
		colorType: 'dark' as colorType,
	};
	const toolTipPropsThree = {
		header_text: 'Archive notes',
		color: 'blue' as colorSelection,
		colorType: 'light' as colorType,
	};
	const toolTipPropsFour = {
		header_text: 'Archive notes',
		color: 'blue' as colorSelection,
		colorType: 'dark' as colorType,
	};
	const toolTipPropsFive = {
		header_text: 'Archive notes',
		color: 'pink' as colorSelection,
		colorType: 'light' as colorType,
	};
	const toolTipPropsSix = {
		header_text: 'Archive notes',
		color: 'pink' as colorSelection,
		colorType: 'dark' as colorType,
	};

	// Toast props
	const ToastProps = {
		variant: 'info' as variantType,
	};
	const ToastPropsTwo = {
		variant: 'error' as variantType,
	};
	const ToastPropsThree = {
		variant: 'warning' as variantType,
	};

	// Banner props
	const BannerProps = {
		variant: 'info' as variantType,
		className: '',
	};
	const BannerPropsTwo = {
		variant: 'error' as variantType,
		className: '',
	};
	const BannerPropsThree = {
		variant: 'warning' as variantType,
		className: '',
	};

	// Testimonials props
	const TestimonialsProps = {
		name: 'Oussama Ajala',
		location: 'Charlotte, NC',
		icon: <FcHome />,
		color: 'white' as colorSelection,
		img: testimg,
	};

	const TestimonialsPropsTwo = {
		name: 'John Andersons',
		location: 'Seattle, Washington',
		icon: <BiAnchor />,
		color: 'white' as colorSelection,
	};

	const TestimonialsPropsThree = {
		name: 'May Andersons',
		location: 'Workcation, CTO',
		icon: <BiBell />,
		color: 'indigo' as colorSelection,
	};

	return (
		<div className='container'>
			{/* Card Section */}
			<section className='component-section'>
				<h2>Card Component</h2>
				<Card {...cardProps}>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
					magna sit morbi lobortis.
				</Card>
				<Card {...cardPropsTwo}>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
					magna sit morbi lobortis.
				</Card>
				<Card {...cardPropsThree}>
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
					magna sit morbi lobortis.
				</Card>
			</section>

			{/* Badge Section */}
			<section className='component-section'>
				<h2>Badge Component</h2>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
					<Badge {...badgeProps}>Badge</Badge>
					<Badge {...badgePropsTwo}>Badge</Badge>
					<Badge {...badgePropsThree}>Badge</Badge>
				</div>
			</section>

			{/* Tooltip Section */}
			<section className='component-section'>
				<h2>Tooltip Component</h2>
				<Tooltip {...toolTipProps}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
				<Tooltip {...toolTipPropsTwo}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
				<Tooltip {...toolTipPropsThree}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
				<Tooltip {...toolTipPropsFour}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
				<Tooltip {...toolTipPropsFive}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
				<Tooltip {...toolTipPropsSix}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
					tenetur.
				</Tooltip>
			</section>

			{/* Toast Section */}
			<section className='component-section'>
				<h2>Toast Component</h2>
				<Toast {...ToastProps}></Toast>
				<Toast {...ToastPropsTwo}></Toast>
				<Toast {...ToastPropsThree}></Toast>
			</section>

			{/* Banner Section */}
			<section className='component-section'>
				<h2>Banner Component</h2>
				<Banner {...BannerProps}>
					We’ve just rolled out some amazing updates to make your experience
					even better. Check out the new features, improved performance, and
					sleek design.
				</Banner>
				<Banner {...BannerPropsTwo}>
					We encountered an issue while processing your request. Please check
					your input and try again. If the problem persists, contact support at
					[support@example.com].
				</Banner>
				<Banner {...BannerPropsThree}>
					Your session is about to expire due to inactivity. To avoid losing
					unsaved changes, please take action now.
				</Banner>
			</section>

			{/* Testimonials Section */}
			<section className='component-section'>
				<h2>Testimonials Component</h2>
				<Testimonials {...TestimonialsProps}>
					"Hard work is the foundation upon which value is built. It transforms
					potential into achievement, effort into excellence, and dreams into
					reality. Without it, talent is wasted, and opportunity is lost. But
					with it, even the impossible becomes possible, and the ordinary
					becomes extraordinary."
				</Testimonials>

				<Testimonials {...TestimonialsPropsTwo}>
					“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
					expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
					laborum sed rerum et corporis.”
				</Testimonials>

				<Testimonials {...TestimonialsPropsThree}>
					“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
					expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
					laborum sed rerum et corporis.”
				</Testimonials>
			</section>
		</div>
	);
}

export default App;
