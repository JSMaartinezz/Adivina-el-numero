// Recogemos en variables todas las clases necesarias

let numeroAdivinar = document.querySelector(".numeroAdivinar");
let input = document.querySelector(".insertarNumero");
let botonEnviar = document.querySelector(".enviar");
let botonReinicio = document.querySelector(".reinicio");
let mensajes = document.getElementById("mensajes");

let botonEmpezar = document.querySelector(".Empezar");

// Logica del juego:
// 1.Botón para empezar el juego
let juegoEmpezado = false;
let numeroSecreto;
let numeroIntentos = document.querySelector(".numeroIntentos");
botonEmpezar.addEventListener("click", function() {
    if (juegoEmpezado === false) {
        // 2.Generar el número secreto
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        console.log(numeroSecreto);
        juegoEmpezado = true;
        numeroIntentos = 0;
        numeroAdivinar.textContent = ("Número generado, escribe un numero debajo y pulsa enviar para intentar adivinarlo.");
    };
});

botonEnviar.addEventListener("click", function() {
    let inputNumero = Number(input.value);
    if (juegoEmpezado === false) {
        mensajes.textContent = ("Pulsa: EMPEZAR")
    } else {
        numeroIntentos ++;
        console.log(numeroIntentos);
    if (inputNumero < numeroSecreto) {
        mensajes.textContent = ("MAS ALTO");
    } else if (inputNumero > numeroSecreto) {
        mensajes.textContent = ("MAS BAJO");
    } else {mensajes.textContent = ("¡HAS ACERTADO!") 
    }};
});

