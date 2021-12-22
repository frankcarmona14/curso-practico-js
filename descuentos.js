const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

// CUPONES
const cupones = ["ZAPADICTOS025", "BERTH030", "BACKSERIES020"];

function buttonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice").value;
  const inputCoupon = document.getElementById("inputCoupon").value;

  let descuento;

  switch (inputCoupon) {
    case cupones[0]:
      descuento = 25;
      break;
    case cupones[1]:
      descuento = 30;
      break;
    case cupones[2]:
      descuento = 20;
      break;

    default:
      alert(`El cupon ${inputCoupon} no es valido`);
      descuento = 0;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = `El precio con descuento son ${precioConDescuento}€`;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
