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

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
}
