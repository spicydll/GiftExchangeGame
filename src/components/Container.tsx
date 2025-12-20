import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Container: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex flex-col container h-screen">{children}</div>
  );
}

export default Container;