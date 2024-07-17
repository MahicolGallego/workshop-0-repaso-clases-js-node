export function getUserFromLocalStorage(){
    const userFromLocalStorage = localStorage.getItem("user");

    if(!userAuthenticated){
        alert("No existe usuario autenticado")
    }
    
    const userAuthenticated = JSON.parse(userFromLocalStorage);

    return userAuthenticated
}