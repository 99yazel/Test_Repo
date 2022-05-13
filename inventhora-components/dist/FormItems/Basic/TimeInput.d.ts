import { FC, ReactNode } from 'react';
declare const TimeInput: FC<Props>;
export default TimeInput;
export interface Props {
    name: string;
    index?: number;
    subName?: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    disabled?: boolean;
}
