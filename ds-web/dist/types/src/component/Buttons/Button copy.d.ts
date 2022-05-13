/// <reference types="react" />
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
/**
 * 의문사항
 * 1. theme 이 왜 active 와 disabled 인지 명칭 변경
 * 2. width 가 필요한가? size 가 있는데
 * 3. children 을 통해서 하위 컴포넌트 생성하는데 아이콘과 타이틀 말고 다른게 필요한가? 왜 ReactNode 로 가는지?
 */
declare type ButtonProps = {
    label?: string;
    width?: string | number;
    size: "small" | "medium" | "big";
    theme: "active" | "disabled";
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
};
declare const Button: {
    ({ label, width, size, theme, disabled, onClick, children, ...props }: ButtonProps): jsx.JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
