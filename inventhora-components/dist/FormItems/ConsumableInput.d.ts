import { FC } from 'react';
declare const ConsumableInput: FC<Props>;
export default ConsumableInput;
interface Props {
    name: string;
    label: string;
    helperText?: string;
    required?: boolean;
    columns: {
        accessor: any;
        Header: string;
    }[];
    options: {
        title: string;
        amount: number;
        options: any[];
    }[];
}
