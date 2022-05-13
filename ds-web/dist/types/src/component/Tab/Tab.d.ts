/// <reference types="react" />
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
declare type TabProps = {
    tabList: String[];
    size: "small" | "medium" | "big";
    theme: "active" | "disabled";
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Tab: ({ tabList, size, theme, disabled, onClick }: TabProps) => jsx.JSX.Element;
export default Tab;
