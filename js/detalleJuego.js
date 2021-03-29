detalleJuego();

function detalleJuego() {
    let codigo = localStorage.getItem('id');
    let detalleJuegoMostrar = document.getElementById('detalleJuegoMostrar');
    detalleJuegoMostrar.innerHTML = '';
    listaJuego = JSON.parse(localStorage.getItem('listaJuegoKey'));
    for (let i in listaJuego) {
        if (listaJuego[i].codigo === codigo) {
            detalleJuegoMostrar.innerHTML = `            
<div class="row mb-5">
    <h1 class="my-5">Detalle del Juego</h1>
    <div class="col-md-4">
      <img src="img/juegos/${listaJuego[i].imagen}" alt="${listaJuego[i].imagen}">
    </div>
    <div class="col-md-8">
        <h2 class="mb-5">${listaJuego[i].nombre}</h2>
        <p class="mb-5">${listaJuego[i].descripcion}</p>

        <p class="">Categoria: ${listaJuego[i].categoria}</p>

        <p class="mt-5">REQUISITOS DEL SISTEMA</p>

        <hr class="text-light">
        <p>Minimo</p>
        <ul class="mb-5">
            <li>SO: Windows 10 64-bit</li>
            <li>Procesador: i3-4160 or AMD equivalent</li>
            <li>Memoria: 8 GB de RAM</li>
            <li>Gráficos: NVIDIA GTX 950 / AMD 270 (min 2GB video ram)</li>
            <li>DirectX: Versión 12</li>
            <li>Almacenamiento: 75 GB de espacio disponible</li>
        </ul>
        <a href="error404.html"><button role="button mt-4" class="boton"><i class="fas fa-play"></i>Reproducir</button></a>
        <a href="error404.html"><button role="button mt-4" class="boton"><i class="fas fa-shopping-cart"></i> Comprar</button></a>
    </div>
</div>
`
        }
    }
}