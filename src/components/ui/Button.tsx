/**
 * Button Component
 * Reusable button component following SOLID principles
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Interface Segregation Principle - Specific interfaces for different button variants
export interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface ButtonVariantProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export interface ButtonProps extends BaseButtonProps, ButtonVariantProps {}

// Single Responsibility Principle - Button component only handles button rendering
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
}) => {
  // Open/Closed Principle - Easy to extend with new variants without modifying existing code
  const getVariantClasses = (variant: ButtonVariantProps["variant"]) => {
    const variants = {
      primary:
        "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500",
      secondary:
        "bg-white text-yellow-600 border border-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500",
      ghost:
        "bg-transparent text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500",
      outline:
        "border-2 border-white text-white hover:bg-white hover:text-yellow-600 focus:ring-yellow-500",
    };
    return variants[variant || "primary"] || variants.primary;
  };

  const getSizeClasses = (size: ButtonVariantProps["size"]) => {
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    return sizes[size || "md"] || sizes.md;
  };

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
    >
      {children}
    </button>
  );
};

export default Button;
