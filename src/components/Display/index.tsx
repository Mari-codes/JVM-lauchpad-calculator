import styles from './Display.module.scss';
import type { DisplayProps } from './Display.types';

export function Display({ value }: DisplayProps) {
  return (
    <div className={styles.display}>
      <span className={styles['display__value']}>{value}</span>
    </div>
  );
}
