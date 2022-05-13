import { FC } from 'react';
declare const DimensionsInput: FC<Props>;
export default DimensionsInput;
export interface Props {
    lengthUnit: string;
    name: string;
    index?: number;
    required?: boolean;
    helperText?: string;
}
