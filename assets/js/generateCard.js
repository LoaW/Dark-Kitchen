// Data
const repas_data = [
  {
    img: "assets/img/cone.png",
    name: "Salmon Cone",
    description: "Blablabla",
    price: 6.15,
    addInCart: "assets/img/cone.png",
    sort: "Maki",
  },
  {
    img: "assets/img/eggmaki.png",
    name: "Egg Maki",
    description: "Blablabla",
    price: 6.15,
    addInCart: "assets/img/cone.png",
    sort: "Maki",
  },
  {
    img: "assets/img/meatballs.png",
    name: "Meatballs",
    description: "Blablabl",
    price: 6.15,
    addInCart: "assets/img/meatballs.png",
    sort: "Other",
  },
  {
    img: "assets/img/noodle.png",
    name: "Noodle",
    description: "Blablabla",
    price: 6.15,
    addInCart: "assets/img/noodle.png",
    sort: "Plate",
  },
  {
    img: "assets/img/salmonmaki.png",
    name: "Salmon Maki",
    description: "Blablabla",
    price: 6.15,
    addInCart: "assets/img/salmonmaki.png",
    sort: "Maki",
  },
  {
    img: "assets/img/salmonsushi.png",
    name: "Salmon Sushi",
    description: "blablabla",
    price: 6.15,
    addInCart: "assets/img/salmonsushi.png",
    sort: "Sushi",
  },
  {
    img: "assets/img/shrimps.png",
    name: "Shrimps",
    description: "blablabla",
    price: 6.15,
    addInCart: "assets/img/shrimps.png",
    sort: "Other",
  },
  {
    img: "assets/img/soup.png",
    name: "Soup",
    description: "blablabla",
    price: 6.15,
    addInCart: "assets/img/soup.png",
    sort: "Plate",
  },
  {
    img: "assets/img/sushi.png",
    name: "Sushi",
    description: "blablabla",
    price: 6.15,
    addInCart: "assets/img/sushi.png",
    sort: "Sushi",
  },
  {
    img: "assets/img/vegemaki.png",
    name: "Vegemaki",
    description: "blablabla",
    price: 6.15,
    addInCart: "assets/img/vegemaki.png",
    sort: "Maki",
  },
];

const generateCard = (repas) => {
  let card = document.createElement("section")
  card.setAttribute("class", "card") // card

  // IMAGE CONTAINER
  let areaImg = document.createElement("article")
  areaImg.setAttribute("class", "areaImg")
  // IMAGE
  const img = document.createElement("img")
  img.setAttribute("src", repas.img)
  img.setAttribute("alt", "image du pays")
  // TITLE + DESCRIPTION
  const infos = document.createElement("div")
  infos.setAttribute("class", "infos")
  //  TITLE
  const titre = document.createElement("h2")
  titre.setAttribute("class", "titre")
  titre.innerHTML = repas.name
  //  DESCRIPTION
  const description = document.createElement("p")
  description.setAttribute("class", "description")
  description.innerHTML = repas.description
  // CARD FOOTER
  const cardFooter = document.createElement("div")
  cardFooter.setAttribute("class", "cardFooter")
  // PRICE
  const price = document.createElement("p")
  price.setAttribute("class", "price")
  price.innerHTML = repas.price
  // ADD CART BUTTON
  const addButton = document.createElement("img")
  addButton.setAttribute("class", "addButton")
  addButton.setAttribute("src", "./assets/img/add.png")
  
  card.appendChild(areaImg)
  areaImg.appendChild(img)
  card.appendChild(infos)
  infos.appendChild(titre)
  infos.appendChild(description)
  card.appendChild(cardFooter)
  cardFooter.appendChild(price)
  cardFooter.appendChild(addButton)

  return card;
}

// all Card
const createAllCards = (collection) => {
    const container = document.querySelector(".main__collection")
    container.classList.add("container")
     
 

  for (const repas of collection) {
    const generatedCard = generateCard(repas);
    container.appendChild(generatedCard);
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

//chop card


