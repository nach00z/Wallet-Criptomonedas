const btnIngresar = document.querySelector("#ingresar"),
      user = document.querySelector("#user"),
      contraseña = document.querySelector("#contra");
      
function inicioSesion(usuarios) {
  let EncontrarUsario = usuarios.find((usuario)=>{
    return usuario.usuario === user.value && usuario.pass === contraseña.value
  })
  if (EncontrarUsario){
      window.location.href= "../sections/wallet.html" 
  }else{
    document.querySelector("#mensaje").innerText= 
    "Usuario no encontrado"
  }
  return EncontrarUsario;
}

function recuperarLocalStorage() {
  let datos = JSON.parse(localStorage.getItem("usuarios"));
  return datos;
}

const usuariosRegistrados = recuperarLocalStorage();

btnIngresar.addEventListener("click", (e) => {
  e.preventDefault();
  inicioSesion(usuariosRegistrados)
});