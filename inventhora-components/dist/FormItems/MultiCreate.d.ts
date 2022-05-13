import { FC } from 'react';
declare const MultiCreate: FC<Props>;
export default MultiCreate;
export interface Props {
    fields: {
        name: string;
        label: string;
    }[];
    title: string;
    name: string;
    formatFunction?: any;
    onDelete?: (id: string) => void;
    helperText?: string;
    schema: any;
    onOpen?: (index: string) => void;
    validate?: (values: any) => any;
    label: string;
    required?: boolean;
    initialValues?: any;
}
