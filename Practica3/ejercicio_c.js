function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 2000);
    });
}

async function obtnerDatos() {
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

obtnerDatos();