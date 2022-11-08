const register = document.querySelector(".register"),
      email = document.querySelector("#email"),
      nombre = document.querySelector("#nombre"),
      RegistroUsuario = document.querySelector("#usuario"),
      RegistroPassword= document.querySelector("#password1"),
      btnRegistrar = document.querySelector("#registrar");

let usuarios;

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))   
} else {
    usuarios = [];
}

class Usuario{
    constructor(nombre, usuario, correo, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.correo = correo;
        this.pass = password;
    }
} 

function limpiarCampos() {
    nombre.value = "";
    RegistroUsuario.value = "";
    RegistroPassword.value = "";
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
        RegistroUsuario.value,
        email.value,
        RegistroPassword.value
    );
    guardarUser(newUser);
    limpiarCampos();
    guardarEnStorage(usuarios);
});