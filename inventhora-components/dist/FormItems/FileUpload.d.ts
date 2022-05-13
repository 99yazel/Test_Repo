import { FC } from 'react';
declare const FileUpload: FC<Props>;
export default FileUpload;
export interface Props {
    supportedFormats?: string;
    onUpload: (files: File[]) => void;
    multiple?: boolean;
    id?: string;
}
