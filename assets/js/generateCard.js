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
  let card = document.createElement("section"); // card
  card = styleCard(card);

  let areaImg = document.createElement("article");
  areaImg.style.width = "180px";
  areaImg.style.height = "150px";
  areaImg.style.overflow = "hidden";
  areaImg.style.margin = "10px";
  areaImg.style.borderRadius = "15px";

  const img = document.createElement("img");
  img.setAttribute("src", repas.img);
  img.setAttribute("alt", "image du pays");

  const infos = document.createElement("div");
  infos.style.display = "flex";
  infos.style.flexDirection = "column";

  const titre = document.createElement("h2");
  titre.innerHTML = repas.name;
  titre.style.textAlign = "center";

  card.appendChild(areaImg);
  areaImg.appendChild(img);
  card.appendChild(infos);
  infos.appendChild(titre);

  return card;
};

// all Card
const createAllCards = (collection) => {
  const container = document.querySelector(".main__collection");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";

  for (const repas of collection) {
    const generatedCard = generateCard(repas);
    container.appendChild(generatedCard);
  }
};

const styleCard = (card) => {
  card.style.width = "200px";
  card.style.height = "350px";
  card.style.border = "solid";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.margin = "15px";
  card.style.borderRadius = "15px";
  card.style.overflow = "hidden";
  card.style.boxShadow = "5px 5px 5px #4d4d4d";

  return card;
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
