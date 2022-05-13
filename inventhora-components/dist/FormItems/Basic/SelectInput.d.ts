import { SelectProps } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import { Option } from '../../lib/types';
declare const SelectInput: FC<Props>;
export default SelectInput;
export interface Props extends SelectProps {
    options: Option[];
    name: string;
    required?: boolean;
    label: ReactNode;
    helperText?: ReactNode;
    index?: number;
    subName?: string;
    onChange?: (value: any) => void;
    disabledOptions?: any[];
}
