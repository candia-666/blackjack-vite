import {crearDeck, smallHtmlTotal, divCartas, buttonCarta, buttonNuevoJuego, buttonTerminarJugada, turnoCPU, turnoJugador} from './usecases';

(() => { 'use strict'
let deck = [], puntosJugadores = [];
buttonCarta.disabled = true; 
buttonTerminarJugada.disabled = true;

/**
 * Funcion para inciar el juego, por defecto son 2 jugadores.
 * @param {Number} numJugadores cantidad de jugadores.
 */
const InicializarJuego = (numJugadores=2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i<numJugadores; i++){
        puntosJugadores.push(0);
        smallHtmlTotal[i].innerText = 0;
        divCartas[i].innerHTML = '';
    };

    buttonCarta.disabled = false; 
    buttonTerminarJugada.disabled = false;
    buttonNuevoJuego.disabled = true;
};

buttonNuevoJuego.addEventListener('click', () => {
    InicializarJuego();
});

buttonTerminarJugada.addEventListener('click', () => {
    turnoCPU(deck, puntosJugadores);
});

buttonCarta.addEventListener('click', () =>{
    turnoJugador(deck, puntosJugadores);
});

})();

