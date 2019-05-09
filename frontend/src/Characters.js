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
    fetchCharacter(id)
    clearMainContainer()
    buildDate()
}

function renderCharacterForm(){

    fetchAllOrientations()

    let main = document.querySelector('#char-columns')

    let form = document.createElement('form')
    form.id = "characterCreationForm"

    let nameDiv = document.createElement('div')
    nameDiv.id = "nameDiv"

    let name = document.createElement('label')
    name.className = "label"
    name.htmlFor = 'name'
    name.innerText = "Username: "

    let nameInput = document.createElement('input')
    nameInput.id = "username"
    nameInput.className = "input"
    nameInput.type = "text"
    nameInput.style = "width:10em;"

    nameDiv.appendChild(name)
    nameDiv.appendChild(nameInput)
    form.appendChild(nameDiv)

    let characterNameDiv = document.createElement('div')
    characterNameDiv.id = "characterNameDiv"

    let characterName = document.createElement('label')
    characterName.className = "label"
    characterName.htmlFor = 'characterName'
    characterName.innerText = "Character Name: "


    let characterNameInput = document.createElement('input')
    characterNameInput.id = 'characterName'
    characterNameInput.className = "input"
    characterNameInput.type = "text"
    characterNameInput.style = "width:10em;"

    characterNameDiv.appendChild(characterName)
    characterNameDiv.appendChild(characterNameInput)
    form.appendChild(characterNameDiv)

    let raceDiv = document.createElement('div')
    raceDiv.id = "raceDiv"

    let race = document.createElement('label')
    race.className = "label"
    race.htmlFor= "race"
    race.innerText = "Character Race: "

    let raceInput = document.createElement('div')
    raceInput.className = "select"

    let raceSelect = document.createElement('select')
    raceSelect.name = "race"
    raceSelect.id = "race"
    raceSelect.innerHTML =  '<option>Dragonborn</option>' +
                            '<option>Dwarf</option>' +
                            '<option>Elf</option>' +
                            '<option>Gnome</option>' +
                            '<option>Half Elf</option>' +
                            '<option>Half Orc</option>' +
                            '<option>Halfling</option>' +
                            '<option>Human</option>' +
                            '<option>Tiefling</option>' 

    raceInput.appendChild(raceSelect)
    raceDiv.appendChild(race)
    raceDiv.appendChild(raceInput)
    form.appendChild(raceDiv)

    let classDiv = document.createElement('div')
    classDiv.id = "classDiv"

    let character_class = document.createElement('label')
    character_class.className = "label"
    character_class.htmlFor = "character_class"
    character_class.innerText = "Character Class: "

    let classInput = document.createElement('div')
    classInput.className = "select"

    let classSelect = document.createElement('select')
    classSelect.id = "characterClass"
    classSelect.name = "characterClass"
    classSelect.innerHTML =  '<option>Barbarian</option>' +
                            '<option>Bard</option>' +
                            '<option>Cleric</option>' +
                            '<option>Druid</option>' +
                            '<option>Fighter</option>' +
                            '<option>Monk</option>' +
                            '<option>Paladin</option>' +
                            '<option>Ranger</option>' +
                            '<option>Rogue</option>' +
                            '<option>Sorcerer</option>' +
                            '<option>Wizard</option>' 

    classInput.appendChild(classSelect)
    classDiv.appendChild(character_class)
    classDiv.appendChild(classInput)
    form.appendChild(classDiv)

    let genderDiv = document.createElement('div')
    genderDiv.id = "genderDiv"
    genderDiv.className = "box"
    
    let gender = document.createElement('label')
    gender.className = "label"
    gender.htmlFor = "gender"
    gender.innerText = "Gender: "
    
    let genderInput = document.createElement('div')
    genderInput.className = "select-gender"
    fetchAllGenders()

    genderDiv.appendChild(gender)
    genderDiv.appendChild(genderInput)
    form.appendChild(genderDiv)

    let orientationDiv = document.createElement('div')
    orientationDiv.id = "orientationDiv"
    orientationDiv.className = "box"
   
    
    let orientation = document.createElement('label')
    orientation.className = "label"
    orientation.htmlFor = "orientation"
    orientation.innerText = "Sexual Orientation: "
    
    let orientationInput = document.createElement('div')
    orientationInput.className = "select-orientation"
    
    fetchAllOrientations()

    orientationDiv.appendChild(orientation)
    orientationDiv.appendChild(orientationInput)
    form.appendChild(orientationDiv)

    let imgDiv = document.createElement('div')
    let img = document.createElement('label')
    img.innerText = "Input Avatar HTML:"
    img.htmlFor = 'avatar'

    let imgInput = document.createElement('input')
    imgInput.type = 'url'
    imgInput.className ="input"
    imgInput.id = 'avatar'
    imgInput.name = 'avatar'
    imgInput.setAttribute('pattern', 'https://.*')
    
    imgDiv.appendChild(img)
    imgDiv.appendChild(imgInput)
    form.appendChild(imgDiv)

    let submit = document.createElement('button')
    submit.className = "button is-success"
    submit.innerText = "Create Character"
    submit.addEventListener('click', handleForm)
    form.appendChild(document.createElement('br'))
    form.appendChild(submit)

    main.appendChild(form)
    
}

function buildDate(character){

}