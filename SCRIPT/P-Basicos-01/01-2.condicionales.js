
// Ejercico para evaluar nota, si es excelente, bien, suficiente o reprobado
nota = 8.0;

// Fución con if/else if/else

function evaluarNota(nota){
    if(nota >= 9.0){
        console.log("Excelente");
    } else if(nota >= 7.0 && nota <= 8.9){
        console.log("Bien");
    } else if(nota >= 6.0 && nota <= 6.9){
        console.log("Suficiente");
    } else {
        console.log("Reprobado");
    }
}
evaluarNota(nota);

// Fución con switch
function evaluarNotaSwitch(nota) {
    switch (true) { 
    
        /*  Colocamos true porque vamos a evaluar condiciones booleanas,
            no colocamos nota porque no podriamos evaluar un case con un valor numérico directamente
            Si la condicion es verdadera,entonces seria true, al igual que el true del switch,
            lo que hace que se ejecute este case
        */

        case (nota >= 9.0):
            console.log("Excelente");
            break;
        case (nota >= 7.0 && nota <= 8.9):
            console.log("Bien");
            break;
        case (nota >= 6.0 && nota <= 6.9):
            console.log("Suficiente");
            break;
        default:
            console.log("Reprobado");
    }
}

