/**
 * Funcion para obtener el valor numerico de la carta.
 * @param {String} carta Ejemplo: '10S' 
 * @returns {Number} retorna el valor numerico de la carta.
 */

export const valorCarta = (carta) => (isNaN(carta.substring(0, carta.length-1))) ? (carta.substring(0, carta.length-1) === 'A') ? 11 : 10 : carta.substring(0, carta.length-1) * 1;;