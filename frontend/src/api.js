function fetchCharacters(){
    let hero = document.querySelector("body > section.hero")
    let h1 = document.createElement('h1')
    h1.className = "title is-1"
    h1.innerText = "Choose a character to date:"
    hero.appendChild(h1)
    fetch(BASE_URL + 'characters')
    .then(res => res.json())
    .then(characters => characters.forEach(character => renderCharacter(character)))
}

function fetchCharactersGenders(character){
    fetch(CHAR_URL + `${character.id}/genders`)
    .then(res => res.json())
    .then(genders => genders.forEach(gender=>renderGenders(character, gender)))
}

function fetchCharacterOrientations(character){
    fetch(CHAR_URL + `${character.id}/orientations`)
    .then(res => res.json())
    .then(orientations => orientations.forEach(orientation => renderOrientations(character, orientation)))
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

function fetchCharacter(id){
    fetch(BASE_URL + `characters/${id}`)
    .then(res => res.json())
    .then(character => console.log(character))
}


