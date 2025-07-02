async function obtenerEmpleados(){
    const archivo = 'empleado.json';

    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         const {empleados} = datos;
    //         console.log(empleados)

    //         empleados.forEach(empleado => {
    //             console.log(empleado)
    //         });
    //     })
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    const {empleados} = datos;
    empleados.forEach(emp=>{
        console.log(`ID: ${emp.id}, Nombre: ${emp.nombre}, Puesto: ${emp.puesto}`)
    })

};


obtenerEmpleados();