
// querySelector Retorna 0 o 1 elementos
const heading = document.querySelector('.header__texto h2'); 
heading.textContent = 'Hola';

//Agregar una clase
heading.classList.add('nueva-clase');


//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'enlace desde JS';
enlaces[0].href = 'http://google.com';

//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')
//Agg el href,texto,clase

nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Nuevo enlace';
nuevoEnlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace)