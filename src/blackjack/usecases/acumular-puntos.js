import {valorCarta, smallHtmlTotal} from './index';

/**
 * Funcion para sumar puntos de los jugadores.
 * @param {Number} jugador Numero del juegador en el array 0 ó 1;
 * @param {String} carta Ejemplo: 'AS'
 * @param {Array <Number>} puntosJugadores Ejemplo: [548, 547]
 * @returns {Number} retorna el total de puntos acumulados segun el jugador en turno.
 */
export const acumularPuntos = (jugador, carta, puntosJugadores) => smallHtmlTotal[jugador].innerText = puntosJugadores[jugador] += valorCarta(carta);