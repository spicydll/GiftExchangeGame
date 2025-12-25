import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Stack: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex flex-col flex-1 w-full relative">
      <div className="flex flex-col h-full w-full space-y-4 overflow-y-auto absolute">{children}</div>
    </div>
  );
}

export const FixedStack: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex flex-col flex-1 w-full space-y-4">{children}</div>
  );
}

export default Stack;