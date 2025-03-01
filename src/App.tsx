import Card from './Components/Card';
import Button from './Components/Button';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import Banner from './Components/Banner';
import { AiOutlineCodepen } from 'react-icons/ai';

import './App.css';
import { colorSelection, colorType, variantType } from './types/definitions';

function App() {
	// Card props
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <AiOutlineCodepen />,
		cardColor: 'blue' as colorSelection,
		iconColor: 'blue' as colorSelection,
	};

	// Button props
	const buttonProps = {
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

	return (
		<div className='container'>
			<Card {...cardProps}>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
				sit morbi lobortis.
			</Card>
			<Button {...buttonProps}>Badge</Button>

			<Tooltip {...toolTipProps}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
				tenetur.
			</Tooltip>
			<Toast {...ToastProps}></Toast>
			<Banner {...BannerProps}></Banner>
		</div>
	);
}

export default App;
