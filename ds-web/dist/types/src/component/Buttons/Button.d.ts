import React from "react";
declare type ButtonProps = {
    label?: string;
    width?: string | number;
    size: "small" | "medium" | "big";
    disabled?: boolean;
    icon?: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    primary?: boolean;
};
declare const Button: {
    ({ label, width, size, disabled, onClick, primary, icon, ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
