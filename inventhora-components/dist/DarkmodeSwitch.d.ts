import { FC } from 'react';
declare const DarkmodeSwitch: FC<Props>;
export default DarkmodeSwitch;
interface Props {
    value: boolean;
    onChange: (value: boolean) => void;
}
