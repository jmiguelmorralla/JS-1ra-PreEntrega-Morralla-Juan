// Variables
const nombre = prompt("Ingrese su nombre.") .toUpperCase();
const apellido = prompt("Ingrese su apellido.");
const responsableInscripto = prompt("¿Es Responsable Inscripto en IVA?") .toLowerCase()
let credito = 20000;
const precioBalancin = 5000;
const precioArcoiris = 3000;
const precioCasita = 2500;
const alicuota = 0.21
let compras = 0

function totalComprado(creditoInicial, creditoFinal) {
    console.log(20000 - credito)
}

const iva = totalComprado => console.log(totalComprado * 0.21)



if (responsableInscripto == "si") {
    console.log(`Hola ${nombre}, emitiremos factura tipo A con IVA discriminado. Tu crédito actual es de $${credito}.`)
} else{
    console.log(`Hola ${nombre}, emitiremos factura tipo B. Tu crédito actual es de $${credito}.`)
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




alert(`Tu crédito es de $${credito}.  Gracias por tus compras.`)


totalComprado()
iva()
