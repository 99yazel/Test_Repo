import { FC, ReactNode } from 'react';
declare const DateTimeInput: FC<Props>;
export default DateTimeInput;
export interface Props {
    name: string;
    index?: number;
    subName?: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    disabled?: boolean;
}
