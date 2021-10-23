const lista = [];
const cantidad = prompt("Cuantos números vas usar?");
for (let i = 0; i < cantidad; i++) {
  lista.push(prompt("Escribe el número " + (i + 1)));
}
function calcularModa(lista) {
  let listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] = listaCount[elemento] + 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArrayOrdenado = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = listaArrayOrdenado[listaArrayOrdenado.length - 1];

  return moda;
}
let modas = calcularModa(lista);
alert(`La moda es el número ${modas[0]} y se repite ${modas[1]} veces`);
