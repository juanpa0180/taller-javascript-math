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

    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length-1];

    //console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber);
    console.log('La moda es: '+listaMaxNumber[0]);
    const moda = listaMaxNumber[0];
    return moda;

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

function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado,nuevoValor)
        {
            return valorAcumulado-nuevoValor;
        }
    const lista=listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function ordenarListaBidimensional(listaDesordenada,i){
    function ordenarListaSort(valorAcumulado,nuevoValor){
        return valorAcumulado[i]-nuevoValor[i];
    }

const lista=listaDesordenada.sort(ordenarListaSort);return lista;}