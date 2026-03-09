console.log("Hola Mundo!")
/*  Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios. */

function ejercicio_1() {
    let pal = ["programar ", "es "]
    pal.push("increíble")
    pal.push("borrar")
    let eliminada = pal.pop()
    alert(`El ${pal.join("")}.`)
    alert(`La palabra eliminada fue ${eliminada}`)
}
// Ejercicio 2:
function ejercicio_2() {
    let alumn = ["juan", "Maria", "Pedro"]
    alumn.unshift("Luis")
    let primerAlumn = alumn[0]
    alumn.shift("Luis")
    alert(`Entró ${primerAlumn} y la fila ahora es: ${alumn[0]}, ${alumn[1]}, ${alumn[2]}`)
}
//Ejercicio 3:
function ejercicio_3() {
    let datos = [3, "gatos", "negros", "duermen"]
    datos[0] = datos[0] + 2;
    alert(`${datos[0]} ${datos[1]} ${datos[2]} ${datos[3]} placidamente`)
}
//Ejercicio 4:
function ejercicio_4() {
    let matriz = [
        [10, 20],
        [30, 40]
    ]
    suma = matriz[0][0] + matriz[1][1];
    alert(`La suma de ${matriz[0][0]} mas ${matriz[1][1]} es igual que = ${suma}`)
}
//Ejercicio 5:
function ejercicio_5() {
    let datos = [1,
        [2, [3, 4]]
    ]
    datos[1][1][2] = datos.push = "5";
    alert(datos)
}
//Ejercicio 6:
function ejercicio_6() {
    let sujetos = ["El programador ", "La computadora "];
    let verbos = [["codifica ", "analiza "], ["falla ", "reinicia "]];
    frase = sujetos[0] + verbos[0][1]
    alert(frase)
}
//Ejercicio 7:
function ejercicio_7() {
    let inv = ["Error", "Laptop", " Mouse", " Teclado", "Virus"];
    inv.shift("Error");
    inv.pop("Virus");
    inv.push(" Monitor");
    alert(inv)
}
//Ejercicio 8:
function ejercicio_8() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1
    alert(tablero)
}
//Ejercicio 9:
function ejercicio_9() {
    let pacientes = ["Ana", " Betto"];
    pacientes.push(" Carlos")
    pacientes.push(" Diana")
    pacientes.shift()
    pacientes.unshift(" Sonia")
    alert(`Pacientes en espera: ${pacientes}. siguiente paciente: ${pacientes[0]}`)
}
//Ejercicio 10:
function ejercicio_10() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    alert(`En la canasta hay ${caja[1][0][1]} y ${caja[1][1][1]}`)
}