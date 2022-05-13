import { BaseTextFieldProps } from '@material-ui/core';
import { FC } from 'react';
declare const EmailInput: FC<Props>;
export default EmailInput;
export interface Props extends BaseTextFieldProps {
    name: string;
    index?: number;
    subName?: string;
}
