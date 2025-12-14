import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Display } from './components/Display';
import { useCalculator } from './hooks/useCalculator';
import { Keypad } from './components/Keypad';
import type { Theme } from './types/theme.types';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const calc = useCalculator();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (!isNaN(Number(key))) {
        calc.inputDigit(key);
        setActiveKey(key);
      }

      if (['+', '-', '*', '/'].includes(key)) {
        const op = key === '*' ? 'x' : key;
        calc.inputOperator(op as any);
        setActiveKey(op);
      }

      if (key === 'Enter') {
        calc.equal();
        setActiveKey('=');
      }

      if (key === 'Backspace') {
        calc.del();
        setActiveKey('DEL');
      }

      if (key === 'Escape') {
        calc.reset();
        setActiveKey('RESET');
      }

      setTimeout(() => setActiveKey(null), 200);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [calc]);

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
        activeKey={activeKey}
      />
    </div>
  );
}

export default App;
