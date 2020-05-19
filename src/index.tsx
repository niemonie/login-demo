import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { Spinner } from "./components/Spinner";

const App = lazy(() => import("./App"));
const Providers = lazy(() => import("./Providers"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Providers>
        <App />
      </Providers>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
