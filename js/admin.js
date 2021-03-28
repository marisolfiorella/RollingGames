import { Juego } from "./juegoClass.js";


//funciones de validar
function validarGeneral() {
  if (
    validarCodigo(document.getElementById("codigo")) &&
    validarNombre(document.getElementById("nombre")) &&
    validarCategoria(document.getElementById("categoria")) &&
    validarDescripcion(document.getElementById("descripcion")) &&
    validarImagen(document.getElementById("imagen")) &&
    validarPublicado() === true
        
  ) {
    console.log("campos de admin validados");
    return true;
  } else {
    console.log("datos mal cargados");
  }
}

let listaJuego = [];
//ESTO ES PARA ABRIR LA VENTANA MODAL
const modalProducto = new bootstrap.Modal(
  document.getElementById("modalJuego")
);
// cuando modificarJuego = true, estoy modificando un producto
let modificarJuego = false;
let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", function () {
  limpiarFormulario();
  modalProducto.show();
});
leerDatos();

function agregarJuego() {
  if (validarGeneral() === true) {
    validarGeneral();

    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;
    let publicado = document.getElementById("valorPublicado").value;

    let nuevoJuego = new Juego(
      codigo,
      nombre,
      categoria,
      descripcion,
      imagen,
      publicado
    );
    listaJuego.push(nuevoJuego);
    localStorage.setItem("listaJuegoKey", JSON.stringify(listaJuego));
    limpiarFormulario();
    Swal.fire("Nuevo Juego", "El Juego se agregó correctamente", "success");
    leerDatos();
    modalProducto.hide();
  } else {
    Swal.fire({
      title: "Por favor complete el formulario",
      confirmButtonText: "Aceptar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

function limpiarFormulario() {
  document.getElementById("formJuego").reset();
  document.getElementById("codigo");
  codigo.className = "form-control";
  document.getElementById("nombre");
  nombre.className = "form-control";
  document.getElementById("categoria");
  categoria.className = "form-control";
  document.getElementById("descripcion");
  descripcion.className = "form-control";
  document.getElementById("imagen");
  imagen.className = "form-control";
  document.getElementById("publicado");
  publicado.className = "form-select";
  modificarJuego = false;
}

function leerDatos() {
  if (localStorage.length > 0) {
    let _listaJuego = JSON.parse(localStorage.getItem("listaJuegoKey"));
    if (listaJuego.length === 0) {
      listaJuego = _listaJuego;
    }
    dibujarDatosEnTabla(_listaJuego);
  }
}

function dibujarDatosEnTabla(_listaJuego) {
  let tabla = document.getElementById("tablaJuego");
  tabla.innerHTML = "";
  let filas;
  for (let i in _listaJuego) {
    filas = `<tr>
      <td>${_listaJuego[i].codigo}</td>
      <td>${_listaJuego[i].nombre}</td>
      <td>${_listaJuego[i].categoria}</td>
      <td>${_listaJuego[i].descripcion}</td>
      <td>
          <div class="form-check">
              <input class="form-check-input" type="checkbox" id="publicado">
              <label class="form-check-label" for="flexCheckDefault">
                 
          </label>
          </div>
      </td>
      <td> <button class="btn btn-success" onclick="prepararJuego(this)" id="${_listaJuego[i].codigo}"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="eliminarJuego(this)" id="${_listaJuego[i].codigo}"><i class="fas fa-trash"></i></button>
          <button class="btn btn-warning onclick="juegoFavorito(this)"><i class="far fa-star"></i></button></td>
  </tr>`;
    tabla.innerHTML += filas;
  }
}
window.eliminarJuego = function (boton) {
  Swal.fire({
    title: "Está seguro de eliminar el Juego?",
    text: "No puedes volver atrás luego de elminar un juego",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica de eliminar funko cuando presionan confirmar
      let juegoFiltrado = listaJuego.filter(
        (producto) => producto.codigo != boton.id
      );
      listaJuego = juegoFiltrado;
      localStorage.setItem("listaJuegoKey", JSON.stringify(juegoFiltrado));
      leerDatos();
      Swal.fire(
        "Juego Eliminado",
        "El Juego seleccionado fue borrado",
        "success"
      );
    }
  });
};
window.prepararJuego = function (boton) {
  let juegoEncontrado = listaJuego.find((producto) => {
    return producto.codigo === boton.id;
  });

  document.getElementById("codigo").value = juegoEncontrado.codigo;
  document.getElementById("nombre").value = juegoEncontrado.nombre;
  document.getElementById("categoria").value = juegoEncontrado.categoria;
  document.getElementById("descripcion").value = juegoEncontrado.descripcion;
  document.getElementById("imagen").value = juegoEncontrado.imagen;
  document.getElementById("valorPublicado").value = juegoEncontrado.valorPublicado;
  modificarJuego = true;
  modalProducto.show();
};
window.guardarJuego = function (event) {
  event.preventDefault();
  if (modificarJuego === true) {
    modificarJuegoExistente();
  } else {
    agregarJuego();
  }
};

function modificarJuegoExistente() {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let categoria = document.getElementById("categoria").value;
  let descripcion = document.getElementById("descripcion").value;
  let imagen = document.getElementById("imagen").value;
  let publicado = document.getElementById("valorPublicado").value;

  for (let i in listaJuego) {
    if (listaJuego[i].codigo === codigo) {
      listaJuego[i].nombre = nombre;
      listaJuego[i].categoria = categoria;
      listaJuego[i].descripcion = descripcion;
      listaJuego[i].imagen = imagen;
      listaJuego[i].publicado = publicado;
    }
  }
  localStorage.setItem("listaJuegoKey", JSON.stringify(listaJuego));
  Swal.fire(
    "Juego modificado",
    " El juego seleccionado fue modificado exitosamente",
    "success"
  );
  leerDatos();
  modalProducto.hide();
}

//VALIDACION DE PUBLICADO
function validarPublicado(){
let prueba = document.getElementById("valorPublicado")
if(prueba.value == "negative"){
return false
} else {
  return true
}
}