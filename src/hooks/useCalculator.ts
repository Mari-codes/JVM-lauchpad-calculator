import { useState } from 'react';
import type { Operator } from '@/types';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [stored, setStored] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingNext, setWaitingNext] = useState(false);

  function inputDigit(digit: string) {
    setDisplay((prev) => {
      if (waitingNext) {
        setWaitingNext(false);
        return digit;
      }

      if (prev === '0') return digit;
      return prev + digit;
    });
  }

  function inputOperator(op: Operator) {
    if (operator && stored !== null && !waitingNext) {
      equal();
    }

    setStored(Number(display));
    setOperator(op);
    setWaitingNext(true);
  }

  function equal() {
    if (stored === null || operator === null) return;

    const current = Number(display);
    let result = stored;

    switch (operator) {
      case '+':
        result = stored + current;
        break;
      case '-':
        result = stored - current;
        break;
      case 'x':
        result = stored * current;
        break;
      case '/':
        result = current === 0 ? 0 : stored / current;
        break;
    }

    setDisplay(String(result));
    setStored(null);
    setOperator(null);
    setWaitingNext(true);
  }

  function del() {
    setDisplay((prev) => {
      if (waitingNext) return prev;
      if (prev.length === 1) return '0';
      return prev.slice(0, -1);
    });
  }

  function reset() {
    setDisplay('0');
    setStored(null);
    setOperator(null);
    setWaitingNext(false);
  }

  return {
    display,
    inputDigit,
    inputOperator,
    equal,
    del,
    reset,
  };
}
