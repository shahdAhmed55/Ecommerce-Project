
    import { counter1 as counter, counter2 } from "../scripts/counter.js"

let itemsInCart = [];
if (localStorage.getItem("allInCart")) {
  let y = JSON.parse(localStorage.getItem("allInCart"));
  console.log(y);
  for (let i = 0; i < y.length; i++) {
    itemsInCart.push(y[i]);
  }
}

let request = new XMLHttpRequest();
request.open("get", "../products.json");

let g = JSON.parse(localStorage.getItem("faverArayy"));
request.onload = () => {
  if (request.status == 200 && request.readyState == 4) {
    let data = JSON.parse(request.responseText);
    let param = new URLSearchParams(window.location.search);
    let productId = parseInt(param.get("id"));
    let products = data;
    console.log(products);
    let product = data.find((product) => product.id == productId);
    let relatedProductContainer = document.querySelector(".related-items");
    for (let i = 0; i < 5; i++) {
      relatedProductContainer.innerHTML += createRelatedItems(products[i]);
      let items = document.querySelectorAll(".item");
      items.forEach((item , u) => {
        redHeart(item, u , g);
        item.querySelector(".productImg").addEventListener("click", () => {
          window.location.href = `./oneProductDetails.html?id=${item.getAttribute(
            "id"
          )}`;
        });
      });
    }
    if (product) {
      document.querySelector(".container .product-infos").innerHTML =
        content(product);
    }
  }


  let numOfProduct = document.querySelector(".product-num");
  let productPrice = document.querySelector(".product-price").innerHTML;

  let addCartBtn = document.querySelector(".add-cart-btn");
  let popUpContainer = document.querySelector(".product-page .popUp");

  // popUpMessage(popUpContainer);
  numOfProductInCart(numOfProduct, productPrice);
  addToFavourite();
  addOneItemToFavourite();

  addCartBtn.addEventListener("click", () => {
    console.log("hi cart")
    let popup = `
                    <P>You add <span style="color:red">${Number(
                      numOfProduct.innerText
                    )}</span> product to cart</P>
                `;
    popUpContainer.classList.remove("hide");
    popUpContainer.innerHTML = popup;
    setTimeout(() => {
      popUpContainer.classList.add("hide");
    }, 3000);
// 
    saveInLs(productPrice, Number(numOfProduct.innerText));
  });
};

request.send();
let items = [];


  function content(product) {
    return `
            <div class="left">
                <div class="product-img">
                    <img src=".${product.productImg}" alt="">
                </div>
                <div class="discount-percent">${product.discountPercent}</div>
            </div>
            <div class="right item">
                <h1 class="productName">${product.productName}</h1>
                <div class="rate">
                    <img src="../imgs/Home/starts.svg" alt="">
                    <span>3.33</span>|<span>sku:E7f8g9h0</span>
                </div>
                <hr>
                <p>
                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                </p>
                    <span class="discount">
                            <span class="product-price">${product.priceAfter}</span>
                            <span>${product.priceBefore}</span>
                    </span>
                        <button class="btn green">order on WhatsApp</button>
                    <div class="special-offer">
                        <p>
                            <span>Special Offer :</span>
                            <span>81</span>
                            <span>81</span>
                            <span>81</span>
                            :
                            <span>81</span>
                            Remain untill the end of the offer
                        </p>
                    </div>
                        <div class="make-dission">
                            <div class="quantity">
                                <span class="minus-product">-</span> 
                                <span class="product-num">1</span> 
                                <span class="plus-product">+</span>  
                            </div>
                            <button class="btn green add-cart-btn">Add to cart</button>
                            <a style="width:50%" href = "../project_pages/checkout_page.html">
                            <button style="width:100%" class="btn black">Buy Now</button>
                            </a>
                        </div>
                    <div class="payment">
                        <div class="pay">
                         <img src="../imgs/oneProduct/Payment.png" alt="">
                           <p><span style="font-weight:bold">Payment</span>. Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                        </div>
                        <div class="pay">
                         <img src="../imgs/oneProduct/Warranty.png" alt="">
                           <p><span style="font-weight:bold">Warranty</span>. The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>
                    </div>
                    <div class="share-add-compare">
                        <div class="add action">
                            <span>
                                <img  src="../imgs/Header/love.svg" alt="">
                            </span>
                            Add to Wishlist
                        </div>
                        <div class="share action">
                            <span>
                                <img src="../imgs/oneProduct/share.png" alt="">
                            </span>
                            Share this Product
                        </div>
                        <div class="compare action">
                            <span>
                                <img src="../imgs/oneProduct/compare.png" alt="">
                            </span>
                            compare
                        </div>
                    </div>
                </div>
<hr>            
          `;
  }

