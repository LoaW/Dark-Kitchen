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
      description: "Noodle broths, with fish, meat, vegetables, seaweed, egg, and miso or soy",
      price: 6.15,
      addInCart: "assets/img/soup.png",
    },
    {
      img: "assets/img/sushi.png",
      name: "Sushi",
      description: "Japanese dish made with seasoned rice accompanied by strips of raw fish.",
      price: 6.15,
      addInCart: "assets/img/sushi.png",
    },
    {
      img: "assets/img/vegemaki.png",
      name: "Vegemaki",
      description: "Dried nori seaweed roll surrounding white rice mixed with sweet rice vinegar",
      price: 6.15,
      addInCart: "assets/img/vegemaki.png",
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
    container.setAttribute("class", "container")
   

    for (const repas of collection){
        const generatedCard = generateCard(repas)
        container.appendChild(generatedCard)
    }
}


window.onload = createAllCards(repas_data)