import '../index.css';
import { ButtonProps } from '../types/definitions';

export default function Button(props: ButtonProps) {
	const { children, color, variant, colorType, className, ...rest } = props;

	let colorClass: variantType = 'light';
	const variantClass: string = 'button_' + variant;

	if (colorType === 'dark') {
		colorClass = `bg_dark_${color}`;
	} else if (colorType === 'light') {
		colorClass = `bg_${color}`;
	} else {
		throw new Error('Invalid variant');
	}

	return (
		<button {...rest} className={`${colorClass} ${variantClass} ${className}`}>
			{children}
		</button>
	);
}
