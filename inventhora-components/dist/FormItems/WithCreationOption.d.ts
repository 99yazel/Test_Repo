import { FC } from 'react';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const WithCreationOption: FC<Props>;
export default WithCreationOption;
interface Props {
    canCreate?: boolean;
    onCreate: () => void;
    title: string;
}
