export let counter1 = document.querySelectorAll(".counter")[0];

if (localStorage.getItem("faverArayy")) {
  counter1.innerHTML = JSON.parse(localStorage.getItem("faverArayy")).length;
} else {
  counter1.innerHTML = 0;
}

export let counter2 = document.querySelectorAll(".counter")[1];
if (localStorage.getItem("allInCart")) {
  counter2.innerHTML = JSON.parse(localStorage.getItem("allInCart")).length;
} else {
  counter2.innerHTML = 0;
}

