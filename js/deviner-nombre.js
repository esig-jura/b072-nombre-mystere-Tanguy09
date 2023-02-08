/**
 * Jeu du nombre mystère
 * @author  Tanguy Jacot
 * @version 1.0
 * @since   2022-02-08 (date de création)
 */

'use strict';

/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
