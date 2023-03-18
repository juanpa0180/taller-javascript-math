console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

console.group('Circulo')

function calcularCirculo(radio){
  return {
    diametro: radio*2,
    perimetro: Math.round((radio*2)*Math.PI),
    area: Math.round((radio**2)*Math.PI)
  }
}

console.groupEnd('Circulo')

console.group('Altura triangulo')

  function alturaTriIsosceles(lados, base){
    if(lados!==base)
    {
      return {
      altura: Math.sqrt((lados**2)-((base**2)/4)).toFixed(2)
      }
    } else
    {
      console.warn('Este no es u triángulo isosceles.')
    }
  }

  function alturaTriEscaleno(a, b, c) {
    
    const x = (c**2 - a**2 + b**2) / (2 * b);
    const h = Math.sqrt(c**2 - x**2);
  
    return h;
  }

console.groupEnd('Altura triangulo')