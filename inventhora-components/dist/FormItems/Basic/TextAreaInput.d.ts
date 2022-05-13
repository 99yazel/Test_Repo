import { BaseTextFieldProps } from '@material-ui/core';
import { FC } from 'react';
declare const TextAreaInput: FC<Props>;
export default TextAreaInput;
export interface Props extends BaseTextFieldProps {
    name: string;
    subName?: string;
    index?: number;
    rows?: number;
}
