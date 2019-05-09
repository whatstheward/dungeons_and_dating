const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`

const GENDERS = []
const ORIENTATIONS = []


document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

document.querySelector('#createCharacter').addEventListener('click', loadCharacterForm)

})


function loadCharacterForm(){
    clearMainContainer()
    clearHeroBanner()
    renderCharacterForm()

}

function clearMainContainer(){
    let main = document.querySelector('#char-columns')
    while(main.firstChild)
        main.removeChild(main.firstChild)
}

function clearHeroBanner(){
    let hero = document.querySelector('body > section.hero')
    while(hero.firstChild)
        hero.removeChild(hero.firstChild)
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
    form.appendChild(submit)

    main.appendChild(form)
    
}

function fetchAllGenders(){
    fetch(BASE_URL + 'allgenders')
    .then(res => res.json())
    .then(genders => buildGenderOptions(genders))
}
function fetchAllOrientations(){
    fetch(BASE_URL + 'allorientations')
    .then(res => res.json())
    .then(orientations => buildOrientationOptions(orientations))
}

function buildGenderOptions(genders){
    let selection = document.querySelector('.select-gender')
    genders.forEach(gender => {let genderOpt = document.createElement('input')
                                genderOpt.name = "gender"
                                let label = document.createElement('label')
                                label.htmlFor = gender.name
                                label.innerText = gender.name 
                                genderOpt.type = "checkbox"
                                genderOpt.value = gender.name
                                genderOpt.dataset.id = gender.id
                                selection.appendChild(genderOpt)
                                selection.appendChild(label)
                            })
}

function buildOrientationOptions(orientations){
    let selection = document.querySelector('.select-orientation')
    orientations.forEach(orientation => {let orientationOpt = document.createElement('input')
                                orientationOpt.name = "orientation"
                                let label = document.createElement('label')
                                label.htmlFor = orientation.name
                                label.innerText = orientation.name 
                                orientationOpt.type = "checkbox"
                                orientationOpt.value = orientation.name
                                orientationOpt.dataset.id = orientation.id
                                selection.appendChild(orientationOpt)
                                selection.appendChild(label)
                            })
}


function handleForm(e){
    e.preventDefault()
    let genders = []
    let orientations = []
    let form = e.target.parentElement
    let checkedGenders= document.querySelectorAll('input[name="gender"]:checked')
    let checkedOrientations= document.querySelectorAll('input[name="orientation"]:checked')
    let getGenders = function(){checkedGenders.forEach(box => genders.push([box.dataset.id]))}
    getGenders()
    let getOrientations = function(){checkedOrientations.forEach(box => orientations.push([box.dataset.id]))}
    getOrientations()

    let username = form.querySelector('#username').value
    let characterName = form.querySelector('#characterName').value
    let race = form.querySelector('#race').value
    let characterClass = form.querySelector('#characterClass').value
    let img = form.querySelector('#avatar').value

    fetch(CHAR_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            character: {
            name: characterName,
            race: race,
            character_class: characterClass,
            img: img}
        })
    })
    .then(res => res.json())
    .then(character => {let id = character.id 
                        postGendersAndOrientations(id, genders, orientations)
                        })
    
    clearMainContainer()
    fetchCharacters()

}

function postGendersAndOrientations(id, genders, orientations){
    genders.forEach(gender => createCharacterGenders(id, gender))
    orientations.forEach(orientation => createCharacterOrientations(id, orientation))
}

function createCharacterGenders(id, gender){
    fetch(BASE_URL + 'character_genders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            character_gender: {
            character_id: id,
            gender_id: parseInt(gender)
                            }   
            })
        })
}

function createCharacterOrientations(id, orientation){
    fetch(BASE_URL + 'character_orientations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            character_orientation: {
            character_id: id,
            orientation_id: parseInt(orientation)
                            }   
            })
        })
}