function numOfProductInCart(numOfProduct, productPrice) {
  let minusBtn = document.querySelector(".minus-product");
  let plussBtn = document.querySelector(".plus-product");
  // let numOfProduct = document.querySelector(".product-num");
  minusBtn.addEventListener("click", () => {
    numOfProduct.innerHTML--;
    if (numOfProduct.innerHTML < 0) {
      numOfProduct.innerHTML = 0;
    }
    productsPricefunc(numOfProduct, productPrice);
  });
  plussBtn.addEventListener("click", () => {
    numOfProduct.innerHTML++;
    productsPricefunc(numOfProduct, productPrice);
  });
}

function productsPricefunc(numOfProduct, productPrice) {
  numOfProduct = Number(numOfProduct.innerText);
  productPrice = productPrice.slice(1);
  let res = numOfProduct * productPrice;
  return res;
}

function saveInLs(productPrice, numOfProduct) {
  productPrice = productPrice.slice(1);
  // console.log(productPrice ,numOfProduct)
  let param = new URLSearchParams(window.location.search);
  let itemid = parseInt(param.get("id"));
  let productName = document.querySelector(".productName").innerHTML
  console.log(productName)

  let item = {
    id: itemid,
    productName: productName,
    totalPrice: productPrice * numOfProduct,
    numOfProduct: numOfProduct,
  };
  
  const existItem = itemsInCart.findIndex(cI => cI.id === item.id);
  console.log(existItem)
  if (existItem !== -1) {
    itemsInCart[existItem].totalPrice += item.totalPrice;
    itemsInCart[existItem].numOfProduct += item.numOfProduct;

  } else {
    itemsInCart.push(item);
    counter2.innerHTML++;
  }
  localStorage.setItem("allInCart", JSON.stringify(itemsInCart));
}

function createRelatedItems(product , item) {
  // redHeart(item, u, y);
  let RelatedItem = `
                <div class="item" id="${product.id}" date-category="${product.dateCategory}">
                        <img class="productImg" src=".${product.productImg}" alt="">
                        <div class="infos">
                            <div class="classify ${product.classify}" >
                                <img class="addToFaver" src=".${product.loveIcon}" alt="">
                            </div>
                            <span class="discount-percent">
                                ${product.discountPercent}
                            </span>
                        </div>
                        <p class="productName">${product.productName}</p>
                    <div style = "    display: flex;justify-content: space-between;align-items: center;">
                            <span class="discount">
                            <span>${product.priceAfter}</span>
                            <span>${product.priceBefore}</span>
                        </span>
                        <img class="addToCart" src=".${product.addCartIcon}" alt="">
                    </div>
                        <hr class= "${product.classHide}" style="margin-top: 10px;"">
                        <p  class="run-out ${product.classHide}">This product is about to run out</p>
                        <hr class= "second ${product.classHide}">
                        <span class="available ${product.classHide}">available only: <span>${product.available}</span></span>
                </div>
        `;
  return RelatedItem;
}

let faverArray = [];
if (localStorage.getItem("faverArayy")) {
  faverArray = JSON.parse(localStorage.getItem("faverArayy"));
}
function addToFavourite() {
  let faverBtns = document.querySelectorAll(".addToFaver");
  faverBtns.forEach((fb) => {
    fb.addEventListener("click", () => {
      fb.src = "../imgs/red-heart.png"
      let itemID =
        fb.parentElement.parentElement.parentElement.getAttribute("id");

      console.log(itemID);
      if (!faverArray.includes(Number(itemID))) {
        counter.innerHTML++;
        faverArray.push(Number(itemID));
      }
      localStorage.setItem("faverArayy", JSON.stringify(faverArray));
    });
  });
}

function addOneItemToFavourite() {
  let add = document.querySelector(".add");
  console.log(add);
  add.addEventListener("click", () => {
    let param = new URLSearchParams(window.location.search);
    let itemid = parseInt(param.get("id"));

    if (!faverArray.includes(Number(itemid))) {
      counter.innerHTML++;
      faverArray.push(Number(itemid));
    }
    console.log(faverArray);
    localStorage.setItem("faverArayy", JSON.stringify(faverArray));
  });
}

fetch("./footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });



function redHeart(item, u, g) {
    console.log(g)
    let faverBtns = document.querySelectorAll(".addToFaver");
    for (let i = 0; i < g.length; i++) {
      if (Number(item.id) === Number(g[i])) {
        console.log(g[i]);
        (faverBtns[u].src = "../imgs/red-heart.png");
      }
    }
  }