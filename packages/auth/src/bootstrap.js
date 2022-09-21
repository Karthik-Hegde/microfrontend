import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
// If we are in dev and in isolation, call mount imediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
// export mount function in production
