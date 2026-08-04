'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with light mode (false) as default
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount.
  // Storage access throws outright in some contexts (sandboxed iframe without
  // allow-same-origin, "block all site data", some webviews). Since rendering is
  // gated on `mounted`, an unguarded throw here would leave EVERY page blank —
  // so failures must degrade to the default theme, never block mounting.
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      } else {
        // Default to light mode
        setIsDark(false);
        localStorage.setItem('theme', 'light');
      }
    } catch {
      setIsDark(false); // storage unavailable — run with the default theme
    }
    setMounted(true);
  }, []);

  // Update localStorage and html class when theme changes
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch { /* storage unavailable — theme just won't persist */ }

      // Update html class for global styling if needed
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}