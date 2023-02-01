/**
 * Deshabilita ButtonCarta y ButtonTerminarJugada; Habilita ButtonNuevoJuego.
 */
export const disabledButtonTurnoJugador = () => {
    buttonCarta.disabled = true;
    buttonTerminarJugada.disabled = true;
    buttonNuevoJuego.disabled = false;
};

/**
 * Deshabilita ButtonCarta, ButtonTerminarJugada y ButtonNuevoJuego.
 */
export const disabledButtonTurnoCpu = () => {
    buttonCarta.disabled = true; 
    buttonTerminarJugada.disabled = true;
    buttonNuevoJuego.disabled = true
};