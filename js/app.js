/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// noinspection JSUnusedGlobalSymbols
/**
 * New game constant
 */
const game = new Game();

/**
 * Listens for button clicks
 * TODO: Event Listener - on button click, call handleInteraction() on the Game object
 */

/**
 * Listens for start game button press
 * TODO: Event Listener - on start-gane click, call startGame()
 * TODO:                - Remove all li elements from the Phrase u1 element
 * TODO:                - Enable all the onscreen keyboard buttons and update each to use the key CSS class
 * TODO:                - Reset all the heart images to liveHeart.png
 */

document.getElementById('btn__reset').addEventListener('click', function start() {
    game.startGame();

})

document.addEventListener('click', (event) => {
    if (event.target.type === 'submit') {
        console.log(event.target.textContent)
    }
})