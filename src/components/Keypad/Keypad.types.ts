import type { Operator } from '@/types';

export interface KeypadProps {
  onDigit: (digit: string) => void;
  onOperator: (op: Operator) => void;
  onEqual: () => void;
  onDel: () => void;
  onReset: () => void;
  activeKey?: string | null;
}
