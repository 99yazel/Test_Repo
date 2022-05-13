import { FC } from 'react';
declare const ImageViewer: FC<Props>;
export default ImageViewer;
interface Props {
    images: {
        url: string;
        name?: string;
        order?: number;
    }[];
    onDelete?: (image: any) => void;
    onOrderChange?: (files: {
        url: string;
        name?: string;
        order?: number;
    }[]) => void;
}
