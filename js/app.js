window.onload = function() {
  /* write your code here */
alert('Press Z key to move green car and right arrow key to move pink car. Press START to start game!');


const body = document.querySelector("body");
const button = document.querySelector("button");
const textBox = document.querySelector(".textBox");
const greenCar = document.querySelector("#greenCar");
const pinkCar = document.querySelector("#pinkCar");
//click function on 'START' button to start game
button.addEventListener('click', function(){
  //Add start text to text box
  textBox.textContent = '3...2...1...GO!'
  textBox.style.fontSize = 80;
  //Add keydown function to move cars
  let moveRight = 20;
body.addEventListener('keydown', function(event) {
  if(event.keyCode == 90) {
    greenCar.style.marginLeft = moveRight + 'px';
    moveRight += 20;
  }
  if(event.keyCode == 39) {
    pinkCar.style.marginLeft = moveRight + 'px';
    moveRight += 20;
  }
  //Add winner conditionals
  if(greenCar.style.marginLeft === '700px') {
      textBox.textContent = 'Green car wins!';
      textBox.style.fontSize = 80;
}
  if(pinkCar.style.marginLeft === '700px') {
      textBox.textContent = 'Pink car wins!';
      textBox.style.fontSize = 80;
}

    });
})

};
