/**
 * Design System - Color Tokens
 * Centralized color definitions for consistent theming across the application
 * Supports three heritage-focused themes: Heritage Earth, Conservative Modern, and Minimal Professional
 */

// Theme definitions
export const themes = {
  "heritage-earth": {
    name: "Heritage Earth",
    description: "Cream, Stone Grey, Terracotta, Indigo accents",
    colors: {
      // Primary: Terracotta
      primary: {
        50: "#fef7f0", // cream-50
        100: "#fdeee0", // cream-100
        200: "#fbdcc1", // cream-200
        300: "#f8c5a0", // cream-300
        400: "#f5a97a", // cream-400
        500: "#e67e22", // terracotta-500
        600: "#d35400", // terracotta-600
        700: "#b7410e", // terracotta-700
        800: "#9a3a0a", // terracotta-800
        900: "#7d2f08", // terracotta-900
      },
      // Secondary: Indigo
      secondary: {
        50: "#eef2ff", // indigo-50
        100: "#e0e7ff", // indigo-100
        200: "#c7d2fe", // indigo-200
        300: "#a5b4fc", // indigo-300
        400: "#818cf8", // indigo-400
        500: "#6366f1", // indigo-500
        600: "#4f46e5", // indigo-600
        700: "#4338ca", // indigo-700
        800: "#3730a3", // indigo-800
        900: "#312e81", // indigo-900
      },
      // Neutral: Stone Grey
      neutral: {
        50: "#f8f9fa", // cream-50
        100: "#f1f3f4", // cream-100
        200: "#e8eaed", // stone-200
        300: "#dadce0", // stone-300
        400: "#bdc1c6", // stone-400
        500: "#9aa0a6", // stone-500
        600: "#80868b", // stone-600
        700: "#5f6368", // stone-700
        800: "#3c4043", // stone-800
        900: "#202124", // stone-900
      },
      // Background: Cream (improved contrast)
      background: {
        primary: "#ffffff", // pure white for better contrast
        secondary: "#fefcf8", // cream
        tertiary: "#f8f6f0", // cream-100
        dark: "#1a1a1a", // darker for better contrast
      },
      // Text: Stone Grey (improved contrast)
      text: {
        primary: "#1a1a1a", // darker for better contrast
        secondary: "#374151", // stone-700 - better contrast
        tertiary: "#4b5563", // stone-600 - better contrast
        inverse: "#ffffff", // white for better contrast
        muted: "#6b7280", // stone-500 - better contrast
      },
      // Border: Stone Grey
      border: {
        light: "#e8eaed", // stone-200
        medium: "#dadce0", // stone-300
        dark: "#bdc1c6", // stone-400
      },
    },
  },
  "conservative-modern": {
    name: "Conservative Modern",
    description: "Ivory, Slate Blue, Warm Grey, Saffron accents",
    colors: {
      // Primary: Slate Blue
      primary: {
        50: "#f8fafc", // ivory-50
        100: "#f1f5f9", // ivory-100
        200: "#e2e8f0", // slate-200
        300: "#cbd5e1", // slate-300
        400: "#94a3b8", // slate-400
        500: "#64748b", // slate-500
        600: "#475569", // slate-600
        700: "#334155", // slate-700
        800: "#1e293b", // slate-800
        900: "#0f172a", // slate-900
      },
      // Secondary: Saffron
      secondary: {
        50: "#fffbeb", // saffron-50
        100: "#fef3c7", // saffron-100
        200: "#fde68a", // saffron-200
        300: "#fcd34d", // saffron-300
        400: "#fbbf24", // saffron-400
        500: "#f59e0b", // saffron-500
        600: "#d97706", // saffron-600
        700: "#b45309", // saffron-700
        800: "#92400e", // saffron-800
        900: "#78350f", // saffron-900
      },
      // Neutral: Warm Grey
      neutral: {
        50: "#fafaf9", // ivory-50
        100: "#f5f5f4", // ivory-100
        200: "#e7e5e4", // warm-grey-200
        300: "#d6d3d1", // warm-grey-300
        400: "#a8a29e", // warm-grey-400
        500: "#78716c", // warm-grey-500
        600: "#57534e", // warm-grey-600
        700: "#44403c", // warm-grey-700
        800: "#292524", // warm-grey-800
        900: "#1c1917", // warm-grey-900
      },
      // Background: Ivory (improved contrast)
      background: {
        primary: "#ffffff", // pure white for better contrast
        secondary: "#fefdf8", // ivory
        tertiary: "#fafaf9", // ivory-100
        dark: "#0f0f0f", // darker for better contrast
      },
      // Text: Warm Grey (improved contrast)
      text: {
        primary: "#0f0f0f", // darker for better contrast
        secondary: "#292524", // warm-grey-800 - better contrast
        tertiary: "#44403c", // warm-grey-700 - better contrast
        inverse: "#ffffff", // white for better contrast
        muted: "#57534e", // warm-grey-600 - better contrast
      },
      // Border: Warm Grey
      border: {
        light: "#e7e5e4", // warm-grey-200
        medium: "#d6d3d1", // warm-grey-300
        dark: "#a8a29e", // warm-grey-400
      },
    },
  },
  "minimal-professional": {
    name: "Minimal Professional",
    description: "White, Charcoal, Taupe, Deep Green accent",
    colors: {
      // Primary: Deep Green
      primary: {
        50: "#f0fdf4", // green-50
        100: "#dcfce7", // green-100
        200: "#bbf7d0", // green-200
        300: "#86efac", // green-300
        400: "#4ade80", // green-400
        500: "#22c55e", // green-500
        600: "#16a34a", // green-600
        700: "#15803d", // green-700
        800: "#166534", // green-800
        900: "#14532d", // green-900
      },
      // Secondary: Taupe
      secondary: {
        50: "#fafaf9", // taupe-50
        100: "#f5f5f4", // taupe-100
        200: "#e7e5e4", // taupe-200
        300: "#d6d3d1", // taupe-300
        400: "#a8a29e", // taupe-400
        500: "#78716c", // taupe-500
        600: "#57534e", // taupe-600
        700: "#44403c", // taupe-700
        800: "#292524", // taupe-800
        900: "#1c1917", // taupe-900
      },
      // Neutral: Charcoal
      neutral: {
        50: "#f8fafc", // white-50
        100: "#f1f5f9", // white-100
        200: "#e2e8f0", // charcoal-200
        300: "#cbd5e1", // charcoal-300
        400: "#94a3b8", // charcoal-400
        500: "#64748b", // charcoal-500
        600: "#475569", // charcoal-600
        700: "#334155", // charcoal-700
        800: "#1e293b", // charcoal-800
        900: "#0f172a", // charcoal-900
      },
      // Background: White
      background: {
        primary: "#ffffff", // white
        secondary: "#f8fafc", // white-100
        tertiary: "#f1f5f9", // white-200
        dark: "#0f172a", // charcoal-900
      },
      // Text: Charcoal (improved contrast)
      text: {
        primary: "#000000", // pure black for maximum contrast
        secondary: "#1e293b", // charcoal-800 - better contrast
        tertiary: "#334155", // charcoal-700 - better contrast
        inverse: "#ffffff", // white
        muted: "#475569", // charcoal-600 - better contrast
      },
      // Border: Charcoal
      border: {
        light: "#e2e8f0", // charcoal-200
        medium: "#cbd5e1", // charcoal-300
        dark: "#94a3b8", // charcoal-400
      },
    },
  },
} as const;

