import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "gradient" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "error" | "info" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const headingVariants: (props?: ({
    level?: "h3" | "h1" | "h2" | "h4" | "h5" | "h6" | null | undefined;
    color?: "default" | "success" | "warning" | "error" | "muted" | "primary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const textVariants: (props?: ({
    size?: "sm" | "lg" | "xl" | "xs" | "base" | null | undefined;
    weight?: "bold" | "normal" | "medium" | "semibold" | null | undefined;
    color?: "default" | "success" | "warning" | "error" | "muted" | "primary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>, VariantProps<typeof headingVariants> {
}
interface TextProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>, VariantProps<typeof textVariants> {
}
declare const H1: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
declare const H2: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
declare const H3: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
declare const H4: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
declare const Lead: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const Large: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const Small: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
declare const Muted: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Badge, type BadgeProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, H1, H2, H3, H4, type HeadingProps, Input, type InputProps, Large, Lead, Muted, Small, Text, type TextProps, badgeVariants, buttonVariants, cn, headingVariants, textVariants };
