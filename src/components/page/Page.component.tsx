import React from "react";
import { ReactNode } from "react";

interface PageComponentProps {
  children: ReactNode;
}
function PageComponent({ children }: PageComponentProps) {
  return <div className="page-wrapper">{children}</div>;
}

export default PageComponent;
