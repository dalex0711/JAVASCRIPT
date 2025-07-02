

console.log(1)

//Load espera a que el JS y los archivos que depende del html estén listo
window.addEventListener('load',function(){
    console.log(2)
});

//otra forma de hacerlo
window.onload = function(){
    console.log(3)
}

//Espera a que se cargue el html
document.addEventListener('DOMContentLoaded',function(){
    console.log(4)
})

console.log(5)

window.onscroll = function(){
    console.log('scroll')
}

const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click',function(e){
//     console.log(e);
//     e.preventDefault();
//     console.log('Enviando formulario..')

// })


//EVENTOS DE LOS INPUTS 

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos)
}


//EL EVENTO SUBMIT 

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //VALIDAR

    const {nombre,email,mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true)
        return
    } 
    mostrarAlerta('El formulario se envió correctamente')
    });




function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error')
    } else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
     //Desaparezca despues de 5 segundos.

    setTimeout(()=>{
        alerta.remove()
    },5000)
}
