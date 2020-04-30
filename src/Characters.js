const renderCharacterCard = (char) => {
    const main = document.querySelector("#main-section")
    let card = document.createElement('div')
    card.className = 'card'
    
    let cardImg = document.createElement('div')
    cardImg.className = 'card-image'

    let figure = document.createElement('figure')
    figure.className = 'image is-4by4'

    let img = document.createElement('img')
    img.src = char.img
    
    figure.appendChild(img)
    cardImg.appendChild(figure)

    let cardContent = document.createElement('div')
    cardContent.className = 'card-content'
    
    let media = document.createElement('div')
    media.className = 'media'

    let name = document.createElement('p')
    name.className = 'title is-4'
    name.innerText = char.name

    media.appendChild(name)
    cardContent.appendChild(media)

   
    card.appendChild(cardImg)
    card.appendChild(cardContent)
    main.appendChild(card)
}

const renderCharacters = (characters) =>{
    characters.forEach(char => renderCharacterCard(char.attributes))
}