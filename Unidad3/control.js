//variables para el DOM
const btnSubmit = document.getElementById("btnIngresar");
const txtUsuario = document.getElementById("usuario");
const txtPass = document.getElementById("pass");

//variables
let mensajeError = "";

const validarUsuario = (cadena) => {
  if (cadena.includes("@")) {
    return true;
  } else {
    mensajeError = "Revisar el campo usuario falta el '@'";
    return false;
  }
};

const validarCamposVacios = (cadena) => {
  if (cadena) return true;
  else {
    mensajeError = "No se permiten campos vacios";
    return false;
  }
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validarCamposVacios(txtUsuario.value) &&
    validarCamposVacios(txtPass.value) &&
    validarUsuario(txtUsuario.value)
  ) {
    alert(`Bienvenido ${txtUsuario.value}`);
  } else {
    alert(mensajeError);
  }
});
