import React from "react";
export interface InputProps {
    onChange: () => {};
    maxLength?: number;
    placeholder?: string;
    autoComplete?: string | undefined;
    isFinish?: boolean | undefined;
    number?: boolean | undefined;
    password?: boolean | undefined;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    onIconClick?: () => void;
}
export interface InputIconProps {
    icon?: React.ReactNode;
    onIconClick?: () => void;
}
declare const Input: ({ onChange, maxLength, placeholder, autoComplete, isFinish, number, password, iconPosition, }: InputProps) => JSX.Element;
export default Input;
