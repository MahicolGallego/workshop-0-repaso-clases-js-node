class Person{
    static users = []
    constructor(fullname, birthdate, age){
        this.id = users.length ? users[users.length-1].id + 1 : 1;
        this.fullname = fullname;
        this.birthdate = birthdate;
        this.age = age;
    }

    static createUser(){
        Person.users.push(newUser)
    }

    static login(){
    }
}


class RegularUSer extends Person{
    constructor(fullname, birthdate, age, email, password, rol){
        super(fullname, birthdate, age)
        this.id = 
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}

class AdministratorUser{

}

class BookingManager{
    
}


document.addEventListener("DOMContentLoaded", () => {

})