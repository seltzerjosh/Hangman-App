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
     */
    handleInteraction(letter, button) {
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
     */
    removeLife() {
        const hearts = document.getElementsByClassName('tries');

        for (let i = hearts.length - 1; i >= 0; i--) {
            if (hearts[i].firstElementChild.alt === 'Heart Icon') {
                hearts[i].firstElementChild.src = 'images/lostHeart.png';
                hearts[i].firstElementChild.alt = 'Empty Heart Icon';
                this.missed += 1;
                break;
            }
        }
        if (this.missed === 5) {
            this.gameOver();
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
     */
    gameOver() {
        document.getElementById('overlay').style.display = 'block';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();

        if (this.missed === 5) {
            document.getElementById('game-over-message').textContent = 'loser loser chicken skewer';
            document.getElementById('overlay').className = 'lose';
        } else {
            document.getElementById('game-over-message').textContent = 'winner winner chicken dinner';
            document.getElementById('overlay').className = 'win';
        }
    }
}