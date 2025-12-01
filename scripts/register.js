import { counter1 as counter, counter2 } from "../scripts/counter.js";
let loginBtn = document.querySelector(".logIn");
loginBtn.addEventListener("click", () => {
  window.location.href = "./login.html";
});

let registerForm = document.querySelector("form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.querySelector("input[name=username]").value;
  let email = document.querySelector("input[name=email]").value;
  let password = document.querySelector("input[name=password]").value;
  let user = {
    username: username,
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  document.querySelector("button").addEventListener("click", () => {
    window.location.href = "./login.html";
  });
});

fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });
