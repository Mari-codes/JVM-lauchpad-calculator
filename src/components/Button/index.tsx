import styles from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export function Button({ label, variant, onClick, active }: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        styles[`button--${variant}`],
        active ? styles.active : '',
      ]
        .join(' ')
        .trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
