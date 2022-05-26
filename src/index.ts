let numeroIngresado: number = Number(prompt(`ingrese valor`));
let positivos: number = 0;
let porcentajePos: number = 0;
let cantidadTotal: number = 0;

while (numeroIngresado !== 0) {
  if (numeroIngresado > 0) {
    positivos = positivos + 1;
  }
  numeroIngresado = Number(prompt(`Ingreser Siguente Valor:`));
  cantidadTotal = cantidadTotal + 1;
}
porcentajePos = (positivos / cantidadTotal) * 100;
console.log(
  `se ingresaron ${positivos} valores positivos, un ${porcentajePos}% del total`
);
