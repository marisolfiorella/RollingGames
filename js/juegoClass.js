//CREAR UNA CLASE PARA LOS JUEGOS

export class Juego {
    constructor(codigo, nombre, numSerie, categoria, descripcion, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.numSerie = numSerie;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}