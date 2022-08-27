//CALCULADORA SIMPLE

let operacion = prompt("Del 1-4 Seleccione la operacion a realizar... 1-Suma 2-Resta 3-Multiplicacion 4-Division");
let primerNumero = parseFloat(prompt("Introduce el primer numero"));
let segundoNumero = parseFloat(prompt("Introduce el sugundo numero"));
let resultado;

function suma(numero1, numero2){
    return numero1 + numero2
}

function resta(numero1, numero2){
    return numero1 - numero2
}

function multiplicacion(numero1, numero2){
    return numero1 * numero2
}

function division(numero1, numero2){
    return numero1 / numero2
}

switch (operacion) {
    case "1":
        resultado = suma(primerNumero, segundoNumero)
        alert("El valor de la operacion es " + resultado)
        break;
    case "2":
        resultado = resta(primerNumero,segundoNumero)
        alert("El valor de la operacion es " + resultado)
        break;
    case "3":
        resultado = multiplicacion(primerNumero,segundoNumero)
        alert("El valor de la operacion es " + resultado)
        break;
    case "4":
        resultado = division(primerNumero, segundoNumero)
        alert("El valor de la operacion es " + resultado)
        break;
    default:
        alert("La operacion no es valida")
        break;
}