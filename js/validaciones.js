let user = "admin";
let pass = "admin";
const modalDeLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
// VALIDACION REGISTRO
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
  if (p1 === p2 && p2 != "") {
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
  if (
    telefono.value.trim() != "" &&
    !isNaN(telefono.value) &&
    telefono.value <= 999999999999999
  ) {
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

function checkBox() {
  checkTerminos.addEventListener("change", function () {
    validarTerminos();
  });
}

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
    Swal.fire({
      title: "Error",
      text: "Debe completar correctamente el formulario",
      icon: "error",
      confirmButtonColor: "#181717",
      confirmButtonText: "Aceptar",
    });
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
        console.log(response);
        Swal.fire({
          title: "¡Gracias!",
          text: "Usuario Registrado Correctamente",
          icon: "success",
          confirmButtonColor: "#181717",
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
        console.log(error);
        alert("No se pudo enviar el mail");
      }
    );
}

//VALIDACION CONTACTO
function validarConsulta(consulta) {
  if (
    consulta.value.trim() === "" ||
    consulta.value.length <= 10 ||
    consulta.value.length >= 500
  ) {
    consulta.className = "form-control is-invalid";
    return false;
  } else {
    consulta.className = "form-control is-valid";
    return true;
  }
}

function validarContacto(event) {
  event.preventDefault();
  console.log("desde validar contacto");
  if (
    campoRequerido(document.getElementById("nombre")) &&
    validarEmail(document.getElementById("email")) &&
    validarConsulta(document.getElementById("consulta"))
  ) {
    enviarEmailContacto();
  } else {
    Swal.fire({
      title: "Error",
      text: "Debe completar correctamente el formulario",
      icon: "error",
      confirmButtonColor: "#181717",
      confirmButtonText: "Aceptar",
    });
  }
}

function enviarEmailContacto() {
  emailjs
    .send("service_zrczdis", "template_upouiwm", {
      from_name: document.getElementById("nombre").value,
      to_name: "Administrador",
      from_email: document.getElementById("email").value,
      message: document.getElementById("consulta").value,
    })
    .then(
      function (response) {
        console.log(response);
        Swal.fire({
          title: "¡Consulta enviada correctamente!",
          text: "Gracias por comunicarte con nosotros",
          icon: "success",
          confirmButtonColor: "#181717",
          confirmButtonText: "Aceptar",
        });

        document.getElementById("formContacto").reset();
        document.getElementById("nombre");
        nombre.className = "form-control";
        document.getElementById("email");
        email.className = "form-control";
        document.getElementById("consulta");
        consulta.className = "form-control";
      },
      function (error) {
        console.log(error);
        alert("No se pudo enviar el mail");
      }
    );
}

// VALIDACION LOGIN

function validarUsuarios(usuario) {
  if (usuario.value === user && usuario.value === pass) {
    return true;
  } else {
    return false;
  }
}

function validarGeneralLogin(event) {
  event.preventDefault();
  if (
    validarUsuarios(document.getElementById("usuarios")) &&
    validarUsuarios(document.getElementById("userPass"))
  ) {
    console.log("usuario y contraseña validados");
    document.getElementById("formLogin").reset();
    modalDeLogin.hide();
    document.getElementById("navbarAdmin");
    navbarAdmin.className = "nav-link";
  } else {
    document.getElementById("formLogin").reset();
    alert("usuario y contraseña incorrectos");
  }
}
// VALIDACION ADMIN
function validarCodigo(codigo) {
  if (codigo.value.trim() != "" && !isNaN(codigo.value)) {
    codigo.className = "form-control is-valid";
    return true;
  } else {
    codigo.className = "form-control is-invalid";
    return false;
  }
}

function validarNombre(input) {
  if (input.value === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}

function validarCategoria(categoria) {
  if (
    categoria.value == "accion" ||
    categoria.value == "aventura" ||
    categoria.value == "shooter" ||
    (categoria.value == "multijugador" && categoria.value.trim() !== "")
  ) {
    categoria.className = "form-control is-valid";
    return true;
  } else {
    categoria.className = "form-control is-invalid";
    return false;
  }
}

function validarDescripcion(descripcion) {
  if (descripcion.value.trim() != "" && descripcion.value.length > 10) {
    descripcion.className = "form-control is-valid";
    return true;
  } else {
    descripcion.className = "form-control is-invalid";
    return false;
  }
}

function validarImagen(imagen) {
  if (imagen.value.trim() != "" || imagen.value.lenght < 200) {
    imagen.className = "form-control is-valid";
    return true;
  } else {
    imagen.className = "form-control is-invalid";
    return false;
  }
}

/* function estadoPublicado(valor) {
  if (valor.value === "si" || valor.value === "no"){
    console.log (valor.value)
    return true
} else {
  console.log(valor.value)
  valor.className = "form-select is-invalid"
  return false
}
}
 */

function cambioPublicado(check){
  var estado = check.value
      document.getElementById('valorPublicado').value = estado
  if (valorPublicado.value === "si" || valorPublicado.value === "no"){
         return true
    } else {
check.className = "form-select is-invalid"
return false;
    }
  
  }

      
    