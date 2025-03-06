import '../index.css';
import { BadgeProps } from '../types/definitions';


export default function Badge(props: BadgeProps) {
	const { children, color, variant, colorType, className, ...rest } = props;

	let colorClass = 'light';
	const variantClass: string = 'button_' + variant;

	if (colorType === 'dark') {
		colorClass = `bg_dark_${color}`;
	} else if (colorType === 'light') {
		colorClass = `bg_${color}`;
	} else {
		throw new Error('Invalid variant');
	}

	return (
		<button {...rest} className={`badge_class ${colorClass} ${variantClass} ${className}`}>
			{children}
		</button>
	);
}
