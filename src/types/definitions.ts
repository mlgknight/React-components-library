import React from 'react';

// Define common color types
export type colorSelection = 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'white';
export type colorType = 'light' | 'dark';
export type variantType = 'success' | 'warning' | 'error' | 'info';

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
    variant: variantType;
    className?: string;
}

// ButtonProps interface
export interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color: colorSelection;
    variant: variantType;
    colorType?: colorType;
}

// TooltipProps interface
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    header_text: string;
    className?: string;
    icon?: React.ReactNode;
    color?: colorSelection;
    colorType: colorType;
}

// ToastProps interface
export interface ToastProps {
    variant: variantType;
}

// Testimonials interface

export interface TestimonialsProps {
    name: string;
    location: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    img?: string;
    color: colorSelection;
}