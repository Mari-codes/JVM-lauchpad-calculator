import type { Operator } from '@/types';

export interface Calculator {
  display: string;
  inputDigit: (digit: string) => void;
  inputOperator: (op: Operator) => void;
  equal: () => void;
  del: () => void;
  reset: () => void;
}
