import { homeInit } from "./home.js";
import { endState } from "./end.js";
import { setLives, boardInit } from "./board.js";
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const words = ["APPLE", "BALL", "CAT", "DOG", "ELEPHANT"];
let chosenWord;
let guessingWord;
let lives;
let guesses = [];
//cache the DOM
const $hangman = document.querySelector(".hangman");
export function gameInit() {
    //1) Choose word
    chosenWord = [...chooseWord()];
    //Build out our guessing word to render
    guessingWord = Array(chosenWord.length).fill("_");
    guesses = [];
    lives = 7;
    //show initial screen or page
    showInitPage();
    //listeners
    $hangman.removeEventListener("click", clickHandler);
    listeners();
    boardInit();
}
function chooseWord() {
    let randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
}
function showInitPage() {
    let markup = `
  <p class="hangman__stats">Lives: 
  <span class="hangman__lives">${lives}</span>
  </p>

  <h1 class="hangman__title">Hangman</h1>
  <canvas class="hangman__board" height = "155px"></canvas>
  <div class="hangman__word">${guessingWord.join("")}</div>
  <p class="hangman__instructions">Pick a letter below to guess the Whole word.</p>
  <ul class="hangman__letters">
  ${createLetters()}
  </ul>
  <button class ="button hangman__trigger">Main Menu </button>
  `;
    $hangman.innerHTML = markup;
}
function createLetters() {
    let markup = ``;
    letters.forEach(letter => {
        const isActive = alreadyClicked(letter.toUpperCase()) ? "hangman__letter--active" : "";
        markup += `<li class = "hangman__letter ${isActive}">${letter}</li>`;
    });
    return markup;
}
function listeners() {
    $hangman.addEventListener("click", clickHandler);
}
function clickHandler(event) {
    if (event.target) {
        //main menu clicked
        if (event.target.matches(".hangman__trigger")) {
            homeInit();
        }
        //a letter is clicked
        if (event.target.matches(".hangman__letter")) {
            check(event.target.innerText);
        }
    }
}
function check(letter) {
    console.log("check is called", letter);
    //check if letter already clicked
    if (alreadyClicked(letter)) {
        return;
    }
    else {
        guesses.push(letter);
    }
    //check if guessed letter exists in chosen word
    if (chosenWord.includes(letter)) {
        updateGuessingWord(letter);
    }
    else {
        lives--;
        setLives(lives);
    }
    guesses.push(letter);
    render();
    //check if game over
    isGameOver();
}
function isGameOver() {
    //won
    if (guessingWord.join("") == chosenWord.join("")) {
        endState({
            chosenWord: chosenWord.join(""), winOrLose: "Win"
        });
    }
    if (lives <= 0) {
        endState({ chosenWord: chosenWord.join(""), winOrLose: "Lose" });
    }
}
function render() {
    //render lives
    const livesEL = document.querySelector(".hangman__lives");
    livesEL.innerHTML = String(lives);
    //render word guesses
    const wordEL = document.querySelector(".hangman__word");
    wordEL.innerHTML = guessingWord.join("");
    //render letters
    const lettersEL = document.querySelector(".hangman__letters");
    lettersEL.innerHTML = createLetters();
}
function alreadyClicked(letter) {
    return guesses.includes(letter);
}
function updateGuessingWord(letter) {
    chosenWord.forEach((char, index) => {
        if (char === letter) {
            guessingWord[index] = char;
            //console.log(chosenWord, guessingWord);
        }
    });
}
//# sourceMappingURL=game.js.map