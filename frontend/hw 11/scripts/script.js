const inputLogin = document.querySelector(".loginInput");
const passwordInput = document.querySelector(".passwordInput");
const button = document.querySelector("button");
const paragrapf = document.querySelector("p");
const login = "gudkozavr";
const password = "1234567";

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputLogin.value !== login) {
    paragrapf.textContent = "неверный логин";
  } else if (passwordInput.value !== password) {
    paragrapf.textContent = "неверный пароль";
  } else {
    paragrapf.textContent = "you did it!";
  }
});
