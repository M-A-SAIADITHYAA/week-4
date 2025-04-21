import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
    </button>
  );
};

export default ThemeToggle; 