import Card from './Components/Card';
import Button from './Components/Button';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import Banner from './Components/Banner';
import { AiOutlineCodepen } from 'react-icons/ai';

import './App.css';
function App() {
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <AiOutlineCodepen />,
		cardColor: 'blue',
		iconColor: 'blue',
	};

	const buttonProps = {
		variant: 'pill',
		color: 'blue',
		colorType: 'light',
	};

	const toolTipProps = {
		header_text: 'Archive notes',
		// gray, red, yellow, green, blue, indigo, purple, pink
		color: 'blue',
		// dark or light
		colorType: 'light',
	};

	const ToastProps = {
		// success, warning, error, info
		variant: 'info',
	};

	const BannerProps = {
		variant: 'info',
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
