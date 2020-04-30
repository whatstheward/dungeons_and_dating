function fetchCharacters(){
    console.log(localStorage.getItem('token'))
    fetch(CHAR_URL,{
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(characters => renderCharacters(characters.data))
}

