const register = document.querySelector(".register"),
      email = document.querySelector("#email"),
      nombre = document.querySelector("#nombre"),
      userReg = document.querySelector("#userReg"),
      passReg = document.querySelector("#passReg"),
      btnRegistrar = document.querySelector("#registrar");

let usuarios;

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))   
} else {
    usuarios = [];
}

class Usuario{
    constructor(nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password;
    }
}

function limpiarCampos() {
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}

function guardarUser(usuario) {
    return usuarios.push(usuario)
}

function guardarEnStorage(nuevo) {
    return localStorage.setItem("usuarios", JSON.stringify(nuevo))
}

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    let newUser = new Usuario(
        nombre.value,
        userReg.value,
        email.value,
        passReg.value
    );
    guardarUser(newUser);
    limpiarCampos();
    guardarEnStorage(usuarios);
});