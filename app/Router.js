import { privateLayoutComponent } from "./components";
import { routes } from "./routes";

export function Router() {
  //obtenemos el path actual al que desea ir el usuario

  const currentPath = window.location.pathname;

  //buscamos en las routes tanto publicas como privadas si existe a
  //la que el usuario quiere ir

  const publicRoute = routes.public.find((r) => r.path === currentPath);
  const privateRoute = routes.private.find((r) => r.path === currentPath);

  if (currentPath === "/register" || currentPath === "/login") {
    if (localStorage.getItem("token")) {
      navigateTo("/home");
      return;
    }
  }

  if (publicRoute) {
    publicRoute.page();
    return;
  }

  if (privateRoute) {
    if (!localStorage.getItem("token")) {
      navigateTo("/login");
      return;
    }
    const { content, logic } = privateRoute.page();
    privateLayoutComponent(content, logic);
    return;
  }

  navigateTo("/page-not-found");
}

export function navigateTo(path) {
  window.history.pushState({}, "", window.location.origin + path);
  Router();
}
