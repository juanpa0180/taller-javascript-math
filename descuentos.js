const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//const arrayUObjecto = undefined;

/*const couponsObj = {
  'JuanDC_es_Batman' : 30,
  '123' : 25,
  'no_le_digas_a_nadie' : 15
}*/

const couponsList = [];
couponsList.push({
  name: 'JuanDC_es_Batman',
  discount: 30,
})
couponsList.push({
  name: 'Pero_es_un_secreto',
  discount: 25,
})
couponsList.push({
  name: 'no_le_digas_a_nadie',
  discount: 20,
})

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount;

  function isCouponInArray(couponElement){
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray);
  //const couponInArray = couponsList.filter(isCouponInArray);

  if(couponInArray){
  //if(couponInArray.length>0){
    discount = couponInArray.discount;
  //  discount = couponInArray[0].discount;
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }

  /*if(couponsObj[coupon]){
    discount = couponsObj[coupon]
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }*/

  /*switch (coupon) {
    case 'JuanDC_es_Batman':
      discount = 30;
      break;
    case 'no_le_digas_a_nadie':
      discount = 25;
      break;
    default:
      pResult.innerText = 'El cupón no es válido';
      return;
  }*/
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}