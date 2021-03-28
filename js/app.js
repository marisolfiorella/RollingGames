let listaJuego = [];
const fila = document.querySelector('.contenedor-carousel');
const fila2 = document.querySelector('.contenedor-carousel');

leerJuegoAccion();
leerJuegoAventura();
leerJuegoMultijugador();
leerJuegoShooter();

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


//function leerJuego() {
//    if (localStorage.length > 0) {
//        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
//        let filaCards = document.getElementById('filaCards');
//        filaCards.innerHTML = '';
//        for (let i in listaJuego) {
//            let imagen = '';
//            if (listaJuego[i].imagen === '') {
//                imagen = 'imagenNoDisponible.png'
//            } else {
//                imagen = listaJuego[i].imagen;
//            }
//            if (listaJuego[i].publicado === 'si' &&&) {
//                console.log(listaJuego[i].publicado);
//                let columna = `<div class="col-md-3 col-sm-6 my-2">
//            <div class="card w-100 bg-dark text-light">
//                <img src="img/juegos/${imagen}" class="card-img-top" alt="${listaJuego[i].nombre}">
//               <div class="card-body">
//                    <h5 class="card-title">${listaJuego[i].nombre}</h5>
//                    <p class="card-text">${listaJuego[i].descripcion}</p>
//                    <a href="#" class="btn btn-info">Ver más</a>
//                </div>
//            </div>`
//                filaCards.innerHTML += columna;
//            }
//        }
//    }
//}

function leerJuegoAccion() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        let filaSliderAccion = document.getElementById('filaSliderAccion');
        filaSliderAccion.innerHTML = '';
        for (let i in listaJuego) {
            let imagen = '';
            if (listaJuego[i].imagen === '') {
                imagen = 'imagenNoDisponible.png'
            } else {
                imagen = listaJuego[i].imagen;
            }
            if (listaJuego[i].publicado === 'si' && listaJuego[i].categoria === 'accion') {
                let columna = `<div class="juego mx-3">
                <div class="juego mx-3">
                    <a href="#"><img src="img/juegos/${imagen}" alt=""></a>
            </div>`
                filaSliderAccion.innerHTML += columna;
            }
        }
    }
}

function leerJuegoAventura() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        let filaSliderAventura = document.getElementById('filaSliderAventura');
        filaSliderAventura.innerHTML = '';
        for (let i in listaJuego) {
            let imagen = '';
            if (listaJuego[i].imagen === '') {
                imagen = 'imagenNoDisponible.png'
            } else {
                imagen = listaJuego[i].imagen;
            }
            if (listaJuego[i].publicado === 'si' && listaJuego[i].categoria === 'aventura') {
                let columna = `<div class="juego mx-3">
                <div class="juego mx-3">
                    <a href="#"><img src="img/juegos/${imagen}" alt=""></a>
            </div>`
                filaSliderAventura.innerHTML += columna;
            }
        }
    }
}

function leerJuegoMultijugador() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        let filaSliderMultijugador = document.getElementById('filaSliderMultijugador');
        filaSliderMultijugador.innerHTML = '';
        for (let i in listaJuego) {
            let imagen = '';
            if (listaJuego[i].imagen === '') {
                imagen = 'imagenNoDisponible.png'
            } else {
                imagen = listaJuego[i].imagen;
            }
            if (listaJuego[i].publicado === 'si' && listaJuego[i].categoria === 'multijugador') {
                let columna = `<div class="juego mx-3">
                <div class="juego mx-3">
                    <a href="#"><img src="img/juegos/${imagen}" alt=""></a>
            </div>`
                filaSliderMultijugador.innerHTML += columna;
            }
        }
    }
}

function leerJuegoShooter() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        let filaSliderShooter = document.getElementById('filaSliderShooter');
        filaSliderShooter.innerHTML = '';
        for (let i in listaJuego) {
            let imagen = '';
            if (listaJuego[i].imagen === '') {
                imagen = 'imagenNoDisponible.png'
            } else {
                imagen = listaJuego[i].imagen;
            }
            if (listaJuego[i].publicado === 'si' && listaJuego[i].categoria === 'shooter') {
                let columna = `<div class="juego mx-3">
                <div class="juego mx-3">
                    <a href="#"><img src="img/juegos/${imagen}" alt=""></a>
            </div>`
                filaSliderShooter.innerHTML += columna;
            }
        }
    }
}