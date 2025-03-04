import Card from './Components/Card';
import Badge from './Components/Badge';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import Banner from './Components/Banner';
import Testimonials from './Components/Testimonials';
import { FcHome } from 'react-icons/fc';
import testimg from '../src/assets/testimg.jpg';


import { DiCodeigniter } from 'react-icons/di';

import './App.css';
import { colorSelection, colorType, variantType } from './types/definitions';

function App() {
	// Card props
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <DiCodeigniter />,
		cardColor: 'blue' as colorSelection,
		iconColor: 'blue' as colorSelection,
	};

	// Button props
	const badgeProps = {
		variant: 'info' as variantType,
		color: 'blue' as colorSelection,
		colorType: 'light' as colorType,
	};

	// Tooltip props
	const toolTipProps = {
		header_text: 'Archive notes',
		color: 'blue' as colorSelection,
		colorType: 'light' as colorType,
	};

	// Toast props
	const ToastProps = {
		variant: 'info' as variantType,
	};

	// Banner props
	const BannerProps = {
		variant: 'info' as variantType,
		className: '',
	};

	// Testimonials props
	const TestimonialsProps = {
		name: 'May Andersons',
		location: 'Workcation, CTO',
		icon: <FcHome />,
		color: 'indigo' as colorSelection,
		img: testimg
	};

	return (
		<div className='container'>
			<Card {...cardProps}>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
				sit morbi lobortis.
			</Card>
			<Badge {...badgeProps}>Badge</Badge>

			<Tooltip {...toolTipProps}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
				tenetur.
			</Tooltip>
			<Toast {...ToastProps}></Toast>
			<Banner {...BannerProps}></Banner>
			<Testimonials {...TestimonialsProps}>
				“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
				voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
				rerum et corporis.”
			</Testimonials>
		</div>
	);
}

export default App;
