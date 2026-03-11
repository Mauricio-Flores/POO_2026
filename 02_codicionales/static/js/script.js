function ejercicio_1() {
    let edad = prompt("Que edad tienes?")
    if (edad <= 17) {
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
    let nuevoProducto = "celular";
    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario")
    }
};


let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function ejercicio_4() {
    if (bodega.length <= 5) {
        alert("Espacio disponible")
    } else {
        alert("Bodega llena, eliminando el último ingreso")
        bodega.pop();
    }
}

function ejercicio_5() {
    let colaEspera = ["error_404", "juan", "sofia"];
    if (colaEspera[0] == "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera}`)
}

function ejercicio_6() {
    let foro = [" User1", " User2"];
    let rol = prompt("Ingresar rol: ")
    if (rol.toLowerCase() === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }
}

function ejercicio_7() {
    let nota = prompt("Ingresa tu nota");
    if (nota < 4) {
        alert("Reprobado")
    } else if (nota >= 6 && nota <= 7) {
        alert("Exelente, eximido")
    } else if (nota >= 4 && nota < 6) {
        alert("Aprobado, vas a examen")
    } else {
        alert("La nota maxima es 7")
    }
}

function ejercicio_8() {
    let invitados = ["ana", "luis", "camila", "diego"];
    let personas = prompt("Ingrese su nombre: ");
    personas = personas.toLowerCase()
    if (invitados.includes(personas)) {
        alert(`¡Bienvenido ${personas}! Pasa a la fiesta`)
    } else {
        alert("Lo siento, no estás en la lista de invitados")
    }
}

function ejercicio_9() {
    let estanteria = [["manzanas", "peras"], ["leche", "yogur"]];
    let seccion = prompt("ingresa unas eccion(0-1)");
    let producto = prompt("ingresar producto solicitado");
    producto = producto.toLowerCase()
    if (estanteria[seccion].includes(producto)) {
        alert("Producto encontrado en el estante")
    } else {
        alert("No tenemos ese producto en esa seccion")
    }

}

let bitacora = [];
function ejercicio_10() {
    let nombreVisita = prompt("Ingresa tu nombre: ");
    let esVip = prompt("¿eres vip?\n0 = no \n1 = si")
    nombreVisita.trim();

    if (nombreVisita == "") {
        alert("Error: el nombre no puede estar vacío")
    } else if (bitacora.includes(nombreVisita)) {
        alert("Esa persona ya esta en la lista")
    } else if (esVip == 1) {
        bitacora.unshift(nombreVisita);
        alert(`Agregando correctamente a la lista:\n ${bitacora.join(", ")}\nPersonas en total: ${bitacora.length}`);
    } else if (esVip == 0) {
        bitacora.push(nombreVisita);
        alert(`Agregando correctamente a la lista: \n ${bitacora.join(", ")}\nPersonas en total: ${bitacora.length}`);
    } else {
        alert("Ingrese valores válidos.")
    }
}