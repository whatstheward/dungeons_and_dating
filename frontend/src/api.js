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
    fetch(CHAR_URL + `${character.id}/character_genders`)
    .then(res => res.json())
    .then(genders => genders.forEach(gender=>renderGenders(character, gender)))
}

function fetchCharacterOrientations(character){
    fetch(CHAR_URL + `${character.id}/character_orientations`)
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

function fetchCharacterForDate(id){
    fetch(BASE_URL + `characters/${id}`)
    .then(res => res.json())
    .then(character =>  getRandomDate(DATE_EVENTS, USER, character))
}

function fetchUserGenders(character){
    fetch(USER_CHAR_URL + `${character.id}/user_character_genders`)
    .then(res => res.json())
    .then(genders => genders.forEach(gender => renderUserGenders(gender))) 
}

function fetchUserOrientations(character){
    fetch(USER_CHAR_URL + `${character.id}/user_character_orientations`)
    .then(res => res.json())
    .then(orientations => orientations.forEach(orientation => renderUserOrientations(orientation)))
    
}

function fetchDateEvents(){
    fetch(`http://localhost:3000/date_events`)
    .then(res => res.json())
    .then(dateEvents => dateEvents.forEach(dateEvent => DATE_EVENTS.push(dateEvent)))
}

function fetchUsers(username){
    fetch(USER_CHAR_URL)
    .then(res => res.json())
    .then(users => users.filter(user=> user.username === username))
    .then(user => {fetchUser(user[0].id)
                    clearMainContainer()
                    fetchCharacters()})
    
}

