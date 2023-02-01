import _ from 'underscore';
export const a = 'hola mundo';

/**
 * 2C = 2 of clubs (tréboles)
 * 2D = 2 of diaminds (diamantes)
 * 2H = 2 of hearts (corazones)
 * 2S = 2 of spades (espadas)
 */
const tiposDeck = ['C', 'D', 'H', 'S'], letraDeck = ['A', 'J', 'Q', 'K'];

/**
 * Funcion para crear y barajar el mazo del juego.
 * @returns {Array <String>} retorna un nuevo mazo de carta barajado
 */
export const crearDeck = () => {
    
    //if(!tiposDeck || tiposDeck.length === 0) throw new Error('Tipos del mazo obligatorio y debe ser una array string');
    let deck = [];
    for (let i = 2; i<=10; i++){
        for (let tipo of tiposDeck) {
            deck.push(i+tipo);
        };
    };

    for (let tipo of tiposDeck){
        for (let letra of letraDeck){
            deck.push(letra + tipo);
        };
    };

    return _.shuffle(deck);
};

//export default crearDeck;