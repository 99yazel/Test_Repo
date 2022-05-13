import { FC } from 'react';
declare const DocumentViewer: FC<Props>;
export default DocumentViewer;
interface Props {
    documents: {
        url: string;
        name?: string;
        description?: string;
    }[];
    onDelete?: (document: any) => void;
    canDownload?: boolean;
    canView?: boolean;
}
