/// <reference path="_reference.ts"/>
//make a reference to the canvas element
var canvas = document.getElementById("canvas");
//create a reference to a stage container
var stage;
var helloLabel;
function init() {
    stage = new createjs.Stage(canvas); //instatiate the stage container
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop); // creates an eventlistener
    main(); //call the main game function
}
function gameLoop() {
    helloLabel.rotation += 2;
    stage.update(); //refreshes the stage
}
function main() {
    helloLabel = new createjs.Text("Hello World", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredLineHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map