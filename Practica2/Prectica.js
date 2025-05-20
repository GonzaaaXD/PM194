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
    const personas = [
        {nombre: "Ana", edad: 22},
        {nombre: "Luis", edad: 35},
        {nombre: "Maria", edad: 22},
    ];

    const encontrar = personas.find(persona => persona.nombre === "Luis");
    console.log(encontrar);

    personas.forEach(persona => {
        console.log(`${persona.nombre} tiene ${persona.edad} años`)
    })

    const edades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    console.log(edades);
}