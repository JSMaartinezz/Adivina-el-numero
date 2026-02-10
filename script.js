// Recogemos en variables todas las clases necesarias

let numeroAdivinar = document.querySelector(".numeroAdivinar");
let input = document.querySelector(".insertarNumero");
let botonEnviar = document.querySelector(".enviar");
let botonReinicio = document.querySelector(".reinicio");
let mensajes = document.getElementById("mensajes");
let numeroIntentos = document.querySelector(".numeroIntentos");
let botonEmpezar = document.querySelector(".Empezar");

// Logica del juego:
// 1.Botón para empezar el juego
let juegoEmpezado = false;
numeroSecreto = true;
botonEmpezar.addEventListener("click", function() {
    if (juegoEmpezado === false) {
        // 2.Generar el número secreto
        let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        console.log(numeroSecreto);
    } else {
        juegoEmpezado === false;
        numeroSecreto === false;
    }
})


