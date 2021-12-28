function calcularAhorro() {
  const ingresos = parseInt(document.getElementById("ingresos").value);
  const gastosFijos = parseInt(document.getElementById("gastos-fijos").value);
  const gastosVarios = parseInt(document.getElementById("gastos-varios").value);
  const parrafoResultado = document.getElementById("resultado");

  const totalGastos = gastosFijos + gastosVarios;
  const restante = ingresos - totalGastos;
  const sueldoRestante = (restante / ingresos) * 100;

  let porcentajeAhorro;
  let ahorro;
  if (sueldoRestante < 25) {
    porcentajeAhorro = 20;
    ahorro = (ingresos * porcentajeAhorro) / 100;

    parrafoResultado.innerText = `Deberías de estar ahorrando: ${ahorro} € al mes, siendo esto el ${porcentajeAhorro} de tu sueldo`;
  } else {
    porcentajeAhorro = 25;
    ahorro = (ingresos * porcentajeAhorro) / 100;
    parrafoResultado.innerText = `Deberías de estar ahorrando: ${ahorro} € al mes, siendo esto el ${porcentajeAhorro}% de tu sueldo.`;
  }
}
