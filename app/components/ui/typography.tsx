import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
      h5: "text-lg lg:text-xl",
      h6: "text-base lg:text-lg",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      success: "text-primary",
      warning: "text-orange-600",
      error: "text-red-600",
    },
  },
  defaultVariants: {
    level: "h1",
    color: "default",
  },
})

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      success: "text-primary",
      warning: "text-orange-600",
      error: "text-red-600",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "default",
  },
})

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {}

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {}

const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, color, ...props }, ref) => (
    <h1
      className={cn(headingVariants({ level: "h1", color, className }))}
      ref={ref}
      {...props}
    />
  )
)
H1.displayName = "H1"

const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, color, ...props }, ref) => (
    <h2
      className={cn(headingVariants({ level: "h2", color, className }))}
      ref={ref}
      {...props}
    />
  )
)
H2.displayName = "H2"

const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, color, ...props }, ref) => (
    <h3
      className={cn(headingVariants({ level: "h3", color, className }))}
      ref={ref}
      {...props}
    />
  )
)
H3.displayName = "H3"

const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, color, ...props }, ref) => (
    <h4
      className={cn(headingVariants({ level: "h4", color, className }))}
      ref={ref}
      {...props}
    />
  )
)
H4.displayName = "H4"

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, ...props }, ref) => (
    <p
      className={cn(textVariants({ size, weight, color, className }))}
      ref={ref}
      {...props}
    />
  )
)
Text.displayName = "Text"

const Lead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  )
)
Lead.displayName = "Lead"

const Large = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  )
)
Large.displayName = "Large"

const Small = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  )
)
Small.displayName = "Small"

const Muted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
Muted.displayName = "Muted"

export { H1, H2, H3, H4, Text, Lead, Large, Small, Muted, headingVariants, textVariants }