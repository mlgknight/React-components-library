import '../index.css';

interface CardProps {
	children: React.ReactNode;
	header_text: string;
	className: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

export default function Card(props: CardProps) {
	const { className, onClick, icon, header_text, children, ...rest } = props;

	return (
		<div onClick={onClick} className={`card ${className}`} {...rest}>
			<div>{icon}</div>
			<h3>{header_text}</h3>
			<p> {children} </p>
		</div>
	);
}
