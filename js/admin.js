import { Juego } from './juegoClass';
import { validarCodigo, validarNombre, validarCategoria, validarDescripcion, validarImagen, validarAdmin }

// //DAR DE ALTA AL NUEVO JUEGO

// let listaJuego = []
// const modalProducto = new bootstrap.Modal(document.getElementById('modalJuego'));

// let modificarJuego = false;

// let btnAgregar = document.getElementById('btnAgregar');
// btnAgregar.addEventListener('click', function() {
//     modalProducto.show();
// })

// function agregarJuego() {
//     let nombre = document.getElementById('nombre').value;
//     let numSerie = document.getElementById('numSerie').value;
//     let categoria = document.getElementById('categoria').value;
//     let descripcion = document.getElementById('descripcion').value;
//     let imagen = document.getElementById('imagen').value;

//     //creo el nuevo juego
//     let nuevoJuego = new Juego(nombre, numSerie, categoria, descripcion, imagen);
//     //agrego el nuevo juego a la lista
//     listaJuego.push(nuevoJuego)
//         //guardar lista de juego en localstorage
//     localStorage.setItem('listaJuegoKey', JSON.stringify(listaJuego))
//         //limpiar el formulario
//     limpiarFormulario();
//     //mostrar ventana alert de que se creo el producto correctamente 
//     Swal.fire(
//         'Nuevo Juego!',
//         'El juego se agrego correctamente!',
//         'success'

//     )
//     leerDatos();

//     //cerrar ventana modal
//     modalJuego.hide();

// }

// function limpiarFormulario() {
//     document.getElementById('formAdmin').requestFullscreen();
//     modificarJuego = false;
// }

// function leerDatos {
//     if (localStorage.length > 0) {
//         let _listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));

//         if (listaJuego.length === 0) {
//             listaJuego = _listaJuego;
//         }
//         dibujarDatosEnTabla(_listaJuego)
//     }
// }

// function dibujarDatosEnTabla(_listaJuego) {
//     let tabla = document.getElementById('tablaJuego');
//     // limpio tabla
//     tabla.innerHTML = '';
//     let filas;

//     for (let i in _listaJuego) {
//         filas = ` <tr>
//         <td>${_listaJuego[i].codigo}</td>
//         <td>${_listaJuego[i].nombre}</td>
//         <td>${_listaJuego[i].numSerie}</td>
//         <td>${_listaJuego[i].categoria}</td>
//         <td>${_listaJuego[i].descripcion}</td>
//         <td>${_listaJuego[i].imagen}</td>
//         <td>
//         <button class="btn btn-warning"><i class="fas fa-edit" onclick="prepararJuego(this)" id=${_listaJuego[i].codigo}></i></button>
//         <button class="btn btn-danger" onclick="eliminarJuego(this)" id="${_listaJuego[i].codigo}"><i class="fas fa-trash"></i></button>
//     </td>
// </tr>`;
//         // agregar la fila al padre
//         tabla.innerHTML += filas;
//     }
// }
// //ELIMINAR
// window.eliminarFunkopop = function(boton) {
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
//             //guardar los datos en localStorage 
//             localStorage.setItem('listaJuegoKey', JSON.stringify(juegoFiltrado));
//             //cargar los nuevos datos en la tabala
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
//     //buscar el juego seleccionado
//     let juegoEncontrado = listaJuego.find((producto) => { return producto.codigo === boton.id });

//     //completar con los datos todos inputs de mi formulario
//     document.getElementById('codigo').value = juegoEncontrado.codigo;
//     document.getElementById('nombre').value = juegoEncontrado.nombre;
//     document.getElementById('numSerie').value = juegoEncontrado.numSerie;
//     document.getElementById('categoria').value = juegoEncontrado.categoria;
//     document.getElementById('descripcion').value = juegoEncontrado.descripcion;
//     document.getElementById('imagen').value = juegoEncontrado.imagen;
//     modificarJuego = true;

//     //mostrar ventana modal 
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

//     // buscar el objeto y modificar sus datos
//     for (let i in listaJuego) {
//         if (listaJuego[i].codigo === codigo) {
//             listaJuego[i].nombre = nombre;
//             listaJuego[i].categoria = categoria;
//             listaJuego[i].numSerie = numSerie;
//             listaJuego[i].descripcion = descripcion;
//             listaJuego[i].imagen = imagen;
//         }
//     }
//     // actualizo el localStorage
//     localStorage.setItem('listaJuegoKey', JSON.stringify(listaJuego));
//     // mostrar alerta al usuario
//     Swal.fire("Juego modificado", "El juego seleccionado fue modificado", "success")
//         // dibujo los datos actualizados en la tabla 
//     leerDatos();
//     modalProducto.hide();
// }