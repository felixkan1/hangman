import { homeInit } from "./home.js";
const $hangman = document.querySelector(".hangman");
export function howInit() {
    render();
    listeners();
}
function render() {
    let markup = "";
    ;
    markup =
        `
      <h1 class="hangman__title">INSTRUCTIONS</h1>
        <ul class ="how">
          <li>Alright here is how your play!</li>
          <li>When you start a new game, the game will automatically choose a random word</li>
          <li>Your job is to guess that chosen word completely bby guessing one letter at a time by clickin on the bottons</li>
          <li>If you successfully guess the word within 7 tries, you win or else you lose</li>
          <li>If you lose, you will be hanged without mercy 👻</li>
        </ul>
    <button class="button hangman__trigger">Main Menu</button>
  `;
    $hangman.innerHTML = markup;
}
function listeners() {
    const $button = document.querySelector(".button");
    $button.addEventListener("click", () => {
        homeInit();
    });
}
//# sourceMappingURL=how.js.map