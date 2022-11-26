// Variables
const nombre = prompt("Ingrese su nombre.") .toUpperCase();
const apellido = prompt("Ingrese su apellido.");
const responsableInscripto = prompt("¿Es Responsable Inscripto en IVA?") .toLowerCase()
let credito = 20000;
const precioBalancin = 5000;
const precioArcoiris = 3000;
const precioCasita = 2500;
// let cantidadBalancin = 0;
// let cantidadArcoiris = 0;
// let cantidadCasita = 0;
let stockBalancin = 10

let compras = 0


const iva = x => total * 0.21
const neto = (suma, iva) => suma - iva 

if (responsableInscripto == "si") {
    console.log(`Hola ${nombre}, emitiremos factura tipo A con IVA discriminado. Tu crédito actual es de $${credito}.`)
} else{
    console.log(`Hola ${nombre}, emitiremos factura tipo B. Tu crédito actual es de $${credito}.`)
} 


// while (stockBalancin>=0) {
//     let compra = parseInt(prompt(`Indique cantidad Balancines que desea comprar. El stock actual es de ${stockBalancin}.`));
//     if (!stockBalancin) {break;}
//     stockBalancin -= compra
// }

// console.log(stockBalancin)

while (credito>=2500) {
    let producto = prompt(`¿Qué producto te gustaría comprar? Podés elegir: Balancin ($${precioBalancin}), Arcoiris ($${precioArcoiris}) o Casita ($${precioCasita}). Los precios incluyen IVA. Tu crédito actual es de $${credito}. Podés escribir ESC para terminar.`)
    
    switch (producto) {
        case "Balancin":
            credito -= precioBalancin 
            break;
        case "Arcoiris":
            credito -= precioArcoiris 
            break;
        case "Casita":
            credito -= precioCasita 
            break;

        default:
            console.log(`No elegiste ninguna opción.`)
            break;
    }
    
}

alert(`Tu crédito es de $${credito}, no te alcanza para ningún producto. Gracias por tus compras.`)

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


// function totalizar(producto1, producto2, producto3, producto4) {
//     let total = producto1 + producto2 + producto3 + producto4;
// }

// totalizar(50,20,30,10);

// console.log(totalizar)

// const total = 0 hacer función