import { FC } from 'react';
declare const SubmitButton: FC<Props>;
export default SubmitButton;
declare type ButtonSize = 'small' | 'medium' | 'large';
export interface Props {
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    size?: ButtonSize;
    style?: any;
    startIcon?: any;
    variant?: 'text' | 'outlined' | 'contained';
    type?: 'submit' | 'button' | 'reset';
    color?: string;
}
