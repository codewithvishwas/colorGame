// var colors = generateColors(6);
// var squares = document.querySelectorAll(".square");
// var pickedColor = pickColor();
// var colorDisplay = document.getElementById("colordisplay");
// var message = document.getElementById("message");
// var resetButton = document.getElementById("reset");
// var easyButton = document.getElementById("easy");
// var hardButton = document.getElementById("hard");
// colorDisplay.textContent = pickedColor;

// easyButton.addEventListener("click", function() {
//   easyButton.classList.add("selected");
//   hardButton.classList.remove("selected");
//   colors = generateColors(3);
//   pickedColor = pickColor;
//   colorDisplay.textContent = pickedColor;
// });

// hardButton.addEventListener("click", function() {
//   hardButton.classList.add("selected");
//   easyButton.classList.remove("selected");
// });

// resetButton.addEventListener("click", function() {
//   // generate all new random colors
//   colors = generateColors(6);
//   // pick a new randow color from array
//   pickedColor = pickColor();
//   // change color display to match picked color
//   colorDisplay.textContent = pickedColor;
//   // display colors of squares
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.background = colors[i];
//   }
//   document.querySelector(".headline").style.background = "#1c1c1c";
// });

// for (var i = 0; i < squares.length; i++) {
//   // add initial color to squares
//   squares[i].style.background = colors[i];

//   //   add quick listeners to squares
//   squares[i].addEventListener("click", function() {
//     // grab color of picked squares
//     var clickedColor = this.style.background;
//     // comapare color to pickedColor
//     if (clickedColor === pickedColor) {
//       message.textContent = "Correct";
//       resetButton.textContent = "Play Again?";
//       changeColor(clickedColor);
//       document.querySelector(".headline").style.background = clickedColor;
//     } else {
//       this.style.background = "#1c1c1c";
//       message.textContent = "Try Again";
//     }
//   });
// }

// function changeColor(color) {
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.background = color;
//   }
// }

// function pickColor() {
//   var random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }

// function generateColors(num) {
//   //   make an array
//   var arr = [];
//   //   add num random colors to array
//   for (var i = 0; i < num; i++) {
//     //   get random color and push into array
//     arr.push(randomColor());
//   }
//   //   return that array
//   return arr;
// }

// function randomColor() {
//   // pick a "red" from 0 -255
//   var r = Math.floor(Math.random() * 256);
//   // pick a "green" from 0 - 255
//   var g = Math.floor(Math.random() * 256);
//   // pick a "blue" from 0 - 255
//   var b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }
