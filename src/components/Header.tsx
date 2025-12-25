import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Header: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className="flex justify-center flex-none bg-red-900 text-white font-semibold text-center text-xl p-4">{children}</div>
  );
}

export default Header;