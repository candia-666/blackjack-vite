/**
 * Funcion para sacar una carta del mazo.
 * @param {Array <String>} deck Ejemplo: ['10C, AS']
 * @returns {String} retorna la carta del deck a jugar en el turno.
 */

export const pedirUnaCarta = (deck) => (deck.length === 0) ? alert('cargue la baraja') : deck.pop();