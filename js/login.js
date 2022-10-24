const btnIngresar = document.querySelector("#ingresar"),
      user = document.querySelector("#user"),
      pass = document.querySelector("#pass");
      
function inicioSesion(usuarios) {
  let userFound = usuarios.find((usuario)=>{
    return usuario.usuario === user.value && usuario.pass === pass.value
  })
  if (userFound){
      window.location.href= "../sections/wallet.html" 
  }else{
    document.querySelector("#mensaje").innerText= 
    "Usuario no encontrado"
  }
  return userFound;
}

function recuperarLocal() {
  let datos = JSON.parse(localStorage.getItem("usuarios"));
  return datos;
}

const usuariosLocal = recuperarLocal();

btnIngresar.addEventListener("click", (e) => {
  e.preventDefault();
  inicioSesion(usuariosLocal)
});