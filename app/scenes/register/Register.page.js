import { navigateTo } from "../../Router";
import { AdministratorUser, Person, RegularUSer } from "../../classes/Users.class";
import { userIdGenerator } from "../../helpers/userIdGenerator.helper";

export function RegisterPage() {
    root.innerHTML = /*html */ `<form>
        <label>Nombre de usuario:</label><br>
        <input type="text" placeholder="Nombre de usuario por favor..." value="mahicol" required><br><br>
        <label>Fecha de nacimiento:</label><br>
        <input type="date" required><br><br>
        <label>Correo electronico:</label><br>
        <input type="email" placeholder="example@gmail.com..." value="maicol@gmail.com" required><br><br>
        <!-- Pruebas de la funcion emailValidator() -->
        <!-- <input type="text" placeholder="example@gmail.com..." value="maicol@gmail.com" required><br><br> -->
        <label>Digita la contraseña</label><br>
        <input type="password" placeholder="Digita tu contraseña..." value="12345" required><br><br>
        <label>Tu rol</label><br>
        <select id="select-rol" required>
            <option value="1">Administrador</option>
            <option value="2" selected>Usuario</option>
        </select>
        <button type="submit">Registrarme</button>
    </form>`

    //seleccionamos el formulario y añadimos el evento

    const $form = document.querySelector("form");

    $form.addEventListener("submit", async (e) => {
      e.preventDefault();

      //tomar los valores
      const $name = document.querySelector("[type='text']").value;
      const $birthDate = document.querySelector("[type='date']").value;
      const $email = document.querySelector("[type='email']").value;
      const $password = document.querySelector("[type='password']").value;

      //tomar el select del rol
      const $rolSelected = document.getElementById("select-rol").value;

      const newUserId = await userIdGenerator();
      const idForUser = newUserId(); // Ahora newUserId es la función newUserIdGenerator // se genera un nuevo ID

      //verificamos con el codigo si se intenta registrar como Admin
      if ($rolSelected === "1") {
        const codeForUser = prompt("Digita el codigo de verificacion").trim();

        if (AdministratorUser.codeVerification !== codeForUser) {
          alert(
            "Codigo de verificacion incorrecto, error al registra el usuario"
          );
          return;
        }

        const newAdmin = new AdministratorUser(
          idForUser,
          $name,
          $birthDate,
          $email,
          $password,
          $rolSelected
        );

        Person.registerUser(newAdmin);

      }else{
        const newRegularUser = new RegularUSer(
          idForUser,
          $name,
          $birthDate,
          $email,
          $password,
          $rolSelected
        );

        Person.registerUser(newRegularUser);
      }

      alert("Usuario registrado con exito")

      navigateTo("/login")
    })
}
