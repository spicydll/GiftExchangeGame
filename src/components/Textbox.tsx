import React, { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

const Textbox: React.FC<Props> = ({
    onInput,
    onChange,
    name,
    label,
    placeholder,
    disabled = false,
    children,
}) => {
  return (
    <div className="flex flex-col bg-green-400 p-2 rounded-md">
        <label
            className="text-2xl font-semibold w-full text-green-950 rounded-sm text-wrap mb-1"
            htmlFor={name}>{label}</label>
        <input
            type="text"
            id={name}
            onInput={onInput}
            onChange={onChange}
            placeholder={placeholder}
            className="flex justify-center w-full bg-green-50 text-black rounded-md border border-green-800 p-2 text-xl font-semibold placeholder-gray-400"
            autoComplete="off"
            disabled={disabled} />
        {children}
    </div>
  );
}

export default Textbox;