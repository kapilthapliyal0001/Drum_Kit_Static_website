// document.querySelector("button").addEventListener("click",function() {
//   alert("The button has been clicked");
// })




// document.getElementsByTagName("button").addEventListener("click", function()
//
// { alert("The button has been clicked");
//
// }

// custom function for the Audio

function key(press) {
  this.press = function() {
    switch (press) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;

      case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;

      case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;

      case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

      case "j":
          var tom5 = new Audio("sounds/crash.mp3");
          tom5.play();
        break;

      case "k":
          var tom6 = new Audio("sounds/kick-bass.mp3");
          tom6.play();
        break;

      case "l":
          var tom7 = new Audio("sounds/snare.mp3");
          tom7.play();
        break;

      default: console.log(alpha);

    };

  }
}

// when we press we click;

var drumButtons = document.querySelectorAll(".drum").length


for (i = 0; i < drumButtons; i++) {
  document.getElementsByTagName("button")[i].addEventListener("click", function() {

    this.style.color = "white";
    var alpha = this.innerHTML;

    buttonAnimation(alpha);
    // alert("The button" + " has been clicked");

    // switch (press) {
    //   case "w":
    //       var tom1 = new Audio("sounds/tom-1.mp3");
    //       tom1.play();
    //     break;
    //
    //   case "a":
    //       var tom2 = new Audio("sounds/tom-2.mp3");
    //       tom2.play();
    //     break;
    //
    //   case "s":
    //       var tom3 = new Audio("sounds/tom-3.mp3");
    //       tom3.play();
    //     break;
    //
    //   case "d":
    //       var tom4 = new Audio("sounds/tom-4.mp3");
    //       tom4.play();
    //     break;
    //
    //   case "j":
    //       var tom5 = new Audio("sounds/crash.mp3");
    //       tom5.play();
    //     break;
    //
    //   case "k":
    //       var tom6 = new Audio("sounds/kick-bass.mp3");
    //       tom6.play();
    //     break;
    //
    //   case "l":
    //       var tom7 = new Audio("sounds/snare.mp3");
    //       tom7.play();
    //     break;
    //
    //   default: console.log(alpha);
    //
    // }

    var new_key = new key(alpha);
    new_key.press();

  })
}

// detecting the keyboard press;


document.addEventListener("keypress", function(event) {

  console.log(event.key);

  // alert("A key was pressed");
  var new_key = new key(event.key);
  new_key.press();

  buttonAnimation(event.key);

})

// custom function for the button animation;

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}





// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
