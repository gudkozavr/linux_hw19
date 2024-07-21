const body = document.querySelector("body");
const formRegist = document.querySelector("form");
const userNameInput = document.querySelector(".username");
const lastNameInput = document.querySelector(".lastname");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const passwordInput = document.querySelector(".password");

const users = JSON.parse(localStorage.getItem("users")) || [];

// __________nameLogic________
userNameInput.addEventListener("input", (event) => {
  if (
    userNameInput.value.length > 2 &&
    userNameInput.value.length < 24 &&
    /^[A-Za-z]/.test(userNameInput)
  ) {
  } else {
    console.log(
      "Sie müssen zwischen 2 und 24 Zeichen verwenden und nur die Buchschtaben benutzen"
    );
  }
});

// _____________emailLogic_________
if (emailInput.value.length < 2 || emailInput.includes("@")) {
}

// ___________phoneLogic_______
(" i need +");
if (phoneInput.value > 12 || phoneInput.value < 8)
  // ______________
  formRegist.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      userNameInput.value &&
      lastNameInput.value &&
      emailInput.value &&
      passwordInput.value
    ) {
      const newUser = {
        name: userNameInput.value,
        lastName: lastNameInput.value,
        userEmail: emailInput.value,
        password: passwordInput.value,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      console.log("du hast etwas vergessen");
    }
  });

console.log(userNameInput.value);
