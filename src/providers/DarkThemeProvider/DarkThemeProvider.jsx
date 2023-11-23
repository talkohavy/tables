import React, { useCallback, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LSKEY_THEME } from '../../utils/appConstants/index';
import { DarkThemeContext } from './DarkThemeContext';

const THEME_OPTIONS = { dark: 'dark', light: 'light' };

export default function DarkThemeProvider({ children }) {
  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage(LSKEY_THEME);

  // all useStates:
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_OPTIONS.dark
      : THEME_OPTIONS.light;

    const currentTheme = localStorageTheme || deviceTheme;

    document.body.setAttribute('class', currentTheme);

    return currentTheme === THEME_OPTIONS.dark;
  });

  // all functions:
  const toggleDarkMode = useCallback(() => {
    const themeToBe = isDarkMode ? THEME_OPTIONS.light : THEME_OPTIONS.dark;
    setLocalStorageTheme(themeToBe);
    document.body.setAttribute('class', themeToBe);
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, setIsDarkMode, setLocalStorageTheme]);

  return <DarkThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkThemeContext.Provider>;
}
