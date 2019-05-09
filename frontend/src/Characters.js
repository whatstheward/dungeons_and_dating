function renderOrientations(character, orientation){
    let id = character.id
    let modal = document.querySelector(`#modal${id}`)
    let orientations = modal.querySelector('.modal-content > .card > #orientations')

    let character_orientation = document.createElement('li')
    character_orientation.innerText = orientation.name

    orientations.appendChild(character_orientation)
}

function renderGenders(character, gender){
    let id = character.id
    let modal = document.querySelector(`#modal${id}`)
    let genders = modal.querySelector('.modal-content > .card > #genders')

    let character_gender = document.createElement('li')
    character_gender.innerText = gender.name

    genders.appendChild(character_gender)
    
}

function buildCharacterModal(character){
    fetchCharactersGenders(character)
    fetchCharacterOrientations(character)
    let id = character.id
    let container = document.querySelector('#main-section')
    let modal = document.createElement('div')
    modal.classList += "modal"
    modal.id = 'modal' + id

    let bg = document.createElement('div')
    bg.className = "modal-background"

    let content = document.createElement('div')
    content.className = "modal-content"

    let card = document.createElement('div')
    card.className = "card"

    let orientations = document.createElement('ul')
    orientations.innerHTML = '<strong>Sexuality: </strong>'
    orientations.id = "orientations"

    let genders = document.createElement('ul')
    genders.innerHTML = '<strong>Gender Identities: </strong>'
    genders.id = "genders"

    let img = document.createElement('img')
    img.src = character.img
    img.id = "premadeAvatar"


    let close = document.createElement('button')
    close.className = "modal-close is-large"
    close.addEventListener('click', toggleModalOff)

    card.appendChild(img)
    card.appendChild(genders)
    card.appendChild(orientations)
    content.appendChild(card)
    modal.appendChild(bg)
    modal.appendChild(close)
    modal.appendChild(content)
    container.appendChild(modal)
}

function toggleModalOn(e){
    let id = e.target.dataset.id
    let modal = document.querySelector(`#modal${id}`)
    modal.classList += ' is-active'
}

function toggleModalOff(e){
    e.target.parentElement.className =  'modal'
}

function renderCharacter(character){
    buildCharacterModal(character)
    let div = document.querySelector('#char-columns')
    let card = document.createElement('div')
    card.className = 'card'
    
    let img = document.createElement('img')
    img.src = character.img
    img.id = "premadeAvatar"
    
    let contentDiv = document.createElement('div')
    
    let name = document.createElement('h2')
    name.className = "title is-4"
    name.innerText = character.name


    let attrBtn = document.createElement('button')
    attrBtn.className = "button is-warning is-small"
    attrBtn.innerText = "See Attributes"
    attrBtn.dataset.id = character.id
    attrBtn.addEventListener('click', toggleModalOn)

    let selectBtn = document.createElement('button')
    selectBtn.className = "button is-success is-small"
    selectBtn.innerText = "Select Character"
    selectBtn.dataset.id = character.id

    contentDiv.appendChild(name)
    contentDiv.appendChild(attrBtn)
    contentDiv.appendChild(selectBtn)
    card.appendChild(img)
    card.appendChild(contentDiv)
    div.appendChild(card)

}