function renderCharacterForm(){
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

function buildGenderOptions(genders){
    let selection = document.querySelector('.select-gender')
    genders.forEach(gender => { let optionDiv = document.createElement('div')
                                optionDiv.id = "optionDiv"
                                let genderOpt = document.createElement('input')
                                genderOpt.name = "gender"
                                let label = document.createElement('label')
                                label.htmlFor = gender.name
                                label.innerText = gender.name 
                                genderOpt.type = "checkbox"
                                genderOpt.value = gender.name
                                genderOpt.dataset.id = gender.id
                                optionDiv.appendChild(genderOpt)
                                optionDiv.appendChild(label)
                                selection.appendChild(optionDiv)
                            })
}

function buildOrientationOptions(orientations){
    let selection = document.querySelector('.select-orientation')
    orientations.forEach(orientation => {   let optionDiv = document.createElement('div')
                                            optionDiv.id = "optionDiv"
                                            let orientationOpt = document.createElement('input')
                                            orientationOpt.name = "orientation"
                                            let label = document.createElement('label')
                                            label.htmlFor = orientation.name
                                            label.innerText = orientation.name 
                                            orientationOpt.type = "checkbox"
                                            orientationOpt.value = orientation.name
                                            orientationOpt.dataset.id = orientation.id
                                            optionDiv.appendChild(orientationOpt)
                                            optionDiv.appendChild(label)
                                            selection.appendChild(optionDiv)
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

    fetch(USER_CHAR_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_character: {
            username: username,
            name: characterName,
            race: race,
            character_class: characterClass,
            img: img}
        })
    })
    .then(res => res.json())
    .then(character => {let id = character.id 
                        USER = character
                        postGendersAndOrientations(id, genders, orientations)
                        renderUserCharacter(character)
                        })
    clearMainContainer()
    clearHeroBanner()
    fetchCharacters()

}

function fetchUser(id){
    fetch(`http://localhost:3000/user_characters/${id}`)
    .then(res=>res.json())
    .then(character => { USER = character
                        renderUserCharacter(character)})
}

function renderUserCharacter(character){
    clearNavBar()
    fetchUserGenders(character)
    fetchUserOrientations(character)
    let bar = document.querySelector('body > div.nav-left.nav-menu.menu')
    bar.style ="display: flex;"
    let img = document.querySelector('#navbar-avatar')
    img.src = character.img


    let name = document.querySelector('#char-name')
    name.innerText = character.name
    
    let userClass = document.querySelector('#char-class')
    userClass.innerText  = character.character_class

    let userRace = document.querySelector('#char-race')
    userRace.innerText = character.race

    let genders = document.querySelector('#char-genders')
    let sexuality = document.querySelector('#char-sexuality')



}

function postGendersAndOrientations(id, genders, orientations){
    genders.forEach(gender => createCharacterGenders(id, gender));
    orientations.forEach(orientation => createCharacterOrientations(id, orientation))
}

function createCharacterGenders(id, gender){

    fetch(`http://localhost:3000/user_character_genders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_gender: {
            user_character_id: id,
            gender_id: parseInt(gender)
                            }   
            })
        })
}

function createCharacterOrientations(id, orientation){
    fetch(BASE_URL + `user_character_orientations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_character_orientation: {
            user_character_id: id,
            orientation_id: parseInt(orientation)
                            }   
            })
        })
}

function renderUserOrientations(orientation){
    let orientations = document.querySelector('#char-sexuality')
    let orientationLine = document.createElement('li')
    orientationLine.innerText = orientation.name
    orientations.appendChild(orientationLine)
}
function renderUserGenders(gender){
    let genders = document.querySelector('#char-genders')
    let genderLine = document.createElement('li')
    genderLine.innerText = gender.name
    genders.appendChild(genderLine)
}