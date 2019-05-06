const BASE_URL = `http://localhost:3000/`

document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

fetchCharacters()


})

function fetchCharacters(){
    fetch(BASE_URL + 'characters')
    .then(res => res.json())
    .then(characters => characters.forEach(character => renderCharacter(character)))
}

function renderCharacter(character){
    let div = document.querySelector('#main-container')

    let card = document.createElement('div')
    card.classList  += "card"
    card.style = "display:flex;"

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    cardBody.style = "display:inline-flex;"

    let figure = document.createElement('figure')
    figure.className = "image is-128x128"

    let img = document.createElement('img')
    img.src = character.img
    figure.appendChild(img)

    let charName = document.createElement('h5')
    charName.classList += "card-title"
    charName.innerText = character.name

    card.appendChild(figure)
    cardBody.appendChild(charName)
    card.appendChild(cardBody)
    div.appendChild(card)
}