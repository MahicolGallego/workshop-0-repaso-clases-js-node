
import { LoginPage } from "./scenes/login";
import { RegisterPage } from "./scenes/register";

export const routes = {
    public: [
        {
            path: "/register",
            page: RegisterPage
        },
        {
            path: "/login",
            page: LoginPage
        }
    ],
    private: []
    }