//CREAR UNA CLASE PARA LOS JUEGOS
export class Juego {
    constructor(codigo, nombre, categoria, descripcion, imagen, publicado) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.publicado = publicado;
    }
}