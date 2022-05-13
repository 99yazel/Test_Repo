import { FC } from 'react';
import { Option } from '../../lib/types';
declare const ButtonGroup: FC<Props>;
export default ButtonGroup;
interface Props {
    options: Option[];
    name?: string;
    onClick?: (value: string) => void;
    value?: string;
    label: string;
    helperText?: string;
    required?: boolean;
    size?: 'small' | 'medium' | 'large';
    index?: number;
    subName?: string;
}
