//***Luego, hacemos la función que realizará la operación
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;

  return precioConDescuento;
}

const coupons = [
  { name: "cupon1", descuento: 15 },
  { name: "cupon2", descuento: 25 },
  { name: "cupon3", descuento: 35 },
];

const isCopunValueValid = function (coupon) {
  return coupon.name === counponValue;
};

//*** Luego realizamos la función que unirá los valores de HTML con JS.
//Hasta ahora se hace con dos funciones, una que hace la operacion
//y otra la une con HTML
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;
  const userCoupon = coupons.find(isCouponValueValid);
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + " no es válido");
  } else {
    descuento = userCoupon.descuento;
    resultado = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultP");

    resultP.innerText = "El precio con descuento son: $" + priceDiscount;
  }
}
