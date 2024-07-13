import { Router } from "./Router";

export function App() {
    // console.log("Hola mundo desde la app");
    const root = document.getElementById("root");
    if (!root) {
        throw new Error("Hay un error root not found")
    }

    Router();
}