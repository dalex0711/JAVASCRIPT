function saludo(despedida){
    console.log('hola')
    setTimeout(()=>{
        despedida();
    },2000)
};


function despedida(){
    console.log('chao')
}

saludo(despedida);
