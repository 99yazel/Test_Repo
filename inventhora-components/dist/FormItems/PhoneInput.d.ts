import { FC } from 'react';
declare const PhoneInput: FC<Props>;
export default PhoneInput;
export interface Props {
    name: string;
    subName?: string;
    helperText?: string;
    label: string;
    required?: boolean;
    index?: number;
    prefixName: string;
    prefixSubName?: string;
}
