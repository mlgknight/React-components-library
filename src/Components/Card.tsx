import '../index.css';
import { CardProps } from '../types/definitions'


export default function Card(props: CardProps) {

	const {
		iconColor,
		cardColor,
		className,
		onClick,
		icon,
		header_text,
		children,
		...rest
	} = props;

	return (
		<div
			{...rest}
			onClick={onClick}
			className={`card ${className} bg_${cardColor}`}
		>
			{icon && <div className={` card_icon bg_${iconColor}`}>{icon}</div>}
			<h3>{header_text}</h3>
			<p>{children}</p>
		</div>
	);
}
