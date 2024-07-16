import { navigateTo } from "../Router";
import { Auth } from "./Auth.class";
import { BookingManager } from "./Bookings.class";

async function userIdGenerator() {
  const fecthUser = await fetch("http://localhost:3000/users");
  const users = await fecthUser.json();

  function newUserIdGenerator() {
    if (!users.length) {
      return 1;
    }

    return users[users.length - 1].id + 1;
  }

  return newUserIdGenerator;
}

class Person {
  constructor(name, birthdate) {
    const newUserId = userIdGenerator();
    this.id = newUserId();
    this.name = name;
    this.birthdate = birthdate;
  }

  static async registerUser(newUser) {
    const RegisterUser = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!RegisterUser.ok) {
      alert("Error al registrar el usuario");
      return;
    }

    alert("Usuario registrado exitosamente");

    navigateTo("/login");
  }

  static login(user) {
    Auth.login(user);
  }

  static logout() {
    Auth.logout();
  }
}

class RegularUSer extends Person {
  constructor(fullname, birthdate, email, password, rol) {
    super(fullname, birthdate);
    this.email = email;
    this.password = password;
    this.rol = rol;
  }

  addBooking(userId, travelId) {
    BookingManager.addBooking(userId, travelId);
  }
}

class AdministratorUser {
  constructor(fullname, birthdate, email, password, rol) {
    super(fullname, birthdate);
    this.email = email;
    this.password = password;
    this.rol = rol;
  }

  addBooking(userId, travelId) {
    BookingManager.addBooking(userId, travelId);
  }
}
