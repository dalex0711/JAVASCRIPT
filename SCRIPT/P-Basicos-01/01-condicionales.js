
/**
 * CONDICIÓN SIMPLE
 * Crea una variable nota y muestra si es "Aprobado" o "Reprobado".
 */

const nota = 7.0;

// Operador T: condición ? valorSiVerdadero : valorSiFalso
    nota >=6.0 ? console.log("T: Aprobado") : console.log("Reprobado");


//Condicional if, else if, else
   if(nota >6.0){
         console.log("If: Aprobado");
   
   }else if(nota == 6.0){
         console.log("Aprobado con nota minima");
   
   }else{
         console.log("Reprobado");
      }

//Condicional switch
switch (nota) {
   case 6.0:
      console.log("Switch: Aprobado con nota minima");
      break;
   case 7.0:
      console.log("Switch: Aprobado");
      break;
   default:
      console.log("Rango no reconocido");
      break;
} 