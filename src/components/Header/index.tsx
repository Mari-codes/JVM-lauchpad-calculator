import styles from './Header.module.scss';
import type { HeaderProps } from './Header.types';

export function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles['header__top']}>
        <div className={styles['header__numbers']}>
          <span
            className={`${styles['header__number']} ${
              theme === 'dark' ? styles['header__number--active'] : ''
            }`}
          >
            1
          </span>

          <span
            className={`${styles['header__number']} ${
              theme === 'light' ? styles['header__number--active'] : ''
            }`}
          >
            2
          </span>

          <span
            className={`${styles['header__number']} ${
              theme === 'color' ? styles['header__number--active'] : ''
            }`}
          >
            3
          </span>
        </div>
      </div>

      <div className={styles['header__bottom']}>
        <h1 className={styles['header__logo']}>calc</h1>

        <div className={styles['header__theme']}>
          <span className={styles['header__label']}>theme</span>

          <div className={styles['header__switch']}>
            <button
              className={styles['header__hit']}
              onClick={() => onThemeChange('dark')}
            />
            <button
              className={styles['header__hit']}
              onClick={() => onThemeChange('light')}
            />
            <button
              className={styles['header__hit']}
              onClick={() => onThemeChange('color')}
            />

            <div className={styles['header__thumb']} data-theme={theme} />
          </div>
        </div>
      </div>
    </header>
  );
}
