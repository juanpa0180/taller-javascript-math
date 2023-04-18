const nombres = salarios.map(persona => persona.nombre);
//console.log(nombres);
//console.log(salarios)

//Análisis personal para Juanita
//console.log();

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

    //console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i=1; i<trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;
        const crecimiento = salarioActual-salarioPasado;
        const porcentajeCrecimiento = crecimiento/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianasPorcentajesCrecimiento = Estadistica.calcularMediana(porcentajesCrecimiento);

    //console.log({porcentajesCrecimiento, medianasPorcentajesCrecimiento});

    const ultimosalario = trabajos[trabajos.length-1].salario;
    const aumento = ultimosalario * medianasPorcentajesCrecimiento;
    const nuevoSalario = ultimosalario + aumento;

    //console.log(nuevoSalario);
    //console.log(aumento);
    return nuevoSalario;
}

const empresas = {};
for (persona of salarios) {
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

//console.log({empresas});

function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn("La empresa no existe.");
        return;
    } else if (!empresas[nombre][year]) {
        console.warn("La empresa no dió salarios ese año");
    } else {
        return Estadistica.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if(!empresas[nombre]){
        console.warn("La empresa no existe!");
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year)
        });
        //console.log({listaMedianaYears});

        let porcentajesCrecimiento = [];

        for(let i=1; i<listaMedianaYears.length; i++){
            const salarioActual = listaMedianaYears[i].salario;
            const salarioPasado = listaMedianaYears[i-1];
            const crecimiento = salarioActual-salarioPasado;
            const porcentajeCrecimiento = crecimiento/salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        const medianasPorcentajesCrecimiento = Estadistica.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length-1];
        const aumento = ultimaMediana * medianasPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        return nuevoSalario;
    }
}

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const mediana = Estadistica.calcularMediana(listaMedianas)

    return mediana;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = Estadistica.ordenarLista(listaMedianas)

    const cantidad = listaMedianas.length/10;

    const limite = listaMedianas.length-cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    const medianaTop10 = Estadistica.calcularMediana(top10);
    return medianaTop10;
}