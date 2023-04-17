console.log(salarios)

//Análisis personal para Juanita
console.log();

function encontrarPersona (personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
    
    //const persona = salarios.find((persona) => 
    //    persona.name == personaEnBusqueda
    //);
    //return persona;
}

function medianaPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario
    });

    const medianaSalarios = Estadistica.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}

