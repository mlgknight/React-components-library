import Card from './Components/Card';
import Button from './Components/Button';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import { BsCloudUpload } from 'react-icons/bs';

import './App.css';
function App() {
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <BsCloudUpload className='card_icon' />,
	};

	const buttonProps = {
		variant: 'pill',
		color: 'blue',
		colorType: 'dark',
	};

	const toolTipProps = {
		header_text: 'Archive notes',
		// gray, red, yellow, green, blue, indigo, purple, pink
		color: 'blue',
		// dark or light
		colorType: 'dark',
	};

	const ToastProps = {
		// success, warning, error, info
		variant: 'info',
		children: 'Your work has been saved',
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
		</div>
	);
}

export default App;
