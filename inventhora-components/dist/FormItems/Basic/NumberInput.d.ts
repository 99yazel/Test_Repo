import { BaseTextFieldProps } from '@material-ui/core';
import { ChangeEvent, FC } from 'react';
declare const NumberInput: FC<Props>;
export default NumberInput;
export interface Props extends BaseTextFieldProps {
    name: string;
    index?: number;
    subName?: string;
    InputProps?: any;
    allowDecimals?: boolean;
    max?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
