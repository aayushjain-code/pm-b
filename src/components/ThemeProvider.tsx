"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultTheme, type ThemeName } from "@/design-system/colors";

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
  themeInfo: (typeof themes)[ThemeName];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultThemeName?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultThemeName = defaultTheme,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(defaultThemeName);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);

    // Load theme from localStorage on client side
    const savedTheme = localStorage.getItem("theme") as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme, mounted]);

  const setTheme = (theme: ThemeName) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
    }
  };

  const availableThemes = Object.keys(themes) as ThemeName[];
  const themeInfo = themes[currentTheme];

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    availableThemes,
    themeInfo,
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div data-theme={defaultThemeName}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={currentTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};
