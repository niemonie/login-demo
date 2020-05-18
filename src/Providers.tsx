import React from "react";
import { ErrorBoundary } from "react-error-boundary";

//import {
//   initialState,
//   rootReducer,
//   StateProvider
// } from "./modules/global-modules/globalState";

import { IChildrenProp } from "./types";
import { ErrorPage } from "./components/Pages";

interface IProps extends IChildrenProp {}

const Providers = ({ children }: IProps) => {
  return (
    // <StateProvider reducer={rootReducer} initialState={initialState}>
    <ErrorBoundary FallbackComponent={ErrorPage}>{children}</ErrorBoundary>
    // </StateProvider>
  );
};
export default Providers;
