const nombres = ["Ana", "Luis", "Ana", "Carlos", "Luis", "María"];

//Hago un set unico de nombres
let nombresUnicos = new Set(nombres)
console.log(nombresUnicos)


//Hacer un mapeo para obtener el numero de veces que sale un nombre
let conteo = new Map()
nombres.forEach(nombre => {
    if (conteo.has(nombre)){
        conteo.set(nombre, conteo.get(nombre) + 1);
    } else {
        conteo.set(nombre,1)
    }
})

console.log(conteo)

//Recorro el mapeo para mostrarlo
for ([clave,valor] of conteo.entries()){
    console.log(`El nombre ${clave} aparece ${valor} veces`)
} 