// Default theme (Heritage Earth)
export const defaultTheme = "heritage-earth";

// Current theme colors (will be set dynamically)
export const colors = themes[defaultTheme].colors;

// Semantic colors (consistent across all themes)
export const semanticColors = {
  success: {
    50: "#f0fdf4", // green-50
    100: "#dcfce7", // green-100
    400: "#4ade80", // green-400
    500: "#22c55e", // green-500
    600: "#16a34a", // green-600
  },
  warning: {
    50: "#fffbeb", // amber-50
    100: "#fef3c7", // amber-100
    500: "#f59e0b", // amber-500
    600: "#d97706", // amber-600
  },
  error: {
    50: "#fef2f2", // red-50
    100: "#fee2e2", // red-100
    500: "#ef4444", // red-500
    600: "#dc2626", // red-600
  },
  info: {
    50: "#eff6ff", // blue-50
    100: "#dbeafe", // blue-100
    500: "#3b82f6", // blue-500
    600: "#2563eb", // blue-600
  },
} as const;

// Type definitions for better TypeScript support
export type ThemeName = keyof typeof themes;
export type ColorToken = keyof typeof colors;
export type PrimaryColor = keyof typeof colors.primary;
export type SecondaryColor = keyof typeof colors.secondary;
export type NeutralColor = keyof typeof colors.neutral;
export type SemanticColor = keyof typeof semanticColors;
export type BackgroundColor = keyof typeof colors.background;
export type TextColor = keyof typeof colors.text;
export type BorderColor = keyof typeof colors.border;

// Theme utility functions
export const getThemeColors = (themeName: ThemeName) =>
  themes[themeName].colors;
export const getAvailableThemes = () => Object.keys(themes) as ThemeName[];
export const getThemeInfo = (themeName: ThemeName) => themes[themeName];
