import styles from './Display.module.scss';
import type { DisplayProps } from './Display.types';

export function Display({ value }: DisplayProps) {
  let formatted = value;
  if (!isNaN(Number(value))) {
    formatted = Number(value).toLocaleString('pt-BR');
  }

  return (
    <div className={styles.display}>
      <span className={styles['display__value']}>{formatted}</span>
    </div>
  );
}
