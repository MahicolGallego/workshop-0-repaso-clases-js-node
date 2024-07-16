import { navigateTo } from "../Router";

export class Auth {
  static login(user) {
    const token = Auth.generateToken();
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    navigateTo("/home");
  }
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigateTo("/login");
  }

  static generateToken() {
    return Math.random().toString(36).substring(2);
  }
}
