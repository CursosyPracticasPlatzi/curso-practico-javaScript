//Código del cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm.");*/

function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perímetro del cuadrado mide " + perimetroCuadrado + "cm.");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El área del cuadrado mide " + areaCuadrado + "cm^2.");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, "
+ ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide " + alturaTriangulo + "cm.");*/

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo mide " + perimetroTriangulo + "cm.");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El área del triángulo mide " + areaTriangulo + "cm^2.");
console.groupEnd();

//Código del Círculo
console.group("Círculos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo mide " + radioCirculo + "cm.");

//Diámetro
// function diametroCirculo(radio) {
//   return radio * 2;
// }
// console.log("El diamétro del círculo mide " + diametroCirculo + "cm.");

// PI
// const pi = Math.PI;
//  console.log("PI es " + PI);

// Circunferencia
// function perimetroCirculo(radio) {
//   const diametro = diametroCirculo(radio);
//   return diametro * PI;
// }

// Área
// function areaCirculo(radio) {
//   return radio * radio * PI;
// }
// console.log("El área del círculo mide " + areaCirculo + "cm^2.");
console.groupEnd();

//***********Aquí interactuamos con el HTML**************

//funciones del cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value); /*--función de cuadrado*/
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value); /*--función de cuadrado*/
  alert(area);
}

//funciones del triangulo**********
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//función del perímetro
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputTrianguloLado1");
  const lado1 = inputLado1.value;
  const valueLado1 = Number(lado1);

  const inputLado2 = document.getElementById("inputTrianguloLado2");
  const lado2 = inputLado2.value;
  const valueLado2 = Number(lado2);

  const inputBase = document.getElementById("inputTrianguloBase");
  const base = inputBase.value;
  const valueBase = Number(base);

  const perimetroTri = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetroTri);
}

//función del área
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTrianguloBase");
  const base = inputBase.value;
  const valueBase = Number(base);

  const inputAltura = document.getElementById("inputTrianguloAltura");
  const altura = inputAltura.value;
  const valueAltura = Number(altura);

  const areaTri = areaTriangulo(valueBase, valueAltura);
  alert(areaTri);
}

//funciones del círculo:
//diametro
function diametro(radio) {
  return radio * 2;
}

//PI
const pi = Math.PI;

function perimetroCirculo(radio) {
  const diametroVariable = diametro(radio);
  return diametroVariable * pi;
}

function areaCirculo(radio) {
  return radio * radio * pi;
}

function calcularPerimetroCirculo(radio) {
  const inputCirculo = document.getElementById("inputCirculo");
  const circulo = inputCirculo.value;
  const valueCirculo = Number(circulo);

  const perimetro = perimetroCirculo(valueCirculo);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputCirculo = document.getElementById("inputCirculo");
  const circulo = inputCirculo.value;
  const valueCirculo = Number(circulo);

  const area = areaCirculo(valueCirculo);
  alert(area);
}
