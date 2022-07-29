// Data
const repas_data = [
  {
    img: "assets/img/cone.png",
    name: "Salmon Cone",
    description:
      "A delicate blend of salmon and rice wrapped in a seaweed leaf",
    price: 5.45,
    addInCart: "assets/img/cone.png",
    sort: "Maki",
  },
  {
    img: "assets/img/eggmaki.png",
    name: "Egg Maki",
    description: "Fish eggs surrounded by seaweed leaves",
    price: 6.15,
    addInCart: "assets/img/cone.png",
    sort: "Maki",
  },
  {
    img: "assets/img/meatballs.png",
    name: "Meatballs",
    description: "Famous duo of meatball skewers in soy sauce",
    price: 6.8,
    addInCart: "assets/img/meatballs.png",
    sort: "Other",
  },
  {
    img: "assets/img/noodle.png",
    name: "Noodle",
    description:
      "Homemade noodles with choice of side dishes (chicken/beef/fish)",
    price: 9.55,
    addInCart: "assets/img/noodle.png",
    sort: "Plate",
  },
  {
    img: "assets/img/salmonmaki.png",
    name: "Salmon Maki",
    description: "Salmon maki, a classic that has proven itself",
    price: 4.9,
    addInCart: "assets/img/salmonmaki.png",
    sort: "Maki",
  },
  {
    img: "assets/img/salmonsushi.png",
    name: "Salmon Sushi",
    description: "The classic salmon sushi, a must-have",
    price: 4.8,
    addInCart: "assets/img/salmonsushi.png",
    sort: "Sushi",
  },
  {
    img: "assets/img/shrimps.png",
    name: "Shrimps",
    description: "Our trio of freshly caught shrimp with chili sauce",
    price: 6.8,
    addInCart: "assets/img/shrimps.png",
    sort: "Other",
  },
  {
    img: "assets/img/soup.png",
    name: "Soup",
    description:
      "Traditional Japanese cooking recipe of miso and dashi based broth",
    price: 8.2,
    addInCart: "assets/img/soup.png",
    sort: "Plate",
  },
  {
    img: "assets/img/sushi.png",
    name: "Sushi",
    description:
      "Sushi made of rice with vinegar and another ingredient of your choice",
    price: 4.8,
    addInCart: "assets/img/sushi.png",
    sort: "Sushi",
  },
  {
    img: "assets/img/vegemaki.png",
    name: "Vegemaki",
    description: "The undeniable maki made only with vegetarian ingredients",
    price: 4.8,
    addInCart: "assets/img/vegemaki.png",
    sort: "Maki",
  },
];

const generateCard = (repas, i) => {
  let card = document.createElement("section");
  card.setAttribute("class", "card"); // card

  // IMAGE CONTAINER
  let areaImg = document.createElement("article");
  areaImg.setAttribute("class", "areaImg");
  // IMAGE
  const img = document.createElement("img");
  img.setAttribute("src", repas.img);
  img.setAttribute("alt", "image du pays");
  // TITLE + DESCRIPTION
  const infos = document.createElement("div");
  infos.setAttribute("class", "infos");
  //  TITLE
  const titre = document.createElement("h2");
  titre.setAttribute("class", "titre");
  titre.innerHTML = repas.name;
  //  DESCRIPTION
  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerHTML = repas.description;
  // CARD FOOTER
  const cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "cardFooter");
  // PRICE
  const price = document.createElement("p");
  price.setAttribute("class", "price");
  price.innerHTML = repas.price;
  // ADD  IMG CART BUTTON
  // const imgButton = document.createElement("img")
  // imgButton.setAttribute("class", "imgButton")
  // imgButton.setAttribute("src", "./assets/img/add.png")
  // ADD CART BUTTON
  const cartButton = document.createElement("input");
  cartButton.setAttribute("class", "cartButton");
  cartButton.setAttribute("type", "image");
  cartButton.setAttribute("src", "./assets/img/add.png");
  cartButton.setAttribute("data-position", i);

  card.appendChild(areaImg);
  areaImg.appendChild(img);
  card.appendChild(infos);
  infos.appendChild(titre);
  infos.appendChild(description);
  card.appendChild(cardFooter);
  cardFooter.appendChild(price);
  cardFooter.appendChild(cartButton);

  return card;
};

