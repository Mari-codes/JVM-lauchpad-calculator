import type { Theme } from '../../types/theme.types';

export interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}
