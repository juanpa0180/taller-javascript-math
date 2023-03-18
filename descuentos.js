const inputPrice = document.querySelector('#precio');
const inputDiscount = document.querySelector('#descuento');
const resultado = document.querySelector('#resultado');
const boton = document.querySelector('#calcular');

boton.addEventListener('click', descuentoAplicado);

function descuentoAplicado(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        resultado.innerText ="Por favor llena el formulario";
    } else if(price > 0 && discount < 100 && discount > 0){
        let descontado = (price * (100 - discount)) / 100; 

        resultado.innerText ="Su nuevo precio con el descuento es " + descontado;
    } else{
        resultado.innerText ="Resultado inválido, intenelo de nuevo.";
    }
}
