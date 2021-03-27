import { Juego } from './juegoClass.js';

function validarGeneral() {

    if (
        validarCodigo(document.getElementById("codigo")) &&
        validarNombre(document.getElementById("nombre")) &&
        validarCategoria(document.getElementById("categoria")) &&
        validarDescripcion(document.getElementById("descripcion")) &&
        validarImagen(document.getElementById("imagen"))
    ) {
        verificarEstado();
        console.log("campos de admin validados");
        console.log(estadoPublicado);
    }
}

//VALIDACION DE PUBLICADO
var estadoPublicado = false;

function verificarEstado() {
    let checkPublicado = document.getElementById("publicado");
    checkPublicado.addEventListener("change", function() {});
    if (checkPublicado.checked) {
        estadoPublicado = true;
    } else {
        estadoPublicado = false;
    }
}

let listaJuego = []
    //ESTO ES PARA ABRIR LA VENTANA MODAL
const modalProducto = new bootstrap.Modal(document.getElementById('modalJuego'))
    // cuando modificarJuego = true, estoy modificando un producto
let modificarJuego = false;
let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', function() {
    limpiarFormulario();
    modalProducto.show();
})
leerDatos();


function agregarJuego() {

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let publicado = document.getElementById('publicado').value;

    let nuevoJuego = new Juego(codigo, nombre, categoria, descripcion, imagen, publicado);
    listaJuego.push(nuevoJuego)
    localStorage.setItem('listaJuegoKey', JSON.stringify(listaJuego))
    limpiarFormulario();
    Swal.fire(
        "Nuevo Juego",
        "El Juego se agregó correctamente",
        "success"
    );
    leerDatos();
    modalProducto.hide();
}

function limpiarFormulario() {
    document.getElementById('formJuego').reset();
    modificarJuego = false;
}

function leerDatos() {
    if (localStorage.length > 0) {
        let _listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        if (listaJuego.length === 0) {
            listaJuego = _listaJuego
        }
        dibujarDatosEnTabla(_listaJuego);
    }
}

function dibujarDatosEnTabla(_listaJuego) {
    let tabla = document.getElementById('tablaJuego');
    tabla.innerHTML = '';
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
window.eliminarJuego = function(boton) {
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
            let juegoFiltrado = listaJuego.filter((producto) => producto.codigo != boton.id);
            listaJuego = juegoFiltrado;
            localStorage.setItem('listaJuegoKey', JSON.stringify(juegoFiltrado));
            leerDatos();
            Swal.fire(
                "Juego Eliminado",
                "El Funkopop seleccionado fue borrado",
                "success"
            )
        }
    })
}
window.prepararJuego = function(boton) {
    let juegoEncontrado = listaJuego.find((producto) => { return producto.codigo === boton.id })

    document.getElementById('codigo').value = juegoEncontrado.codigo;
    document.getElementById('nombre').value = juegoEncontrado.nombre;
    document.getElementById('categoria').value = juegoEncontrado.categoria;
    document.getElementById('descripcion').value = juegoEncontrado.descripcion;
    document.getElementById('imagen').value = juegoEncontrado.imagen;
    document.getElementById('publicado').value = juegoEncontrado.publicado;
    modificarJuego = true;
    modalProducto.show();

}
window.guardarJuego = function(event) {
    event.preventDefault();
    if (modificarJuego === true) {
        modificarJuegoExistente();
    } else {
        agregarJuego();
    }
}

function modificarJuegoExistente() {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let publicado = document.getElementById('publicado').value;

    for (let i in listaJuego) {
        if (listaJuego[i].codigo === codigo) {
            listaJuego[i].nombre = nombre;
            listaJuego[i].categoria = categoria;
            listaJuego[i].descripcion = descripcion;
            listaJuego[i].imagen = imagen;
            listaJuego[i].publicado = publicado;
        }
    }
    localStorage.setItem('listaJuegoKey', JSON.stringify(listaJuego));
    Swal.fire("Juego modificado", " El juego seleccionado fue modificado exitosamente", "success");
    leerDatos();
    modalProducto.hide();
}