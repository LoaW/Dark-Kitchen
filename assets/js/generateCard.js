// Data
const repas_data = [
    {
      img: "assets/img/cone.png",
      name: "Salmon Cone",
      description: "A thin slice of salmon and rice, wrapped in a seaweed leaf",
      price: 6.15,
      addInCart: "assets/img/cone.png",
    },
    {
      img: "assets/img/eggmaki.png",
      name: "Egg Maki",
      description: "A delicate handful of fish roe wrapped in a seaweed leaf",
      price: 6.15,
      addInCart: "assets/img/cone.png",
    },
    {
      img: "assets/img/meatballs.png",
      name: "Meatballs",
      description: "Our delicious meatball skewer duo",
      price: 6.15,
      addInCart: "assets/img/meatballs.png",
    },
    {
      img: "assets/img/noodle.png",
      name: "Noodle",
      description: "The bowl of noodles (chicken, beef, shrimp), simple and perfect ",
      price: 6.15,
      addInCart: "assets/img/noodle.png",
    },
    {
      img: "assets/img/salmonmaki.png",
      name: "Salmon Maki",
      description: "A tasty tuna maki ",
      price: 6.15,
      addInCart: "assets/img/salmonmaki.png",
    },
    {
      img: "assets/img/salmonsushi.png",
      name: "Salmon Sushi",
      description: "A delicate tuna or salmon sushi, the base of any good bento ",
      price: 6.15,
      addInCart: "assets/img/salmonsushi.png",
    },
    {
      img: "assets/img/shrimps.png",
      name: "Shrimps",
      description: "Fresh shrimp expertly spiced by the chef",
      price: 6.15,
      addInCart: "assets/img/shrimps.png",
    },
    {
      img: "assets/img/soup.png",
      name: "Soup",
      description: "Noodle broths, with fish, meat, vegetables, seaweed, egg, and miso or soy sauce seasoning...",
      price: 6.15,
      addInCart: "assets/img/soup.png",
    },
    {
      img: "assets/img/sushi.png",
      name: "Sushi",
      description: "blablabla",
      price: 6.15,
      addInCart: "assets/img/sushi.png",
    },
    {
      img: "assets/img/vegemaki.png",
      name: "Vegemaki",
      description: "blablabla",
      price: 6.15,
      addInCart: "assets/img/vegemaki.png",
    },
  ];

const generateCard = (repas) => {
    let card = document.createElement("section")
    card.setAttribute("class", "card") // card

    // IMAGE CONTAINER
    let areaImg = document.createElement("article")
    areaImg.style.width = "180px"
    areaImg.style.height = "150px"
    areaImg.style.overflow = "hidden"
    areaImg.style.borderRadius = "15px"
    areaImg.style.margin = "10px"
    // IMAGE
    const img = document.createElement("img")
    img.setAttribute("src", repas.img)
    img.setAttribute("alt", "image du pays")
    img.style.width = "200px"
    img.style.height = "150px"

    // TITLE + DESCRIPTION
    const infos = document.createElement("div")
    infos.style.display = "flex"
    infos.style.flexDirection = "column"
    //  TITLE
    const titre = document.createElement("h2")
    titre.innerHTML = repas.name
    titre.style.textAlign = "center"
    //  DESCRIPTION
    const description = document.createElement("p")
    description.innerHTML = repas.description
    description.style.textAlign = "center"

    card.appendChild(areaImg)
    areaImg.appendChild(img)
    card.appendChild(infos)
    infos.appendChild(titre)
    infos.appendChild(description)

    return card;
}

// all Card
const createAllCards = (collection) => {
    const container = document.querySelector(".main__collection")
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.style.justifyContent = "center"

    for (const repas of collection){
        const generatedCard = generateCard(repas)
        container.appendChild(generatedCard)
    }
}


window.onload = createAllCards(repas_data)