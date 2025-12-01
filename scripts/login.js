import { counter1 as counter, counter2 } from "../scripts/counter.js";
let registerBtn = document.querySelector(".register");
registerBtn.addEventListener("click", () => {
  window.location.href = "./register.html";
});

let logInForm = document.querySelector("form");
logInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("input[name=username]").value;
  let password = document.querySelector("input[name=password]").value;
  let usernameLs = JSON.parse(localStorage.getItem("user")).username;
  let passwordLs = JSON.parse(localStorage.getItem("user")).password;
  if (username == usernameLs && password == passwordLs) {
    window.location.href = "../index.html";
  } else {
    alert(`UserNAme Or Password Is Wrong 
                if you don't have account please Register`);
  }
});
fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });
