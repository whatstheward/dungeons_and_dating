function fetchCharacters(){
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

