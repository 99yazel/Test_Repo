import { FC, ReactNode } from 'react';
declare const Infos: FC<Props>;
export default Infos;
interface Props {
    infos: Info[];
    hideEmpty?: boolean;
}
export interface Info {
    name: string;
    Icon?: any;
    value: ReactNode | string;
}
