import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Display } from './components/Display';
import { useCalculator } from './hooks/useCalculator';
import { Keypad } from './components/Keypad';
import type { Theme } from './types/theme.types';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const calc = useCalculator();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.app}>
      <Header theme={theme} onThemeChange={setTheme} />
      <Display value={calc.display} />
      <Keypad
        onDigit={calc.inputDigit}
        onOperator={calc.inputOperator}
        onEqual={calc.equal}
        onDel={calc.del}
        onReset={calc.reset}
      />
    </div>
  );
}

export default App;
