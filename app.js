//CALCULADORA SIMPLE
/*
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
*/


//Primera pre entrega del proyacto final

const productos = [
    { nombre: "guitarra squier", precio: 30000 },
    { nombre: "guitarra epiphone", precio: 45000 },
    { nombre: "guitarra yamaha", precio: 50000},
    { nombre: "guitarra fender", precio: 60000},
    { nombre: "guitarra gibson", precio: 75000}
];

let carrito = []

let seleccion = prompt("Hola! Desea comprar algo?")

while(seleccion != "si" && seleccion != "no"){
    alert("porfavor diga si o no")
    seleccion = prompt("Hola! Desea comprar algo?")
}


if(seleccion == "si"){
    alert("a continuacion le mostramos nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio)
    alert(todosLosProductos.join(" - "))
} 
else if (seleccion == "no"){
    alert("si no queres comprar nada pa que entras")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito")
    let precio = 0

    if(producto == "guitarra squier" || producto == "guitarra epiphone" || producto == "guitarra yamaha" || 
    producto == "guitarra fender" || producto == "guitarra gibson"){
        switch(producto){
            case "guitarra squier":
                precio = 30000;
                break;
            case "guitarra epiphone":
                precio = 45000;
                break;
            case "guitarra yamaha":
                precio = 50000;
                break;
            case "guitarra fender":
                precio = 60000;
                break;
            case "guitarra gibson":
                precio = 75000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }
    else{
        alert("no hay para comprar eso, vayase")
    }

    seleccion = prompt("Quiere seguir comprando?")

    while(seleccion == "no"){
        alert("Gracias por su sompra, vuelva pronto!, mire la consola para ver el total a pagar.")
        carrito.forEach((carritoFinal) => {
            console.log(`produco: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por toda su compra es de: ${total}`)