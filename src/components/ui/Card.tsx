/**
 * Card Component
 * Reusable card component following SOLID principles
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Interface Segregation Principle - Specific interfaces for different card variants
export interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface CardVariantProps {
  variant?: "default" | "elevated" | "outlined" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export interface CardProps extends BaseCardProps, CardVariantProps {}

// Single Responsibility Principle - Card component only handles card rendering
const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  variant = "default",
  padding = "md",
  hover = false,
}) => {
  // Open/Closed Principle - Easy to extend with new variants without modifying existing code
  const getVariantClasses = (variant: CardVariantProps["variant"]) => {
    const variants = {
      default: "bg-white border border-gray-200",
      elevated: "bg-white shadow-lg",
      outlined: "bg-white border-2 border-yellow-200",
      filled: "bg-yellow-50 border border-yellow-200",
    };
    return variants[variant || "default"] || variants.default;
  };

  const getPaddingClasses = (padding: CardVariantProps["padding"]) => {
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };
    return paddings[padding || "md"] || paddings.md;
  };

  const baseClasses = "rounded-xl transition-all duration-300";
  const variantClasses = getVariantClasses(variant);
  const paddingClasses = getPaddingClasses(padding);
  const hoverClasses = hover
    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    : "";

  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses,
        paddingClasses,
        hoverClasses,
        className
      )}
    >
      {children}
    </Component>
  );
};

// Card sub-components for better composition
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h3 className={cn("text-xl font-semibold text-gray-900", className)}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p className={cn("text-gray-600 text-sm leading-relaxed", className)}>
    {children}
  </p>
);

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={cn("", className)}>{children}</div>
);

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={cn("mt-4 pt-4 border-t border-gray-200", className)}>
    {children}
  </div>
);

export default Card;
