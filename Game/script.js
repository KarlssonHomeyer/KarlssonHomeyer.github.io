
var character = document.getElementById("character");
var block = document.getElementById("block");
var hintergrund = document.getElementById("hintergrund");
var counter=0;
var game =document.getElementById("game");
var gameoversound = new sound("../assets/mp3/gameoversound.mp3");
var jumpsound = new sound("../assets/mp3/jumpsound.mp3")
var startsound = new sound("../assets/mp3/startbildschirmsound.mp3")
var anleitung = document.getElementById("anleitung");

/*
console.log("style:", document.getElementById('game').style.display);
*/

function jump(){
    character.classList.remove("run");
    if(character.classList == "jump"){return}
    character.classList.add("jump");
    jumpsound.play();
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
        anleitung.style.display= "none"
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
    anleitung.style.display = "block"
    stopscreensound();
}

function gameOver() {
    let startDiv = document.getElementById("start");
    let game = document.getElementById("game");
    let gameOver = document.getElementById("game-over");
    startDiv.style.display = "none";
    game.style.display = "none";
    gameOver.style.display = "block";
    gameoversound.play();
    setTimeout(startscreensound, 1250);


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
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.pause = function(){
    this.sound.pause();
    }
  }
  function startscreensound()
  {
    startsound.play();
  }
  function stopscreensound()
  {
    startsound.pause();
  }