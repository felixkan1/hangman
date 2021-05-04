import { howInit } from "./how.js";
import { gameInit } from "./game.js";
//cache the Dom
const $hangman = document.querySelector(".hangman");
export function homeInit() {
    render();
    listeners();
}
function render() {
    let markup = "";
    markup += `
  <h1 class="hangman__title">Hangman</h1>
  <button class="button start">New Game</button>
  <button class="button instructions">Instructions</button>
  `;
    $hangman.innerHTML = markup;
}
function listeners() {
    let startButton = document.querySelector(".start");
    startButton.addEventListener("click", () => {
        gameInit();
    });
    let howButton = document.querySelector(".instructions");
    howButton.addEventListener("click", () => {
        howInit();
    });
}
//# sourceMappingURL=home.js.map