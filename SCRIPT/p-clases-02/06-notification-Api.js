const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification('Es es una nueva notificación',{
        body: 'dal'
    })
};