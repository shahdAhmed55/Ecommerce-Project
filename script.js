// let request = new XMLHttpRequest();
// request.open("GET", "www.themealdb.com/api/json/v1/1/random.php", true);
// request.send();
// console.log(request);
        let counter = document.querySelector(".counter-love");
        if(localStorage.getItem("faverArayy")){
counter.innerHTML = JSON.parse(localStorage.getItem("faverArayy")).length 
        }
        counter.innerHTML = 0


let disscountIntros = [
  {
    id: 0,
    img: "./imgs/Home/bg/bg01.png",
    title: "Get the best quality products at the lowest prices",
    priceAfter: "$21.67",
    priceBefore: "$59.99",
  },
  {
    id: 1,
    img: "./imgs/Home/bg/bg02.png",
    title: "Shopping with us for better quality and the best price",
    priceAfter: "$21.67",
    priceBefore: "$26.67",
  },
  {
    id: 1,
    img: "./imgs/Home/bg/bg03.png",
    title: "Shopping with us for better quality and the best price",
    priceAfter: "$27.99",
    priceBefore: "$56.67",
  },
];

// console.log(disscountIntros);

let container = document.querySelector(".intro-page");
let currentIndex = 0;
function contentOnIntroPage() {
  return `
    <div class="product-disscount">
      <img src="${disscountIntros[currentIndex].img}" alt="">
        <div class="container">
          <div class="content">
              <h5>Weekend Discount</h5>
                <h1>${disscountIntros[currentIndex].title}</h1>
                      <p>We have prepared special discounts for you on grocery products.
                        Don't miss these opportunities...
                      </p>
                      <div class="shop-now">
                      <button class="btn">Shop Now</button>
                        <div class="text">
                        <span class="discount">
                        <span>${disscountIntros[currentIndex].priceAfter}</span>
                          <span>${disscountIntros[currentIndex].priceBefore}</span>
                        </span>
                    <p>Don't miss this limited time offer</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
`;
}
function changeDisscountProduct() {
  console.log(currentIndex);
  let content = contentOnIntroPage();
  container.innerHTML = content;
  let p = document.querySelector(".product-disscount");
  p.style.right = "-100%";
  setTimeout(() => {
    p.style.right = "0";
  }, 100);
  currentIndex = (currentIndex + 1) % disscountIntros.length;
  console.log(currentIndex);
}

changeDisscountProduct();

setInterval(changeDisscountProduct, 5000);

//first categories
let categoriesTitles = [
  "Fruits & Vegetables",
  "Baby & Pregnancy",
  "Beverages",
  "Meats & Seafood",
  "Biscuits & Snacks",
  "Breads & Bakery",
  "Breaksfast & Dairy",
  "Frozen Foods",
  "Grocery & Staples",
];
let box = document.createElement("div");
box.classList.add("category-box");
let categoryContainer = document.querySelector(".category .container");
for (let i = 1; i <= categoriesTitles.length; i++) {
  let content = `
    <div class="category-box">
            <img src="./imgs/Home/category/category-${i}.png" alt="">
            <h5>${categoriesTitles[i - 1]}</h5>
    </div>
  `;
  categoryContainer.innerHTML += content;
}

let products = [
  {
    id: 0,
    productImg: "./imgs/Home/product/product-1.png",
    productName: "100 Percent Apple Juice – 64fl oz Bottle",
    priceAfter: "$0.50",
    priceBefore: "$1.99",
    available: "23",
    discountPercent: "75%",
    classify: "Organic",
    classifyIcon: "./imgs/Home/product/icon/organic.png",
  },
  {
    id: 1,
    productImg: "./imgs/Home/product/product-2.png",
    productName: "Great Value Rising , Supreme",
    priceAfter: "$8.99",
    priceBefore: "$9.99",
    available: "18",
    discountPercent: "75%",
    classify: "Cold-Sale",
    classifyIcon: "./imgs/Home/product/icon/cold.png",
  },
  {
    id: 2,
    productImg: "./imgs/Home/product/product-3.png",
    productName: "Simply Orange Pulp Free Juice – 52 fl oz",
    priceAfter: "$2.45",
    priceBefore: "$4.13",
    available: "27",
    discountPercent: "75%",
    classify: "hide",
  },
  {
    id: 3,
    productImg: "./imgs/Home/product/product-4.png",
    productName: "California Pizza Kitchen Margherita…",
    priceAfter: "$11.77",
    priceBefore: "$14.77",
    available: "19",
    discountPercent: "75%",
    classify: "Cold-Sale",
    classifyIcon: "./imgs/Home/product/icon/cold.png",
  },
  {
    id: 4,
    productImg: "./imgs/Home/product/product-5.png",
    productName: "Cantaloupe Melon FreshOrganic Cut",
    priceAfter: "$1.25",
    priceBefore: "$2.98",
    available: "16",
    discountPercent: "75%",
    classify: "Organic",
    classifyIcon: "./imgs/Home/product/icon/organic.png",
  },
  {
    id: 5,
    productImg: "./imgs/Home/product/product-6.png",
    productName: "Angel Soft Toilet Paper, 9Mega Rolls",
    priceAfter: "$14.12",
    priceBefore: "$17.12",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
  },
  {
    id: 7,
    productImg: "./imgs/Home/product/product-7.png",
    productName:
      "A&W Caffeine-Free, Low Sodium Root Beer Soda Pop, 2 Liter Bottles",
    priceAfter: "$9.50",
    priceBefore: "$11.20",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
  },

  {
    id: 8,
    productImg: "./imgs/Home/product/product-9.png",
    productName: "USDA Choice Angus Beef T-Bone Steak – 0.70-1.50 lbs …",
    priceAfter: "$14.12",
    priceBefore: "$17.12",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
    classHide: "hide",
  },
  {
    id: 9,
    productImg: "./imgs/Home/product/product-10.png",
    productName: "Real Plant-Powered Protein Shake – Double Chocolate …",
    priceAfter: "$14.89",
    priceBefore: "$17.89",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
    classHide: "hide",
  },
  {
    id: 10,
    productImg: "./imgs/Home/product/product-11.png",
    productName: "Great Value Rising Crust Pizza, Cheese, 27.4 oz",
    priceAfter: "$12.89",
    priceBefore: "$14.89",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
    classHide: "hide",
  },

  {
    id: 11,
    productImg: "./imgs/Home/product/product-12.png",
    productName: "Large Garden Spinach & Herb Wrap Tortillas – 15oz_6ct",
    priceAfter: "$27.90",
    priceBefore: "$32.90",
    available: "32",
    discountPercent: "75%",
    classify: "hide",
    classHide: "hide",
  },
];

