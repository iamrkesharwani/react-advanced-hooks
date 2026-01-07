import { useState } from 'react';
import { ThemeContext } from './ThemeContext.js';
import { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const getTheme = localStorage.getItem('theme');
    return getTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
