//Funciones helpers
//primero, veremos si es par o impar
function esPar(lista) {
  if (lista % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Si en el caso fuera par, se hace un promedio de los dos numeros centrales
function calcularPromedio(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//MEDIANA GENERAL
//Calculadora de mediana
function medianaSalarios(lista) {
  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitadLista - 1];
    const personitaMitad2 = lista[mitadLista];
    const mediana = calcularPromedio([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitadLista];
    return personitaMitad;
  }
}

//Vamos a juntar los salarios de las personas en un solo array
const salariosPer = peru.map(function (objeto) {
  return objeto.salary;
});

//Ahora vamos a ordenar el array de los salarios
const salariosPerSorted = salariosPer.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralPer = medianaSalarios(salariosPerSorted);

//Mediana del Top 10%

const sliceStart = (salariosPerSorted.length * 90) / 100;

const sliceCount = salariosPerSorted.length;

const salariosPerTop10 = salariosPerSorted.slice(sliceStart, sliceCount);

const medianaTop10Per = medianaSalarios(salariosPerTop10);

console.log({ medianaGeneralPer, medianaTop10Per });

const hola = document.getElementById("resultado");
hola.innerText = "Hola";
