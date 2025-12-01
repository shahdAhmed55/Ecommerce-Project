import { counter1 as counter, counter2 } from "./counter.js";
let array = JSON.parse(localStorage.getItem("allInCart"));

let request = new XMLHttpRequest();
request.open("get", "../products.json");
request.onload = () => {
  if (request.status == 200 && request.readyState == 4) {
    let data = JSON.parse(request.responseText);
      if (array) {
        for (let i = 0; i < array.length; i++) {
          let numInCart = array[i].numOfProduct;
          let totalPrice = array[i].totalPrice;
          for (let j = 0; j < data.length; j++) {
            if (data[j].id == array[i].id) {
              document.querySelector(
                ".cart-page .container .products"
              ).innerHTML += addContent(data, j, numInCart, totalPrice);
            }
          }
        }
   }
  }

  let items = document.querySelectorAll(".item");
    let btn = document.querySelector(".cartempty");
  noItems(btn);
  removeFromCart(items, btn);
};
request.send();
function addContent(data, j, numInCart, totalPrice) {
  let content = `
                <div class="item" id="${data[j].id}">
                        <img class="productImg" src=".${data[j].productImg}" alt="">
                    <div class="itemInfo">
                        <p class="productName">${data[j].productName}</p>
                        <span class="discount">
                            <span>${data[j].priceAfter}</span>
                            <span>${data[j].priceBefore}</span>
                        </span>
                        <div style="display:flex; flex-direction: column; margin-top:10px; gap:5px">
                            <span>Total Amount : ${numInCart}</span>
                            <span>Total Price : ${totalPrice}</span>
                        </div>
                    <div class="empty-cart">
                    <img class="icon empty-cart-btn" src="../imgs/empty-cart.png" alt="">
                    </div>
                    </div>                        
                </div>
                    `;
  return content;
}


function removeFromCart(items, btn) {
  //   btn.classList.remove("hide");
  let cartBtns = document.querySelectorAll(".empty-cart-btn");
  cartBtns.forEach((cb) => {
    cb.addEventListener("click", () => {
      //   fb.style.backgroundColor = "red";
      let itemID =
        cb.parentElement.parentElement.parentElement.getAttribute("id");

      console.log(itemID);
      let itemRemove = cb.parentElement.parentElement.parentElement;
      array = array.filter((e) => e.id != itemID);
      console.log(array);
      localStorage.setItem("allInCart", JSON.stringify(array));
      itemRemove.remove();
      counter2.innerHTML--;
      noItems(btn);
    });
  });
}

function noItems(btn) {
  if (!array || array.length < 1) {
    btn.classList.add("hide");
    document.querySelector(".cart-page .container .products").innerHTML = `
                    <div class="noItems">
            <img src="../imgs/noItem.png" alt="">
            <p>Your Cart is Empty</p>
            <a href="../index.html">
                <button class="btn">Back To Home</button>
            </a>

        </div>
            `;
  } else {
    btn.classList.remove("hide");
  }
}




fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });
