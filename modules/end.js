const endScreen = { chosenWord: "Dog", winOrLose: "Win" };
export function endState(obj) {
    endScreen.chosenWord = obj.chosenWord;
    endScreen.winOrLose = obj.winOrLose;
    render();
}
function render() {
    const markup = document.querySelector(".hangman");
    markup.innerHTML =
        `
<h1 class="hangman__title">GAME OVER</h1>
<p class="result">You ${endScreen.winOrLose.toUpperCase()}!<br>
The word is 👉🏻 ${endScreen.chosenWord.toUpperCase()}.
</p> 
<button class="button hangman__trigger">Main Menu</button>

  `;
}
//# sourceMappingURL=end.js.map