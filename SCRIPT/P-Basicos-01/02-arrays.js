
const arr = ['limpiar', 'cocinar','estudiar','tareas'];

arr.push('trabajar'); // Añade un elemento al final del array
arr.unshift('leer'); // Añade un elemento al principio del array
arr.pop(); // Elimina el último elemento del array
arr.shift(); // Elimina el primer elemento del array

arr.splice(1, 2); // Elimina dos elementos a partir del índice 1
arr.splice(1, 0, 'estudiar'); // Añade un elemento en el índice 1 sin eliminar ninguno
arr.splice(1, 1, 'mantener'); // Reemplaza el elemento en el índice 1 por 'mantener'
arr.push('estudiar');
arr.push('estudiar');



// Mostrar el índice de cada elemento del array
console.log("📋 Lista de tareas actual:");
arr.forEach((deberes, i) => {
  console.log(`${i + 1}. ${deberes}`);
});


// Contar cuántas veces aparece 'estudiar' en el array
const indicesEstudiar = [];
arr.forEach((elemento, indice) => {
  elemento === 'estudiar' ? indicesEstudiar.push(indice) : null;
});
console.log(`Se encontró estudiar ${indicesEstudiar.length} veces.`);


// Mostrar concurrencias pero coon filter.
const cantidadEstudiar = arr.filter(item => item === 'estudiar').length;
console.log(`'Estudiar' aparece ${cantidadEstudiar} veces.`);