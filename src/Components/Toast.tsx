import '../index.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { VscError } from 'react-icons/vsc';

interface ToastProps {
	variant: string;
}

export default function Toast(props: ToastProps) {
	const { variant, ...rest } = props;

	let colorClass: string = 'green';
	let cardText: string = 'Success';
	let cardInner: string = 'Your work has been saved';
	let iconholder: React.ReactNode = <FaRegCheckCircle className='toast_icon' />;

	if (variant === 'success') {
		cardText = 'Success';
		cardInner = 'Your work has been saved';
		colorClass = 'green';
		iconholder = <FaRegCheckCircle className='toast_icon toast_icon success' />;
	} else if (variant === 'warning') {
		cardText = 'Warning';
		colorClass = 'yellow';
		cardInner = 'A network error was detected';
		iconholder = (
			<RiErrorWarningLine className='toast_icon toast_icon warning' />
		);
	} else if (variant === 'error') {
		cardText = 'Error';
		colorClass = 'red';
		cardInner = 'Please re-save your work again';
		iconholder = <VscError className='toast_icon toast_icon error' />;
	} else if (variant === 'info') {
		cardText = 'Information';
		colorClass = 'blue';
		cardInner = 'Please read updated information';
		iconholder = (
			<HiOutlineInformationCircle className='toast_icon toast_icon info' />
		);
	} else {
		throw new Error('Invalid variant');
	}

	return (
		<div className={`toast ${'bg_' + colorClass}`}>
			<div {...rest}>
				{iconholder}
				<h3>{cardText}</h3>
			</div>
			<p className='toast_text'>{cardInner}</p>
		</div>
	);
}
