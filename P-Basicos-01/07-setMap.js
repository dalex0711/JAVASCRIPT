/**
 * Reto:

   

   

    Imprime cada categoría con sus productos.
 */


const productos = [
  { id: 1, nombre: "a", categoria: "Periféricos" },
  { id: 2, nombre: "b", categoria: "Periféricos" },
  { id: 3, nombre: "c", categoria: "Pantallas" },
  
];
 
// Usa Set para listar solo los nombres únicos de los productos.
const nombreUnicos = new Set(productos.nombre)
for (const product of productos){
    nombreUnicos.add(product.nombre)
};

console.log(nombreUnicos);

// Usa Map para agrupar los productos por categoría (clave: categoría, valor: array de nombres).


const categoria = new Map();

productos.forEach(producto => {
  // Si la categoría no existe, se inicializa con un array vacío
  if (!categoria.has(producto.categoria)) {
    categoria.set(producto.categoria, []);
  }

  // Se agrega el producto al array correspondiente
  categoria.get(producto.categoria).push(producto.nombre);
});

for (const [clave,valor] of categoria.entries()){
    console.log(clave,valor)
}