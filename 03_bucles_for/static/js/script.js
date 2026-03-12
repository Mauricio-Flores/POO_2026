function ejercicio_1() {
    let numeros = [];
    const container = document.getElementById(`resultadoContainer`)
    const resultado = document.getElementById(`resultado1`)
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`
    container.classList.remove(`d-none`)
}
function ejercicio_2() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById(`resultadoContainer2`)
    const resultado = document.getElementById(`resultado2`)
    resultado.textContent = ""
    for (let i = 0; i < curso.length; i++) {
        resultado.textContent += `${curso[i]}, `
    }
    container.classList.remove(`d-none`)
}
function ejercicio_3() {
    let notas = [3.5, 6.2, 5.0, 2.8, 4.5, 7.0];
    let contadorAprobados = 0;
    let noAprobados = 0;
    const container = document.getElementById(`resultadoContainer3`)
    const resultado = document.getElementById(`resultado3`)
    resultado.textContent = "";
    for (i = 0; i < notas.length; i++) {
        if (notas[i] >= 4) {
            contadorAprobados++
        } else {
            noAprobados++
        }
    }
    resultado.textContent += `Alumnos aprobados: ${contadorAprobados}\n Alumnos reprobados: ${noAprobados}`

    container.classList.remove(`d-none`)
}
function ejercicio_4() {
    let productos = ["Teclado", "Mouse", "Agotado", "Monitor", "Agotado", "Audífonos"];
    const container = document.getElementById(`resultadoContainer4`)
    const resultado = document.getElementById(`resultado4`)
    resultado.textContent = "";
    for (i = 0; i < productos.length; i++) {
        if (productos[i] !== "Agotado") {
            resultado.textContent += `${productos[i]}, `
        }
    }
    container.classList.remove(`d-none`)
}
function ejercicio_5() {
    let aportes = [1500, 2000, 500, 3000, 1000];
    let totalRecaudado = 0;
    const container = document.getElementById(`resultadoContainer5`)
    const resultado = document.getElementById(`resultado5`)
    resultado.textContent = "";
    for (i = 0; i < aportes.length; i++) {
        totalRecaudado += aportes[i]
    }
    resultado.textContent += `El total recaudado es: ${totalRecaudado}`
    container.classList.remove(`d-none`)
}
function ejercicio_6() {
    let asistentes = ["carlos", "MARIA", "pedro", "LUCIA"];
    const container = document.getElementById(`resultadoContainer6`);
    const resultado = document.getElementById(`resultado6`);
    resultado.textContent = ""
    for (let i = 0; i < asistentes.length; i++) {
        if (asistentes[i].length % 2 === 0) {
            asistentes[i] += " vip";
        }
        resultado.textContent += `${asistentes[i]}, `;
    }
    container.classList.remove(`d-none`);
}
function ejercicio_7() {
    let bodega = ["Lápiz", "Cuaderno", "Goma", "Cuaderno", "Regla", "Cuaderno"];
    let articuloBuscado = "Cuaderno";
    let vecesEncontrado = 0;
    const container = document.getElementById(`resultadoContainer7`);
    const resultado = document.getElementById(`resultado7`);
    resultado.textContent = ""
    for (let i = 0; i < bodega.length; i++) {
        if (bodega[i] == articuloBuscado) {
            vecesEncontrado++
        }
    }
    resultado.textContent += `El articulo ${articuloBuscado} se encuentra ${vecesEncontrado} veces en bodega`
    container.classList.remove(`d-none`)
}
function ejercicio_8() {
    let temperaturas = [22, 24, 28, 35, 21, 38];
    const container = document.getElementById(`resultadoContainer8`);
    const resultado = document.getElementById(`resultado8`);
    resultado.innerHTML = "";
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            resultado.innerHTML += `¡ALERTA! Temperatura crítica de ${temperaturas[i]} grados.<br>`;
        }
    }
    container.classList.remove(`d-none`);
}