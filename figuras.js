// Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado();

// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   `Los lados del cuadrado miden: ${ladoTriangulo1}cm , ${ladoTriangulo2}cm, ${baseTriangulo}cm `
// );
// const alturaTriangulo = 5.5;
// console.log(`la altura del triangulo es de: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(`El area del triangulo es: ${areaTriangulo}cm^2`);
console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo}cm`);

function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

const PI = Math.PI;
// console.log(`PI es: ${PI}`);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return diametro * PI;
}
// console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);

function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log(`El area del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

// Aqui interactaumos con HTML
function calcularPerimetroCuadrado(){
    const inputCuadrado = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(inputCuadrado);

    alert(perimetro);

}

function calcularAreaCuadrado(){
    const inputCuadrado = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(inputCuadrado);

    alert(area);

}