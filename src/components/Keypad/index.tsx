import styles from './Keypad.module.scss';
import { KEYS } from './Keypad.config';
import type { Operator } from '@/types';
import { Button } from '../Button';
import type { KeypadProps } from './Keypad.types';

function isOperator(key: string): key is Operator {
  return ['+', '-', 'x', '/'].includes(key);
}

export function Keypad({
  onDigit,
  onOperator,
  onEqual,
  onDel,
  onReset,
}: KeypadProps) {
  return (
    <div className={styles.keypad}>
      {KEYS.flat().map((key) => {
        let variant: 'number' | 'operator' | 'equal' | 'del' | 'reset' =
          'number';
        let onClick: () => void = () => onDigit(key);

        if (key === 'DEL') {
          variant = 'del';
          onClick = onDel;
        } else if (key === 'RESET') {
          variant = 'reset';
          onClick = onReset;
        } else if (key === '=') {
          variant = 'equal';
          onClick = onEqual;
        } else if (isOperator(key)) {
          variant = 'operator';
          onClick = () => onOperator(key);
        }

        return (
          <Button key={key} label={key} variant={variant} onClick={onClick} />
        );
      })}
    </div>
  );
}
