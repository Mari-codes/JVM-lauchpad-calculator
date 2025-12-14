export type ButtonVariant = 'number' | 'operator' | 'del' | 'reset' | 'equal';

export interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  onClick: () => void;
}
