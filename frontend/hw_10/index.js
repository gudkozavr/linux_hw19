

const container = document.querySelector("div");

function toggleClass(event) {
    if (event.type === "mouseover") {
        container.classList.add("backgroundred");
    } else if (event.type === "mouseout") {
        container.classList.remove("backgroundred");
    }
}

container.addEventListener("mouseover", toggleClass);
container.addEventListener("mouseout", toggleClass);



const colorBlock = document.querySelector("#colorBlock");
const colorButton = document.querySelector("#colorButton");

function randomColor () {
let r = Math.random() * 256;
let g = Math.random() * 256;
let b = Math.random() * 256;

const result =`rgb(${r}, ${g}, ${b})`;
return result;

}

colorButton.addEventListener("click", () => {
  colorBlock.style.backgroundColor = randomColor();


})
