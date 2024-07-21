const body = document.body;

const colors = ["#ff0000", "#00ff00", "#0000ff"];

function randomColorFromArr(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const colors = arr[index];
  return colors;
}

setInterval(() => {
  const color = randomColorFromArr(colors);
  body.style.backgroundColor = color;
}, 1000);
