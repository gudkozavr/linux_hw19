const myInput = document.querySelector(".myInput");
const myButton = document.querySelector(".myButton");
const myParagraf = document.querySelector(".myParagraf");
const form = document.querySelector(".form");

let points = JSON.parse(localStorage.getItem("points")) || [];

console.log(points);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newPoint = myInput.value;

  myParagraf.textContent = newPoint;
  points.push(newPoint);
  localStorage.setItem("points", JSON.stringify(points));
});
const arr = JSON.parse(localStorage.getItem("points"));
document.addEventListener("DOMContentLoaded", () => {
  if (arr != null) {
    myParagraf.textContent = arr[arr.length - 1];
    console.log(arr[arr.length - 1]);
  }
});
