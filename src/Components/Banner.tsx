import '../index.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { VscError } from 'react-icons/vsc';

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	color: string;
	variant: string;
	className?: string;
}

export default function Banner(props: BannerProps) {
	const { children, variant, className = '', ...rest } = props;

	let color: string = 'green';
	let cardText: string = 'Congratulations';
	let iconholder: React.ReactNode = <FaRegCheckCircle className='toast_icon' />;

	if (variant === 'success') {
		color = 'green';
		cardText = 'Congratulations';
		iconholder = <FaRegCheckCircle className='toast_icon' />;
	} else if (variant === 'warning') {
		color = 'yellow';
		cardText = 'Attention';
		iconholder = <RiErrorWarningLine className='toast_icon' />;
	} else if (variant === 'error') {
		color = 'red';
		cardText = 'There is a problem with your application';
		iconholder = <VscError className='toast_icon' />;
	} else if (variant === 'info') {
		color = 'blue';
		cardText = 'Update available';
		iconholder = <HiOutlineInformationCircle className='toast_icon' />;
	} else {
		throw new Error('Invalid variant');
	}

	const colorClass = `bg_${color}`;

	return (
		<div {...rest} className={`${children ? "banner_class" : "banner_class_small"} banner_class ${className} ${colorClass}`}>
			<div>
				{iconholder}
				<h3>{cardText}</h3>
			</div>
			{children && <p>{children}</p>}
		</div>
	);
}
