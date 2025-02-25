import Card from './Components/Card';
import Button from './Components/Button';
import { BsCloudUpload } from 'react-icons/bs';
import Tooltip from './Components/Tooltip';

import './App.css';
function App() {
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <BsCloudUpload className="card_icon" />,
	};

	const buttonProps = {
		variant: 'pill',
		color: 'indigo',
		colorType: "dark",
	};

	const toolTipProps = {
		header_text: 'Archive notes',
		// gray, red, yellow, green, blue, indigo, purple, pink
		color: "indigo",
		// dark or light
		colorType: "dark",
	};

	return (
		<div className="container">
			<Card {...cardProps}>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
				sit morbi lobortis.
			</Card>
			<Button {...buttonProps}>Badge</Button>

			<Tooltip {...toolTipProps}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
				tenetur.
			</Tooltip>
		</div>
	);
}

export default App;
