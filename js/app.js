let listaJuego = [];
const fila = document.querySelector('.contenedor-carousel');
const fila2 = document.querySelector('.contenedor-carousel');

leerJuegoAccion();
leerJuegoAventura();
leerJuegoMultijugador();
leerJuegoShooter();

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


// ----- ----- Event Listener para la flecha derecha ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ----- ----- Event Listener para la flecha izquierda ----- -----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


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
                    <a href="detalleJuego.html" onclick="detalleJuegoMostrar(this)" id="${listaJuego[i].codigo}"><img src="img/juegos/${imagen}" alt=""></a>
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
                <a href="detalleJuego.html" onclick="detalleJuegoMostrar(this)" id="${listaJuego[i].codigo}"><img src="img/juegos/${imagen}" alt=""></a>
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
                <a href="detalleJuego.html" onclick="detalleJuegoMostrar(this)" id="${listaJuego[i].codigo}"><img src="img/juegos/${imagen}" alt=""></a>
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
                <a href="detalleJuego.html" onclick="detalleJuegoMostrar(this)" id="${listaJuego[i].codigo}"><img src="img/juegos/${imagen}" alt=""></a>
            </div>`
                filaSliderShooter.innerHTML += columna;
            }
        }
    }
}

window.detalleJuegoMostrar = function(boton) {
    console.log(boton.id);
    localStorage.setItem('id', boton.id);
}