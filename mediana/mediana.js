const lista = [100, 200, 300, 400000000000];

const mitadLista = parseInt(lista.length / 2);
/*Hasta aquí estaría bien si la cantidad de números es 
impar; pero qué pasa si la cantidad de números es par, 
primero tenemos que descartar si la cantidad es par o impar 

if (lista es par?) {
  necesitamos dos elementos
  -> el promedio
  -> la mediana
} else {
  mediana = lista[mitadLista]
  posicion mitadLista dentro de lista
  -> mediana
} */

function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista.length)) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];
  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElemento1y2;
} else {
  mediana = lista[mitadLista];
}
