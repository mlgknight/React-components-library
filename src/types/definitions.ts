// Define common color types
export type colorSelection = 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo' | 'pink';

// CardProps interface
export interface CardProps {
    children: React.ReactNode;
    header_text: string;
    className?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    cardColor: colorSelection;
    iconColor: colorSelection;
}
// BannerProps interface

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	variant: string;
	className?: string;
}

// ButtonProps interface

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo' | 'pink';
	variant: string;
	colorType: 'dark' | 'light';
}

// TooltipProps interface

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	header_text: string;
	className?: string;
	icon?: React.ReactNode;
	color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo' | 'pink';
	colorType: 'dark' | 'light';
}

// ToastProps interface

export interface ToastProps {
	variant: string;
}