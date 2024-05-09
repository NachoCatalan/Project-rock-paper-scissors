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

function getComputerChoice(){
    let computerChoice = getRandomInt();
    if (computerChoice == 1){
        return "piedra"
    } else if (computerChoice == 2) {
        return "papel"
    } else {
        return "tijeras"
    }
}
function getRandomInt(){
    return Math.floor(Math.random() * 3)
}

function getHumanChoice(){
    let humanChoice = prompt("¿Piedra, Papel o Tijeras? : ");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}
function playRound(humanChoice, computerChoice){
    if (humanChoice == "piedra" && computerChoice == "papel") {
        console.log(`${humanChoice} pierde contra ${computerChoice}, tú pierdes :( `);
        computerScore++;
    } else if (humanChoice == "piedra" && computerChoice == "tijeras") {
        console.log(`${humanChoice} gana contra ${computerChoice}, tú ganas =)`);
        humanScore++;
    } else if (humanChoice == "papel" && computerChoice == "piedra") {
        console.log(`${humanChoice} gana contra ${computerChoice}, tú ganas =)`);
        humanScore++;
    } else if (humanChoice == "papel" && computerChoice == "tijeras"){
        console.log(`${humanChoice} pierde contra ${computerChoice}, tú pierdes :( `);
        computerScore++;
    } else if (humanChoice == "tijeras" && computerChoice == "papel") {
        console.log(`${humanChoice} gana contra ${computerChoice}, tú ganas =)`);
        humanScore++;
    } else if (humanChoice == "tijeras" && computerChoice == "piedra"){
        console.log(`${humanChoice} pierde contra ${computerChoice}, tú pierdes :( `);
        computerScore++;
    } else {
        console.log(`${humanChoice} contra ${computerChoice}, es un empate`);
    }
}
function definirGanador(score1, score2){
    if (score1 > score2){
        console.log(`Humano: ${score1} > Computadora: ${score2}. El humano es el gananador. Felicidades!`);
    } else if (score1 < score2){
        console.log(`Humano: ${score1} < Computadora: ${score2}. La computadora es la gananadora. Weon malo!`);
    } else { 
        console.log(`Humano: ${score1} - Computadora: ${score2}. Es un empate!`)
    }
}
let humanScore = 0;
let computerScore = 0;

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    definirGanador(humanScore, computerScore);
}

playGame();
