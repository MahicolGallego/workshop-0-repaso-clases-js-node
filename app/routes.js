import { LoginPage } from "./scenes/login";
import { NotFoundPage } from "./scenes/not-found";
import { RegisterPage } from "./scenes/register";

export const routes = {
  public: [
    {
      path: "/register",
      page: RegisterPage,
    },
    {
      path: "/login",
      page: LoginPage,
    },
    {
      path: "/page-not-found",
      page: NotFoundPage,
    },
  ],
  private: [],
};
