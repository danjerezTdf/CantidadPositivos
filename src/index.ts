/* Cantidad y Distribución de Positivos
• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total */

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
