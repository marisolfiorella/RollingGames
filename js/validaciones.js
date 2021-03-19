function campoRequerido(nombres) {
  if (nombres.value.trim() === "" || nombres.value.length >= 30) {
    nombres.className = "form-control is-invalid";
    return false;
  } else {
    nombres.className = "form-control is-valid";
    return true;
  }
}

function validarPassword(pass) {
  if (pass.value.length >= 8) {
    pass.className = "form-control is-valid";
    return true;
  } else {
    pass.className = "form-control is-invalid";
    return false;
  }
}

function validarRPassword(rpass) {
  let p1 = document.getElementById("password").value;
  let p2 = document.getElementById("rPassword").value;
  if (p1 === p2) {
    rpass.className = "form-control is-valid";
    return true;
  } else {
    rpass.className = "form-control is-invalid";
    return false;
  }
}

function validarEmail(email) {
  let expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (email.value.trim() != "" && expresion.test(email.value)) {
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
}

function validarTelefono(telefono) {
    if (telefono.value.trim() != "" && !isNaN(telefono.value)) {
      telefono.className = "form-control is-valid";
      return true;
    } else {
      telefono.className = "form-control is-invalid";
      return false;
    }
  }

  function validarEdad(inputedad){
      console.log (inputedad.value)
      if (inputedad.value >= 12 && inputedad.value <= 121 && !isNaN(inputedad.value)){
          inputedad.className = "form-control is-valid";
          return true;
      }else {
          inputedad.className = "form-control is-invalid";
          return false;
      }
  }

  let checkTerminos = document.getElementById("terminos");
  checkTerminos.addEventListener("change", function (){
      validarTerminos();
  })
  
  function validarTerminos(){
if (checkTerminos.checked){
    checkTerminos.className = "form-check-input is-valid";
    return true;
}else {
    checkTerminos.className = "form-check-input is-invalid";
}
  }