let productContainer = document.querySelector(".new-products");

let o = 0;
function itemProduct() {
  return `
                        <div class="item" id="${products[o].id}">
                        <img class="productImg" src="${products[o].productImg}" alt="">
                        <div class="infos">
                            <div class="classify ${products[o].classify}" >
                                <img class="${products[o].classify}" src="${products[o].classifyIcon}" alt="">
                              <span class="${products[o].classify}">${products[o].classify}</span>
                            </div>
                            <span class="discount-percent">
                               ${products[o].discountPercent}
                            </span>
                        </div>
                        <p class="productName">${products[o].productName}</p>

                        <span class="discount">
                            <span>${products[o].priceAfter}</span>
                            <span>${products[o].priceBefore}</span>
                        </span>

                        <hr class= "${products[o].classHide}" style="margin-top: 10px;"">
                        <p  class="run-out ${products[o].classHide}">This product is about to run out</p>
                        <hr class= "second ${products[o].classHide}">
                        <span class="available ${products[o].classHide}">available only: <span>${products[o].available}</span></span>
                    </div>
  `;
}

//? add product to new products section
function addProduct() {
  productContainer.innerHTML += itemProduct();
}

for (o = 0; o < products.length; o++) {
  if (o == 6) break;
  addProduct();
}

let productsOnNewArraivalsDiv = document.querySelector(".new-arrivals .right");
for (o = 7; o < products.length; o++) {
  productsOnNewArraivalsDiv.innerHTML += itemProduct();
}

let productsOnThisweek = [
  {
    img: "./imgs/Home/onThisWeek-1.png",
    title: "Provides you the quality that’s you expected",
    decripe: "Feed your family the best",
  },
  {
    img: "./imgs/Home/onThisWeek-2.png",
    title: "Grocery store at the center of the city",
    decripe: "Only this week. Don’t miss...",
  },
  {
    img: "./imgs/Home/onThisWeek-3.png",
    title: "Grocery store at the center of the city",
    decripe: "Only this week. Don’t miss...",
  },
  {
    img: "./imgs/Home/onThisWeek-4.png",
    title: "Grocery store at the center of the city",
    decripe: "Only this week. Don’t miss...",
  },
  {
    img: "./imgs/Home/onThisWeek-5.png",
    title: "Grocery store at the center of the city",
    decripe: "Only this week. Don’t miss...",
  },

  {
    img: "./imgs/Home/onThisWeek-5.png",
    title: "Grocery store at the center of the city",
    decripe: "Only this week. Don’t miss...",
    classHide: "hide",
  },
];
// create on this week product
let productsOnThisweekDivs = document.querySelectorAll(".on-this-week");
// let productsOnThisweekDiv2 = document.querySelector(".on-this-week")[1];

let i = 0;
function addproductsOnThisweek() {
  return (content = `
    <div class="product-on-this-week">
      <img src="${productsOnThisweek[i].img}" alt="">
      
          <div class="content">
              <h5>Only This Week</h5>
                <h1>${productsOnThisweek[i].title}</h1>
                      <p>${productsOnThisweek[i].decripe}</p>
            <button  class="${productsOnThisweek[i].classHide} view-all-btn">Shop Now</button>
        </div>
    </div>
  `);
}

for (i = 0; i < productsOnThisweek.length; i++) {
  if (i == 2) break;
  productsOnThisweekDivs[0].innerHTML += addproductsOnThisweek();
}
for (i = 2; i < productsOnThisweek.length; i++) {
  if (i == 5) break;
  productsOnThisweekDivs[1].innerHTML += addproductsOnThisweek();
}

let newArraivalsLeftSection = document.querySelector(".new-arrivals .left");
for (i = 5; i < productsOnThisweek.length; i++) {
  // if(i == 5)break;
  newArraivalsLeftSection.innerHTML += addproductsOnThisweek();
}


  let items = document.querySelectorAll(".item");
  console.log(items)
            items.forEach((item) => {
                item.querySelector(".productImg").addEventListener("click", () => {
                    window.location.href = `./project_pages/oneProductDetails.html?id=${item.getAttribute("id")}`;
                })
            })