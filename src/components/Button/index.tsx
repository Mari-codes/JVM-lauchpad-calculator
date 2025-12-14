import styles from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export function Button({ label, variant, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
