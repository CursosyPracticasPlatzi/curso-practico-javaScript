function calcularMediana(lista) {
  const ordenado = lista.sort(function (a, b) {
    return a - b;
  });
  let mediana;
  let mitadLista = parseInt(ordenado.length / 2);

  function calcularPromedio(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  function esPar(ordenado) {
    if (ordenado % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (esPar(ordenado.length)) {
    const elemento1 = ordenado[mitadLista - 1];
    const elemento2 = ordenado[mitadLista];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = ordenado[mitadLista];
    return mediana;
  }
}
