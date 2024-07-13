import { navigateTo } from "../Router";
import { Auth } from "./Auth.class";

async function idGenerator() {
    const fecthUser = await fetch("http://localhost:3000/users")
    const users = await fecthUser.json()
    
    function newIdGenerator() {
        if (!users.length) {
            return 1;
        }

        return (users[users.length - 1].id + 1);
    }

    return newIdGenerator;
}

class Person {
    
    constructor(name, birthdate) {
        const newId = idGenerator();
        this.id = newId();
        this.name = name;
        this.birthdate = birthdate;
    }

    static async registerUser(newUser) {
        const RegisterUser = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        if (!RegisterUser.ok) {
            alert("Error al registrar el usuario");
            return;
        }

        alert("Usuario registrado exitosamente");

        navigateTo("/login")
    }
}


class RegularUSer extends Person{
    constructor(fullname, birthdate, email, password, rol){
        super(fullname, birthdate)
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    login(user) {
        Auth.login(user);
    }
}

class AdministratorUser{

}

class BookingManager{
    
}


document.addEventListener("DOMContentLoaded", () => {

})