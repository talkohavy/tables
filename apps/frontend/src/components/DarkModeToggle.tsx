import { PropsWithChildren } from 'react';
import { useDarkTheme } from '../providers/DarkThemeProvider/DarkThemeContext';
import ToggleButton from './ToggleButton';

type DarkModeToggleProps = PropsWithChildren<{
  size: number;
  className?: string;
}>;

export default function DarkModeToggle(props: DarkModeToggleProps) {
  const { size, className } = props;

  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return <ToggleButton value={isDarkMode} setValue={toggleDarkMode} size={size} className={className} />;
}
