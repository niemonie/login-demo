import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Spinner } from "./components/Spinner";
import { GlobalStyle, theme } from "theme";

const App = lazy(() => import("./App"));
const Providers = lazy(() => import("./Providers"));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Spinner size={"lg"} />}>
        <Providers>
          <App />
        </Providers>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
