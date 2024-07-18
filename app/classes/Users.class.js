import { navigateTo } from "../Router";
import { Auth } from "./Auth.class";
import { BookingManager } from "./Bookings.class";

export class Person {
  constructor(id, name, birthdate) {
    //implementar async/await en constructores
    // // Se utiliza async/await para esperar a que userIdGenerator se resuelva y devuelva a newUserIdGenerator
    // // como una funcion normal, de lo contrario se devolveria una promesa pendiente de resolver
    // (async () => {
    //   const newUserId = await userIdGenerator();
    //   this.id = newUserId(); // Ahora newUserId es la función newUserIdGenerator // se genera un nuevo ID
    // })();
    this.id = id
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

    navigateTo("/login");
  }

  static login(user) {
    Auth.login(user);
  }

  static logout() {
    Auth.logout();
  }
}

export class RegularUSer extends Person {
  constructor(id, fullname, birthdate, email, password, rol) {
    super(id, fullname, birthdate);
    this.email = email;
    this.password = password;
    this.rol = rol;
  }

  addBooking(userId, travelId) {
    BookingManager.addBooking(userId, travelId);
  }
}

export class AdministratorUser extends Person{

  static codeVerification = "aBc123"

  constructor(id, fullname, birthdate, email, password, rol) {
    super(id, fullname, birthdate);
    this.email = email;
    this.password = password;
    this.rol = rol;
  }

  addBooking(userId, travelId) {
    BookingManager.addBooking(userId, travelId);
  }
}
