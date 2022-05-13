import { FC } from 'react';
declare const TableInput: FC<Props>;
export default TableInput;
interface Props {
    name: string;
    subName?: string;
    index?: number;
    required?: boolean;
    label: string;
    helperText?: string;
    columns: {
        accessor: any;
        Header: string;
    }[];
    options: any[];
    multiple?: boolean;
    filterWith?: string;
    withSearch?: boolean;
}
