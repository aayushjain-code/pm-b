"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { type ThemeName } from "@/design-system/colors";

interface ThemeSwitcherProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = "",
  showLabels = true,
}) => {
  const { currentTheme, setTheme, availableThemes, themeInfo } = useTheme();

  const themeOptions = [
    {
      id: "heritage-earth" as ThemeName,
      name: "Heritage Earth",
      description: "Cream, Stone Grey, Terracotta, Indigo",
      colors: ["#fefcf8", "#e67e22", "#6366f1", "#5f6368"],
    },
    {
      id: "conservative-modern" as ThemeName,
      name: "Conservative Modern",
      description: "Ivory, Slate Blue, Warm Grey, Saffron",
      colors: ["#fefdf8", "#64748b", "#f59e0b", "#44403c"],
    },
    {
      id: "minimal-professional" as ThemeName,
      name: "Minimal Professional",
      description: "White, Charcoal, Taupe, Deep Green",
      colors: ["#ffffff", "#0f172a", "#22c55e", "#78716c"],
    },
  ];

  return (
    <div className={`theme-switcher ${className}`}>
      {showLabels && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Choose Theme
          </h3>
          <p className="text-sm text-text-secondary">
            Select a theme that reflects your heritage conservation values
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {themeOptions.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-200
              ${
                currentTheme === theme.id
                  ? "border-primary-500 bg-primary-50 shadow-md"
                  : "border-border-light hover:border-primary-300 hover:bg-bg-secondary"
              }
            `}
            aria-pressed={currentTheme === theme.id}
          >
            {/* Color preview */}
            <div className="flex space-x-1 mb-3">
              {theme.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-border-light"
                  style={{ backgroundColor: color }}
                  title={`Color ${index + 1}`}
                />
              ))}
            </div>

            {/* Theme info */}
            <div className="text-left">
              <h4 className="font-medium text-text-primary text-sm">
                {theme.name}
              </h4>
              <p className="text-xs text-text-tertiary mt-1">
                {theme.description}
              </p>
            </div>

            {/* Selected indicator */}
            {currentTheme === theme.id && (
              <div className="absolute top-2 right-2">
                <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Current theme info */}
      <div className="mt-6 p-4 bg-bg-secondary rounded-lg">
        <h4 className="font-medium text-text-primary text-sm mb-2">
          Current Theme: {themeInfo.name}
        </h4>
        <p className="text-xs text-text-secondary">{themeInfo.description}</p>
      </div>
    </div>
  );
};
