import type { Operator } from '@/types';

export function mapKeyToAction(
  key: string,
  calc: {
    inputDigit: (d: string) => void;
    inputOperator: (op: Operator) => void;
    equal: () => void;
    del: () => void;
    reset: () => void;
  },
  setActiveKey: (k: string) => void,
) {
  if (!isNaN(Number(key))) {
    calc.inputDigit(key);
    setActiveKey(key);
    return;
  }

  if (['+', '-', '*', '/'].includes(key)) {
    const op = key === '*' ? 'x' : key;
    calc.inputOperator(op as Operator);
    setActiveKey(op);
    return;
  }

  switch (key) {
    case 'Enter':
      calc.equal();
      setActiveKey('=');
      break;
    case 'Backspace':
      calc.del();
      setActiveKey('DEL');
      break;
    case 'Escape':
      calc.reset();
      setActiveKey('RESET');
      break;
  }
}
