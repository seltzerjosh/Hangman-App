/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    /**
     */
    constructor() {
        this.missed = 0;
        this.phrases = ['test phrase', 'test phrase two'];
        this.activePhrase = null;

    }

    /**
     * Hides the start screen overlay and procures a random phrase
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Randomly retrieves a phrase
     */
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }

    /**
     * Controls game logic
     * TODO:    - If won, call gameOver()
     */
    handleInteraction(letter,button) {
        const regex = new RegExp(letter.toLowerCase(), 'g');
        const phrase = this.activePhrase.phrase;
        button.disabled = true;
        if (regex.test(phrase)) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter();
            this.checkForWin();
        } else {
            button.className = 'wrong';
            this.removeLife();
        };
    }

    /**
     * Removes a life from the scored
     * TODO: Remove a life from scoreboard by replacing one liveHeart.png with lostHeart.png
     * TODO: Increment missed property
     * TODO: If five missed guesses then end game by calling gameOver()
     */
    removeLife() {

    }

    /**
     * checks to see if player has revealed all letters
     */

    checkForWin() {
        console.log('check for win function');
    }

    /**
     * Displays original start screen with won/loss status
     * TODO: Display original start screen overlay
     * TODO: outcome dependent - update overlay h1 w/won or loss message
     * TODO: Replace overlay's start CSS class with either the win or lose CSS class
     */
    gameOver() {

    }
}