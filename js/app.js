/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// noinspection JSUnusedGlobalSymbols
/**
 * New game constant
 */
const game = new Game();

/**
 * Listens for start game button press
 */

document.getElementById('btn__reset').addEventListener('click', function start() {
    game.startGame();

    const hearts = document.getElementsByClassName('tries');
    for (let i = hearts.length - 1; i >= 0; i--) {
        hearts[i].firstElementChild.src = 'images/liveHeart.png';
        hearts[i].firstElementChild.alt = 'Heart Icon';
    }

    while (document.getElementsByClassName('chosen').length > 0) {
        document.getElementsByClassName('chosen')[0].disabled = false;
        document.getElementsByClassName('chosen')[0].className = 'key';

    }
    while (document.getElementsByClassName('wrong').length > 0) {
        document.getElementsByClassName('wrong')[0].disabled = false;
        document.getElementsByClassName('wrong')[0].className = 'key';

    }
    game.missed = 0;

})

/**
 * Listens for button clicks
 */
document.addEventListener('click', (event) => {
    const letter = event.target.textContent;
    const button = event.target;
    if (event.target.type === 'submit' && event.target.id !== 'btn__reset') {
        game.handleInteraction(letter, button);
    }
})

document.addEventListener('keydown', (event) => {
    const letter = event.key;
    const buttons = document.getElementsByClassName('key');
    let button;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === letter) {
            button = buttons[i]
        }
    }
    if (button) {
        game.handleInteraction(letter, button);
    }
})