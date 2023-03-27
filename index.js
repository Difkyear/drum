var button = document.querySelectorAll("button");
var audio = [];

audio[7] = new Audio("sounds/tom-4.mp3");
function AudioSoundStore(number, sound) {
  this.sound = sound;
  this.number = number;
}
for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var buttonContent = this.textContent;
    drumPlay(buttonContent);
    drumButtonAnimation(buttonContent);
  });
}
document.addEventListener("keypress", function (event) {
  drumPlay(event.key);
  drumButtonAnimation(event.key);
});

function drumPlay(whichbutton) {
  switch (whichbutton) {
    case "w":
      audio[0] = new Audio("sounds/crash.mp3");
      audio[0].play();
      break;
    case "a":
      audio[2] = new Audio("sounds/snare.mp3");
      audio[2].play();
      break;
    case "s":
      audio[1] = new Audio("sounds/kick-bass.mp3");
      audio[1].play();
      break;
    case "d":
      audio[2] = new Audio("sounds/snare.mp3");
      audio[2].play();
      break;
    case "j":
      audio[4] = new Audio("sounds/tom-2.mp3");
      audio[4].play();
      break;
    case "k":
      audio[5] = new Audio("sounds/tom-3.mp3");
      audio[5].play();
      break;
    case "l":
      audio[6] = new Audio("sounds/tom-4.mp3");
      audio[6].play();
      break;
    default:
  }
}
function drumButtonAnimation(currentkey) {
  var activate = document.querySelector("." + currentkey);
  activate.classList.add("pressed");
  console.log(activate.getAttribute("class"));

  setTimeout(() => {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);
}
