// Variables
const nombre = prompt("Ingrese su nombre.") .toUpperCase();
const apellido = prompt("Ingrese su apellido.");
const responsableInscripto = prompt("¿Es Responsable Inscripto en IVA?") .toLowerCase()
const precioBalancin = 5000;
const precioArcoiris = 3000;
const precioRompecabezas = 2000;
const precioCasita = 2500;
let cantidadBalancin = 0;
let cantidadArcoiris = 0;
let cantidadRompecabezas = 0;
let cantidadCasita = 0;

// const total = 0 hacer función

const iva = x => total * 0.21
const neto = (suma, iva) =>suma - iva 


console.log(suma(precioArcoiris,precioBalancin,10,20))




if (responsableInscripto == "si") {
    console.log(`Hola ${nombre}, emitiremos factura tipo A con IVA discriminado.`)
} else{
    console.log(`Hola ${nombre}, emitiremos factura tipo B.`)
} 



// let seleccionProductos = prompt("Ingrese el nombre del producto que desea comprar de la siguiente lista: Balancin, Arcoiris, Rompecabezas, Casita");

// for (seleccionProductos != "ESC" || seleccionProductos != "esc" || seleccionProductos != ""; seleccionProductos == ("esc"||"ESC" || "");) {
//     switch (seleccionProductos) {
//         case "Balancin":
//             total = precioBalancin;
//             break;
//         case "Arcoiris":
//             total = precioArcoiris;
//             break;
//         case "Rompecabezas":
//             total = precioRompecabezas;
//             break;
//         case "Casita":
//             total = precioCasita;
//             break;
//         default:
//             alert("Ingrese un producto válido o ESC para terminar");
//             break;
//     }
//     console.log(total)
// }

// console.log(total)

// if (responsableInscripto === "SI" || responsableIncripto === "si" || responsableIncripto === "Si") {
//     let precioNeto = precio/1.21;
// }