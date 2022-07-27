// Data
const repas_data = [
    {
        img : "assets/img/simpleSushi.jpeg",
        name : "The Fresh Sushis",
        description : "Un vent de fraîcheur souffle sur le fresh maki ! Un mélange sucré/salé où la finesse de de la daurade rencontre le pétillant de l’ananas.",
        price : 6.15,
        addInCart : "assets/img/china.jpeg"
    },
    {
        img : "assets/img/simpleSushi.jpeg",
        name : "The Fresh SalmonRolls",
        description : "Un vent de fraîcheur souffle sur le fresh maki ! Un mélange sucré/salé où la finesse de de la daurade rencontre le pétillant de l’ananas.",
        price : 6.15,
        addInCart : "assets/img/china.jpeg"
    }
]

const generateCard = (repas) => {
    let card = document.createElement("section") // card
    card = styleCard(card)

    let areaImg = document.createElement("article")
    areaImg.style.width = "180px"
    areaImg.style.height = "150px"
    areaImg.style.overflow = "hidden"
    areaImg.style.margin = "10px"
    areaImg.style.borderRadius = "15px"

    const img = document.createElement("img")
    img.setAttribute("src", repas.img)
    img.setAttribute("alt", "image du pays")

    const infos = document.createElement("div")
    infos.style.display = "flex"
    infos.style.flexDirection = "column"

    const titre = document.createElement("h2")
    titre.innerHTML = repas.name
    titre.style.textAlign = "center"
    
    card.appendChild(areaImg)
    areaImg.appendChild(img)
    card.appendChild(infos)
    infos.appendChild(titre)

    return card;
}

// all Card
const createAllCards = (collection) => {
    const container = document.getElementById("container")
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.style.justifyContent = "center"

    for (const repas of collection){
        const generatedCard = generateCard(repas)
        container.appendChild(generatedCard)
    }
}

const styleCard = (card) =>
{
    card.style.width = "200px"
    card.style.height = "350px"
    card.style.border = "solid"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.margin = "15px" 
    card.style.borderRadius = "15px"
    card.style.overflow = "hidden"
    card.style.boxShadow = "5px 5px 5px #4d4d4d"

    return card
}

window.onload = createAllCards(repas_data)