export {crearDeck, a as constprueba} from './crear-deck';
export {acumularPuntos} from './acumular-puntos';
export {pedirUnaCarta} from './pedir-carta';
export {mostrarCarta} from './mostrar-carta';
export {terminarJugada} from './terminar-jugada';
export {disabledButtonTurnoJugador, disabledButtonTurnoCpu} from './button-disabled';
export {turnoJugador} from './turno-jugador';
export {turnoCPU} from './turno-cpu';
export {valorCarta} from './valor-carta'
//Referencias HTML
export const smallHtmlTotal = document.querySelectorAll('.smallHtmlPuntos'),
      divCartas = document.querySelectorAll('.divCartas'),
      buttonCarta = document.querySelector('#buttonCarta'),
      buttonNuevoJuego = document.querySelector('#buttonNuevoJuego'),
      buttonTerminarJugada = document.querySelector('#buttonTerminarJugada');
