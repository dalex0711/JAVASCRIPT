const verificarNum = (num) => {
    return new Promise((resolve,reject) =>{
        if (typeof num === 'number'){
            resolve('Es un número');
        } else {
            reject('No es un número')
        }

    }) 
}

verificarNum('p')
    .then(resultado => {
        console.log(resultado)
    })

    .catch(error => {
        console.error(error)
    });

