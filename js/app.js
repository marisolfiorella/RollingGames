let listaJuego = [];
leerJuego();

function leerJuego() {
    if (localStorage.length > 0) {
        listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
        let filaCards = document.getElementById('filaCards');
        filaCards.innerHTML = '';
        for (let i in listaJuego) {
            let columna = `<div class="col-md-3 col-sm-6 my-2">
            <div class="card w-100">
                <img src="img/juegos/${listaJuego[i].imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${listaJuego[i].nombre}</h5>
                    <p class="card-text">${listaJuego[i].descripcion}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>`
            filaCards.innerHTML += columna;
        }
    }
}