import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};
// If we are in dev and in isolation, call mount imediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
// export mount function in production
