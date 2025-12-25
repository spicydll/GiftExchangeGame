import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export const OutlineButton: React.FC<ButtonProps> = ({
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

export const Button: React.FC<ButtonProps> = ({
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

interface SelectButtonProps extends ButtonProps{
    selected?: boolean;
}

export const SelectButton: React.FC<SelectButtonProps> = ({
  children,
  onClick,
  selected = false,
  disabled = false,
}) => {
  const baseClassName = "flex justify-center w-full p-2 text-2xl font-semibold border rounded-2xl ";
  const unselectedClassName = "bg-green-100 text-green-900 border-green-500";
  const selectedClassName = "bg-green-800 text-green-100 border border-green-500";
  const resultClassName = baseClassName + (selected ? selectedClassName : unselectedClassName)
  return (
    <button
        type="button"
        onClick={onClick}
        className={resultClassName}
        disabled={disabled}>{children}</button>
  );
}

export default Button;