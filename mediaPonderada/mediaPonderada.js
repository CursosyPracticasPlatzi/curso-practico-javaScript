//Promedio ponderado

//1- Crearemos un array de objetos con los datos de las notas y los créditos

const alumno = [
  {
    curso: "matematicas",
    nota: 15,
    credito: 50,
  },
  {
    curso: "lenguaje",
    nota: 18,
    credito: 25,
  },
  {
    curso: "ciencia",
    nota: 10,
    credito: 25,
  },
];

//Luego, ya teniendo la fórmula del promedio, realizamos las sumas y multiplicaciones paso por paso:
function calcularPromedioPond() {
  //multiplicacion de la nota con el crédito:

  const notaxCredito = alumno.map(function (objecto) {
    return objecto.nota * objecto.credito;
  });

  //Luego, sumamos los productos de lo anterior

  const sumaNotaxCredito = notaxCredito.reduce(function (
    valorAcumulado = 0,
    valorNuevo
  ) {
    return valorAcumulado + valorNuevo;
  });

  //Ahora, reunimos los créditos

  const creditos = alumno.map(function (objecto) {
    return objecto.credito;
  });

  //Luego, sumamos los crédtiso

  const sumCreditos = creditos.reduce(function (valorAcum = 0, valorNuevo) {
    return valorAcum + valorNuevo;
  });

  //Ahora, para terminar, se realiza la división del promedio ponderado

  const promedioPond = sumaNotaxCredito / sumCreditos;

  return promedioPond;
}
