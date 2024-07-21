const button = document.querySelector("button");
const text = document.querySelector(".counter");

let i = 0;
button.addEventListener("click", (event) => {
  event.preventDefault;
  i++;
  text.textContent = i;
  if (i % 5 === 0) {
    changeBackgroundColor();
    if (i === 10) {
      document.querySelector(".message").textContent =
        "Поздравляем! Вы достигли 10 кликов!";
      i = 0;
    }
  }

});

function randomNumber() {
  return Math.floor(Math.random() * (255 - 1) + 1);
}
function changeBackgroundColor() {
  text.style.cssText =
    "background-color: rgb(" +
    randomNumber() +
    "," +
    randomNumber() +
    "," +
    randomNumber() +
    ")";
}
