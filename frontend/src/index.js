const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`

const GENDERS = []
const ORIENTATIONS = []


document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

loadCharacterForm()

})


function loadCharacterForm(){
    let hero = document.querySelector('body > section.hero')
    let h1 = document.createElement('h1')
    h1.className = "title is-1"
    h1.innerText ="Create and Character to begin your romantic adventure!"
    hero.appendChild(h1)
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
    clearHeroBanner()
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
