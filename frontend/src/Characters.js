function renderOrientations(character, orientation){
    let id = character.id
    let modal = document.querySelector(`#modal${id}`)
    let orientations = modal.querySelector("#orientations")

    let character_orientation = document.createElement('li')
    character_orientation.innerText = orientation.name

    orientations.appendChild(character_orientation)
}

function renderGenders(character, gender){
    let id = character.id
    let modal = document.querySelector(`#modal${id}`)
    let genders = modal.querySelector("#genders")

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
    card.id = "modal-card"
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

    let cardHeader = document.createElement('header')
    cardHeader.id = "modal-card-header"
    cardHeader.className = "card-header"

    let name = document.createElement('h1')
    name.className = "card-header-title title is-1"
    name.id = "card-header-title"
    name.innerText = character.name

    let cardContent = document.createElement('div')
    cardContent.className = "card-content"

    let bio = document.createElement('p')
    bio.className = "card-content"
    bio.innerHTML = `<em>${character.bio}</em>`
    
    fetch(BASE_URL + 'relationships')
    .then(res => res.json())
    .then(relationships => relationships.filter(relationship => relationship.character_id == character.id && relationship.user_character_id == USER.id))
    .then(relationship => { if(relationship.length!=0){
                            let percentage = document.createElement('h1')
                            percentage.className = "subtitle"
                            percentage.innerText = "Relationship Progress: " + relationship[0].progress +"%"
                            cardContent.appendChild(percentage)
                            let progressBar = document.createElement('progress')
                            progressBar.className = "progress is-danger"
                            progressBar.setAttribute('max', 100)
                            progressBar.value = relationship[0].progress
                            cardContent.appendChild(progressBar)
                            }
                        })


    let close = document.createElement('button')
    close.className = "modal-close is-large"
    close.addEventListener('click', toggleModalOff)

    cardHeader.appendChild(name)
    cardContent.appendChild(cardHeader)
    cardContent.appendChild(img)
    cardContent.appendChild(genders)
    cardContent.appendChild(orientations)
    cardContent.appendChild(bio)
    card.appendChild(cardContent)
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

    let dateBtn = document.createElement('button')
    dateBtn.className = "button is-success is-small"
    dateBtn.innerText = "Date this Character"
    dateBtn.dataset.id = character.id
    dateBtn.addEventListener('click', goOnDate)


    contentDiv.appendChild(name)
    contentDiv.appendChild(attrBtn)
    contentDiv.appendChild(dateBtn)
    card.appendChild(img)
    card.appendChild(contentDiv)
    div.appendChild(card)

}

function goOnDate(e){
    let id = e.target.dataset.id
    clearMainContainer()
    clearHeroBanner()
    fetchCharacterForDate(id)
    fetchDateEvents()
    clearModals()
}

function clearModals(){
    let modals = document.querySelectorAll('.modal')
    modals.forEach(modal=> modal.remove())
}
