//variable que almacena los datos del localstorage
let listaJuego = [];
leerJuego();

function leerJuego() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'))
            //borrar los datos del slider
        let sliders = document.getElementById("sliders");
        sliders.innerHTML = "";
        // //dibuajar cada columna con los datos de los objetos de los funkopop
        // for (let i in listaFunkopop){
        //     //cargar imagen por defecto
        //     let imagen = "";
        //     if (listaFunkopop[i].imagen ===""){
        // imagen = "thanos.png";
        //     }else{
        //         //usar la imagen cargada por el usuario
        //         imagen = listaFunkopop[i].imagen;
        //     }
        //     let columna = `<div class="col-sm-12 col-md-4 col-lg-3">
        //     <div class="card shadow mt-3">
        //         <img src="img/productos/${imagen}" class="card-img-top" alt="imagen funkopop batman">
        //         <div class="card-body">
        //             <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
        //             <p class="card-text">${listaFunkopop[i].descripcion}.</p>
        //             <a href="#" class="btn btn-primary disabled">Ver mas...</a>
        //         </div>
        //     </div></div>`;

        // //agregar las columnas al elemento padre
        // filaCards.innerHTML += columna
        // }
        // }
        // }