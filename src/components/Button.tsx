import React from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export const OutlineButton: React.FC<Props> = ({
    children,
    onClick,
    disabled = false,
}) => {
  return (
    <button
        type="button"
        onClick={onClick}
        className="flex justify-center w-full bg-green-100 text-green-900 border-green-500 border rounded-2xl p-2 text-2xl font-semibold"
        disabled={disabled}>{children}</button>
  );
}

export const Button: React.FC<Props> = ({
    children,
    onClick,
    disabled = false,
}) => {
  return (
    <button
        type="button"
        onClick={onClick}
        className="flex justify-center w-full bg-green-800 text-green-100 border border-green-500 rounded-2xl p-2 text-2xl font-semibold"
        disabled={disabled}>{children}</button>
  );
}

export default Button;