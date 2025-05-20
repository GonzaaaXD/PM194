{
    const persona = {
    nombre : "Ivan Isay",
    edad : 37,
    direccion: {
        ciudad : "Qro",
        pais: "MX"
    }
    };

    const saludo = "Hola soy " + persona.nombre + " tengo " + persona.edad + " y soy de " + persona.direccion.ciudad;
    console.log(saludo)
}
{
    const productos = [
        {nombre: "Laptop", precio: 12000},
        {nombre: "Mouse", precio: 250},
        {nombre: "Teclado", precio: 750},
        {nombre: "Monitor", precio: 3000},
    ]

    const filtrados = productos.filter(producto => producto.precio > 1000);
    //console.log(filtrados);

    const mapeado = filtrados.map(producto => producto.nombre);
    console.log(mapeado);
}
{
    
}