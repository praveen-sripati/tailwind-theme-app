import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [accent, setAccent] = useState(() => localStorage.getItem('accent') || 'theme-blue');

  useEffect(() => {
    const root = window.document.documentElement;

    // Handle light/dark mode
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Handle accent color
    root.classList.remove('theme-blue', 'theme-green'); // Add any other themes here
    root.classList.add(accent);
    localStorage.setItem('accent', accent);
  }, [theme, accent]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changeAccent = (newAccent) => {
    setAccent(newAccent);
  };

  return { theme, toggleTheme, accent, changeAccent };
};
