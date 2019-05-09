const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`
const USER_CHAR_URL = `http://localhost:3000/user_characters/`

const GENDERS = []
const ORIENTATIONS = []
const DATE_EVENTS = []
let USER = null


document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')

loadCharacterForm()
fetchDateEvents()

})


function loadCharacterForm(){
    let hero = document.querySelector("body > section.hero")
    let h1 = document.createElement('h1')
    h1.className = "title is-1"
    h1.innerText ="Create and Character to begin your romantic adventure!"
    hero.appendChild(h1)
    renderCharacterForm()
}
function clearNavBar(){
    let bar = document.querySelector('#top-bar')
    while(bar.firstChild){
        bar.removeChild(bar.firstChild)
    }
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
