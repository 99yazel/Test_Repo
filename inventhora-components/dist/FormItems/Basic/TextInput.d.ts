import { BaseTextFieldProps } from '@material-ui/core';
import { FC } from 'react';
declare const TextInput: FC<Props>;
export default TextInput;
export interface Props extends BaseTextFieldProps {
    name: string;
    index?: number;
    subName?: string;
    InputProps?: any;
    onChange?: any;
}
