import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { IChildrenProp } from "./types";
import { ErrorPage } from "./components/Pages";

interface IProps extends IChildrenProp {}

const Providers = ({ children }: IProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>{children}</ErrorBoundary>
  );
};
export default Providers;
