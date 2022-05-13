import { FC, ReactNode } from 'react';
declare const DateInput: FC<Props>;
export default DateInput;
export interface Props {
    name?: string;
    index?: number;
    subName?: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    disabled?: boolean;
}
