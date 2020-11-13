/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display on game start
     * Credit: reset phrases - https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
     */
    addPhraseToDisplay() {
        const phraseUL = document.getElementsByTagName('ul')[0];
        while (phraseUL.firstChild) {
            phraseUL.removeChild(phraseUL.firstChild);
        }
        for (let i = 0; i < this.phrase.length; i++) {
            const blank = document.createElement('li');
            blank.id = this.phrase[i];
            blank.className = (this.phrase[i] === ' ') ? `space` : `hide letter ${this.phrase[i]}`;
            blank.textContent = this.phrase[i];
            phraseUL.appendChild(blank);
        }
    }

    /**
     * Checks to see if the letter selected by player matches a letter in the phrase
     * @param {string} letter - the letter entered/clicked
     *
     */
    checkLetter(letter) {
        const phrase = this.phrase;
        const regex = new RegExp(letter, `g`);
        return regex.test(phrase);
    }

    /**
     * Reveals the letter(s) on the board when selected
     * @param {string} letter - the letter entered/clicked
     * Credit: Getting second className - Sarfraz @ https://stackoverflow.com/questions/4239947/how-to-get-the-second-class-name-from-element
     */
    showMatchedLetter(letter) {
        const letterSpaces = document.getElementsByClassName('letter');
        for (let i = 0; i < letterSpaces.length; i++) {
            const letterOnBoard = letterSpaces[i].getAttribute('class').split(' ')[2];
            if (letterOnBoard === letter) {
                letterSpaces[i].className = letterSpaces[i].className.replace(/hide/, 'show');
            }
        }
    }
}