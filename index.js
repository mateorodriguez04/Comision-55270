//Hombres: [66 + (13,7 × peso en kg)] + [(5 × altura en cm) - (6,8 × edad)] × Factor actividad.
// Mujeres: [65 + (9,6 × peso en kg)] + [(1,8 × altura en cm) - (4,7 × edad)] × Factor actividad.
alert("Calculadora de calorias");
let opcion = parseInt(prompt("Selecciona un genero:\n 1. Hombre\n 2. Mujer"));
switch (opcion) {
  case 1:
    let num;
    let actv = parseInt(
      prompt(
        "Indique su nivel de actividad fisica:\n 1. Persona sedentaria\n 2. Poca actividad física (ejercicio de 1 a 3 veces por semana)\n 3. Actividad moderada (ejercicio de 3 a 5 veces por semana)\n 4. Actividad intensa (ejercicio de 6 a 7 veces por semana)\n 5. Atleta profesional (entrenamientos de más de 4 horas diarias) "
      )
    );
    switch (actv) {
      case 1:
        num = 1.2;
        break;
      case 2:
        num = 1.375;
        break;
      case 3:
        num = 1.55;
        break;
      case 4:
        num = 1.725;
        break;
      case 5:
        num = 1.9;
        break;
      default:
        alert("Opción inválida por favor ingrese una opción correcta");
        break;
    }
    function sumarH(primerNumero, segundoNumero, tercerNumero) {
      resultadoH =
        (66 + (13.7 * primerNumero)) + (5 * segundoNumero) - (6.8 * tercerNumero);
    }

    let num1 = parseInt(prompt("Ingrese su peso"));
    let num2 = parseInt(prompt("Ingrese un altura en cm"));
    let num3 = parseInt(prompt("Ingrese su edad"));
    sumarH(num1, num2, num3);

    let resultadoFinal = parseInt(
      prompt(
        "Indique si quiere ganar peso o perder peso:\n 1. Ganar Peso\n 2. Perder peso"
      )
    );
    let valorFinalHSuma = (resultadoH * num) + 300;
    let valorFinalHResta = (resultadoH * num) - 300;
    switch (resultadoFinal) {
      case 1:
        alert("Las calorias que deberia consumir son " + valorFinalHSuma.toFixed());
        break;
      case 2:
        alert("Las calorias que deberia consumir son " + valorFinalHResta.toFixed());
        break;
      default:
        alert("Opción inválida por favor ingrese una opción correcta");
        break;
    }
    break;
  case 2:
    let numM;
    let actv1 = parseInt(
      prompt(
        "Indique su nivel de actividad fisica:\n 1. Persona sedentaria\n 2. Poca actividad física (ejercicio de 1 a 3 veces por semana)\n 3. Actividad moderada (ejercicio de 3 a 5 veces por semana)\n 4. Actividad intensa (ejercicio de 6 a 7 veces por semana)\n 5. Atleta profesional (entrenamientos de más de 4 horas diarias). "
      )
    );
    switch (actv1) {
      case 1:
        numM = 1.2;
        break;
      case 2:
        numM = 1.375;
        break;
      case 3:
        numM = 1.55;
        break;
      case 4:
        numM = 1.725;
        break;
      case 5:
        numM = 1.9;
        break;
      default:
        alert("Opción inválida por favor ingrese una opción correcta");
        break;
    }
    function sumarM(primerNumero, segundoNumero, tercerNumero) {
      resultado =
        (65 + (9.6 * primerNumero)) + (1.8 * segundoNumero) - (4.7 * tercerNumero);
    }

    let num1M = parseInt(prompt("Ingrese su peso"));
    let num2M = parseInt(prompt("Ingrese un altura en cm"));
    let num3M = parseInt(prompt("Ingrese su edad"));
    sumarM(num1M, num2M, num3M);

    resultadoFinalM = parseInt(
      prompt(
        "Indique si quiere ganar peso o perder peso:\n 1. Ganar Peso\n 2. Perder peso"
      )
    );
    let valorFinalMSuma = (resultado * numM) + 300;
    let valorFinalMResta = (resultado * numM) - 300;
    switch (resultadoFinalM) {
      case 1:
        alert("Las calorias que deberia consumir son " + valorFinalMSuma.toFixed());
        break;
      case 2:
        alert("Las calorias que deberia consumir son " + valorFinalMResta.toFixed());
        break;
      default:
        alert("Opción inválida por favor ingrese una opción correcta");
        break;
    }
    break;
  default:
    alert("Opción inválida por favor ingrese una opción correcta");
    break;
}
