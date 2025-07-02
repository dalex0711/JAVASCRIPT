

//Constructor nos sirve para inicializar un objeto o clase
function User(id,nombre,edad,correo){
    this.id = id,
    this.nombre = nombre,
    this.edad = edad,
    this.correo = correo
}

const use1 = new User(1,'dalexa',20,'dal@g');
const use2 = new User(2,'jose',20,'jos@g');
const use3 = new User(3,'tom',20,'tom@g');
const use4 = new User(4,'x',20,'x@g');
const x = [use1,use2]
console.log(x)