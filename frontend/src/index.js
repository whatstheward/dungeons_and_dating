const BASE_URL = `http://localhost:3000/`
const CHAR_URL = `http://localhost:3000/characters/`


document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

fetchCharacters()
document.querySelector('#createCharacter').addEventListener('click', loadCharacterForm)

})


function loadCharacterForm(){
    clearMainContainer()
    clearHeroBanner()
    renderCharacterForm()
}

function clearMainContainer(){
    let main = document.querySelector('#main-container')
    while(main.firstChild)
        main.removeChild(main.firstChild)
}

function clearHeroBanner(){
    let hero = document.querySelector('body > section.hero')
    while(hero.firstChild)
        hero.removeChild(hero.firstChild)
}

function renderCharacterForm(){
    let main = document.querySelector('#main-container')

    let creatorCard = document.createElement('div')
    creatorCard.className = 'card'
    creatorCard.id = 'creatorCard'

    let form = document.createElement('form')
    form.id = "characterCreationForm"

    let nameField = document.createElement('div')
    nameField.className = "field"

    let name = document.createElement('label')
    name.className = "label"
    name.innerText = "Character Name: "

    let nameControl = document.createElement('div')
    nameControl.className = "control"

    let nameInput = document.createElement('input')
    nameInput.className = "input"
    nameInput.type = "text"

    nameControl.appendChild(nameInput)
    name.appendChild(nameControl)
    nameField.appendChild(name)
    form.appendChild(nameField)

    let raceField = document.createElement('div')
    raceField.className = "field"

    let race = document.createElement('label')
    race.className = "label"
    race.innerText = "Character Race: "

    let raceControl = document.createElement('div')
    raceControl.className = "control"

    let raceInput = document.createElement('div')
    raceInput.className = "select"

    let raceSelect = document.createElement('select')
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
    raceControl.appendChild(raceInput)
    race.appendChild(raceControl)
    raceField.appendChild(race)
    form.appendChild(raceField)

    let classField = document.createElement('div')
    classField.className = "field"

    let character_class = document.createElement('label')
    character_class.className = "label"
    character_class.innerText = "Character Class: "

    let classControl = document.createElement('div')
    classControl.className = "control"

    let classInput = document.createElement('div')
    classInput.className = "select"

    let classSelect = document.createElement('select')
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
    classControl.appendChild(classInput)
    character_class.appendChild(classControl)
    classField.appendChild(character_class)
    form.appendChild(classField)

    let genderField = document.createElement('div')
    genderField.className = "field"

    let character_gender = document.createElement('label')
    character_gender.className = "label"
    character_gender.innerText = "Character Gender: "

    let genderControl = document.createElement('div')
    genderControl.className = "control"

    let genderInput = document.createElement('div')
    genderInput.className = "select"

    let genderSelect = document.createElement('select')
    genderSelect.innerHTML =  '<option>Barbarian</option>' +
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

    genderInput.appendChild(genderSelect)
    genderControl.appendChild(genderInput)
    character_gender.appendChild(genderControl)
    genderField.appendChild(character_gender)
    form.appendChild(genderField)


    creatorCard.appendChild(form)
    main.appendChild(creatorCard)
    
}