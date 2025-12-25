import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Stack: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex flex-col h-auto overflow-y-scroll md:flex-row space-y-4">{children}</div>
  );
}

export const FixedStack: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4">{children}</div>
  );
}

export default Stack;