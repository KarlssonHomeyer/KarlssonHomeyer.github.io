
var character = document.getElementById("character");
var block = document.getElementById("block");
var hintergrund = document.getElementById("hintergrund");
var counter=0;
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
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<120 && blockLeft>100 && characterTop>=130){
        block.style.animation = "none";
        hintergrund.style.animation = "none";
        alert("Game over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1.575s infinite linear";
        hintergrund.style.animation = "hintergrund 1.5s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
