import { FC } from 'react';
import { CSSProperties } from 'styled-components';
declare const Link: FC<Props>;
export default Link;
interface Props {
    href: string;
    as?: string;
    target?: string;
    className?: string;
    style?: CSSProperties;
}
