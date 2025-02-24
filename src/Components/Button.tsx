import '../index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	color: string;
	variant: string;
}

export default function Button(props: ButtonProps) {
	const { children, color, variant, className, ...rest } = props;



	const colorClass = 'button_' + color;
    const variantClass = 'button_' + variant;

	return (
		<button {...rest} className={`${colorClass} ${variantClass} ${className}`}>
			{children}
		</button>
	);
}
