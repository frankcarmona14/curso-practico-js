// const lista1 = [45, 12, 25, 188, 350, 280, 160, 78];

function calcularRangoMedio(lista) {
  // ordenar lista
  lista.sort(function (a, b) {
    return a - b;
  });

  // encontrar los elementos menor y mayor
  const elementoMenor = lista[0];
  const elementoMayor = lista[lista.length - 1];

  //calcular elementos
  const listaRangoMedio = (elementoMenor + elementoMayor) / 2;
  return listaRangoMedio;
}
