import '../index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	color: string;
	variant: string;
	colorType: string;
}

export default function Button(props: ButtonProps) {
	const { children, color, variant, colorType, className, ...rest } = props;

	let colorClass: string = 'light';
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
