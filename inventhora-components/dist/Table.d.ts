import { CSSProperties, FC } from 'react';
import { Column, Row } from 'react-table';
declare const Table: FC<Props>;
export default Table;
export interface Props {
    columns: Column[];
    data: {}[];
    actions?: any;
    onRowClick?: (row: Row) => void;
    selected?: string;
    withSearch?: boolean;
    maxHeight?: number;
    style?: CSSProperties;
    labelledBy?: string;
}
