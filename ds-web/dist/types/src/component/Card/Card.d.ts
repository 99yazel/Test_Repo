/// <reference types="react" />
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
declare type CardProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼 스타일 */
    theme: "active" | "disabled";
    /** 사이즈 */
    size: "small" | "medium" | "big";
    /** 비활성화 */
    disabled?: boolean;
    /** 버튼 너비 */
    width?: string | number;
    label?: string;
};
declare const Card: {
    ({ children, width, size, theme, disabled, onClick, label, ...props }: CardProps): jsx.JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Card;
