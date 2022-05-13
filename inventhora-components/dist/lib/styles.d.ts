import { CircularProgress, Paper } from '@material-ui/core';
import { FC, ReactNode } from 'react';
export declare const Loader: import("styled-components").StyledComponent<typeof CircularProgress, any, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h1", any, {}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SameLine: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const BoldText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Info: FC<{
    name: string;
    value: string | ReactNode;
    Icon?: any;
}>;
export declare const StyledPaper: import("styled-components").StyledComponent<typeof Paper, any, {}, never>;
export declare const PageWrapper: FC<{
    title: string;
    maxWidth?: string;
    actionLabel?: ReactNode;
    onClick?: () => void;
}>;
export declare const ABlank: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const getTheme: (darkMode: boolean) => import("@material-ui/core").Theme;
