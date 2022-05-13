import { InputProps } from '@material-ui/core';
import { FC, ReactNode } from 'react';
declare const TextListInput: FC<Props>;
export default TextListInput;
export interface Props extends InputProps {
    name: string;
    index?: number;
    subName?: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
}
