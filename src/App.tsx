import { BiBell } from 'react-icons/bi';
import { BiAnchor } from 'react-icons/bi';
import { FcDataRecovery } from 'react-icons/fc';
import { BiCaretRightCircle } from 'react-icons/bi';
import { FiInbox } from 'react-icons/fi';
import { AiFillAlert } from 'react-icons/ai';
import { HiBell } from 'react-icons/hi';
import Card from './Components/Card';
import Badge from './Components/Badge';
import Tooltip from './Components/Tooltip';
import Toast from './Components/Toast';
import Banner from './Components/Banner';
import Testimonials from './Components/Testimonials';
import { FcHome } from 'react-icons/fc';
import { FaDownload } from 'react-icons/fa6';
import testimg from '../src/assets/testimg.jpg';
import './App.css';
import { colorSelection, colorType, variantType } from './types/definitions';

/**
 * App Component
 *
 * This is the main entry point of the application. It renders all the components in a structured layout.
 * Each section demonstrates the usage of a specific component (Card, Badge, Tooltip, Toast, Banner, Testimonials).
 */
function App() {
	// Card Props
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
		header_text: 'Recover Data',
		className: '',
		icon: <FcDataRecovery />,
		cardColor: 'red' as colorSelection,
		iconColor: 'red' as colorSelection,
	};
	const cardPropsThree = {
		onClick: () => console.log('Card clicked'),
		header_text: 'Watch Video',
		className: '',
		icon: <BiCaretRightCircle />,
		cardColor: 'yellow' as colorSelection,
		iconColor: 'yellow' as colorSelection,
	};

	// Badge Props
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
	const badgePropsFour = {
		variant: 'success' as variantType,
		color: 'green' as colorSelection,
		colorType: 'light' as colorType,
	};
	const badgePropsFive = {
		variant: 'warning' as variantType,
		color: 'yellow' as colorSelection,
		colorType: 'light' as colorType,
	};
	const badgePropsSix = {
		variant: 'neutral' as variantType,
		color: 'gray' as colorSelection,
		colorType: 'dark' as colorType,
	};

	// Tooltip Props
	const toolTipProps = {
		header_text: 'Archive notes',
		color: 'blue' as colorSelection,
		colorType: 'light' as colorType,
		icon: <FiInbox />,
	};
	const toolTipPropsTwo = {
		header_text: 'Archive notes',
		color: 'blue' as colorSelection,
		colorType: 'dark' as colorType,
	};
	const toolTipPropsThree = {
		header_text: 'Alert',
		color: 'yellow' as colorSelection,
		colorType: 'light' as colorType,
		icon: <AiFillAlert />,
	};
	const toolTipPropsFour = {
		header_text: 'Alert',
		color: 'yellow' as colorSelection,
		colorType: 'dark' as colorType,
		icon: <AiFillAlert />,
	};
	const toolTipPropsFive = {
		header_text: 'Notification',
		color: 'green' as colorSelection,
		colorType: 'light' as colorType,
		icon: <HiBell />,
	};
	const toolTipPropsSix = {
		header_text: 'Notification',
		color: 'green' as colorSelection,
		colorType: 'dark' as colorType,
		icon: <HiBell />,
	};

	// Toast Props
	const ToastProps = {
		variant: 'info' as variantType,
	};
	const ToastPropsTwo = {
		variant: 'error' as variantType,
	};
	const ToastPropsThree = {
		variant: 'warning' as variantType,
	};

	// Banner Props
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

	// Testimonials Props
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
		header: 'Testimonial',
	};
	const TestimonialsPropsThree = {
		name: 'May Andersons',
		location: 'Workcation, CTO',
		icon: <BiBell />,
		color: 'indigo' as colorSelection,
	};

	return (
		<div className='header_container'>
			{/* Card Section */}
			<div className='container'>
				<h1>Hi, my name is</h1>
				<h1>VibrantUI</h1>
			</div>
			<section className='component-section'>
				<h2>Card Component</h2>
				<p className='info_text'>
					The <strong>Card</strong> component is a reusable UI element that
					displays content in a structured format. It includes a header, an
					optional icon, and customizable colors. Use it to showcase information
					in a visually appealing way.
				</p>
				<ul>
					<li>
						<strong>header_text</strong>: string (Required) - The title of the
						card.
					</li>
					<li>
						<strong>onClick</strong>: function (Required) - Click handler
						function.
					</li>
					<li>
						<strong>icon</strong>: ReactNode (Optional) - Displays an icon in
						the card.
					</li>
					<li>
						<strong>cardColor</strong>: colorSelection (Required) - Defines the
						background color.
					</li>
					<li>
						<strong>iconColor</strong>: colorSelection (Required) - Defines the
						icon color.
					</li>
					<li>
						<strong>className</strong>: string (Optional) - Additional CSS
						classes.
					</li>
				</ul>
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
				<p className='info_text'>
					The <strong>Badge</strong> component is a small UI element used to
					display status, labels, or notifications.
				</p>
				<ul>
					<li>
						<strong>variant</strong>: variantType (Required) - The type of badge
						(e.g., info, success).
					</li>
					<li>
						<strong>color</strong>: colorSelection (Required) - Defines the
						badge color.
					</li>
					<li>
						<strong>colorType</strong>: colorType (Required) - Defines the color
						theme (light/dark).
					</li>
				</ul>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: '2rem',
						flexWrap: 'wrap',
					}}
				>
					<Badge {...badgeProps}>Info</Badge>
					<Badge {...badgePropsTwo}>Indigo</Badge>
					<Badge {...badgePropsThree}>Error</Badge>
					<Badge {...badgePropsFour}>Success</Badge>
					<Badge {...badgePropsFive}>Warning</Badge>
					<Badge {...badgePropsSix}>Neutral</Badge>
				</div>
			</section>

			{/* Tooltip Section */}
			<section className='component-section'>
				<h2>Tooltip Component</h2>
				<p className='info_text'>
					The <strong>Tooltip</strong> component displays additional information
					when hovered over.
				</p>
				<ul>
					<li>
						<strong>header_text</strong>: string (Required) - Tooltip title.
					</li>
					<li>
						<strong>color</strong>: colorSelection (Required) - Defines the
						tooltip color.
					</li>
					<li>
						<strong>colorType</strong>: colorType (Required) - Defines the
						tooltip color theme.
					</li>
					<li>
						<strong>icon</strong>: ReactNode (Optional) - An optional icon to
						display.
					</li>
				</ul>
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
				<p className='info_text'>
					The <strong>Toast</strong> component is used for non-intrusive
					notifications.
				</p>
				<ul>
					<li>
						<strong>variant</strong>: variantType (Required) - The type of toast
						message (e.g., info, error).
					</li>
				</ul>
				<Toast {...ToastProps}></Toast>
				<Toast {...ToastPropsTwo}></Toast>
				<Toast {...ToastPropsThree}></Toast>
			</section>

			{/* Banner Section */}
			<section className='component-section'>
				<h2>Banner Component</h2>
				<p className='info_text'>
					The <strong>Banner</strong> component is used for important alerts or
					messages.
				</p>
				<ul>
					<li>
						<strong>variant</strong>: variantType (Required) - The type of
						banner (e.g., info, warning).
					</li>
					<li>
						<strong>className</strong>: string (Optional) - Additional CSS
						classes.
					</li>
				</ul>
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
				<p className='info_text'>
					The <strong>Testimonials</strong> component showcases user feedback or
					reviews.
				</p>
				<ul>
					<li>
						<strong>name</strong>: string (Required) - The name of the person
						giving the testimonial.
					</li>
					<li>
						<strong>location</strong>: string (Required) - The person's
						location.
					</li>
					<li>
						<strong>icon</strong>: ReactNode (Optional) - An optional icon to
						represent the person.
					</li>
					<li>
						<strong>color</strong>: colorSelection (Optional) - The background
						color.
					</li>
					<li>
						<strong>img</strong>: string (Optional) - An optional image URL.
					</li>
				</ul>
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
