
var character = document.getElementById("character");
var block = document.getElementById("block");
var hintergrund = document.getElementById("hintergrund");
var counter=0;
var game =document.getElementById("game");
console.log("style:", document.getElementById('game').style.display);
function jump(){
    character.classList.remove("run");
    if(character.classList == "jump"){return}
    character.classList.add("jump");
    setTimeout(function(){
        character.classList.remove("jump");
        character.classList.add("run");
    },300);
}

var checkDead = setInterval(function() {
   
    if(document.getElementById('game').style.display=="block")  {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<120 && blockLeft>100 && characterTop>=130){
            block.style.animation = "none";
            hintergrund.style.animation = "none";
            counter=0;
            block.style.animation = "block 1.575s infinite linear";
            hintergrund.style.animation = "hintergrund 1.5s infinite linear";
            gameOver();
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }
    else {
        score.style.display= "none"
    }

    }, 10);

function startGame() {
    let startDiv = document.getElementById("start");
    let game = document.getElementById("game");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    game.style.display = "block";
    gameOver.style.display = "none";
    score.style.display = "block"

}

function gameOver() {
    let startDiv = document.getElementById("start");
    let game = document.getElementById("game");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    game.style.display = "none";
    gameOver.style.display = "block";
     
}

function launchIfReady() {
    resourcesToLoad--;
    if (resourcesToLoad == 0) {
        let startDiv = document.getElementById("start");
        let game = document.getElementById("game");
        let gameOver = document.getElementById("game-over");
        startDiv.style.display = "block";
        game.style.display = "none";
        gameOver.style.display = "none";
    }
}