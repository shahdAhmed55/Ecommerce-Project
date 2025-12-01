import { counter1 as counter, counter2 } from "./counter.js";
let infos = [
  {
    img: "../imgs/blog-1.svg",
    title: "How grocers are approaching delivery as the market evolves",
  },
  {
    img: "../imgs/blog-2.svg",
    title: "The Friday Checkout: Food insecurity keeps retailers off balance",
  },
  {
    img: "../imgs/blog-3.svg",
    title: "Consumer want grocer to use AI to help them save money Dunnhumby",
  },
];

let boxesContainer = document.querySelector(".blog-page .left");
let postsContainer = document.querySelector(".blog-page .right .up");
let cardsContainer = document.querySelector(".blog-page .right .card-box");

for (let info of infos) {
  let box = `
                <div class="box">
                    <img class="box-img" src="${info.img}" alt="">
                    <h1>${info.title}</h1>
                    <div class="time">
                        <span>November 3, 2023</span>
                        <span>Klbtheme, store, themeforest </span>
                    </div>
                    <p>Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran.
                        Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,
                        och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom
                        tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper</p>
                    <button class="btn">Read More</button>
                </div>
             
        `;
  boxesContainer.innerHTML += box;

  let post = `
                <div class="post">
                    <img src="${info.img}" alt="">
                    <div>
                        <p>${info.title}</p>
                        <span>November 3, 2023</span>
                    </div>
                </div>
            `;
  postsContainer.innerHTML += post;
}

let socials = [
  {
    color: "1877F2",
    img: "../imgs/s-1.png",
    name: "facebook",
  },
  {
    color: "1DA1F2",
    img: "../imgs/s-2.png",
    name: "twitter",
  },
  {
    color: "FD1D1D",
    img: "../imgs/s-3.png",
    name: "instagram",
  },
  {
    color: "0077B5",
    img: "../imgs/s-4.png",
    name: "linkedin",
  },
];

for (s of socials) {
  let card = `
                <div class="card" style="background-color: #${s.color};">
                        <img src="${s.img}" alt="">
                        ${s.name}
                </div>
        `;

  cardsContainer.innerHTML += card;
}

fetch("../project_pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    let footer = document.createElement("footer");
    footer.innerHTML = data;
    document.body.append(footer);
  });
