import '../index.css';
import { CgClose } from "react-icons/cg";

interface TooltipProps {
	children: React.ReactNode;
	header_text: string;
	className: string;
	icon?: React.ReactNode;
}

export default function Tooltip(props: TooltipProps) {
	const { children, header_text, className, icon, ...rest} = props;
 
	return (
		<div {...rest} className={`${ className }`}>
			{icon}
			<h3>{header_text}</h3>
			<p>{children}</p>
			<CgClose />

		</div>
	);
}
