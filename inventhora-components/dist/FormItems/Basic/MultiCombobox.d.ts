import { FC, ReactNode } from 'react';
declare const MultiCombobox: FC<Props>;
export default MultiCombobox;
export interface Props {
    getOptionLabel?: (option: any) => string;
    options: any[];
    name: string;
    label: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    index?: number;
    subName?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    loading?: boolean;
    canCreate?: boolean;
}
