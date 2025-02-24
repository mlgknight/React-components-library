import Card from './Components/Card';
import Button from './Components/Button';
import { BsCloudUpload } from 'react-icons/bs';
import Tooltip from "./Components/Tooltip"
import { FiInbox } from "react-icons/fi";

import './App.css';
function App() {
	const cardProps = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Easy Deployment',
		className: '',
		icon: <BsCloudUpload className="card_icon" />,
	};

	const buttonProps = {
		variant: 'square',
		color: 'yellow',
	};

	const toolTipProps = {
		icon: <FiInbox />,
		header_text: "Archive notes",
	};

	return (
		<div className="container">
			<Card {...cardProps}>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
				sit morbi lobortis.
			</Card>
			<Button {...buttonProps}>Badge</Button>

			<Tooltip {...toolTipProps} >Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
		</div>
	);
}

export default App;
