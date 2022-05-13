import { FC } from 'react';
declare const FileInput: FC<Props>;
export default FileInput;
interface Props {
    name: string;
    index?: number;
    subName?: string;
    multiple?: boolean;
    label: string;
    isImages?: boolean;
    required?: boolean;
    onDelete: (id: string) => any;
    onReOrder: (items: {
        order: number;
        id: string;
    }[]) => any;
}