// all Card
const createAllCards = (collection) => {
  const container = document.querySelector(".main__collection");
  container.classList.add("container");

  let i = 0;
  for (const repas of collection) {
    const generatedCard = generateCard(repas, i);
    container.appendChild(generatedCard);
    i++;
  }
};

window.onload = createAllCards(repas_data);

// Filter JS

// Filter = Maki, Sushi, Plate, Other;
// Recovery of values "sort"

const butMaki = document.querySelector(".maki");
butMaki.addEventListener("click", () => {
  const papa = document.querySelector(".main__collection");
  while (papa.firstChild) {
    papa.removeChild(papa.lastChild);
  }
  createAllCards(Makis);
});

const butSushi = document.querySelector(".sushi");
butSushi.addEventListener("click", () => {
  const papa = document.querySelector(".main__collection");
  while (papa.firstChild) {
    papa.removeChild(papa.lastChild);
  }
  createAllCards(Sushis);
});

const butPlate = document.querySelector(".plate");
butPlate.addEventListener("click", () => {
  const papa = document.querySelector(".main__collection");
  while (papa.firstChild) {
    papa.removeChild(papa.lastChild);
  }
  createAllCards(Plates);
});

const butOther = document.querySelector(".other");
butOther.addEventListener("click", () => {
  const papa = document.querySelector(".main__collection");
  while (papa.firstChild) {
    papa.removeChild(papa.lastChild);
  }
  createAllCards(Others);
});

const butAll = document.querySelector(".all");
butAll.addEventListener("click", () => {
  const papa = document.querySelector(".main__collection");
  while (papa.firstChild) {
    papa.removeChild(papa.lastChild);
  }
  createAllCards(repas_data);
});

const Makis = repas_data.filter(function (maki) {
  return maki.sort === "Maki";
});

const Sushis = repas_data.filter(function (sushi) {
  return sushi.sort === "Sushi";
});

const Plates = repas_data.filter(function (Plate) {
  return Plate.sort === "Plate";
});

const Others = repas_data.filter(function (other) {
  return other.sort === "Other";
});

// Burger menu

const navMenu = document.querySelector(".nav__menu");
const sushiMenu = document.querySelector(".sushi__menu");
const closeMenu = document.querySelector(".close__menu");

sushiMenu.onclick = openNav;
closeMenu.onclick = closeNav;

function openNav() {
  navMenu.classList.remove("hideBut");
  navMenu.classList.add("openBut");
  sushiMenu.style.display = "none";
}

function closeNav() {
  navMenu.classList.add("hideBut");
  navMenu.classList.remove("openBut");
  sushiMenu.style.display = "block";
}

// SHOPPING CART
let shoppingCart_data = [];
const addToCart = document.querySelectorAll(".cartButton");

for (let item of addToCart) {
  let pos = item.getAttribute("data-position");
  item.addEventListener("click", () => {
    addItem(pos);
  });
}

function addItem(pos) {
  let quantity = 1;
  let update = false;
  const name = repas_data[pos].name;
  const price = repas_data[pos].price;
  let position;

  for (let i = 0; i < shoppingCart_data.length; i++) {
    const element = shoppingCart_data[i];
    if (element.name == name) {
      quantity = element.quantity + 1;
      update = true;
      position = i;
      break;
    }
  }
  if (update) {
    shoppingCart_data[position].quantity = quantity;
  } else {
    shoppingCart_data.push({ name, price, quantity });
  }

  console.log(shoppingCart_data);
}

// Shopping Cart Menu

const butOrder = document.querySelector(".nav__button");
const shopcart = document.querySelector(".shoppingCart");
const closeCart = document.querySelector(".close__shop");

butOrder.onclick = openCart;
closeCart.onclick = closed;

function openCart() {
  shopcart.classList.remove("shoppingCart--hide");
  shopcart.classList.add("shoppingCart");
}

function closed() {
  shopcart.classList.remove("shoppingCart");
  shopcart.classList.add("shoppingCart--hide");
}
