//*** Primero reconocemos los valores***
// const precio = 100;
// const descuento = 15;
// const porcentajeConDescuento = 100 - descuento;
// const precioConDescuento = (precio * porcentajeConDescuento) / 100;

// console.log({
//   precio,
//   descuento,
//   porcentajeConDescuento,
//   precioConDescuento,
// });

//***Luego, hacemos la función que realizará la operación
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;

  return precioConDescuento;
}

//*** Luego realizamos la función que unirá los valores de HTML con JS.
//Hasta ahora se hace con dos funciones, una que hace la operacion
//y otra la une con HTML
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const priceDiscount = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("resultP");

  resultP.innerText = "El precio con descuento son: $" + priceDiscount;
}
