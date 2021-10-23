//***Luego, hacemos la función que realizará la operación
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;

  return precioConDescuento;
}

const coupons = ["cupon1", "cupon2", "cupon3"];

//*** Luego realizamos la función que unirá los valores de HTML con JS.
//Hasta ahora se hace con dos funciones, una que hace la operacion
//y otra la une con HTML
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;
  switch (couponValue) {
    case coupons[0]:
      descuento = 15;
      break;
    case coupons[1]:
      descuento = 25;
      break;
    case coupons[2]:
      descuento = 35;
      break;
    default:
      break;
  }

  const priceDiscount = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("resultP");

  resultP.innerText = "El precio con descuento son: $" + priceDiscount;
}
