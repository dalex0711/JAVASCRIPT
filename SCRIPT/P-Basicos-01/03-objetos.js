// Ejemplo de un objeto en JavaScript

const inventario = [
    {
        nombre : 'Laptop',
        precio : 1000,
        cantidad : 10,
        categoria: 'Tecnología',
    },
    {
        nombre : 'Audifonos',
        precio : 50,
        cantidad : 20,
        categoria: 'Accesorios',
    },
    {
        nombre : 'Mouse',
        precio : 150,
        cantidad : 15,
        categoria: 'Accesorios',
    }
];

//Almacenando el total del inventario
let totalInventario = 0;

//Mostar el total de cada producto en el inventario
for (let producto of inventario){
    const total = producto.precio * producto.cantidad;
    totalInventario += total;
    console.log(`${producto.nombre}: $${total}`)
}

//Mostrar el total del inventario
console.log(`Total del inventario: $${totalInventario}`);

//Mostrar claves y valores de cada producto 
for (const producto of inventario){
    for(const propiedades in producto){
        console.log(`${propiedades}: ${producto[propiedades]}`);
    }
}

