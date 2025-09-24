/**
 * Select Component
 * Reusable select component following SOLID principles
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Interface Segregation Principle - Specific interfaces for different select variants
export interface BaseSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export interface SelectVariantProps {
  variant?: "default" | "error" | "success";
  size?: "sm" | "md" | "lg";
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseSelectProps, SelectVariantProps {
  options: SelectOption[];
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  placeholder?: string;
}

// Single Responsibility Principle - Select component only handles select rendering
const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  disabled = false,
  className = "",
  id,
  name,
  variant = "default",
  size = "md",
  options,
  label,
  error,
  helperText,
  required = false,
  placeholder = "Select an option",
}) => {
  // Open/Closed Principle - Easy to extend with new variants without modifying existing code
  const getVariantClasses = (variant: SelectVariantProps["variant"]) => {
    const variants = {
      default: "border-gray-300 focus:border-yellow-500 focus:ring-yellow-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500",
    };
    return variants[variant] || variants.default;
  };

  const getSizeClasses = (size: SelectVariantProps["size"]) => {
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-4 py-4 text-lg",
    };
    return sizes[size] || sizes.md;
  };

  const baseClasses =
    "w-full border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-white";
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  const selectId =
    id || name || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          className={cn(
            baseClasses,
            variantClasses,
            sizeClasses,
            "pr-10",
            className
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Select;
