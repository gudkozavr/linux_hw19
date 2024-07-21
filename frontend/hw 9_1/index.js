const list = document.querySelector(".list");
document.addEventListener("DOMContentLoaded", () => {
  if (list.childElementCount > 0) {
    let newElement = document.createElement("li");
    newElement.innerHTML = "Das ist ein neues Element";
    list.replaceChild(newElement, list.children[list.childElementCount - 1]);
  }
});
