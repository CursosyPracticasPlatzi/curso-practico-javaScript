//Media geométrica

//Veremos como tener un código para sacar la media geometrica de cualquier numero.
//Primero veremos la fórmula de la media:

//Luego operamos:

// const array = [2, 2, 2];

//Luego, multiplicacmos sus valores:

// const multiArray = array.reduce(function (valorAcum = 1, nuevoValor) {
//   return valorAcum * nuevoValor;
// });

//Luego sacamos la raiz por le número de valores que se multiplicaron

//const raizDe = Math.pow(multiArray, 1 / array.length);

const cantidad = prompt("Cuántos números vas a pedir la media geométrica");

const lista = [];

for (let i = 0; i < cantidad; i++) {
  lista.push(prompt(`Escribe el ${i + 1}° número`));
}

function calcularMediaGeometrica(lista) {
  const multiArray = lista.reduce(function (valorAcum = 1, nuevoValor) {
    return valorAcum * nuevoValor;
  });
  const raizDe = Math.pow(multiArray, 1 / lista.length);
  return raizDe;
}

const mediaGeometrica = calcularMediaGeometrica(lista);
alert(`La media geométrica de la lista es ${mediaGeometrica}.`);
