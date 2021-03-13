function makeColorCircles() {
  const getCircle = document.querySelectorAll('.ball');
  for (let index = 0; index < getCircle.length; index += 1) {
    const colorArray = [
      Math.ceil(Math.random() * 257),
      Math.ceil(Math.random() * 257),
      Math.ceil(Math.random() * 257)];
    const correctColor = colorArray.join(', ');
    const rgbFormat = `rgb(${correctColor})`;
    getCircle[index].style.backgroundColor = rgbFormat;
  }
}

function sortAnswer() {
  const randomChoice = Math.ceil(Math.random() * 6) - 1
  const getCircle = document.querySelectorAll('.ball');
  getCircle[randomChoice].setAttribute('id', 'correct')
  let rgbAnswer = window.getComputedStyle(getCircle[randomChoice]).getPropertyValue("background-color")
  document.getElementById('rgb-color').innerText = rgbAnswer; 
}   

function testShot() {
  const getCircle = document.querySelectorAll('.ball')
  for (let index = 0; index < getCircle.length; index += 1) {
    getCircle[index].addEventListener('click', function(event) {
      let shot = window.getComputedStyle(event.target).getPropertyValue("background-color");
      if (shot === document.getElementById('rgb-color').innerText) {
        document.getElementById('answer').innerText = 'Acertou!'; 
      } else {
        document.getElementById('answer').innerText = 'Errou! Tente novamente!!'; 
      }
    })
  }
}

function resetGame() {
  let getBtn = document.getElementById('reset-game');
  getBtn.addEventListener('click', () => {
    window.location.reload()
  })
}

makeColorCircles();
sortAnswer()
testShot() 
resetGame()