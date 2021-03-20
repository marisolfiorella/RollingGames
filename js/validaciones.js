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

function validarEdad(inputedad) {
  if (
    inputedad.value >= 12 &&
    inputedad.value <= 121 &&
    !isNaN(inputedad.value)
  ) {
    inputedad.className = "form-control is-valid";
    return true;
  } else {
    inputedad.className = "form-control is-invalid";
    return false;
  }
}

let checkTerminos = document.getElementById("terminos");
checkTerminos.addEventListener("change", function () {
  validarTerminos();
});

function validarTerminos() {
  if (checkTerminos.checked) {
    checkTerminos.className = "form-check-input is-valid";
    return true;
  } else {
    checkTerminos.className = "form-check-input is-invalid";
    return false;
  }
}

function validarRegistro(event) {
  event.preventDefault();
  console.log("desde validar registros");
  if (
    campoRequerido(document.getElementById("usuario")) &&
    validarPassword(document.getElementById("password")) &&
    validarRPassword(document.getElementById("rPassword")) &&
    campoRequerido(document.getElementById("nombre")) &&
    validarEmail(document.getElementById("email")) &&
    validarTelefono(document.getElementById("telefono")) &&
    validarEdad(document.getElementById("edad")) &&
    validarTerminos()
  ) {
    enviarEmail();
  } else {
      alert("debe corregir los datos");
  }
}

function enviarEmail() {
  emailjs
    .send("service_zrczdis", "template_xcs5oks", {
      from_name: document.getElementById("nombre").value,
      to_name: "Administrador",
      from_user: document.getElementById("usuario").value,
      from_password: document.getElementById("password").value,
      from_email: document.getElementById("email").value,
      from_phone: document.getElementById("telefono").value,
      from_age: document.getElementById("edad").value,
    })
    .then(
      function (response) {
        // esta funcion se ejecuta cuando se cumple la promesa
        console.log(response);
        Swal.fire({
          title: "¡Gracias!",
          text: "Usuario Registrado Correctamente",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Entendido!",
        });

        document.getElementById("formRegistro").reset();
        document.getElementById("usuario");
        usuario.className = "form-control";
        document.getElementById("password");
        password.className = "form-control";
        document.getElementById("rPasssword");
        rPassword.className = "form-control";
        document.getElementById("nombre");
        nombre.className = "form-control";
        document.getElementById("email");
        email.className = "form-control";
        document.getElementById("telefono");
        telefono.className = "form-control";
        document.getElementById("edad");
        edad.className = "form-control";
        document.getElementById("terminos");
        terminos.className = "form-check-input";
      },
      function (error) {
        // esta funcion se ejecuta cuando dio error la promesa
        console.log(error);
        alert("No se pudo enviar el mail");
      }
    );
}
