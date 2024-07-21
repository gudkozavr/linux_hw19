const container = document.querySelector(".container");

const strings = ["qwfg", "sdfv", "sdf"];
console.log(strings);
function createElementElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    const newElement = document.createElement("li");
    newElement.textContent = arr[i];
    const newButton = document.createElement("button");
    container.append(newElement);
    newElement.append(newButton);
    newButton.addEventListener("click", () => {
      newElement.remove();
    });
  }
}

createElementElement(strings);
