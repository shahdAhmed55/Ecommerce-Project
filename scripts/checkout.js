import { counter1 as counter, counter2 } from "../scripts/counter.js";
fetch("../project_pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });

let allProductInCart = JSON.parse(localStorage.getItem("allInCart"));
let totalPrice = document.querySelector(".total-price");
totalPrice.innerHTML = JSON.parse(localStorage.getItem("totalSum"));

let productName = document.querySelector(".paidProjects");
for (let i = 0; i < allProductInCart.length; i++) {
  let content = `
             <div class="classify sb">
                            <span class="product">${allProductInCart[
                              i
                            ].productName.slice(0, 20)}... (${
    allProductInCart[i].numOfProduct
  })</span>
                            <span class="price">${Math.round(
                              allProductInCart[i].totalPrice
                            )} $ </span>
            </div>
            `;

  productName.innerHTML += content;
}
