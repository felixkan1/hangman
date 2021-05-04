//state
let livesLeft;
let canvas;
let context;
const order = [leftleg, rightLeg, leftArm, rightArm, torso, head, rope];
export function boardInit() {
    canvas = document.querySelector(".hangman__board");
    console.log(canvas);
    context = canvas.getContext("2d");
    context.lineWidth = 2;
    context.strokeStyle = "white";
    //base
    line1();
    line2();
    line3();
}
export function setLives(newLives) {
    livesLeft = newLives;
    let drawFunction = order[livesLeft];
    drawFunction();
}
function draw(startX, startY, endX, endY) {
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}
function line1() {
    draw(0, 150, 150, 150);
}
function line2() {
    draw(10, 0, 10, 300);
}
function line3() {
    draw(0, 5, 70, 5);
}
function rope() {
    draw(60, 5, 60, 15);
}
function torso() {
    draw(60, 35, 60, 70);
}
function rightArm() {
    draw(60, 46, 100, 50);
}
function leftArm() {
    draw(60, 46, 20, 50);
}
function rightLeg() {
    draw(60, 70, 100, 100);
}
function leftleg() {
    draw(60, 70, 200, 100);
}
function drawCircle(centerX, centerY, radius) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.stroke();
}
function head() {
    drawCircle(60, 25, 10);
}
//# sourceMappingURL=board.js.map