// Variables
const nombre = prompt("Ingrese su nombre.") .toUpperCase();
const apellido = prompt("Ingrese su apellido.");
const condicionIva = prompt("¿Es Responsable Inscripto en IVA?") .toLowerCase();
const responsableInscripto = condicionIva == "si";
let credito = 20000;

const alicuota = 0.21;
let totalComprado; 
let neto;
let iva;

// Funciones
function calcularTotalComprado(creditoInicial, creditoFinal) {
    return creditoInicial - creditoFinal
}

function calcularNeto(baseImponible) {
    return baseImponible / (1 + alicuota)
}


function crearProducto(nombre, marca, origen, material, precio, disponibilidad) {
    this.nombre = nombre;
    this.marca = marca;
    this.origen = origen;
    this.material = material;
    this.precio = precio;
    this.disponibilidad = disponibilidad;

    this.caption = function() {
        console.log(`${this.nombre} es un producto de primera calidad. La marca ${this.marca} presta mucha atención a las teminaciones, especialmente cuando el producto es de ${material}.`)
    }
}

const balancin = new crearProducto ("Balancin", "Juguetes Olsen", "Argentina", "Madera", 12000, true);
const arcoiris = new crearProducto ("Arcoiris", "Juguetes Olsen", "Argentina", "Madera", 7000, true);
const casita = new crearProducto ("Casita", "Confiture", "Argentina", "Madera", 4500, true);
const rompecabezas = new crearProducto ("Rompecabezas", "Tak Tak", "Madera", 3000, false);
const torre = new crearProducto ("Torre de Encastre", "Juguetes Olsen", "Argentina", "Madera", 2900, true);
const luna = new crearProducto ("Luna Equilibrista", "Confiture", "Argentina", "Madera", 5900, true);

// Array

const productos = [balancin, arcoiris, casita, rompecabezas, torre, luna]
console.log(productos)

// Condicionales
if (responsableInscripto) {
    alert(`Hola ${nombre}, emitiremos factura tipo A con IVA discriminado. Tu crédito actual es de $${credito}.`)
} else{
    alert(`Hola ${nombre}, emitiremos factura tipo B. Tu crédito actual es de $${credito}.`)
} 

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
            break;
    }
    
    if (producto == "" || producto == "ESC" || producto == "esc") {
        break;
    }
}

alert(`Tu crédito es de $${credito}. Gracias por tu compra.`)


totalComprado = calcularTotalComprado (20000, credito);
neto = calcularNeto (totalComprado);
iva = totalComprado - neto;

let totalCompradoRedondeado = Math.round(totalComprado);
let netoRedondeado = Math.round(neto);
let ivaRedondeado = Math.round(iva);

if (responsableInscripto) {
    alert(`El importe total de tu compra es de $${totalCompradoRedondeado}. El neto gravado es $${netoRedondeado}. El IVA es $${ivaRedondeado}.`)
}
else {
    alert(`El importe total de tu compra es $${totalCompradoRedondeado}.`)
}


