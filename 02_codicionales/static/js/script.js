function ejercicio_1() {
    let edad = prompt("Que edad tienes?")
    if (edad <= 17 ) {
        alert("eres menor de edad")
    } else if (edad > 120) {
        alert("No es posible tener esa edad")
    } else {
        alert("eres mayor de edad")
    }
}

function ejercicio_2() {
    let nombre = prompt("Ingresa tu nombre")
    let usuarios = []
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`)
    } else {
        alert("Error: El nombre no puede estar en blanco")
    }
};

function ejercicio_3() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto 
}