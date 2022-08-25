/*
let option = prompt (`elija una opcion
    1:Hamburguesa
    2:Pizza
    3:Asado 
    4:Pastas
    
    `)


switch (option){
    case "1":
        console.log("¡Elegiste Hamburguesa!")
        break;
    case "2":
        console.log("¡Elegiste Pizza!")
        break;
    case "3":
        console.log("¡Elegiste Asado!")
        break;
    case "4":
        console.log("¡Elegiste Pastas!")
        break;

}

for (let i = 1; i <= 7; i++) {
    alert(`EL valor de I es ${i}`);
    
}
*/

//ACTIVIDAD N°1 DE LOS BOOKLETS

let nombre = "Homero";
let apellido = "Simpson";
let edad = 35;

console.log(nombre)
console.log(apellido)
console.log(edad)

//ACTIVIDAD N°2 DE LOS BOOKLETS

const ciudadPrincipal = "Springfield"
const ciudadSecundaria1 = "Shelbyville"
const ciudadSecundaria2 = "Capital City"
const ciudadSecundaria3 = "Cypress Creek"
const ciudadSecundaria4 = "Bronston, Missuri"

console.log(ciudadPrincipal);
console.log(ciudadSecundaria1);
console.log(ciudadSecundaria2);
console.log(ciudadSecundaria3);
console.log(ciudadSecundaria4);

//ACTIVIDAD N°3 DE LOS BOOKLETS

let nombre1 = "Bart"
let direccion = "742 Evergreen Terr."
let ciudadPais = "Springfield, USA"
let birthday = "11/02/70"
let numeroCarnet = "B47UB9RE243"

let carnet =    "Codigo: "+numeroCarnet+" "+
                "Nombre: "+nombre1+" "+
                "Apellido: "+apellido+" "+
                "Direccion: "+direccion+" "+
                "Ciudad / Pais: "+ciudadPais+" "+
                "Fecha de Nacimiento: "+birthday+" ";

console.log(carnet);
document.write(carnet);

//ACTIVIDAD N°4 DE LOS BOOKLETS

let primerIntegrante = prompt("Ingrese el primer nombre");
let segundoIntegrante = prompt("Ingrese el segundo nombre");
let tercerIntegrante = prompt("Ingrese el tercer nombre");
let cuartoIntegrante = prompt("Ingrese el cuarto integrante");
let quintoIntegrante = prompt ("Ingrese el quinto integrante");

let familia =   "1) "+primerIntegrante+" "+
                "2) "+segundoIntegrante+" "+
                "3) "+tercerIntegrante+" "+
                "4) "+cuartoIntegrante+" "+
                "5) "+quintoIntegrante+" ";

        console.log(familia);

//ACTIVIDAD N°5 DE LOS BOOKLETS

let precio = parseFloat(prompt("Ingresar precio"));
let desc20 = precio - (precio * 0.2);
let desc30 = precio - (precio * 0.3);
let desc40 = precio - (precio * 0.4);
let desc50 = precio - (precio * 0.5);
console.log(desc20);
console.log(desc30);
console.log(desc40);
console.log(desc50);

//ACTIVIDAD N°6 DE LOS BOOKLETS

let yoNoFui = prompt("ingrese su nombre")
let quienEs = "Bart"
if (yoNoFui == quienEs) {
    alert("Yo si fui")
} else {
    alert("Yo no fui")
}

//ACTIVIDAD N°7 DE LOS BOOKLETS

let entrada = prompt("ingresa una tecla")
if ((entrada == "y") || (entrada == "Y")) {
    alert("Correcto")
} else {
    alert("incorrecto")
}
