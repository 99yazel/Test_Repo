import { FC } from 'react';
declare const ColorInput: FC<Props>;
export default ColorInput;
interface Props {
    name: string;
    index?: number;
    subName?: string;
    onChange?: any;
    label: string;
    required?: boolean;
    helperText?: string;
}
