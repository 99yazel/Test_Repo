import { CheckboxProps } from '@material-ui/core';
import { FC, ReactNode } from 'react';
declare const Checkbox: FC<Props>;
export default Checkbox;
export interface Props extends CheckboxProps {
    name: string;
    index?: number;
    subName?: string;
    label: ReactNode;
    helperText?: string;
}
