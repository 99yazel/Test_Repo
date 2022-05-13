import { BaseTextFieldProps } from '@material-ui/core';
import { FC } from 'react';
declare const PasswordInput: FC<Props>;
export default PasswordInput;
export interface Props extends BaseTextFieldProps {
    name: string;
    index?: number;
    subName?: string;
}
