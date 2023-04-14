function calcularPromedio(lista){
    const cantidad = lista.length;
    const suma = lista.reduce((a,e) => a+e, 0)
    console.log(suma/cantidad);
    return suma/cantidad;
};

//const esPar = (lista) => lista.length%2===0?false:true;

function calcularMediana(lista){
    const nuevaLista  = lista.sort((a, b) => a - b);

    if(nuevaLista.length%2===0){
        return (nuevaLista[nuevaLista.length/2]+nuevaLista[nuevaLista.length/2-1])/2;
    } else {
        return nuevaLista[Math.floor(nuevaLista.length/2)];
    }
}

function calcularModa(lista){
    let listaCount = {};

    for (let i=0; i<lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento]+=1;
        } else {
            listaCount[elemento]=1
        }
    }

    console.log(listaCount)

    /*MI CÓDIGO
    const nuevaLista = lista.sort((a,b) => a-b);

    let repetido = {
        numero:0,
        veces:0
    }

    let iteraciones = 0;

    for (let i=0; i<nuevaLista.length; i++){
        for (let j=i; j<nuevaLista.length; j++){
            if(nuevaLista[i]===nuevaLista[j]){
                iteraciones++;
            }
        }
        if(iteraciones>repetido.veces){
            repetido.numero = nuevaLista[i];
            repetido.veces = iteraciones;
        }
        iteraciones=0;
    }

    console.log(repetido);
    return repetido;*/
}