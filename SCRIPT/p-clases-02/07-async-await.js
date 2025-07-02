function descargarNuevosCliente(){
    return new Promise(resolve => {
        console.log('Descargando clientes..espere..');

        setTimeout(()=>{
            resolve('Los clientes fueron Descargados');
        },2000)
    })
}

function  descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos..espere')

        setTimeout(()=>{
            resolve('Los pedidos fueron Descargandos');
        },3000)
    })
}

descargarNuevosCliente()


async function app(){
    try{
        // const clientes = await descargarNuevosCliente();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultados = await Promise.all([descargarNuevosCliente(), descargarUltimosPedidos()]);
        console.log(resultados[0]);
        console.log(resultados[1]);
    } catch(error){
        console.log(error)
    }
};

app()