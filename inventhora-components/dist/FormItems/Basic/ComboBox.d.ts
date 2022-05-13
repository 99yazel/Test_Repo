import { FC, ReactNode } from 'react';
declare const ComboBox: FC<Props>;
export default ComboBox;
export interface Props {
    freeSolo?: boolean;
    getOptionLabel?: (option: any) => string;
    options: any[];
    name: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    index?: number;
    subName?: string;
    disabled?: boolean;
    onCreate?: (input: string) => void;
    autoFocus?: boolean;
    onChange?: (value?: any) => void;
    loading?: boolean;
}
