var numberOfButtons = document.querySelectorAll(".drum").length;

function whichKey(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            console.log(key);
    }
}
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        whichKey(buttonInnerHTML);

        buttonAnime(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function(event) {
    whichKey(event.key);
    buttonAnime(event.key);

});


function buttonAnime(key) {
    var activButton = document.querySelector("." + key);
    activButton.classList.add("pressed");
    setTimeout(function() {
        activButton.classList.remove("pressed");
    }, 100);

}