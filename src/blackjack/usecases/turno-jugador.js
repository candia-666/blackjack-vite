import {pedirUnaCarta, turnoCPU, acumularPuntos, mostrarCarta, disabledButtonTurnoJugador} from './index';

/**
 * Funcion para ejecutar el turno del jugador.
 * @param {Array <String>} deck Ejemplo: ['AS', 'JS']
 * @param {Array <Number>} puntosJugadores Ejemplo: [1,2] 
 */

export const turnoJugador = (deck, puntosJugadores) => {    
    const carta = pedirUnaCarta(deck);
    mostrarCarta(0, carta);
    const puntosJugador = acumularPuntos(0, carta, puntosJugadores)
    if (( puntosJugador === 21) || (puntosJugador > 21)) {
        disabledButtonTurnoJugador();
        turnoCPU(deck, puntosJugadores);
    };
};