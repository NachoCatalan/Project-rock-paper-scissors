/* Proyecto : piedra-papel-tijeras


Pseudocode

El jugador inicia el juego mediante el teclado
Elige una de las 3 posibles opciones (piedra-papel o tijera)
Se almacena la opcion en una variable
Laa maquina hace lo mismo de manera aleatoria
Se almacena el resultado de la maquina en una variable
Se genera la logica de que le gana a que cosa y frente a cual pierde
Se comparan ambas respuestas
Se determina cual de las dos opciones es la ganadora o si existe empate
Se almacena el resultado del ganador en una variable
Se muestra por pantalla el vencedor del encuentro 

*/


function obtenerEnteroRandom(){
    const num = Math.floor(Math.random() * 3) + 1;
    if(num == 1) return "piedra";
    if(num == 2) return "papel";
    if(num == 3) return "tijeras";
};

function jugarRonda(eleccionHumano, obtenerEnteroRandom){
    const eleccionComputador = obtenerEnteroRandom();
    if (eleccionHumano == "piedra" && eleccionComputador == "papel") {
        return "pierdes";
    } else if (eleccionHumano == "papel" && eleccionComputador == "tijeras") {
        return "pierdes";
    } else if (eleccionHumano == "tijeras" && eleccionComputador == "piedra") {
        return "pierdes";
    } else if (eleccionHumano == eleccionComputador){
        return "empate";
    } else {
        return "ganas";
    }
}
let puntosHumano = 0;
let puntosComputadora = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id.toLowerCase();
        const resultado = jugarRonda(playerSelection,obtenerEnteroRandom);
        const paraResultado = document.querySelector(".resultadoRonda");
        if (resultado == "ganas") puntosHumano++;
        if (resultado == "pierdes") puntosComputadora++;
        paraResultado.textContent = `Resultado ronda: ${resultado}`;
        paraResultado.previousSibling.textContent = `Humano: ${puntosHumano} || Computadora ${puntosComputadora}`;
        if (puntosHumano == 5 || puntosComputadora == 5) {
            if (puntosHumano == 5){
                alert('HAS GANADO EL JUEGO!')
            } else {
                alert('LA COMPUTADORA GANA!')
            }
            puntosHumano = 0;
            puntosComputadora = 0;
            paraResultado.textContent = "";
            paraResultado.previousSibling.textContent = ``;
        }
        
    });
});



