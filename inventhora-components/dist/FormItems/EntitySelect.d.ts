import { FC } from 'react';
import { Option } from '../lib/types';
declare const EntitySelect: FC<Props>;
export default EntitySelect;
export interface Props {
    name: string;
    label: string;
    helperText?: string;
    values: Option[];
    disabled?: boolean;
}
