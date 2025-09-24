"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { type ThemeName } from "@/design-system/colors";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Custom hook for theme persistence with better performance
export const useThemePersistence = () => {
  const [mounted, setMounted] = useState(false);
  const [savedTheme, setSavedTheme] = useState<ThemeName | null>(null);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme") as ThemeName;
    setSavedTheme(theme);
  }, []);

  const saveTheme = useCallback(
    (theme: ThemeName) => {
      if (mounted) {
        localStorage.setItem("theme", theme);
        setSavedTheme(theme);
      }
    },
    [mounted]
  );

  return { mounted, savedTheme, saveTheme };
};

// Hook for theme-aware colors
export const useThemeColors = () => {
  const { themeInfo } = useTheme();

  return {
    primary: themeInfo.colors.primary,
    secondary: themeInfo.colors.secondary,
    text: themeInfo.colors.text,
    background: themeInfo.colors.background,
    border: themeInfo.colors.border,
  };
};


