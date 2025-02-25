import '../index.css';
import { CgClose } from 'react-icons/cg';
import { FiInbox } from 'react-icons/fi';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	header_text: string;
	className?: string;
	icon?: React.ReactNode;
	color?: string;
	colorType: string;
}

export default function Tooltip(props: TooltipProps) {
	const {
		children,
		color,
		colorType,
		header_text,
		className = '',
		...rest
	} = props;

	let colorClass;

	if (colorType === 'dark') {
		colorClass = `bg_dark_${color}`;
	} else if (colorType === 'light') {
		colorClass = `bg_${color}`;
	}

	const dynamicStyle = [
		{
			borderTopColor: colorType ? `var(--dark-${color})` : `var(--${color})`,
		},
		{
			color: color
				? `var(--${colorType === 'dark' ? 'bg_dark_' + color : 'bg_' + color})`
				: '#FFFFFF',
		},
	];

	return (
		<div {...rest} className={`${colorClass} tooltip_class ${className}`}>
			<div className='tooltip_close_icon'>
				<div className='tooltip_header_icon_container'>
					<FiInbox className='tooltip_icon' style={dynamicStyle[1]} />
					<h3>{header_text}</h3>
				</div>
				<CgClose className='close_button' style={dynamicStyle[1]} />
			</div>
			<div>
				<p>{children}</p>
			</div>
			<span className='tooltip_triangle' style={dynamicStyle[0]}></span>
		</div>
	);
}
