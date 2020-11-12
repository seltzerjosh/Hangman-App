/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display on game start
     */
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            const phraseUL = document.getElementsByTagName('ul')[0];
            const blank = document.createElement('li');
            blank.id = this.phrase[i];
            blank.className = (this.phrase[i] === ' ') ? `space` : `letter ${this.phrase[i]}`;
            phraseUL.appendChild(blank);
        }
    }

    /**
    * Checks to see if the letter selected by player matches a letter in the phrase
    *
    */
    checkLetter(letter) {
        const phrase = this.phrase;
        const regex = new RegExp(letter, `g`);
        return regex.test(phrase);
    }

    /**
     * Reveals the letter(s) on the board when selected
     * TODO: To reveal the matching letter(s), select all letter DOM elements that have CSS class name that matches the selected letter
     * TODO: and replace the element's css hide class with css show class
     */
    showMatchedLetter() {
        console.log('show matched letter function');
    }
}