import { FC } from 'react';
declare const IconButtonLink: FC<Props>;
export default IconButtonLink;
interface Props {
    href: string;
    as?: string;
    title: string;
    onClick?: () => void;
}
