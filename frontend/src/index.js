const BASE_URL = `http://localhost:3000/`
const CHAR_URL = `http://localhost:3000/characters/`


document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

fetchCharacters()


})

function fetchCharacters(){
    fetch(BASE_URL + 'characters')
    .then(res => res.json())
    .then(characters => characters.forEach(character => renderCharacter(character)))
}

function fetchCharactersGenders(character){
    fetch(CHAR_URL + `${character.id}/genders`)
    .then(res => res.json())
    .then(genders => renderGenders(genders))
}

function renderGenders(genders){
    console.log('charcter genders',genders)
}

function buildCharacterModal(character){
    console.log('character', character)
    fetchCharactersGenders(character)
}

function renderCharacter(character){
    let div = document.querySelector('#char-columns')
    buildCharacterModal(character)
    let card = document.createElement('div')
    card.className = 'card column is-narrow'
    
    let img = document.createElement('img')
    img.src = character.img
    img.id = "premadeAvatar"
    
    let contentDiv = document.createElement('div')
    contentDiv.className = 'column'
    
    let name = document.createElement('h2')
    name.className = "title"
    name.innerText = character.name


    let btn = document.createElement('button')
    btn.className = "button is-success"
    btn.innerText = "See Attributes"
    btn.dataset.id = character.id
    
    btn.addEventListener('click', showCharacterInfo)

    contentDiv.appendChild(name)
    contentDiv.appendChild(btn)
    card.appendChild(img)
    card.appendChild(contentDiv)
    div.appendChild(card)

}

function showCharacterInfo(e){
    console.log("event target", e.target)
}