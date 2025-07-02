//CREAR UN ARRAY Y RECORRER PARA ENCONTRAR COSAS ESPECIFICAS

    const arr = [1,2,3,-4,-5,-6,7,8,9,-50];

// Mostrar números negativos:
for (element of arr){
    element < 0 ? console.log(element) : null
};

 //Mostrar cada elemento con sus indice:
 arr.forEach((elemento,indice)=>{
     console.log(`Del elemento: ${elemento} su indice es ${indice}`)
 })


 //Encontrar el primer 50 con while:
const objetivo = 50;
let encontrado = false;
let i = 0;
   
while (i < arr.length) {
  if (arr[i] === objetivo) {
    console.log(`Se encontró ${objetivo} en el índice ${i}`);
       encontrado = true;
       break;
     }
     i++;
   }

if (!encontrado) {
  console.log(`${objetivo} no fue encontrado`);
    }