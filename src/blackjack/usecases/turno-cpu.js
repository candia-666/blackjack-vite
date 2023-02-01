import { pedirUnaCarta, mostrarCarta, acumularPuntos, disabledButtonTurnoCpu, terminarJugada} from './index';

/**
 * Funcion para ejecutar el turno de la CPU.
 * @param {Number} deck Ejemplo: ['10S', 'AS']
 * @param {Array <Number>} puntosJugadores Ejemplo: [546,54] 
 */

export const turnoCPU = (deck, puntosJugadores) => {
    const puntosJugador = puntosJugadores[0]; 
    disabledButtonTurnoCpu();   
    let puntosCPU = 0;

    do {
        const carta = pedirUnaCarta(deck);
        mostrarCarta(1, carta);
        puntosCPU = acumularPuntos(1, carta, puntosJugadores)
    } while ((puntosCPU < puntosJugador) && (puntosJugador <= 21));
    terminarJugada(puntosJugadores);
};