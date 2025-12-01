import { counter1 as counter, counter2 } from "./counter.js";

let numOfShownItems = [];
let numOfItem = document.querySelector(".num-showed-items span");
let categories = [
  "Fruits & Vegetables",
  "Baby & Pregnancy",
  "Beverages",
  "Meats & Seafood",
  "Breads & Bakery",
  "Candy & snacks",
  "Grocery & Staples",
  "Healthcare",
];
let categoriesNames = [
  "fruits",
  "Baby",
  "Beverages",
  "Meat",
  "Breads",
  "candy",
  "Grocery",
  "Healthcare",
];
let productCategoriesDiv = document.querySelector(
  ".allProduct-page .container .left  .product-categories"
);




for (let i = 0; i < categories.length; i++) {
  let content = `
            <label  for="fruit">${categories[i]}</label>
            <input type="checkbox" value="${categoriesNames[i]}"><br>
            `;
  productCategoriesDiv.innerHTML += content;
}
//? change color
let colorNameSpan = document.querySelector(
  ".allProduct-page .container .left  .filter-by-color span"
);
let color = document.querySelector(
  ".allProduct-page .container .left  .filter-by-color input"
);
color.addEventListener("input", () => {
  colorNameSpan.innerHTML = color.value;
});
//change max-price ;
let rangeValue = document.querySelector(
  `.widget-price-filter  input[type = "range"]`
);
rangeValue.addEventListener("input", () => {
  document.querySelector(
    ".widget-price-filter .range-price .max input"
  ).placeholder = rangeValue.value;
  document.querySelector(".widget-price-filter .filter-div .max ").innerHTML =
    rangeValue.value;
});


let request = new XMLHttpRequest();
request.open("GET", "../products.json", "true");
request.send();
request.onload = () => {
  let rightDiv = document.querySelector(".right .items-big-box");
  if (request.status == 200 && request.readyState == 4) {
    let data = JSON.parse(request.responseText);
    for (let product of data) {
     
      let output = `
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
                    </div>
                </div>
            `;
      rightDiv.innerHTML += output;

    

      
    }
  }
  let g = JSON.parse(localStorage.getItem("faverArayy"));
  let items = document.querySelectorAll(".item");
  items.forEach((item , u ) => {
    redHeart(item, u , g);
    item.querySelector(".productImg").addEventListener("click", () => {
      window.location.href = `../project_pages/oneProductDetails.html?id=${item.getAttribute(
        "id"
      )}`;
    });
  });
  filterCheckBoxs(items);
  addToFavourite(items);

};
function filterCheckBoxs(items) {
  let checkBoxs = document.querySelectorAll(`input[type = "checkbox"]`);
  checkBoxs.forEach((checkbox) => {
    checkbox.addEventListener("input", () => {
      const selected = Array.from(checkBoxs)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);
      items.forEach((item) => {
        let category = item.getAttribute("date-category");
        if (selected == category || selected.length === 0) {
          item.classList.remove("hide");
        } else if (selected.length >= 2) {
          for (let i = 0; i < selected.length; i++) {
            if (selected[i] == category) {
              item.classList.remove("hide");
            }
          }
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
}

function addToFavourite(items) {
  let faverBtns = document.querySelectorAll(".addToFaver");
  let faverArray = [];
  if (localStorage.getItem("faverArayy")) {
    faverArray = JSON.parse(localStorage.getItem("faverArayy"));
  }
  faverBtns.forEach((fb) => {
    fb.addEventListener("click", () => {
      // fb.style.backgroundColor = "red";
      fb.src = "../imgs/red-heart.png";
      let itemID =
        fb.parentElement.parentElement.parentElement.getAttribute("id");
      if (!faverArray.includes(Number(itemID))) {
        counter.innerHTML++;
        faverArray.push(Number(itemID));
      }
      localStorage.setItem("faverArayy", JSON.stringify(faverArray));
     
    });
  });
}


function redHeart(item ,u , g) {
  if (g) {
       let faverBtns = document.querySelectorAll(".addToFaver");
       for (let i = 0; i < g.length; i++) {
         if (Number(item.id) === Number(g[i])) {
           console.log(g[i]);
           return (faverBtns[u].src = "../imgs/red-heart.png");
         }
       }
     }
}



fetch("../project_pages/footer.html").then(response => 
  response.text()
).then(data=>{
  let footer = document.createElement("footer");
  footer.innerHTML=data
document.body.append(footer);
})