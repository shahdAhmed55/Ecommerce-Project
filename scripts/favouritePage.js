let counter = document.querySelector(".counter-love");
console.log(counter);
let array = JSON.parse(localStorage.getItem("faverArayy"));
if (array) {
  counter.innerHTML = array.length;
} else {
  counter.innerHTML = 0;
}

noItems(array);
let request = new XMLHttpRequest();
request.open("get", "../products.json");
request.onload = () => {
  if (request.status == 200 && request.readyState == 4 && array) {
    let data = JSON.parse(request.responseText);
    console.log(data);
    console.log(array);
    array = JSON.parse(localStorage.getItem("faverArayy"));
    for (let i = 0; i < array.length; i++) {
      for (product of data) {
        if (product.id == array[i]) {
          let content = `
                         <div class="item" id="${product.id}">
                        <img class="productImg" src=".${product.productImg}" alt="">
                        <div class="itemInfo">
                            <div class="infos">
                            <div class="classify ${product.classify}" >
                                <img class="removeFromFaver" src=".${product.loveIcon}" alt="">
                                
                              <span class="${product.classify}">${product.classify}</span>
                            </div>
                            <span class="discount-percent">
                               ${product.discountPercent}
                            </span>
                        </div>
                        <p class="productName">${product.productName}</p>

                        <span class="discount">
                            <span>${product.priceAfter}</span>
                            <span>${product.priceBefore}</span>
                        </span>
                        </div>                        
                    </div>
                    `;
          document.querySelector(".favourite-page .container").innerHTML +=
            content;
        }
      }
    }
  }
  let items = document.querySelectorAll(".item");
  removeFromLove(items);
};
request.send();
function removeFromLove(items) {
  let faverBtns = document.querySelectorAll(".removeFromFaver");
  faverBtns.forEach((fb) => {
    fb.addEventListener("click", () => {
      fb.style.backgroundColor = "red";
      let itemID =
        fb.parentElement.parentElement.parentElement.parentElement.getAttribute(
          "id"
        );
      let itemRemove =
        fb.parentElement.parentElement.parentElement.parentElement;
      array = array.filter((e) => e != itemID);
      localStorage.setItem("faverArayy", JSON.stringify(array));
      itemRemove.remove();
      counter.innerHTML--;
      noItems(array);
    });
  });
}

function noItems(array) {
  if (!array || array.length === 0) {
    document.querySelector(".favourite-page .container").innerHTML = `
                    <div class="noItems">
            <img src="../imgs/noItem.png" alt="">
            <p>There is no Items in Favourite</p>
            <a href="../index.html">
                <button class="btn">Back To Home</button>
            </a>

        </div>
            `;
  }
}


fetch("../project_pages/footer.html").then(response => 
  response.text()
).then(data=>{
  let footer = document.createElement("footer");
  footer.innerHTML=data
document.body.append(footer);
})