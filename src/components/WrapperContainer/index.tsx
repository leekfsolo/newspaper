import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const WrapperContainer = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={`container ${className}`}>
      <div className="wrapper-container">{children}</div>
    </div>
  );
};

export default WrapperContainer;
