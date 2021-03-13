function sortCorrectColor() {
  const rgbArray = [
    Math.ceil(Math.random() * 256),
    Math.ceil(Math.random() * 256),
    Math.ceil(Math.random() * 256)];
  const correctColor = rgbArray.join(', ');
  const colorFormat = `rgb: ( ${correctColor} )`;
  document.getElementById('rgb-color').innerText = colorFormat;
}

function makeColorCircles() {
  const getCircle = document.querySelectorAll('.ball');
  for (let index = 0; index < getCircle.length; index += 1) {
    const colorArray = [
      Math.ceil(Math.random() * 256),
      Math.ceil(Math.random() * 256),
      Math.ceil(Math.random() * 256)];
    const correctColor = colorArray.join(', ');
    const rgbFormat = `rgb(${correctColor})`;
    getCircle[index].style.backgroundColor = rgbFormat;
  }
}

sortCorrectColor();
makeColorCircles();
