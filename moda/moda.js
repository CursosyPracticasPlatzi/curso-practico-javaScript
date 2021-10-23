const lista = [1, 2, 3, 1, 2, 3, 5, 1, 4, 6, 8, 6, 8, 7, 41, 5, 1, 2, 3, 2];

const listaCount = {};

lista.map(function (elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});
const listaArray = Object.entries(listaCount).sort(function (
  valorAcumulado,
  nuevoValor
) {
  return valorAcumulado[1] - nuevoValor[1];
});

const moda = listaArray[listaArray.length - 1];
