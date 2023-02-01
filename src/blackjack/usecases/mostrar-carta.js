import { divCartas } from './index';

/**
 * Funcion para mostrar la imagen de la carta en el navegador web
 * @param {Number} jugador Numero del juegador en el array 0 ó 1;
 * @param {String} carta Ejemplo: 'AS'
 */

export const mostrarCarta = (jugador, carta) => {
    const tagImg = document.createElement('img');
    tagImg.src = `img/${carta}.png`;
    tagImg.classList.add('carta');
    divCartas[jugador].append(tagImg); 
};