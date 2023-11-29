import { useDarkTheme } from '../providers/DarkThemeProvider/DarkThemeContext';
import ToggleButton from './ToggleButton';

export default function DarkModeToggle({ size, className }) {
  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return <ToggleButton value={isDarkMode} setValue={toggleDarkMode} size={size} className={className} />;
}
