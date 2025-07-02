class Producto {
    constructor(name,precio){
        this.name = name;
        this.precio = precio;
    }

    formatearProducto(){
        return`El producto ${this.name} tiene un precio de: $${this.precio}`
    }

    obtenerPrecio(){
        return `El precio del producto ${this.name} es ${this.precio}`
    }
}

// const producto2 = new Producto('pan',1000);
// const producto3 = new Producto('azucar',1000);
// console.log(producto2.obtenerPrecio())

class Libro extends  Producto {
    constructor(name,precio,codigo){
        super(name,precio);
        this.codigo = codigo;
    }
    formatearProducto(){
        return`${super.formatearProducto()} y su codigo es ${this.codigo}`
    }


}


const libro = new Libro('Java',120)

console.log(libro.formatearProducto())