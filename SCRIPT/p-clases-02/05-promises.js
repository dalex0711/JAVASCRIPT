const usuarioAutenticado = new Promise((resolve,reject) => {
    const autenticado = false;

    if(autenticado){
        resolve('Usuario autenticado'); //Si el promise se cumple
    } else{
        reject('No se pudo iniciar sesión');
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// LOS POSIBLES 3 ESTADOS DE LOS PROMISES

// Pending : No se ha cumplido, pero tampoco rechazado
// Fulfilled : Ya se cumplió
// Rejected : Se ha rechazado o mo se pudo cumplir
