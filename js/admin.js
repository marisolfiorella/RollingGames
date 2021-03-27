import { Juego } from './juegoClass';

const modalProducto = new bootstrap.Modal(document.getElementById('modalJuego'))
let listaJuego = []
let modificarJuego = false;

// LIMPIAR FORMULARIO
function limpiarFormulario() {
    document.getElementById('formJuego').reset();
    modificarJuego = false;
}
//DIBUJAR DATOS EN TABALA
function dibujarDatosEnTabla(_listaJuego) {
    let tabla = document.getElementById('tablaJuego');
    tabla.innerHTML = '';
    let filas;

    for (let i in _listaJuego) {
        filas = ` <tr>
        <td>${_listaJuego[i].codigo}</td>
        <td>${_listaJuego[i].nombre}</td>
        <td>${_listaJuego[i].categoria}</td>
        <td>${_listaJuego[i].descripcion}</td>        
        <td>${_listaJuego[i].imagen}</td>
        <td>${_listaJuego[i].publicado}</td>
        <td>
            <button class="btn btn-succes"><i class="fas fa-edit" onclick="prepararJuego(this)" id=${_listaJuego[i].codigo}></i></button>
            <button class="btn btn-danger" onclick="eliminarJuego(this)" id="${_listaJuego[i].codigo}"><i class="fas fa-trash"></i></button>
            <button class="btn btn-warning" onclick="juegoFavorito(this)" id="${_listaJuego[i].codigo}"><i class="far fa-star"></i></button>
            </td>
    </tr>`;

        tabla.innerHTML += filas;

    }
}
//LEER DATOS
function leerDatos() {
    if (localStorage.length > 0) {
        let _listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));

        if (listaJuego.length === 0) {
            listaJuego = _listaJuego;
        }
        dibujarDatosEnTabla(_listaJuego)
    }
}

//MODIFICAR JUEGO
// function modificarJuegoExistente() {
//     let codigo = document.getElementById('codigo').value;
//     let nombre = document.getElementById('nombre').value;
//     let numSerie = document.getElementById('categoria').value;
//     let categoria = document.getElementById('descripcion').value;
//     let descripcion = document.getElementById('publicado').value;
//     let imagen = document.getElementById('imagen').value;

//     //BUSCAR EL OBJETO Y MODIFICAR SUS DATOS
//     for (let i in _listaJuego) {
//         if (_listaJuego[i].codigo === codigo) {
//             _listaJuego[i].nombre;
//             _listaJuego[i].categoria;
//             _listaJuego[i].descripcion;
//             _listaJuego[i].publicado;
//             _listaJuego[i].imagen;
//         }
//     }

//     //ACTUALIZO DATOS EN LOCALSTORAGE
//     localStorage.setItem(listaJuegoKey, JSON.stringify(listaJuego));

//     //MODAL DE CONFIRMACION DE QUE EL JUEGO FUE MODIFICADO
//     Swal.fire("Juego modificado.", "El juego seleccionado fué modificado.", "success")

//     leerDatos();
//     modalProducto.hide();
// }

// let btnAgregar = document.getElementById('btnAgregar');
// btnAgregar.addEventListener('click', function() {
//     limpiarFormulario();
//     modalProducto.show();
// })
// leerDatos();

// function agregarJuego() {

//     let codigo = document.getElementById('codigo').value;
//     let nombre = document.getElementById('nombre').value;
//     let numSerie = document.getElementById('numSerie').value;
//     let categoria = document.getElementById('categoria').value;
//     let descripcion = document.getElementById('descripcion').value;
//     let imagen = document.getElementById('imagen').value;

//     let nuevoJuego = new Juego(codigo, nombre, numSerie, categoria, descripcion, imagen)
//     listaJuego.push(nuevoJuego)
//     localStorage.setItem('JuegoKey', JSON.stringify(listaJuego))
//     limpiarFormulario();

//     Swal.fire(
//         'Nuevo Juego!',
//         'El Juego se agrego correctamente!',
//         'success'
//     )
//     leerDatos();
//     modalProducto.hide();
// }

// window.eliminarJuego = function(boton) {
//     Swal.fire({
//         title: 'Esta seguro de eliminar el Juego?',
//         text: "No puedes volver atras luego de eliminar un Juego",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         cancelButtonText: 'Cancelar',
//         confirmButtonText: 'Si'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             let juegoFiltrado = listaJuego.filter((producto) => producto.codigo != boton.id)

//             listaJuego = juegoFiltrado;
//             localStorage.setItem('listaJuegoKey', JSON.stringify(juegoFiltrado));

//             leerDatos();

//             Swal.fire(
//                 'Eliminado',
//                 'El Juego seleccionado fue borrado!',
//                 'success'
//             )
//         }
//     })
// }
// window.prepararJuego = function(boton) {

//     let juegoEncontrado = listajuego.find((producto) => { return producto.codigo === boton.id });

//     document.getElementById('codigo').value = juegoEncontrado.codigo;
//     document.getElementById('nombre').value = juegoEncontrado.nombre;
//     document.getElementById('numSerie').value = juegoEncontrado.numSerie;
//     document.getElementById('categoria').value = juegoEncontrado.categoria;
//     document.getElementById('descripcion').value = juegoEncontrado.descripcion;
//     document.getElementById('imagen').value = juegoEncontrado.imagen;
//     modificarjuego = true;

//     modalProducto.show();
// }
// window.guardarJuego = function(event) {
//     event.preventDefault();
//     if (modificarJuego === true) {
//         modificarJuegoExistente();
//     } else {
//         agregarJuego();
//     }
// }

// function modificarJuegoExistente() {
//     let codigo = document.getElementById('codigo').value;
//     let nombre = document.getElementById('nombre').value;
//     let categoria = document.getElementById('categoria').value;
//     let numSerie = document.getElementById('numSerie').value;
//     let descripcion = document.getElementById('descripcion').value;
//     let imagen = document.getElementById('imagen').value;

//     for (let i in listaJuego) {
//         if (listaJuego[i].codigo === codigo) {
//             listaJuego[i].nombre = nombre;
//             listaJuego[i].categoria = categoria;
//             listaJuego[i].numSerie = numSerie;
//             listaJuego[i].descripcion = descripcion;
//             listaJuego[i].imagen = imagen;
//         }
//     }

//     localStorage.setItem('listaJuegoKey', JSON.stringify(listaJuego));

//     Swal.fire("Juego modificado", "El Juego seleccionado fue modificado", "success")

//     leerDatos();
//     modalProducto.hide();
// }


function validarGeneral(event) {
    event.preventDefault();
    if (
      validarCodigo(document.getElementById("codigo")) &&
      validarNombre(document.getElementById("nombre")) &&
      validarCategoria(document.getElementById("categoria")) &&
      validarDescripcion(document.getElementById("descripcion")) &&
      validarImagen(document.getElementById("imagen"))
    ) {
      console.log("campos de admin validados");
      console.log(estadoPublicado);
      
     
    }
  }