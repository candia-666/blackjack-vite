import { buttonNuevoJuego } from './index';

/**
 * Funcion para dar finalizado el juego y determinar al ganador.
 * @param {Array <Number>} puntosJugadores Ejemplo: [425, 458] 
 */
export const terminarJugada = (puntosJugadores) => {
    
    const [totalJugador, totalCPU] = puntosJugadores; 
    
    setTimeout(() => {
        if ((totalCPU === 21) || (totalJugador > 21) ||  (totalJugador === totalCPU) || ((totalCPU > totalJugador) && ((totalJugador < 21) && (totalCPU < 21)))) {
            alert('Te Gané Humano');
        } else if (totalCPU > 21) {
            alert('Ganasté Humano');
        };
        buttonNuevoJuego.disabled = false;
    }, 150);
};