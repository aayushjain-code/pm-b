/**
 * Input Component
 * Reusable input component following SOLID principles
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Interface Segregation Principle - Specific interfaces for different input types
export interface BaseInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export interface InputVariantProps {
  variant?: "default" | "error" | "success";
  size?: "sm" | "md" | "lg";
}

export interface InputProps extends BaseInputProps, InputVariantProps {
  type?: "text" | "email" | "password" | "tel" | "url";
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

// Single Responsibility Principle - Input component only handles input rendering
const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  id,
  name,
  type = "text",
  variant = "default",
  size = "md",
  label,
  error,
  helperText,
  required = false,
}) => {
  // Open/Closed Principle - Easy to extend with new variants without modifying existing code
  const getVariantClasses = (variant: InputVariantProps["variant"]) => {
    const variants = {
      default: "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500",
    };
    return variants[variant || "default"] || variants.default;
  };

  const getSizeClasses = (size: InputVariantProps["size"]) => {
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-4 py-4 text-lg",
    };
    return sizes[size || "md"] || sizes.md;
  };

  const baseClasses =
    "w-full border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  const inputId =
    id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
