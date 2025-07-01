//Registro de compras


const comprarRealizadas = [];
    
function registroCompra(usuario,producto,cantidad,precio,arr){
    
    const compra = {
        usuario,
        producto,
        cantidad,
        precio,
    };

    arr.push(compra);
};

registroCompra('dal','pan',5,900,comprarRealizadas);
registroCompra('do','pan',5,700,comprarRealizadas);
registroCompra('jose','pan',7,800,comprarRealizadas);
registroCompra('deivis','pan',30,100,comprarRealizadas);
registroCompra('joys','pan',40,500,comprarRealizadas);


const  totalUser = new Map();

for (compra of comprarRealizadas){
    const total = compra.precio * compra.cantidad
    // Verifico si ya existe el usuario en el mapa
    if(totalUser.has(compra.usuario)){
        totalUser.set(compra.usuario,totalUser.get(compra.usuario) + total)
     // Si es la primera vez, simplemente lo agrego
    } else{
        totalUser.set(compra.usuario,total)
    }
};


//Muestra qué usuario gastó más y su total.
let valorActual = 0; let totalMayor = 0; let user1 = '';

for (const[user,total]of totalUser.entries()){
    valorActual = total;
    if( valorActual > totalMayor){
        totalMayor = valorActual
        user1 = user
    }

}

console.log(`${user1} fue la compra mayor, con total de ${totalMayor}`)



//Filtrar las compras con un mayor a 500
const comprasGrandes = comprarRealizadas.filter(c => c.precio > 500);


//Recorre y le pasamos como parametro las comprasGrandes
console.log('--> compras mayores a 500')
comprasGrandes.forEach(c =>{ //donde c es el objeto
    console.log(`   ${c.usuario} compró ${c.producto} por $${c.precio}`)
})
