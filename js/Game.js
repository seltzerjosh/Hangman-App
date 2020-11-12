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
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }

    /**
     * Removes a life from the scored
     * TODO: Remove a life from scoreboard by replacing one liveHeart.png with lostHeart.png
     * TODO: Increment missed property
     * TODO: If five missed guesses then end game by calling gameOver()
     */
    removeLife() {
        const hearts = document.getElementsByClassName('tries');
        for (let i = hearts.length - 1; i >= 0; i--) {
            console.log(hearts[i]);
            console.log(i);
        }
    }

    /**
     * checks to see if player has revealed all letters
     */

    checkForWin() {
        const letterSpaces = document.getElementsByClassName('letter');
        for (let i = 0; i < letterSpaces.length; i++) {
            const status = letterSpaces[i].getAttribute('class').split(' ')[0];
            if (status === 'hide') {
                return false;
            }
        }
        return true;
    }

    /**
     * Displays original start screen with won/loss status
     * TODO: outcome dependent - update overlay h1 w/won or loss message
     * TODO: Replace overlay's start CSS class with either the win or lose CSS class
     */
    gameOver() {
        document.getElementById('overlay').style.display = 'block';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();

        while (document.getElementsByClassName('chosen').length > 0) {
            document.getElementsByClassName('chosen')[0].className = 'key' ;
        }
    }
}